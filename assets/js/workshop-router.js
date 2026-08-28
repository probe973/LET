const ceMaster = new ComputeEngine.ComputeEngine();

// Euclidean GCD for fraction simplification
function getGCD(a, b) {
    a = Math.abs(a); b = Math.abs(b);
    while (b) { a %= b; [a, b] = [b, a]; }
    return a;
}

window.initWorkshopRouter = function(questions) {
    const container = document.getElementById('revision-questions-container');
    if (!container) return;
    container.innerHTML = '';
    window.workshopData = questions; // Store data for the click listener

    function cleanText(text) {
        if (!text) return "";
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    questions.forEach((q, i) => {
        // --- 1. TYPE: TEXT BLOCK ---
        if (q.coreType === 'text') {
            const textDiv = document.createElement('div');
            // Uses your flexible CSS class (explanation, tasks, instructions, etc.)
            if (q.cssClass) {
                textDiv.className = q.cssClass;
                }
            textDiv.innerHTML = cleanText(q.content);
            container.appendChild(textDiv);
            return;
        }

        // --- 2. TYPE: ALGEBRA & SIMULTANEOUS ---
        const fieldset = document.createElement('fieldset');
        fieldset.className = 'question-container';
        fieldset.id = `q-block-${i}`;

        const isSim = (q.coreType === 'simultaneous');
        const displayLabel = q.label || (i + 1);

        let inputHTML = "";
        if (isSim) {
            inputHTML = `
                <div class="algebra-answer-container" style="display: flex; flex-direction: column; gap: 15px;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-weight: bold; min-width: 40px;">$${q.var1_label} =$</span>
                        <math-field id="ans-${i}-1" class="algebra-input-field" style="margin-bottom:0; max-width: 150px;" aria-label="Value for ${q.var1_label}"></math-field>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-weight: bold; min-width: 40px;">$${q.var2_label} =$</span>
                        <math-field id="ans-${i}-2" class="algebra-input-field" style="margin-bottom:0; max-width: 150px;" aria-label="Value for ${q.var2_label}"></math-field>
                    </div>
                </div>`;
        } else {
            inputHTML = `
                <div class="algebra-answer-container">
                    <math-field id="ans-${i}" class="algebra-input-field" aria-label="Answer input"></math-field>
                </div>`;
        }

        fieldset.innerHTML = `
            <legend class="visually-hidden">Question ${displayLabel}</legend>
            <h3>Question ${displayLabel}</h3>
            <div class="question-content">${cleanText(q.question)}</div>
            ${inputHTML}
            <div class="button-group">
                <button type="button" class="btn btn-check-master" data-idx="${i}">Check Answer</button>
                <button type="button" class="btn btn-primary btn-reveal-master" data-idx="${i}">Show Solution</button>
            </div>
            <div id="feed-${i}" aria-live="polite" class="feedback-region"></div>
            <div id="sol-${i}" class="solution-content solution-box-style" style="display:none;" role="region">
                <hr>
                <h4>Solution:</h4>
                ${cleanText(q.solution)}
                <div class="answer-highlight-box">
                    <strong>Correct Answer:</strong> ${q.answer}
                </div>
            </div>
        `;
        container.appendChild(fieldset);
    });

    if (window.MathJax) MathJax.typesetPromise([container]);
};

// --- MARKING LOGIC ---
document.addEventListener('click', (event) => {
    if (!event.target.dataset.idx) return;
    const idx = parseInt(event.target.dataset.idx);
    const q = window.workshopData[idx];
    const feed = document.getElementById(`feed-${idx}`);
    const sol = document.getElementById(`sol-${idx}`);

    if (event.target.classList.contains('btn-reveal-master')) {
        sol.style.display = "block";
        if (window.MathJax) MathJax.typesetPromise([sol]);
        return;
    }

    if (event.target.classList.contains('btn-check-master')) {
        const isSim = (q.coreType === 'simultaneous');
        let isMathCorrect = false;
        let errorMsg = "";

        if (isSim) {
            const m1 = document.getElementById(`ans-${idx}-1`);
            const m2 = document.getElementById(`ans-${idx}-2`);
            const val1 = m1.value.trim().split('=').pop();
            const val2 = m2.value.trim().split('=').pop();
            
            isMathCorrect = ceMaster.parse(val1).isEqual(ceMaster.parse(q.check_val1)) && 
                            ceMaster.parse(val2).isEqual(ceMaster.parse(q.check_val2));

            let needsSimplify = false;
            [val1, val2].forEach(v => {
                const digits = v.match(/\d+/g);
                if ((v.includes('/') || v.includes('frac')) && digits && digits.length >= 2) {
                    if (getGCD(parseInt(digits[digits.length-2]), parseInt(digits[digits.length-1])) > 1) needsSimplify = true;
                }
            });
            if (needsSimplify) errorMsg = "Correct value, but please simplify fractions fully.";
        } else {
            const mfield = document.getElementById(`ans-${idx}`);
            const studentRaw = mfield.value.trim();
            const studentClean = studentRaw.split('=').pop();
            const targetClean = q.check_val.split('=').pop();
            
            isMathCorrect = ceMaster.parse(studentClean).isEqual(ceMaster.parse(targetClean));
            
            if (isMathCorrect && q.goal !== "rearrange") {
                const userRaw = ceMaster.parse(studentClean, {canonical:false});
                const targetRaw = ceMaster.parse(targetClean, {canonical:false});
                const uLen = JSON.stringify(userRaw.json).length;
                const tLen = JSON.stringify(targetRaw.json).length;
                
                if (uLen > tLen) {
                    errorMsg = (q.goal === "factorise") ? "Correct value, but please factorise fully." : "Correct value, but please simplify further.";
                }
            }
        }

        if (!isMathCorrect) {
            feed.textContent = "Incorrect. Try again!";
            feed.style.color = "red";
        } else if (errorMsg) {
            feed.textContent = errorMsg;
            feed.style.color = "orange";
        } else {
            feed.textContent = "Correct!";
            feed.style.color = "green";
            sol.style.display = "block";
            // Lock inputs
            if (isSim) {
                document.getElementById(`ans-${idx}-1`).disabled = true;
                document.getElementById(`ans-${idx}-2`).disabled = true;
            } else {
                document.getElementById(`ans-${idx}`).disabled = true;
            }
            event.target.disabled = true;
            event.target.parentElement.querySelector('.btn-reveal-master').disabled = true;
        }
        if (window.MathJax) MathJax.typesetPromise([sol]);
    }
});
