// assets/js/revision-fractions-logic.js

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('revision-questions-container');

    function cleanText(text) {
        if (!text) return "";
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    function roundToDecimalPlaces(value, dp) {
        if (isNaN(value)) return NaN;
        const multiplier = Math.pow(10, dp);
        return Math.round(value * multiplier) / multiplier;
    }

    function renderFractionQuestionHTML(q, i) {
        const questionBlock = document.createElement('div');
        //questionBlock.className = 'question-container';
        questionBlock.className = 'revision-question-item';

        questionBlock.innerHTML = `
            <div class="revision-question-text" id="question-${i}-label">
                <strong>Question ${i + 1}:</strong> ${cleanText(q.question)}
            </div>
            
            <div class="numerical-answer-container">
                <div class="fraction-row-layout">
                    <div class="fraction-inputs-stack">
                        <input type="number" id="rev-ans-num-${i}" class="user-revision-input" step="any" placeholder="0.0" aria-label="Question ${i + 1} Numerator">
                        <hr class="fraction-line-separator" aria-hidden="true">
                        <input type="number" id="rev-ans-den-${i}" class="user-revision-input" step="any" placeholder="0.0" aria-label="Question ${i + 1} Denominator">
                    </div>
                    <button type="button" class="btn btn-check-answer" data-question-index="${i}" aria-controls="rev-sol-${i}">Check Answer</button>
                </div>
            </div>

            <div id="rev-sol-${i}" class="revision-solution-text" style="display:none;" aria-live="polite">
                <hr>
                <div class="solution-feedback"></div>
                <strong>Solution:</strong><br>${cleanText(q.solution_text || q.solution)}
                <div style="margin-top: 10px; padding: 8px; background: #f9f9f9; border-left: 4px solid #004a75;">
                    <strong>Correct Answer:</strong> \\(\\frac{${q.numerator_answer}}{${q.denominator_answer}}\\)
                </div>
            </div>
        `;
        container.appendChild(questionBlock);
    }

    container.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-check-answer')) {
            const questionIndex = parseInt(event.target.dataset.questionIndex);
            const q = window.revisionQuestionsData[questionIndex];

            const numField = document.getElementById(`rev-ans-num-${questionIndex}`);
            const denField = document.getElementById(`rev-ans-den-${questionIndex}`);
            const solutionDiv = document.getElementById(`rev-sol-${questionIndex}`);
            const feedbackDiv = solutionDiv.querySelector('.solution-feedback');

            solutionDiv.style.display = 'block';
            event.target.disabled = true;
            numField.disabled = true;
            denField.disabled = true;

            const userNum = parseFloat(numField.value);
            const userDen = parseFloat(denField.value);
            const targetNum = parseFloat(q.numerator_answer);
            const targetDen = parseFloat(q.denominator_answer);

            if (!isNaN(userNum) && !isNaN(userDen) && userNum === targetNum && userDen === targetDen) {
                feedbackDiv.innerHTML = '<span style="color: green; font-weight: bold;">Correct!</span>';
                numField.classList.add('correct-border');
                denField.classList.add('correct-border');
            } else {
                const userDisplay = (isNaN(userNum) || isNaN(userDen)) ? 'empty or invalid' : `${userNum}/${userDen}`;
                feedbackDiv.innerHTML = `<span style="color: red; font-weight: bold;">Incorrect. Your answer was ${userDisplay}. The correct answer is \\(\\frac{${q.numerator_answer}}{${q.denominator_answer}}\\).</span>`;
                numField.classList.add('incorrect-border');
                denField.classList.add('incorrect-border');
            }
            
            if (window.MathJax) {
                if (typeof MathJax.typesetPromise === 'function') {
                    MathJax.typesetPromise([solutionDiv]);
                } else if (MathJax.Hub && typeof MathJax.Hub.Queue === 'function') {
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, solutionDiv]);
                }
            }
        }
    });

    window.initFractionRevisionTest = function(questionGeneratorFunctions, numQuestions = 10) {
        if (!container) return;
        container.innerHTML = '';
        window.revisionQuestionsData = [];
        for (let i = 0; i < numQuestions; i++) {
            const selectedGenerator = questionGeneratorFunctions[Math.floor(Math.random() * questionGeneratorFunctions.length)];
            const question = selectedGenerator(8000 + i, roundToDecimalPlaces);
            window.revisionQuestionsData.push(question);
            renderFractionQuestionHTML(question, i);
        }
        if (window.MathJax) {
            if (typeof MathJax.typesetPromise === 'function') {
                MathJax.typesetPromise([container]);
            } else if (MathJax.Hub && typeof MathJax.Hub.Queue === 'function') {
                MathJax.Hub.Queue(["Typeset", MathJax.Hub, container]);
            }
        }
    };
});
