// assets/js/scripts.js

/**
 * ACCESSIBLE SOLUTION TOGGLE
 * Updated to be compatible with all question types.
 */

const ce = new ComputeEngine.ComputeEngine();

function toggleSolution(solutionId, btnElement) {
    var solutionDiv = document.getElementById(solutionId);
    
    if (!solutionDiv) return;

    // Check visibility (handles inline styles, classes, and computed styles)
    var isHidden = (solutionDiv.style.display === "none" || solutionDiv.style.display === "" || !solutionDiv.classList.contains('visible'));

    if (isHidden) {
        // --- SHOW ---
        solutionDiv.style.display = "block";
        solutionDiv.classList.add('visible'); // Keeps your old CSS happy
        
        // Only try to update the button if the button was actually passed to the function
        if (btnElement) {
            btnElement.textContent = "Hide Solution";
            btnElement.setAttribute("aria-expanded", "true");
        }
    } else {
        // --- HIDE ---
        solutionDiv.style.display = "none";
        solutionDiv.classList.remove('visible');
        
        // Only try to update the button if the button was actually passed to the function
        if (btnElement) {
            btnElement.textContent = "Show Solution";
            btnElement.setAttribute("aria-expanded", "false");
        }
    }
}

// Function to check numerical answers
function checkNumericalAnswer(id, correctAnswer, toleranceStr) {
    const inputElement = document.getElementById(`input-${id}`);
    const feedbackElement = document.getElementById(`feedback-${id}`);
    const userAnswer = parseFloat(inputElement.value);
    const correct = parseFloat(correctAnswer);
    const tolerance = parseFloat(toleranceStr);

    feedbackElement.classList.remove('feedback-correct', 'feedback-incorrect');
    feedbackElement.textContent = ''; // Clear previous feedback

    if (isNaN(userAnswer)) {
        feedbackElement.textContent = 'Please enter a number.';
        feedbackElement.classList.add('feedback-incorrect');
        return;
    }

    if (Math.abs(userAnswer - correct) <= tolerance) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.classList.add('feedback-correct');
    } else {
        feedbackElement.textContent = 'Incorrect. Try again!';
        feedbackElement.classList.add('feedback-incorrect');
    }
}

// Function to check multiple choice answers
function checkMultipleChoice(id, correctAnswer) {
    const formElement = document.getElementById(`form-${id}`);
    const feedbackElement = document.getElementById(`feedback-${id}`);
    const selectedOption = formElement.querySelector(`input[name="choice-${id}"]:checked`);

    feedbackElement.classList.remove('feedback-correct', 'feedback-incorrect');
    feedbackElement.textContent = ''; // Clear previous feedback

    if (!selectedOption) {
        feedbackElement.textContent = 'Please select an option.';
        feedbackElement.classList.add('feedback-incorrect');
        return;
    }

    if (selectedOption.value === correctAnswer) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.classList.add('feedback-correct');
    } else {
        feedbackElement.textContent = 'Incorrect. Try again!';
        feedbackElement.classList.add('feedback-incorrect');
    }
}

// Function to check Fill in the Blanks Table (Numerical Version)
function checkTableFill(id, answersString, toleranceStr) {
    const container = document.getElementById(`table-container-${id}`);
    const feedbackElement = document.getElementById(`feedback-${id}`);
    const inputs = container.querySelectorAll('input');
    
    // Split answers by '||'
    const answers = answersString.split('||').map(s => parseFloat(s.trim()));
    const tolerance = parseFloat(toleranceStr || 0); // Default to 0 if not provided

    feedbackElement.classList.remove('feedback-correct', 'feedback-incorrect');
    feedbackElement.textContent = '';
    
    let allCorrect = true;

    inputs.forEach((input, index) => {
        if (index >= answers.length) return;

        const userVal = parseFloat(input.value);
        const correctVal = answers[index];

        // Remove previous styling
        input.classList.remove('input-correct', 'input-incorrect');

        // Check if input is a valid number AND within tolerance
        if (!isNaN(userVal) && Math.abs(userVal - correctVal) <= tolerance) {
            input.classList.add('input-correct');
        } else {
            input.classList.add('input-incorrect');
            allCorrect = false;
        }
    });

    if (allCorrect) {
        feedbackElement.textContent = 'Great job! All answers are correct.';
        feedbackElement.classList.add('feedback-correct');
    } else {
        feedbackElement.textContent = 'Some answers are incorrect. Check the red fields.';
        feedbackElement.classList.add('feedback-incorrect');
    }
}






