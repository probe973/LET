const ceSim = new ComputeEngine.ComputeEngine();

// Euclid's Algorithm to check for unreduced fractions
function getGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        a %= b;
        [a, b] = [b, a];
    }
    return a;
}

window.initSimultaneousTest = function(configArray) {
    const container = document.getElementById('revision-questions-container');
    if (!container) return;

    container.innerHTML = '';
    window.revisionQuestionsData = [];
    let globalIndex = 0;

    function cleanText(text) {
        if (!text) return "";
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    configArray.forEach(item => {
        for (let i = 0; i < item.count; i++) {
            const q = item.generator(8000 + globalIndex);
            window.revisionQuestionsData.push(q);
            
            const fieldset = document.createElement('fieldset');
            fieldset.className = 'question-container'; 
            fieldset.id = `q-sim-${globalIndex}`;

            fieldset.innerHTML = `
                <legend class="visually-hidden">Question ${q.label || (globalIndex + 1)}</legend>
                <h3>Question ${q.label || (globalIndex + 1)}</h3>
                <div class="question-content">${cleanText(q.question)}</div>
                
                <div class="algebra-answer-container" style="display: flex; flex-direction: column; gap: 15px;">
                    <!-- Variable Box 1 -->
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-weight: bold; min-width: 40px;">$${q.var1_label} =$</span>
                        <math-field id="ans-${globalIndex}-1" class="algebra-input-field" aria-label="Value for ${q.var1_label}" style="margin-bottom:0; max-width: 150px;"></math-field>
                    </div>
                    
                    <!-- Variable Box 2 -->
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-weight: bold; min-width: 40px;">$${q.var2_label} =$</span>
                        <math-field id="ans-${globalIndex}-2" class="algebra-input-field" aria-label="Value for ${q.var2_label}" style="margin-bottom:0; max-width: 150px;"></math-field>
                    </div>

                    <div class="button-group">
                        <button type="button" class="btn btn-check-sim" data-idx="${globalIndex}">Check Answer</button>
                        <button type="button" class="btn btn-primary btn-reveal-sim-solution" data-idx="${globalIndex}">Show Solution</button>
                    </div>
                </div>

                <div id="feed-${globalIndex}" aria-live="polite" class="feedback-region"></div>
                
                <div id="sol-${globalIndex}" 
                    class="solution-content solution-box-style" 
                    style="display:none;" 
                    role="region" 
                    aria-label="Solution for Question ${q.label || globalIndex + 1}">
                    <hr>
                    <h4>Solution:</h4>
                    ${cleanText(q.solution)}
                    <div class="answer-highlight-box">
                        <strong>Correct Answer:</strong> ${q.answer}
                    </div>
                </div>
            `;
            container.appendChild(fieldset);
            globalIndex++;
        }
    });
    if (window.MathJax) MathJax.typesetPromise([container]);
};

document.addEventListener('click', (event) => {
    const idx = parseInt(event.target.dataset.idx);
    if (isNaN(idx)) return;

    const q = window.revisionQuestionsData[idx];
    const m1 = document.getElementById(`ans-${idx}-1`);
    const m2 = document.getElementById(`ans-${idx}-2`);
    const feed = document.getElementById(`feed-${idx}`);
    const sol = document.getElementById(`sol-${idx}`);

    // --- 1. Handle "Show Solution" ---
    if (event.target.classList.contains('btn-reveal-sim-solution')) {
        sol.style.display = "block";
        if (window.MathJax) MathJax.typesetPromise([sol]);
        return;
    }

    // --- 2. Handle "Check Answer" ---
    if (event.target.classList.contains('btn-check-sim')) {
        const val1 = m1.value.trim();
        const val2 = m2.value.trim();

        const cleanVal1 = val1.split('=').pop().trim();
        const cleanVal2 = val2.split('=').pop().trim();

        const is1Correct = ceSim.parse(cleanVal1).isEqual(ceSim.parse(q.check_val1));
        const is2Correct = ceSim.parse(cleanVal2).isEqual(ceSim.parse(q.check_val2));

        let msg = "";
        let color = "red";
        let shouldLock = false;

        if (!(is1Correct && is2Correct)) {
            // INCORRECT: Allow retry, keep solution hidden
            msg = "Incorrect. Try again!";
            color = "red";
            shouldLock = false;
        } else {
            // MATH IS RIGHT: Now check simplification
            let needsSimplify = false;
            [val1, val2].forEach(v => {
                if (v.includes('/') || v.includes('frac')) {
                    const digits = v.match(/\d+/g);
                    if (digits && digits.length >= 2) {
                        const n = parseInt(digits[digits.length - 2]);
                        const d = parseInt(digits[digits.length - 1]);
                        if (getGCD(n, d) > 1) needsSimplify = true;
                    }
                }
            });

            if (needsSimplify) {
                // UN-SIMPLIFIED: Allow retry, keep solution hidden
                msg = "Correct value, but please simplify your fractions fully.";
                color = "orange";
                shouldLock = false;
            } else {
                // PERFECT: Reveal and Lock
                msg = "Correct!";
                color = "green";
                shouldLock = true;
            }
        }

        feed.textContent = msg;
        feed.style.color = color;

        if (shouldLock) {
            sol.style.display = "block";
            m1.disabled = m2.disabled = true;
            event.target.disabled = true;
            // Disable the "Show Solution" button too
            const revealBtn = event.target.parentElement.querySelector('.btn-reveal-sim-solution');
            if (revealBtn) revealBtn.disabled = true;
        }

        if (window.MathJax) MathJax.typesetPromise([sol]);
    }
});
