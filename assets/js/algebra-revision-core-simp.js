function getGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        a %= b;
        [a, b] = [b, a];
    }
    return a;
}

function decimalToFractionStr(decimalStr) {
    const num = parseFloat(decimalStr);
    if (isNaN(num) || Number.isInteger(num)) return decimalStr;
    const sign = num < 0 ? "-" : "";
    const absVal = Math.abs(num);
    const len = (absVal.toString().split('.')[1] || '').length;
    const denominator = Math.pow(10, len);
    const numerator = Math.round(absVal * denominator);
    const divisor = getGCD(numerator, denominator);
    return `${sign}${numerator / divisor}/${denominator / divisor}`;
}

function normalizeInput(str) {
    // Finds any decimal numbers (like -0.5, 0.75) and converts them to fractions (like -1/2, 3/4)
    return str.replace(/-?\d+\.\d+/g, (match) => decimalToFractionStr(match));
}

const ce = new ComputeEngine.ComputeEngine();

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('revision-questions-container');

    // Helper to handle bold text
    function cleanText(text) {
        if (!text) return "";
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    // The Weight Scanner (Logic for Simplify/Factorise)
    function getStats(expr) {
        const jsonStr = JSON.stringify(expr.json);
        const varMatches = jsonStr.match(/"[a-z]"/g) || [];
        const numMatches = jsonStr.match(/\d+/g) || [];
        const numSum = numMatches.reduce((a, b) => a + Math.abs(parseInt(b)), 0);
        return { vars: varMatches.length, sum: numSum, len: jsonStr.length };
    }

    // 1. HTML structure matching your workshop style
    function renderAlgebraQuestionHTML(q, i) {
        const fieldset = document.createElement('fieldset');
        fieldset.className = 'question-container'; 
        fieldset.id = `question-rev-${i}`;

        fieldset.innerHTML = `
            <legend class="visually-hidden">Question ${q.label || i + 1}</legend>
            
            <h3 id="question-${i}-label">Question ${q.label || i + 1}</h3>
            
            <div class="question-content">
                ${cleanText(q.question)}
            </div>

            <div class="algebra-answer-container">
                <math-field id="rev-ans-${i}" 
                            class="algebra-input-field" 
                            aria-labelledby="question-${i}-label">
                </math-field>
                
                <div class="button-group">
                    <button type="button" class="btn btn-check-answer" 
                            data-question-index="${i}" 
                            aria-controls="rev-feedback-${i} rev-sol-${i}">
                        Check Answer
                    </button>
                    <button type="button" class="btn btn-primary btn-reveal-solution" 
                            data-question-index="${i}">
                        Show Solution
                    </button>
                </div>
            </div>

            <div id="rev-feedback-${i}" aria-live="polite" class="feedback-region"></div>
            
            <div id="rev-sol-${i}" class="solution-content solution-box-style" 
                 style="display:none;" 
                 role="region" 
                 aria-label="Solution for Question ${q.label || i + 1}">
                <hr>
                <h4>Solution:</h4>
                ${cleanText(q.solution)}
                <div class="answer-highlight-box">
                    <strong>Correct Answer:</strong> ${q.answer || q.check_val}
                </div>
            </div>
        `;
        container.appendChild(fieldset);
    }

    // 2. Click listener with Retry logic
    container.addEventListener('click', (event) => {
        const idx = parseInt(event.target.dataset.questionIndex);
        if (isNaN(idx)) return;

        const q = window.revisionQuestionsData[idx];
        const mfield = document.getElementById(`rev-ans-${idx}`);
        const solDiv = document.getElementById(`rev-sol-${idx}`);
        const feedbackDiv = document.getElementById(`rev-feedback-${idx}`);

        // Handle "Show Solution"
        if (event.target.classList.contains('btn-reveal-solution')) {
            solDiv.style.display = 'block';
            if (window.MathJax) MathJax.typesetPromise([solDiv]);
            return;
        }

        // Handle "Check Answer"
        if (event.target.classList.contains('btn-check-answer')) {
            const studentRaw = mfield.value.trim();
            //const studentClean = studentRaw.replace(/[\$\s]/g, '').split('=').pop();
            //const targetClean = q.check_val.replace(/[\$\s]/g, '').split('=').pop();

            //const userExpr = ce.parse(studentClean, { canonical: false });
            //const targetExpr = ce.parse(targetClean, { canonical: false });

            const rawStudentClean = studentRaw.replace(/[\$\s]/g, '').split('=').pop();
            const rawTargetClean = q.check_val.replace(/[\$\s]/g, '').split('=').pop();

            const studentClean = normalizeInput(rawStudentClean);
            const targetClean = normalizeInput(rawTargetClean);

            const userExpr = ce.parse(studentClean, { canonical: false });
            const targetExpr = ce.parse(targetClean, { canonical: false });

            let msg = "";
            let color = "red";
            let shouldLock = false;



            // Mathematical Equality Check
            //if (!ce.parse(studentClean).isEqual(ce.parse(targetClean))) {
            if (!ce.parse(studentClean).simplify().isEqual(ce.parse(targetClean).simplify())) {
                msg = "Incorrect. Please try again";
                color = "red";
                shouldLock = false; // Lock on wrong answer
            } else {
                const u = getStats(userExpr);
                const t = getStats(targetExpr);
                const goal = q.goal || "simplify";
                let errorMsg = "";
                
                if (goal === "solve") {
                    //const json = userExpr.json;
                    //if (Array.isArray(json) && (json[0] === "Divide" || json[0] === "Rational")) {
                        //if (getGCD(parseInt(json[1]), parseInt(json[2])) != 1) {
                            //errorMsg = "Correct value, but please simplify the fraction fully.";
                        //}
                    //}
                    let json = userExpr.json;

// If the whole fraction is negated, unwrap it.
if (Array.isArray(json) && json[0] === "Negate") {
    json = json[1];
}

if (Array.isArray(json) && (json[0] === "Divide" || json[0] === "Rational")) {

    let num = json[1];
    let den = json[2];

    // If the numerator is negated, convert it to a number.
    if (Array.isArray(num) && num[0] === "Negate") {
        num = -num[1];
    }

    // If the denominator is negated, move the minus to the numerator.
    if (Array.isArray(den) && den[0] === "Negate") {
        den = den[1];
        num = -num;
    }

    if (getGCD(num, den) !== 1) {
        errorMsg = "Correct value, but please simplify the fraction fully.";
    }
}

                } else if (goal === "factorise") {
                    if (!studentRaw.includes('(') && !studentRaw.includes('\\left')) {
                        errorMsg = "Correct value, but please factorise the expression.";
                    } else if (u.vars > t.vars || u.sum > t.sum || u.len > t.len) {
                        errorMsg = "Correct value, but please factorise fully.";
                    }
                } else if (goal === "simplify" || goal === "expand") {
                    if (goal === "expand" && (studentRaw.includes('(') || studentRaw.includes('\\left'))) {
                        errorMsg = "Correct value, but please expand the brackets.";
                    } else if (u.vars > t.vars || u.sum > t.sum || u.len > t.len) {
                        errorMsg = "Correct value, but please simplify further.";
                    }
                }

                if (errorMsg) {
                    msg = errorMsg;
                    color = "orange";
                    shouldLock = false; // Allow retry
                } else {
                    msg = "Correct!";
                    color = "green";
                    shouldLock = true; // Lock on perfect
                }
            }

            feedbackDiv.textContent = msg;
            feedbackDiv.style.color = color;

            if (shouldLock) {
                solDiv.style.display = 'block';
                event.target.disabled = true;
                mfield.disabled = true;
                // Find and disable the sibling reveal button
                const revealBtn = event.target.parentElement.querySelector('.btn-reveal-solution');
                if (revealBtn) revealBtn.disabled = true;
            }

            if (window.MathJax) MathJax.typesetPromise([solDiv]);
        }
    });

    window.initAlgebraRevisionTest = function(configArray) {
        if (!container) return;
        container.innerHTML = '';
        window.revisionQuestionsData = [];
        let globalIndex = 0;

        configArray.forEach(item => {
            for (let i = 0; i < item.count; i++) {
                const question = item.generator(7000 + globalIndex);
                window.revisionQuestionsData.push(question);
                renderAlgebraQuestionHTML(question, globalIndex);
                globalIndex++;
            }
        });

        if (window.MathJax) MathJax.typesetPromise([container]);
    };
});