/**
 * T-Distribution Table Interactivity and Accessibility
 * Handles mouseover/mouseout for highlighting and keyboard navigation.
 */
document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('tDistributionTable');
    if (!table) return; // Exit if the table isn't present on the page

    let currentRowIndex = null;
    let currentColIndex = null;

    // Function to clear all highlights from the table
    function clearHighlights() {
        const highlightedCells = table.querySelectorAll('.highlight-row, .highlight-col');
        highlightedCells.forEach(cell => {
            cell.classList.remove('highlight-row', 'highlight-col');
        });
    }

    // Function to apply highlights based on row and column index
    function applyHighlights(rowIndex, colIndex) {
        clearHighlights();

        // Highlight the entire row (if rowIndex is valid and not a header row)
        // Note: For sticky headers, we only highlight data rows.
        if (rowIndex !== null && rowIndex > 0 && rowIndex < table.rows.length) { // Start from 1 to skip thead
            const row = table.rows[rowIndex];
            Array.from(row.cells).forEach(cell => cell.classList.add('highlight-row'));
        }

        // Highlight the entire column (if colIndex is valid)
        if (colIndex !== null && colIndex >= 0 && colIndex < table.rows[0].cells.length) {
            for (let i = 0; i < table.rows.length; i++) {
                const cell = table.rows[i].cells[colIndex];
                if (cell) {
                    cell.classList.add('highlight-col');
                }
            }
        }
        
        // Update current focused/highlighted position
        currentRowIndex = rowIndex;
        currentColIndex = colIndex;
    }

    // Mouseover event listener for the entire table
    table.addEventListener('mouseover', function(event) {
        const target = event.target;
        // Check if the hovered element is a table cell (TD) or a header cell (TH)
        if (target.tagName === 'TD' || target.tagName === 'TH') {
            const cell = target;
            // Get the row index (0-based) of the parent row
            const rowIndex = cell.closest('tr').rowIndex;
            // Get the column index (0-based) of the cell
            const colIndex = cell.cellIndex;

            applyHighlights(rowIndex, colIndex);
        }
    });

    // Mouseout event listener for the entire table to clear highlights when mouse leaves
    table.addEventListener('mouseleave', function() {
        clearHighlights();
        currentRowIndex = null;
        currentColIndex = null;
    });

    // Make all table cells focusable for keyboard navigation
    const cells = table.querySelectorAll('td, th');
    cells.forEach(cell => {
        cell.setAttribute('tabindex', '-1'); // Not in default tab order, but focusable via JS
    });

    // Function to set focus on a specific cell and apply highlights
    function focusAndHighlightCell(rowIdx, colIdx) {
        // Clamp indices to ensure they are within table bounds
        rowIdx = Math.max(0, Math.min(rowIdx, table.rows.length - 1));
        
        // Ensure colIdx is valid for the target row, as rows can have different cell counts (e.g., if a <th> spans multiple columns)
        const targetRow = table.rows[rowIdx];
        if (!targetRow) return;
        colIdx = Math.max(0, Math.min(colIdx, targetRow.cells.length - 1));


        const cellToFocus = targetRow.cells[colIdx];
        if (cellToFocus) {
            cellToFocus.focus(); // Set keyboard focus
            applyHighlights(rowIdx, colIdx); // Apply visual highlighting
            
            // Announce cell content for screen readers
            // Can be enhanced with an aria-live region if more robust announcements are needed.
            // For now, console.log can be a helpful debug for development.
            // console.log(`Focused: df=${table.rows[rowIdx].cells[0].textContent.trim()}, α=${table.rows[0].cells[colIdx].textContent.trim()}, Value: ${cellToFocus.textContent.trim()}`);
        }
    }

    // Keyboard navigation handler for the table
    table.addEventListener('keydown', function(event) {
        const focusedCell = document.activeElement;
        
        // If focus is not currently within the table or on a cell, try to set initial focus on Tab press
        // This makes the table navigable with Tab key initially.
        if (!table.contains(focusedCell) || (focusedCell.tagName !== 'TD' && focusedCell.tagName !== 'TH')) {
            if (event.key === 'Tab' && !event.shiftKey) {
                focusAndHighlightCell(0, 0); // Focus on the first cell (df header)
                event.preventDefault(); // Prevent default browser tab action
            }
            return;
        }

        let newRow = focusedCell.closest('tr').rowIndex;
        let newCol = focusedCell.cellIndex;

        switch (event.key) {
            case 'ArrowUp':
                newRow = Math.max(0, newRow - 1);
                break;
            case 'ArrowDown':
                newRow = Math.min(table.rows.length - 1, newRow + 1);
                break;
            case 'ArrowLeft':
                newCol = Math.max(0, newCol - 1);
                break;
            case 'ArrowRight':
                newCol = Math.min(table.rows[newRow].cells.length - 1, newCol + 1);
                break;
            case 'Home': // Go to first column in current row
                newCol = 0;
                break;
            case 'End': // Go to last column in current row
                newCol = table.rows[newRow].cells.length - 1;
                break;
            case 'PageUp': // Go to first row in current column
                newRow = 0;
                break;
            case 'PageDown': // Go to last row in current column
                newRow = table.rows.length - 1;
                break;
            case 'Escape': // Clear highlights and move focus out of the table
                clearHighlights();
                focusedCell.blur(); // Remove focus from the current cell
                currentRowIndex = null;
                currentColIndex = null;
                return; // Exit function after handling Escape
            default:
                return; // Do nothing for other keys
        }

        event.preventDefault(); // Prevent default browser scrolling with arrow keys
        focusAndHighlightCell(newRow, newCol);
    });

    // Handle initial focus when the table receives focus (e.g., by tabbing into it)
    table.addEventListener('focusin', function(event) {
        if (event.target.tagName === 'TD' || event.target.tagName === 'TH') {
            const rowIdx = event.target.closest('tr').rowIndex;
            const colIdx = event.target.cellIndex;
            applyHighlights(rowIdx, colIdx);
        }
    });

    // Clear highlights when focus leaves the entire table
    table.addEventListener('focusout', function(event) {
        // Check if the new focus target is outside the table
        if (!table.contains(event.relatedTarget)) {
            clearHighlights();
            currentRowIndex = null;
            currentColIndex = null;
        }
    });
});


