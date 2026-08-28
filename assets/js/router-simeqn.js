window.renderSimultaneousBox = function(q, i, container, cleanText) {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'question-container';
    fieldset.id = `question-rev-${i}`;

    fieldset.innerHTML = `
        <legend class="visually-hidden">Question ${q.label || (i + 1)}</legend>
        
        <h3 id="question-${i}-label">Question ${q.label || (i + 1)}</h3>
        
        <div class="question-content">
            ${cleanText(q.question)}
        </div>

        <div class="algebra-answer-container" style="display: flex; flex-direction: column; gap: 15px;">
            <!-- Box 1 for Variable 1 -->
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-weight: bold; min-width: 40px;">$${q.var1_label} =$</span>
                <math-field id="ans-${i}-1" 
                            class="algebra-input-field" 
                            style="margin-bottom:0; max-width: 150px;" 
                            aria-label="Value for ${q.var1_label}">
                </math-field>
            </div>
            
            <!-- Box 2 for Variable 2 -->
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-weight: bold; min-width: 40px;">$${q.var2_label} =$</span>
                <math-field id="ans-${i}-2" 
                            class="algebra-input-field" 
                            style="margin-bottom:0; max-width: 150px;" 
                            aria-label="Value for ${q.var2_label}">
                </math-field>
            </div>

            <div class="button-group">
                <button type="button" class="btn btn-check-sim" data-idx="${i}">Check Answer</button>
                <button type="button" class="btn btn-primary btn-reveal-sim-solution" data-idx="${i}">Show Solution</button>
            </div>
        </div>

        <div id="feed-${i}" aria-live="polite" class="feedback-region"></div>
        
        <div id="sol-${i}" class="solution-content solution-box-style" style="display:none;" role="region" aria-label="Solution for Question ${q.label || (i + 1)}">
            <hr>
            <h4>Solution:</h4>
            ${cleanText(q.solution)}
            <div class="answer-highlight-box">
                <strong>Correct Answer:</strong> ${q.answer}
            </div>
        </div>
    `;
    
    container.appendChild(fieldset);
};
