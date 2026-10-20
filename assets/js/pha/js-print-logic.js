// assets/js/pha/js-print-logic.js

document.addEventListener('DOMContentLoaded', () => {

    // Helper to open a clean, professionally styled print window
    function openPrintableWindow(title, htmlContent) {
        const win = window.open('', '_blank');
        win.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${title}</title>
                <style>
                    body { 
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
                        line-height: 1.6; 
                        color: #2c3e50; 
                        max-width: 800px; 
                        margin: 40px auto; 
                        padding: 0 30px; 
                        background: #fff;
                    }
                    h1 { 
                        font-size: 22px; 
                        border-bottom: 2px solid #34495e; 
                        padding-bottom: 12px; 
                        margin-bottom: 30px;
                        color: #2c3e50;
                    }
                    .test-question-item { 
                        margin-bottom: 30px; 
                        padding-bottom: 20px;
                        border-bottom: 1px solid #e2e8f0;
                        page-break-inside: avoid; 
                    }
                    .question-text {
                        font-weight: 600;
                        font-size: 15px;
                        margin-bottom: 12px;
                        color: #1a202c;
                    }
                    .blank-line { 
                        display: inline-block; 
                        width: 140px; 
                        border-bottom: 1px solid #4a5568; 
                        margin-left: 8px; 
                        height: 1em; 
                        vertical-align: bottom; 
                    }
                    .solution-text { 
                        background: #f7fafc; 
                        border-left: 4px solid #3182ce; 
                        padding: 12px 18px; 
                        margin-top: 12px; 
                        border-radius: 4px;
                        font-size: 14px;
                        display: block !important;
                    }
                    .user-test-input {
                        display: none; /* Hide input box in print views */
                    }
                    .print-btn-container {
                        margin-top: 40px; 
                        text-align: center;
                        padding-bottom: 40px;
                    }
                    .print-btn {
                        background-color: #3182ce;
                        color: white;
                        border: none;
                        padding: 12px 24px;
                        font-size: 16px;
                        font-weight: 600;
                        border-radius: 6px;
                        cursor: pointer;
                    }
                    .print-btn:hover {
                        background-color: #2b6cb0;
                    }
                    @media print { 
                        .print-btn-container { display: none; }
                        body { margin: 0; padding: 15px; }
                    }
                </style>
            </head>
            <body>
                <h1>${title}</h1>
                ${htmlContent}
                <div class="print-btn-container">
                    <button class="print-btn" onclick="window.print()">Print or Save as PDF</button>
                </div>
            </body>
            </html>
        `);
        win.document.close();
    }

    // 1. Button: Questions Only
    const btnQ = document.getElementById('btn-doc-questions');
    if (btnQ) {
        btnQ.addEventListener('click', () => {
            const items = document.querySelectorAll('.test-question-item');
            if (items.length === 0) { alert("Please wait for questions to load."); return; }
            
            let containerHtml = '';
            items.forEach((item, index) => {
                const clone = item.cloneNode(true);
                
                // Hide or remove solution and feedback sections for questions-only view
                const sol = clone.querySelector('.solution-text');
                if (sol) sol.remove();
                
                // Replace the number input with a clean blank underline line
                const inputArea = clone.querySelector('.input-area');
                if (inputArea) {
                    inputArea.innerHTML = `Answer: <span class="blank-line"></span>`;
                }

                // Add explicit numbering
                const qText = clone.querySelector('.question-text');
                if (qText) {
                    // Ensure the title prefix is clean
                    if (!qText.innerHTML.includes(`Question ${index + 1}`)) {
                        qText.innerHTML = `<strong>Question ${index + 1}:</strong> ` + qText.innerHTML;
                    }
                }

                containerHtml += clone.outerHTML;
            });
            openPrintableWindow("Practice Test - Questions Only", containerHtml);
        });
    }

    // 2. Button: All Solutions
    const btnSol = document.getElementById('btn-doc-solutions');
    if (btnSol) {
        btnSol.addEventListener('click', () => {
            const items = document.querySelectorAll('.test-question-item');
            if (items.length === 0) { alert("Please wait for questions to load."); return; }
            
            let containerHtml = '';
            items.forEach((item, index) => {
                const clone = item.cloneNode(true);
                
                // Hide input areas, we only want questions and solutions here
                const inputArea = clone.querySelector('.input-area');
                if (inputArea) inputArea.remove();

                const qText = clone.querySelector('.question-text');
                if (qText && !qText.innerHTML.includes(`Question ${index + 1}`)) {
                    qText.innerHTML = `<strong>Question ${index + 1}:</strong> ` + qText.innerHTML;
                }

                containerHtml += clone.outerHTML;
            });
            openPrintableWindow("Practice Test - All Solutions", containerHtml);
        });
    }

    // 3. Button: User Answers & Solutions (Revealed after submission)
    const btnResults = document.getElementById('btn-doc-user-results');
    const submitBtn = document.getElementById('btn-submit-test');
    
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            if (btnResults) btnResults.style.display = 'inline-block';
        });
    }

    if (btnResults) {
        btnResults.addEventListener('click', () => {
            const items = document.querySelectorAll('.test-question-item');
            if (items.length === 0) { alert("Please wait for questions to load."); return; }
            
            let containerHtml = '';
            items.forEach((item, index) => {
                const clone = item.cloneNode(true);
                
                // Capture what the user actually typed into the input on screen
                const liveInput = document.getElementById(`ans-${index}`);
                const userVal = liveInput ? liveInput.value : '';

                const inputArea = clone.querySelector('.input-area');
                if (inputArea) {
                    inputArea.innerHTML = `<div style="margin: 8px 0; font-size: 14px; color: #4a5568;">Your Answer: <strong>${userVal === '' ? '(Blank)' : userVal}</strong></div>`;
                }

                const qText = clone.querySelector('.question-text');
                if (qText && !qText.innerHTML.includes(`Question ${index + 1}`)) {
                    qText.innerHTML = `<strong>Question ${index + 1}:</strong> ` + qText.innerHTML;
                }

                containerHtml += clone.outerHTML;
            });
            openPrintableWindow("Your Test Results & Solutions", containerHtml);
        });
    }
});