function checkConfidenceInterval(id, correctLower, correctUpper, tolerance) {

    const lowerInput = document.getElementById(`lower-${id}`);
    const upperInput = document.getElementById(`upper-${id}`);
    const feedback   = document.getElementById(`feedback-${id}`);

    const userLower = parseFloat(lowerInput.value);
    const userUpper = parseFloat(upperInput.value);

    if (isNaN(userLower) || isNaN(userUpper)) {
        feedback.innerHTML = "<p>Please enter values for both bounds.</p>";
        return;
    }

    if (userLower >= userUpper) {
        feedback.innerHTML = "<p>The lower bound must be less than the upper bound.</p>";
        return;
    }

    const lowerCorrect = Math.abs(userLower - correctLower) <= tolerance;
    const upperCorrect = Math.abs(userUpper - correctUpper) <= tolerance;

    if (lowerCorrect && upperCorrect) {
        feedback.innerHTML = "<p><strong>Correct!</strong></p>";
    } else {
        feedback.innerHTML = `
            <p><strong>Not quite.</strong></p>
            <p>Your interval: (${userLower}, ${userUpper})</p>
        `;
    }
};

//const ce = new ComputeEngine.ComputeEngine();

function checkAlgebraicAnswer(id, targetValue, goal) {
    const feedbackElement = document.getElementById(`feedback-${id}`);
    const inputElement = document.getElementById(`input-${id}`);
    const userAnswer = inputElement.getValue('ascii-math');
    if (!inputElement || !feedbackElement) return;

    // 1. Get student input and clean it (remove $ and "x =")
    //let studentRaw = inputElement.value.trim();
    let studentRaw = userAnswer.trim();
    let studentClean = studentRaw.replace(/\$/g, '');
    if (studentClean.includes('=')) {
        studentClean = studentClean.split('=').pop().trim();
    }

    if (!studentClean) {
        feedbackElement.textContent = "Please enter an answer.";
        feedbackElement.className = "feedback-incorrect";
        return;
    }

    try {
        // 1. Standardize both expressions to their simplest mathematical form
        //const userExpr = ce.parse(studentClean).canonical;
        //const targetExpr = ce.parse(targetValue).canonical;
        const userParsed = ce.parse(studentClean);
        const targetParsed = ce.parse(targetValue);

        const userExpr = userParsed.canonical;
        const targetExpr = targetParsed.canonical;



        // 2. THE REARRANGING FIX: Check if the user input is actually valid math
        // If the student types rubbish, userExpr.isValid will be false.
        if (!userExpr.isValid || studentClean === "") {
            feedbackElement.textContent = "Incorrect. Try again!";
            feedbackElement.className = "feedback-incorrect";
            return;
        }

        // 3. THE MAIN CHECK: Are they mathematically equal?
        //const isMathCorrect = userExpr.isEqual(targetExpr);
        //const isMathCorrect = ce.parse(studentClean).simplify().isEqual(ce.parse(targetValue).simplify());
        const isMathCorrect = userParsed.isEqual(targetParsed);

        if (!isMathCorrect) {
            feedbackElement.textContent = "Incorrect. Try again!";
            feedbackElement.className = "feedback-incorrect";
            return;
        }

        // 4. THE INDICES/SIMPLIFY FIX: Compare structural length
        const userJSON = JSON.stringify(userExpr.json);
        const targetJSON = JSON.stringify(targetExpr.json);

        if ((goal === "simplify" || goal === "expand") && userJSON.length > targetJSON.length) {
            feedbackElement.textContent = "Correct value, but please simplify further.";
            feedbackElement.className = "feedback-incorrect";
            return;
        }

        // 5. THE FACTORISE CHECK
        if (goal === "factorise" && !studentRaw.includes('(')) {
            feedbackElement.textContent = "Correct value, but please factorise fully.";
            feedbackElement.className = "feedback-incorrect";
            return;
        }

        feedbackElement.textContent = "Correct!";
        feedbackElement.className = "feedback-correct";

    } catch (err) {
        // Backup: Literal match if the math engine hits an error
        if (studentClean.replace(/\s/g, '') === targetValue.replace(/\s/g, '')) {
            feedbackElement.textContent = "Correct!";
            feedbackElement.className = "feedback-correct";
        } else {
            feedbackElement.textContent = "Incorrect formatting. Try again.";
            feedbackElement.className = "feedback-incorrect";
        }
    }
};





