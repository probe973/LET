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
    return str.replace(/-?\d+\.\d+/g, (match) => decimalToFractionStr(match));
}

let ce;
try {
    ce = new ComputeEngine.ComputeEngine();
} catch (e) {
    console.error("ComputeEngine failed to initialize:", e);
}

function cleanText(text) {
    if (!text) return "";
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function renderCalculusQuestionHTML(container, q, i) {
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

window.initAlgebraRevisionTest = function(configArray) {
    const container = document.getElementById('revision-questions-container');
    if (!container) {
        console.error("CRITICAL: #revision-questions-container element not found in DOM.");
        return;
    }
    
    container.innerHTML = '';
    window.revisionQuestionsData = [];
    let globalIndex = 0;

    try {
        configArray.forEach((item, itemIdx) => {
            if (typeof item.generator !== 'function') {
                console.error(`CRITICAL: Generator at index ${itemIdx} is not a valid function.`);
                return;
            }
            for (let i = 0; i < item.count; i++) {
                const question = item.generator(7000 + globalIndex);
                if (!question) {
                    console.error(`CRITICAL: Generator returned empty data for question ${globalIndex}`);
                    continue;
                }
                window.revisionQuestionsData.push(question);
                renderCalculusQuestionHTML(container, question, globalIndex);
                globalIndex++;
            }
        });

        if (window.MathJax) {
            MathJax.typesetPromise([container]).catch(err => console.error("MathJax error:", err));
        }
    } catch (err) {
        console.error("Error inside initAlgebraRevisionTest generation loop:", err);
    }
};

document.addEventListener('click', (event) => {
    if (!event.target.matches('.btn-check-answer, .btn-reveal-solution')) return;
    
    const idx = parseInt(event.target.dataset.questionIndex);
    if (isNaN(idx)) return;

    const q = window.revisionQuestionsData[idx];
    const mfield = document.getElementById(`rev-ans-${idx}`);
    const solDiv = document.getElementById(`rev-sol-${idx}`);
    const feedbackDiv = document.getElementById(`rev-feedback-${idx}`);
    if (!mfield || !solDiv || !feedbackDiv) return;

    if (event.target.classList.contains('btn-reveal-solution')) {
        solDiv.style.display = 'block';
        if (window.MathJax) MathJax.typesetPromise([solDiv]);
        return;
    }

    if (event.target.classList.contains('btn-check-answer')) {
        const studentRaw = mfield.value.trim();
        const rawStudentClean = studentRaw.replace(/[\$\s]/g, '').split('=').pop();
        const rawTargetClean = q.check_val.replace(/[\$\s]/g, '').split('=').pop();

        const studentClean = normalizeInput(rawStudentClean);
        const targetClean = normalizeInput(rawTargetClean);

        let msg = "";
        let color = "red";
        let shouldLock = false;

        try {
            const userExpr = ce.parse(studentClean, { canonical: false });
            const targetExpr = ce.parse(targetClean, { canonical: false });

            const expandedUser = ce.box(["Expand", userExpr]).evaluate();
            const expandedTarget = ce.box(["Expand", targetExpr]).evaluate();

            if (expandedUser.isEqual(expandedTarget)) {
                msg = "Correct!";
                color = "green";
                shouldLock = true;
            } else {
                msg = "Incorrect. Please try again";
                color = "red";
                shouldLock = false;
            }
        } catch (err) {
            msg = "Invalid expression format. Please check your syntax.";
            color = "red";
            shouldLock = false;
        }

        feedbackDiv.textContent = msg;
        feedbackDiv.style.color = color;

        if (shouldLock) {
            solDiv.style.display = 'block';
            event.target.disabled = true;
            mfield.disabled = true;
            const revealBtn = event.target.parentElement.querySelector('.btn-reveal-solution');
            if (revealBtn) revealBtn.disabled = true;
        }

        if (window.MathJax) MathJax.typesetPromise([solDiv]);
    }
});
