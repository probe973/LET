// assets/js/revision-standard-form-logic.js
document.addEventListener('DOMContentLoaded', () => {

  //const container = document.getElementById('revision-questions-container');
    const container = document.getElementById('sf-questions-container');
    if (!container) return; // This line prevents the script from breaking if the container is missing

  function cleanText(text) {
    if (!text) return "";
    // Converts **bold** to <strong>bold</strong> to match Fractions/Core
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  function roundToDecimalPlaces(value, dp) {
    if (isNaN(value)) return NaN;
    const multiplier = Math.pow(10, dp);
    return Math.round(value * multiplier) / multiplier;
  }

  function renderStandardFormQuestionHTML(q, i) {
    const questionBlock = document.createElement('div');
    questionBlock.className = 'revision-question-item';

    questionBlock.innerHTML = `
<div class="revision-question-text" id="question-${i}-label">
    <strong>Question ${i + 1}:</strong> ${cleanText(q.question)}
</div>

<!-- Input Row -->
<div style="display: flex; align-items: center; gap: 8px; margin: 15px 0 10px 0;">
  <input type="number" id="rev-ans-base-${i}" step="any"
         placeholder="e.g. 4.5"
         aria-label="Standard form base multiplier"
         style="width: 90px; text-align: center; padding: 6px;">

  <span aria-hidden="true" style="font-weight: bold;"> × 10 </span>

  <span style="position: relative; top: -8px;">
    <input type="number" id="rev-ans-exp-${i}" step="1"
           placeholder="exp"
           aria-label="Standard form exponent power"
           style="width: 65px; text-align: center; padding: 4px;">
  </span>
</div>

<!-- Button Row (Now on its own line) -->
<div style="margin-bottom: 15px;">
    <button type="button" class="btn btn-check-answer" 
            data-question-index="${i}" 
            aria-controls="sf-sol-${i}">
        Check Answer
    </button>
</div>

<!-- Solution Area -->
<div id="sf-sol-${i}" class="revision-solution-text" style="display:none;" aria-live="polite">
  <hr>
  <div class="solution-feedback"></div>

  <div>
    <strong>Solution:</strong><br>${cleanText(q.solution_text || q.solution)}
  </div>

  <div style="margin-top: 10px; padding: 8px; background: #f9f9f9; border-left: 4px solid #004a75;">
    <strong>Correct Answer:</strong> \\(${q.base_answer} \\times 10^{${q.exponent_answer}}\\)
  </div>
</div>
`;

    container.appendChild(questionBlock);
  }

  container.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-check-answer')) {
      const questionIndex = parseInt(event.target.dataset.questionIndex);
      //const q = window.revisionQuestionsData[questionIndex];
        const q = window.sfQuestionsData[questionIndex];

      const baseField = document.getElementById(`rev-ans-base-${questionIndex}`);
      const expField = document.getElementById(`rev-ans-exp-${questionIndex}`);
      const solutionDiv = document.getElementById(`sf-sol-${questionIndex}`);
      const feedbackDiv = solutionDiv.querySelector('.solution-feedback');

      solutionDiv.style.display = 'block';
      event.target.disabled = true;
      baseField.disabled = true;
      expField.disabled = true;

      const userBase = parseFloat(baseField.value);
      const userExp = parseInt(expField.value);

      const targetBase = parseFloat(q.base_answer);
      const targetExp = parseInt(q.exponent_answer);

      if (!isNaN(userBase) && !isNaN(userExp) && userBase === targetBase && userExp === targetExp) {
        feedbackDiv.innerHTML = '<span style="color: green; font-weight: bold;">Correct!</span>';
        baseField.classList.add('correct-border');
        expField.classList.add('correct-border');
      } else {
        const userDisplay = (isNaN(userBase) || isNaN(userExp)) ? 'empty' : `${userBase} × 10^${userExp}`;
        feedbackDiv.innerHTML = `<span style="color: red; font-weight: bold;">Incorrect. Your answer was ${userDisplay}. The correct answer is \\(${q.base_answer} \\times 10^{${q.exponent_answer}}\\).</span>`;
        baseField.classList.add('incorrect-border');
        expField.classList.add('incorrect-border');
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

  window.initStandardFormRevisionTest = function(questionGeneratorFunctions, numQuestions = 10) {
    if (!container) return;

    container.innerHTML = '';
    //window.revisionQuestionsData = [];
    window.sfQuestionsData = [];

    for (let i = 0; i < numQuestions; i++) {
      // Pick a random index from the generators array
      const randomIndex = Math.floor(Math.random() * questionGeneratorFunctions.length);
      const selectedGenerator = questionGeneratorFunctions[randomIndex];

      const question = selectedGenerator(8000 + i, roundToDecimalPlaces);

      //window.revisionQuestionsData.push(question);
        window.sfQuestionsData.push(question);
      renderStandardFormQuestionHTML(question, i);
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
