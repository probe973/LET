function getGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        a %= b;
        [a, b] = [b, a];
    }
    return a;
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

    // 1. Updated HTML structure to use your new CSS classes
function renderAlgebraQuestionHTML(q, i) {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'question-container'; 
    fieldset.id = `question-rev-${i}`;

    fieldset.innerHTML = `
        <legend class="visually-hidden">Question ${i + 1}</legend>
        
        <h3 id="question-${i}-label">Question ${i + 1}</h3>
        
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
            </div>
        </div>

        <div id="rev-feedback-${i}" aria-live="polite" class="feedback-region"></div>
        
        <div id="rev-sol-${i}" class="solution-content solution-box-style" 
             style="display:none;" 
             role="region" 
             aria-label="Solution for Question ${i + 1}">
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

    // 2. Updated click listener with consistent feedback logic
    container.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-check-answer')) {
            const idx = parseInt(event.target.dataset.questionIndex);
            const q = window.revisionQuestionsData[idx];
            const mfield = document.getElementById(`rev-ans-${idx}`);
            const solDiv = document.getElementById(`rev-sol-${idx}`);
            const feedbackDiv = document.getElementById(`rev-feedback-${idx}`);
            
            const studentRaw = mfield.value.trim();
            const studentClean = studentRaw.replace(/[\$\s]/g, '').split('=').pop();
            const targetClean = q.check_val.replace(/[\$\s]/g, '').split('=').pop();

            const userExpr = ce.parse(studentClean, { canonical: false });
            const targetExpr = ce.parse(targetClean, { canonical: false });

            solDiv.style.display = 'block';
            event.target.disabled = true;
            mfield.disabled = true;

            let msg = "";
            let color = "red";

            if (!ce.parse(studentClean).isEqual(ce.parse(targetClean))) {
                msg = "Incorrect. Please review solution";
                color = "red";
            } else {
                const u = getStats(userExpr);
                const t = getStats(targetExpr);
                const goal = q.goal || "simplify";
                let errorMsg = "";
                
                if (goal === "solve") {
            // Check if the student's answer is a fraction
            // CortexJS stores fractions in JSON as ["Divide", numerator, denominator]
            const json = userExpr.json;
            if (Array.isArray(json) && (json[0] === "Divide" || json[0] === "Rational")) {
                const num = parseInt(json[1]);
                const den = parseInt(json[2]);

                // If GCD is greater than 1, the fraction is not simplified
                if (getGCD(num, den) > 1) {
                    errorMsg = "Correct value, but please simplify the fraction fully.";
                }
            }
            // If it's not a fraction (e.g., a decimal or integer), errorMsg stays empty
        }

                else if (goal === "factorise") {
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
                } else {
                    msg = "Correct!";
                    color = "green";
                }
            }

            feedbackDiv.textContent = msg;
            feedbackDiv.style.color = color;

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
