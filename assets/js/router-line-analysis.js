window.renderLineAnalysisBox = function(q, i, container, cleanText) {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'question-container';
    fieldset.id = `q-block-${i}`;

    // 1. Build the HTML for the Sub-Questions
    let subQuestionsHTML = "";
    
    q.subQuestions.forEach((sub, subIdx) => {
        // If the sub-question is marked 'conditional', we wrap it in a hidden div
        const isHidden = sub.conditional ? 'style="display:none;" class="conditional-part"' : 'class="standard-part"';
        
        subQuestionsHTML += `<div id="sub-${i}-${subIdx}" ${isHidden} style="margin-bottom: 15px; display: flex; flex-direction: column; gap: 5px;">
            <label for="ans-${i}-${subIdx}">${sub.label}) ${sub.prompt}:</label>`;

        if (sub.type === "math") {
            subQuestionsHTML += `<math-field id="ans-${i}-${subIdx}" class="algebra-input-field" aria-label="${sub.prompt}"></math-field>`;
        } else if (sub.type === "choice") {
            // If this choice triggers the hidden fields, we add an onchange listener
            const triggerAttr = sub.isTrigger ? `onchange="window.handleMultiTrigger(${i}, ${subIdx}, '${sub.triggerValue}')"` : "";
            subQuestionsHTML += `
                <select id="ans-${i}-${subIdx}" class="algebra-input-field" ${triggerAttr} style="max-width: 250px;">
                    <option value="">Select...</option>
                    ${sub.choices.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>`;
        }
        
        subQuestionsHTML += `</div>`;
    });

    // 2. Build the SVG Grid options if present
    let graphHTML = "";
    if (q.graph_options) {
        graphHTML = '<div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin: 15px 0;">';
        q.graph_options.forEach(opt => {
            graphHTML += `<div style="text-align: center; border: 1px solid #ddd; padding: 5px; background: white;">${createLineSVG(opt.x, opt.y, opt.label)}</div>`;
        });
        graphHTML += '</div>';
    }

    fieldset.innerHTML = `
        <legend class="visually-hidden">Question ${q.label}</legend>
        <h3 id="question-${i}-label">Question ${q.label}</h3>
        <div class="question-content">${cleanText(q.question)}</div>
        
        <div class="algebra-answer-container">
            ${subQuestionsHTML}
            ${graphHTML}
            <div class="button-group">
                <button type="button" class="btn btn-check-analysis" data-idx="${i}">Check Answer</button>
                <button type="button" class="btn btn-primary btn-reveal-analysis" data-idx="${i}">Show Solution</button>
            </div>
        </div>

        <div id="feed-${i}" aria-live="polite" class="feedback-region"></div>
        <div id="sol-${i}" class="solution-content solution-box-style" style="display:none;" role="region" aria-label="Solution for Question ${q.label}">
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

// Function to reveal hidden parts when "Yes" is selected
window.handleMultiTrigger = function(qIdx, subIdx, triggerValue) {
    const userChoice = document.getElementById(`ans-${qIdx}-${subIdx}`).value;
    const allConditionals = document.getElementById(`q-block-${qIdx}`).querySelectorAll('.conditional-part');
    allConditionals.forEach(div => {
        div.style.display = (userChoice === triggerValue) ? "flex" : "none";
    });
};