function checkExpandSimplify(id, targetValue) {
    const mfield = document.getElementById(`input-${id}`);
    const feedback = document.getElementById(`feedback-${id}`);
    if (!mfield || !feedback) return;

    const studentRaw = mfield.value.trim();
    if (!studentRaw) {
        feedback.textContent = "Please enter an answer.";
        feedback.style.color = "red";
        return;
    }

    try {
        // Use the same logic that worked in your YML version
        const userParsed = ce.parse(studentRaw);
        const targetParsed = ce.parse(targetValue);

        // 1. Check Mathematical Equality
        if (!userParsed.isEqual(targetParsed)) {
            feedback.textContent = "Incorrect. Try again!";
            feedback.style.color = "red";
            return;
        }

        // 2. Check for Brackets (Expansion check)
        if (studentRaw.includes('(') || studentRaw.includes('\\left')) {
            feedback.textContent = "Correct value, but please expand the brackets.";
            feedback.style.color = "orange";
            return;
        }

        // 3. Structural/Simplification Check (The JSON Fix)
        // This compares the raw length of the math structure.
        // It's the only way to catch x^2 + x + 2x + 2 vs x^2 + 3x + 2.
        const userJSON = JSON.stringify(userParsed.json).length;
        const targetJSON = JSON.stringify(targetParsed.json).length;

        if (userJSON > targetJSON) {
            feedback.textContent = "Correct value, but please simplify further.";
            feedback.style.color = "orange";
            return;
        }

        feedback.textContent = "Correct!";
        feedback.style.color = "green";

    } catch (err) {
        console.error("Math Engine Error:", err);
        // String-based fallback
        if (studentRaw.replace(/\s/g, '') === targetValue.replace(/\s/g, '')) {
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Error processing math. Try typing clearly.";
            feedback.style.color = "red";
        }
    }
};


