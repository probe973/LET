window.renderAlgebraBox = function(q, i, container, cleanText) {
    const fieldset = document.createElement('fieldset');
    
    // USES CSS CLASSES: Pulls theme from algstyle.css
    fieldset.className = 'question-container'; 
    fieldset.id = `question-rev-${i}`;

    fieldset.innerHTML = `
        <!-- ACCESSIBILITY: Legend for screen readers (using custom label if provided) -->
        <legend class="visually-hidden">Question ${q.label || (i + 1)}</legend>
        
        <!-- VISUAL TITLE: Matches your workshop style -->
        <h3 id="question-${i}-label">Question ${q.label || (i + 1)}</h3>
        
        <div class="question-content">
            ${cleanText(q.question)}
        </div>

        <div class="algebra-answer-container">
            <!-- INPUT: MathLive box with the ID expected by algebra-revision-core.js -->
            <math-field id="rev-ans-${i}" 
                        class="algebra-input-field" 
                        aria-labelledby="question-${i}-label">
            </math-field>
            
            <div class="button-group">
                <!-- BUTTONS: Classes match the listeners in algebra-revision-core.js -->
                <button type="button" class="btn btn-check-answer" data-question-index="${i}">Check Answer</button>
                <button type="button" class="btn btn-primary btn-reveal-solution" data-question-index="${i}">Show Solution</button>
            </div>
        </div>

        <!-- FEEDBACK: Accessible live region -->
        <div id="rev-feedback-${i}" aria-live="polite" class="feedback-region"></div>
        
        <!-- SOLUTION: The box that reveals on click -->
        <div id="rev-sol-${i}" class="solution-content solution-box-style" style="display:none;" role="region" aria-label="Solution for Question ${q.label || (i + 1)}">
            <hr>
            <h4>Solution:</h4>
            ${cleanText(q.solution)}
            <div class="answer-highlight-box">
                <strong>Correct Answer:</strong> ${q.answer || q.check_val}
            </div>
        </div>
    `;
    
    container.appendChild(fieldset);
};
