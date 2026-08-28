window.initWorkshopRouter = function(questionsArray) {
    const container = document.getElementById('revision-questions-container');
    if (!container) return;

    // 1. Clear the area once at the start
    container.innerHTML = '';

    // 2. Store the data globally so algebra-revision-core.js 
    // and simultaneous-core.js can still find the answers.
    window.revisionQuestionsData = questionsArray;

    // 3. Helper to handle bold text in JS strings
    const cleanText = (text) => text ? text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') : "";

    // 4. The Loop: Send each item to its specialist
    questionsArray.forEach((q, i) => {
        if (q.coreType === 'text') {
            // Text is simple, so the Main Router handles it directly
            const div = document.createElement('div');
            if (q.cssClass) div.className = q.cssClass;
            div.innerHTML = cleanText(q.content);
            container.appendChild(div);
        } 
        else if (q.coreType === 'algebra' && window.renderAlgebraBox) {
            // Specialist 1: Handles single-box layout
            window.renderAlgebraBox(q, i, container, cleanText);
        } 
        else if (q.coreType === 'simultaneous' && window.renderSimultaneousBox) {
            // Specialist 2: Handles dual-box layout
            window.renderSimultaneousBox(q, i, container, cleanText);
        }
        else if (q.coreType === 'graph-choice' && window.renderGraphChoice) {
            window.renderGraphChoice(q, i, container, cleanText);
        }
        else if (q.coreType === 'line-analysis' && window.renderLineAnalysisBox) {
    
        window.renderLineAnalysisBox(q, i, container, cleanText);
        }
    });

    // 5. Final render of math symbols
    if (window.MathJax) MathJax.typesetPromise([container]);
};