function checkSolving(id, targetValue) {
    const mfield = document.getElementById(`input-${id}`);
    const feedback = document.getElementById(`feedback-${id}`);
    if (!mfield || !feedback) return;

    const studentRaw = mfield.value.trim();
    if (!studentRaw) {
        feedback.textContent = "Please enter an answer.";
        feedback.style.color = "red";
        return;
    }

    try {
        // 1. Helper to isolate the math value (removes "x =" if present)
        function getMathValue(latex) {
            const clean = latex.replace(/\$/g, '').trim();
            // Split at '=' and take the last part
            if (clean.includes('=')) {
                return clean.split('=').pop().trim();
            }
            return clean;
        }

        const userVal = getMathValue(studentRaw);
        const targetVal = getMathValue(targetValue);

        const userExpr = ce.parse(userVal);
        const targetExpr = ce.parse(targetVal);

        // 2. Validity Check
        if (!userExpr.isValid) {
            feedback.textContent = "Incorrect formatting. Try again!";
            feedback.style.color = "red";
            return;
        }

        // 3. Mathematical Equality
        if (userExpr.isEqual(targetExpr)) {
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Incorrect. Try again!";
            feedback.style.color = "red";
        }

    } catch (err) {
        console.error("Math Engine Error:", err);
        feedback.textContent = "Error processing math. Try typing clearly.";
        feedback.style.color = "red";
    }
};


function checkRearrange(id, targetValue) {
    const mfield = document.getElementById(`input-${id}`);
    const feedback = document.getElementById(`feedback-${id}`);
    
    if (!mfield || !feedback) return;

    const studentRaw = mfield.value.trim();
    
    if (!studentRaw) {
        feedback.textContent = "Please enter an answer.";
        feedback.style.color = "red";
        return;
    }

    try {
        // 1. Isolate the math expression (removes "x =" or "L =" etc.)
        function getExpression(latex) {
            const clean = latex.replace(/\$/g, '').trim();
            if (clean.includes('=')) {
                return clean.split('=').pop().trim();
            }
            return clean;
        }

        const userExprStr = getExpression(studentRaw);
        const targetExprStr = getExpression(targetValue);

        // 2. Parse and compare mathematical equality
        const userParsed = ce.parse(userExprStr);
        const targetParsed = ce.parse(targetExprStr);

        if (userParsed.isEqual(targetParsed)) {
            feedback.textContent = "Correct!";
            feedback.style.color = "green"; // Fixed variable name here
        } else {
            feedback.textContent = "Incorrect. Try again!";
            feedback.style.color = "red";
        }

   } catch (err) {
        console.error("Math Error:", err);
        // Fallback: literal string match (ignoring spaces)
        //if (studentRaw.replace(/\s/g, '') === targetValue.replace(/\s/g, '')) {
          if (userExprStr.replace(/\s/g, '') === targetExprStr.replace(/\s/g, '')) {
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Incorrect. Try again!";
            feedback.style.color = "red";
        }
    }


};

function checkIndices(id, targetValue) {
    const mfield = document.getElementById(`input-${id}`);
    const feedback = document.getElementById(`feedback-${id}`);
    if (!mfield || !feedback) return;

    const studentRaw = mfield.value.trim();
    if (!studentRaw) {
        feedback.textContent = "Please enter an answer.";
        feedback.style.color = "red";
        return;
    }

    try {
        const clean = (s) => s.replace(/[\$\s]/g, '').split('=').pop();
        const userClean = clean(studentRaw);
        const targetClean = clean(targetValue);

        // 1. Parse both WITHOUT automatic simplification to see their true structure
        const userExprRaw = ce.parse(userClean, {canonical: false});
        const targetExprRaw = ce.parse(targetClean, {canonical: false});

        // 2. Check Mathematical Equality (Value check)
        if (!userExprRaw.isEqual(targetExprRaw)) {
            feedback.textContent = "Incorrect. Try again!";
            feedback.style.color = "red";
            return;
        }

        // x^10 * x^5 has 5 parts (x, 10, *, x, 5)
        // x^15 has 2 parts (x, 15)
        // x^5 * y^10 and y^10 * x^5 both have 5 parts.
        // y^5 / t^4 and y^5 * t^-4 both have 5 parts.
        
        function countParts(expr) {
            // This counts how many items are in the underlying JSON structure
            return JSON.stringify(expr.json).split(',').length;
        }

        const userPartCount = countParts(userExprRaw);
        const targetPartCount = countParts(targetExprRaw);

        if (userPartCount <= targetPartCount) {
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Correct value, but please simplify further.";
            feedback.style.color = "orange";
        }

    } catch (err) {
        console.error("Math Error:", err);
        if (studentRaw.replace(/[\$\s]/g, '') === targetValue.replace(/[\$\s]/g, '')) {
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Error processing math.";
            feedback.style.color = "red";
        }
    }
};





