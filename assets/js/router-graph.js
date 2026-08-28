// Helper to generate the SVG string
function createLineSVG(xInt, yInt, label) {
    const size = 200;
    const center = size / 2;
    const scale = 15; 
    
    // Calculate line endpoints for drawing
    const x1 = -10;
    const y1 = yInt * (1 - x1 / xInt);
    const x2 = 10;
    const y2 = yInt * (1 - x2 / xInt);

    const svgX1 = center + (x1 * scale);
    const svgY1 = center - (y1 * scale);
    const svgX2 = center + (x2 * scale);
    const svgY2 = center - (y2 * scale);

    // Coordinate positions for the dots
    const interceptX = center + (xInt * scale);
    const interceptY = center - (yInt * scale);

    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="aria-label="Graph ${label}: A straight line crossing the y-axis at (0, ${yInt}) and the x-axis at (${xInt}, 0)">
            <!-- Grid and Axes -->
            <line x1="0" y1="${center}" x2="${size}" y2="${center}" stroke="#ccc" stroke-width="1" />
            <line x1="${center}" y1="0" x2="${center}" y2="${size}" stroke="#ccc" stroke-width="1" />
            <line x1="0" y1="${center}" x2="${size}" y2="${center}" stroke="black" stroke-width="2" />
            <line x1="${center}" y1="0" x2="${center}" y2="${size}" stroke="black" stroke-width="2" />
            
            <!-- The Line -->
            <line x1="${svgX1}" y1="${svgY1}" x2="${svgX2}" y2="${svgY2}" stroke="#004a75" stroke-width="3" />
            
            <!-- Intercept Points (Circles) -->
            <circle cx="${interceptX}" cy="${center}" r="4" fill="red" />
            <circle cx="${center}" cy="${interceptY}" r="4" fill="red" />
            
            <!-- Coordinate Labels -->
            <text x="${interceptX}" y="${center + 15}" font-size="10" text-anchor="middle" font-family="Arial">(${xInt}, 0)</text>
            <text x="${center + 5}" y="${interceptY + 5}" font-size="10" font-family="Arial">(0, ${yInt})</text>
            
            <!-- Graph Identifier (A, B, C) -->
            <text x="10" y="20" font-weight="bold" font-family="Arial" font-size="16">${label}</text>
        </svg>`;
}

window.renderGraphChoice = function(q, i, container, cleanText) {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'question-container';
    fieldset.id = `q-block-${i}`;

    let optionsHTML = '<div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin: 20px 0;">';
    q.options.forEach(opt => {
        optionsHTML += `<div style="text-align: center; border: 1px solid #ddd; padding: 5px; background: white;">${createLineSVG(opt.x, opt.y, opt.label)}</div>`;
    });
    optionsHTML += '</div>';

    fieldset.innerHTML = `
        <legend class="visually-hidden">Question ${q.label || (i + 1)}</legend>
        
        <!-- 1. Added ID to heading -->
        <h3 id="question-${i}-label">Question ${q.label || (i + 1)}</h3>
        
        <div class="question-content">${cleanText(q.question)}</div>
        ${optionsHTML}
        
        <div class="algebra-answer-container">
            <!-- 2. Added aria-labelledby to select -->
            <select id="ans-${i}" class="algebra-input-field" aria-labelledby="question-${i}-label" style="max-width: 250px;">
                <option value="">Select the correct graph...</option>
                ${q.options.map(opt => `<option value="${opt.label}">Graph ${opt.label}</option>`).join('')}
            </select>
            
            <div class="button-group">
                <!-- 3. Added aria-controls to buttons -->
                <button type="button" class="btn btn-check-graph" data-idx="${i}" aria-controls="feed-${i} sol-${i}">Check Answer</button>
                <button type="button" class="btn btn-primary btn-reveal-graph" data-idx="${i}" aria-controls="feed-${i} sol-${i}">Show Solution</button>
            </div>
        </div>

        <div id="feed-${i}" aria-live="polite" class="feedback-region"></div>
        
        <!-- 4. Added aria-label to solution region -->
        <div id="sol-${i}" class="solution-content solution-box-style" style="display:none;" role="region" aria-label="Solution for Question ${q.label || (i + 1)}">
            <hr>
            <h4>Solution:</h4>
            ${cleanText(q.solution)}
            <div class="answer-highlight-box">
                <strong>Correct Answer:</strong> Graph ${q.check_val}
            </div>
        </div>
    `;
    container.appendChild(fieldset);
};
