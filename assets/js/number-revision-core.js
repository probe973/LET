document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('revision-questions-container');
    if (!container) return;

    // Helper to handle bold text safely
    function cleanText(text) {
        if (!text) return "";
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    // 1. HTML structure matching your accessible workshop style
    function renderNumberQuestionHTML(q, i) {
        const fieldset = document.createElement('fieldset');
        fieldset.className = 'question-container'; 
        fieldset.id = `question-num-rev-${i}`;

        fieldset.innerHTML = `
            <legend class="visually-hidden">Question ${q.label || i + 1}</legend>
            
            <h3 id="num-question-${i}-label">Question ${q.label || i + 1}</h3>
            
            <div class="question-content">
                ${cleanText(q.question)}
            </div>

            <div class="algebra-answer-container">
                <input type="number" 
                       id="num-ans-${i}" 
                       class="algebra-input-field" 
                       step="any"
                       aria-labelledby="num-question-${i}-label"
                       placeholder="Enter your answer...">
                
                <div class="button-group">
                    <button type="button" class="btn btn-check-answer" 
                            data-question-index="${i}" 
                            aria-controls="num-feedback-${i} num-sol-${i}">
                        Check Answer
                    </button>
                    <button type="button" class="btn btn-primary btn-reveal-solution" 
                            data-question-index="${i}">
                        Show Solution
                    </button>
                </div>
            </div>

            <div id="num-feedback-${i}" aria-live="polite" class="feedback-region"></div>
            
            <div id="num-sol-${i}" class="solution-content solution-box-style" 
                 style="display:none;" 
                 role="region" 
                 aria-label="Solution for Question ${q.label || i + 1}">
                <hr>
                <h4>Solution:</h4>
                ${cleanText(q.solution)}
                <div class="answer-highlight-box">
                    <strong>Correct Answer:</strong> ${q.answer}
                </div>
            </div>
        `;
        container.appendChild(fieldset);
    }

    // 2. Click listener for checking answers and revealing solutions
    container.addEventListener('click', (event) => {
        const idx = parseInt(event.target.dataset.questionIndex);
        if (isNaN(idx)) return;

        const q = window.numberRevisionData[idx];
        const inputField = document.getElementById(`num-ans-${idx}`);
        const solDiv = document.getElementById(`num-sol-${idx}`);
        const feedbackDiv = document.getElementById(`num-feedback-${idx}`);

        // Handle "Show Solution" button
        if (event.target.classList.contains('btn-reveal-solution')) {
            solDiv.style.display = 'block';
            if (window.MathJax) MathJax.typesetPromise([solDiv]);
            return;
        }

        // Handle "Check Answer" button
        if (event.target.classList.contains('btn-check-answer')) {
            const rawValue = inputField.value.trim();
            const userNum = parseFloat(rawValue);

            let msg = "";
            let color = "red";
            let shouldLock = false;

            if (rawValue === "" || isNaN(userNum)) {
                msg = "Please enter a valid number.";
                color = "red";
            } else {
                let isCorrect = false;

                // Check against min/max range if provided
                if (q.min !== undefined && q.max !== undefined) {
                    if (userNum >= q.min && userNum <= q.max) {
                        isCorrect = true;
                    }
                } 
                // Fallback to target value with tolerance if min/max aren't used
                else if (q.target !== undefined) {
                    const tolerance = q.tolerance || 0;
                    if (Math.abs(userNum - q.target) <= tolerance) {
                        isCorrect = true;
                    }
                }

                if (isCorrect) {
                    msg = "Correct!";
                    color = "green";
                    shouldLock = true;
                } else {
                    msg = "Incorrect. Please try again.";
                    color = "red";
                    shouldLock = false; // Allows retry
                }
            }

            feedbackDiv.textContent = msg;
            feedbackDiv.style.color = color;

            if (shouldLock) {
                solDiv.style.display = 'block';
                inputField.disabled = true;
                event.target.disabled = true;
                const revealBtn = event.target.parentElement.querySelector('.btn-reveal-solution');
                if (revealBtn) revealBtn.disabled = true;
            }

            if (window.MathJax) MathJax.typesetPromise([solDiv]);
        }
    });

    // Global initializer function called by your workshop pages
    window.initNumberRevisionTest = function(configArray) {
        if (!container) return;
        container.innerHTML = '';
        window.numberRevisionData = [];
        let globalIndex = 0;

        configArray.forEach(item => {
            for (let i = 0; i < item.count; i++) {
                const question = item.generator(8000 + globalIndex);
                window.numberRevisionData.push(question);
                renderNumberQuestionHTML(question, globalIndex);
                globalIndex++;
            }
        });

        if (window.MathJax) MathJax.typesetPromise([container]);
    };
});