// --- 1. FUNCTION FOR FULLY FACTORISE ---
function checkFactoriseOnly(id, targetValue) {
    const mfield = document.getElementById(`input-${id}`);
    const feedback = document.getElementById(`feedback-${id}`);
    if (!mfield || !feedback) return;

    const studentRaw = mfield.value ? mfield.value.trim() : "";
    if (!studentRaw) {
        feedback.textContent = "Please enter an answer.";
        feedback.style.color = "red";
        return;
    }

    try {
        const clean = (s) => s.replace(/[\$\s]/g, '').split('=').pop();
        const studentClean = clean(studentRaw);
        const targetClean = clean(targetValue);

        // Parse BOTH without simplification to ensure structural matching
        const userExpr = ce.parse(studentClean, { canonical: false });
        const targetExpr = ce.parse(targetClean, { canonical: false });

        // 1. Math Value Check
        if (!userExpr.isEqual(targetExpr)) {
            feedback.textContent = "Incorrect. Try again!";
            feedback.style.color = "red";
            return;
        }

        // 2. Bracket Check
        if (!studentRaw.includes('(') && !studentRaw.includes('\\left')) {
            feedback.textContent = "Correct value, but please factorise the expression.";
            feedback.style.color = "orange";
            return;
        }

        // 3. Weight Check (Variables + Numbers + JSON Size)
        function getStats(expr) {
            const jsonStr = JSON.stringify(expr.json);
            const varMatches = jsonStr.match(/"[a-z]"/g) || [];
            const numMatches = jsonStr.match(/\d+/g) || [];
            const numSum = numMatches.reduce((a, b) => a + Math.abs(parseInt(b)), 0);
            return { vars: varMatches.length, sum: numSum, len: jsonStr.length };
        }

        const u = getStats(userExpr);
        const t = getStats(targetExpr);

        if (u.vars > t.vars || u.sum > t.sum || u.len > t.len) {
            feedback.textContent = "Correct value, but please factorise fully.";
            feedback.style.color = "orange";
            return;
        }

        feedback.textContent = "Correct!";
        feedback.style.color = "green";

    } catch (err) {
        if (studentRaw.replace(/[\$\s]/g, '') === targetValue.replace(/[\$\s]/g, '')) {
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Incorrect formatting. Try again.";
            feedback.style.color = "red";
        }
    }
}

// --- 2. FUNCTION FOR SIMPLIFY ---
function checkSimplifyOnly(id, targetValue) {
    const mfield = document.getElementById(`input-${id}`);
    const feedback = document.getElementById(`feedback-${id}`);
    if (!mfield || !feedback) return;

    const studentRaw = mfield.value ? mfield.value.trim() : "";
    if (!studentRaw) {
        feedback.textContent = "Please enter an answer.";
        feedback.style.color = "red";
        return;
    }

    try {
        const clean = (s) => s.replace(/[\$\s]/g, '').split('=').pop();
        const studentClean = clean(studentRaw);
        const targetClean = clean(targetValue);

        // Parse BOTH without simplification
        const userExpr = ce.parse(studentClean, { canonical: false });
        const targetExpr = ce.parse(targetClean, { canonical: false });

        if (!userExpr.isEqual(targetExpr)) {
            feedback.textContent = "Incorrect. Try again!";
            feedback.style.color = "red";
            return;
        }

        // Use the same Weight Check to catch unsimplified fractions/expressions
        function getStats(expr) {
            const jsonStr = JSON.stringify(expr.json);
            const varMatches = jsonStr.match(/"[a-z]"/g) || [];
            const numMatches = jsonStr.match(/\d+/g) || [];
            const numSum = numMatches.reduce((a, b) => a + Math.abs(parseInt(b)), 0);
            return { vars: varMatches.length, sum: numSum, len: jsonStr.length };
        }

        const u = getStats(userExpr);
        const t = getStats(targetExpr);

        // If student's math is "heavier" than the target markdown answer, it's not simplified
        if (u.vars > t.vars || u.sum > t.sum || u.len > t.len) {
            feedback.textContent = "Correct value, but please simplify further.";
            feedback.style.color = "orange";
            return;
        }

        feedback.textContent = "Correct!";
        feedback.style.color = "green";

    } catch (err) {
        if (studentRaw.replace(/[\$\s]/g, '') === targetValue.replace(/[\$\s]/g, '')) {
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Incorrect. Try again!";
            feedback.style.color = "red";
        }
    }
}
