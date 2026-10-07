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
        
        const userSimplified = userParsed.simplify();
        const targetSimplified = targetParsed.simplify();

        // 1. Check Mathematical Equality
        //if (!userParsed.isEqual(targetParsed)) {
        if (!userSimplified.isEqual(targetSimplified)) {
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


// Helper function for simplification check
function getGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        a %= b;
        [a, b] = [b, a];
    }
    return a;
}

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
        function getMathValue(latex) {
            const clean = latex.replace(/\$/g, '').trim();
            if (clean.includes('=')) {
                return clean.split('=').pop().trim();
            }
            return clean;
        }

        const userVal = getMathValue(studentRaw);
        const targetVal = getMathValue(targetValue);

        const userExpr = ce.parse(userVal);
        const targetExpr = ce.parse(targetVal);

        if (!userExpr.isValid) {
            feedback.textContent = "Incorrect formatting. Try again!";
            feedback.style.color = "red";
            return;
        }

        // 1. Check mathematical equality
        if (userExpr.isEqual(targetExpr)) {
            
            // 2. Simplification Check: Only triggers if the student used a fraction
            let needsSimplify = false;
            if (studentRaw.includes('/') || studentRaw.includes('frac')) {
                const digits = studentRaw.match(/\d+/g); // Find the literal digits typed
                if (digits && digits.length >= 2) {
                    const n = parseInt(digits[digits.length - 2]);
                    const d = parseInt(digits[digits.length - 1]);
                    if (getGCD(n, d) > 1) needsSimplify = true;
                }
            }

            if (needsSimplify) {
                feedback.textContent = "Correct value, but please simplify the fraction fully.";
                //feedback.style.color = "orange";
                feedback.className = "feedback-region feedback-warning";
            } else {
                feedback.textContent = "Correct!";
                //feedback.style.color = "green";
                feedback.className = "feedback-region feedback-correct";
            }
        } else {
            feedback.textContent = "Incorrect. Try again!";
            //feedback.style.color = "red";
            feedback.className = "feedback-region feedback-incorrect";
        }

    } catch (err) {
        console.error("Math Engine Error:", err);
        feedback.textContent = "Error processing math. Try typing clearly.";
        feedback.style.color = "red";
    }
}

function checkRearrange(id, targetValue) {
    const mfield = document.getElementById(`input-${id}`);
    const feedback = document.getElementById(`feedback-${id}`);
    
    if (!mfield || !feedback) return;

    const studentRaw = mfield.value.trim();
    
    if (!studentRaw) {
        feedback.textContent = "Please enter an answer.";
        feedback.className = "feedback-region feedback-incorrect";
        return;
    }

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

    let isCorrect = false;

    try {
        const userExpr = ce.parse(userExprStr);
        const targetExpr = ce.parse(targetExprStr);

        // Method A: Direct structural equality check
        if (userExpr.isEqual(targetExpr)) {
            isCorrect = true;
        } else {
            // Method B: Numerical spot-checking (handles factorisations/expansions safely)
            // Extract all free variables present in the target expression
            const variables = targetExpr.freeVariables;
            
            if (variables.length > 0) {
                let matches = true;
                // Test across 3 different sets of random pseudo-values
                for (let i = 0; i < 3; i++) {
                    const subs = {};
                    variables.forEach(v => {
                        // Generate a random test value between 2 and 6 (avoiding 0 to prevent division by zero errors)
                        subs[v] = Math.floor(Math.random() * 5) + 2;
                    });

                    // Evaluate both expressions numerically with these substitutions
                    const evaluatedUser = userExpr.subs(subs).N().valueOf();
                    const evaluatedTarget = targetExpr.subs(subs).N().valueOf();

                    // Check if numbers match closely (allowing a tiny tolerance for floating-point precision)
                    if (typeof evaluatedUser !== 'number' || typeof evaluatedTarget !== 'number' || 
                        Math.abs(evaluatedUser - evaluatedTarget) > 1e-7) {
                        matches = false;
                        break;
                    }
                }
                if (matches) {
                    isCorrect = true;
                }
            }
        }
    } catch (err) {
        console.warn("Compute Engine evaluation note:", err);
    }

    // Fallback: literal string match (ignoring spaces)
    if (!isCorrect) {
        const cleanUser = userExprStr.replace(/\s/g, '');
        const cleanTarget = targetExprStr.replace(/\s/g, '');
        if (cleanUser === cleanTarget) {
            isCorrect = true;
        }
    }

    // Set feedback
    if (isCorrect) {
        feedback.textContent = "Correct!";
        feedback.className = "feedback-region feedback-correct";
    } else {
        feedback.textContent = "Incorrect. Try again!";
        feedback.className = "feedback-region feedback-incorrect";
    }
};

function checkAlternativeRearrange(id, targetValue) {
    const mfield = document.getElementById(`input-${id}`);
    const feedback = document.getElementById(`feedback-${id}`);
    
    if (!mfield || !feedback) return;

    const studentRaw = mfield.value.trim();
    
    if (!studentRaw) {
        feedback.textContent = "Please enter an answer.";
        feedback.className = "feedback-region feedback-incorrect";
        return;
    }

    function getExpression(latex) {
        const clean = latex.replace(/\$/g, '').trim();
        if (clean.includes('=')) {
            return clean.split('=').pop().trim();
        }
        return clean;
    }

    const userExprStr = getExpression(studentRaw);
    const targetExprStr = getExpression(targetValue);

    let isCorrect = false;

    try {
        // Parse both strings directly through the compute engine
        const userExpr = ce.parse(userExprStr);
        const targetExpr = ce.parse(targetExprStr);

        // Use CortexJS's native mathematical equality check
        if (userExpr.isEqual(targetExpr)) {
            isCorrect = true;
        } else {
            // Fallback: evaluate the difference or check canonical string equivalence
            const diff = ce.box(["Subtract", userExpr, targetExpr]).simplify();
            if (diff.numericValue === 0 || diff.toString() === "0") {
                isCorrect = true;
            }
        }
    } catch (err) {
        console.error("Compute Engine Error:", err);
    }

    if (isCorrect) {
        feedback.textContent = "Correct!";
        feedback.className = "feedback-region feedback-correct";
    } else {
        feedback.textContent = "Incorrect. Try again!";
        feedback.className = "feedback-region feedback-incorrect";
    }
}

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
        
        const userExpr = ce.parse(userClean).simplify();
        const targetExpr = ce.parse(targetClean).simplify();
        
        console.log(userExpr.isEqual(targetExpr));
        console.log(userExpr.json);
        console.log(targetExpr.json);

        // 2. Check Mathematical Equality (Value check)
        //if (!userExprRaw.isEqual(targetExprRaw)) {
        if (!userExpr.isEqual(targetExpr)) {
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

// --- Graph choice ---
function createLineSVG(xInt, yInt, label, xLabel, yLabel) {
    const size = 180;
    const center = size / 2;
    
    // THE FIX: Calculate scale based on the largest intercept to keep points visible
    const maxVal = Math.max(Math.abs(xInt), Math.abs(yInt), 5); 
    const scale = (size / 2.5) / maxVal; 

    const svgX1 = center + (-10 * scale);
    const svgY1 = center - (yInt * (1 - (-10) / xInt) * scale);
    const svgX2 = center + (10 * scale);
    const svgY2 = center - (yInt * (1 - 10 / xInt) * scale);

    const intX = center + (xInt * scale);
    const intY = center - (yInt * scale);

    const displayX = xLabel || xInt;
    const displayY = yLabel || yInt;

    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="Graph ${label}: line crossing y at (0, ${displayY}) and x at (${displayX}, 0)" style="background: white; border: 1px solid #ddd; display: block;">
        <line x1="0" y1="${center}" x2="${size}" y2="${center}" stroke="#ccc" stroke-width="1" />
        <line x1="${center}" y1="0" x2="${center}" y2="${size}" stroke="#ccc" stroke-width="1" />
        <line x1="0" y1="${center}" x2="${size}" y2="${center}" stroke="black" stroke-width="2" />
        <line x1="${center}" y1="0" x2="${center}" y2="${size}" stroke="black" stroke-width="2" />
        <line x1="${svgX1}" y1="${svgY1}" x2="${svgX2}" y2="${svgY2}" stroke="#004a75" stroke-width="3" />
        <circle cx="${intX}" cy="${center}" r="4" fill="red" />
        <circle cx="${center}" cy="${intY}" r="4" fill="red" />
        <text x="${intX}" y="${center + 15}" font-size="10" text-anchor="middle" font-family="Arial">(${displayX}, 0)</text>
        <text x="${center + 5}" y="${intY + 5}" font-size="10" font-family="Arial">(0, ${displayY})</text>
        <text x="10" y="20" font-weight="bold" font-family="Arial" font-size="16">${label}</text>
    </svg>`;
}

function checkGraphChoice(id, correctAnswer) {
    const input = document.getElementById(`input-${id}`);
    const feedback = document.getElementById(`feedback-${id}`);
    const solDiv = document.getElementById(`solution-${id}`);

    if (!input || !feedback) return;

    if (input.value === correctAnswer) {
        feedback.textContent = "Correct!";
        feedback.className = "feedback-region feedback-correct";
        //feedback.style.color = "green";
        // Reveal solution on success
        if (solDiv) solDiv.style.display = "block";
        input.disabled = true;
    } else if (input.value === "") {
        feedback.textContent = "Please select a graph.";
        feedback.className = "feedback-region feedback-incorrect";
        //feedback.style.color = "red";
    } else {
        // Allows another attempt
        feedback.textContent = "Incorrect. Try again!";
        feedback.className = "feedback-region feedback-incorrect";
        //feedback.style.color = "red";
    }
}

// --- Multi ---

function getGCD(a, b) {
    a = Math.abs(a); b = Math.abs(b);
    while (b) { a %= b; [a, b] = [b, a]; }
    return a;
}

function checkLineAnalysis(id, targetsStr, typesStr, labelsStr) {
    const feed = document.getElementById(`feedback-${id}`);
    const solDiv = document.getElementById(`solution-${id}`);
    const extraDiv = document.getElementById(`extra-${id}`);
    const isExtraVisible = extraDiv && (extraDiv.style.display !== "none" && extraDiv.style.display !== "");

    const targets = targetsStr.split('||');
    const types = typesStr.split('||');
    const labels = labelsStr.split('||');
    const keys = ['a', 'b', 'c', 'd', 'e', 'f'];

    let errors = [];

    // Helper to clean raw math strings (removes $, equation LHS like 'y=')
    function getCleanMath(raw) {
        if (!raw) return "";
        let clean = raw.trim().replace(/\$/g, '');
        if (clean.includes('=')) {
            clean = clean.split('=').pop().trim();
        }
        return clean;
    }

    keys.forEach((key, i) => {
        const inputEl = document.getElementById(`ans-${id}-${key}`);
        if (!inputEl) return;
        
        // Skip hidden sub-questions if part b is hidden
        if (['c', 'd', 'e', 'f'].includes(key) && !isExtraVisible) return;

        // Extract value safely from <math-field> or <select>
        let studentRaw = "";
        if (typeof inputEl.getValue === 'function') {
            studentRaw = inputEl.getValue('latex') || inputEl.value || "";
        } else {
            studentRaw = inputEl.value || "";
        }
        studentRaw = studentRaw.trim();

        const targetRaw = targets[i] ? targets[i].trim() : "";
        const type = types[i];
        const label = labels[i];

        if (studentRaw === "") {
            errors.push(`<strong>${label}</strong> is empty.`);
            return;
        }

        if (type === 'math') {
            const sClean = getCleanMath(studentRaw);
            const tClean = getCleanMath(targetRaw);

            try {
                const uValue = ce.parse(sClean);
                const tValue = ce.parse(tClean);

                if (!uValue.isValid) {
                    errors.push(`<strong>${label}</strong> has invalid formatting.`);
                    return;
                }

                // 1. Core Mathematical Equality
                if (!uValue.isEqual(tValue)) {
                    errors.push(`<strong>${label}</strong> is incorrect.`);
                } else {
                    let needsSimp = false;

                    // 2. Numerical Fraction GCD Check (handles -8/6, 8/6, \frac{-8}{6})
                    const fracMatch = studentRaw.match(/(-?\d+)\s*[\/]\s*(-?\d+)/) || 
                                      studentRaw.match(/\\frac\{\s*(-?\d+)\s*\}\{\s*(-?\d+)\s*\}/);

                    if (fracMatch) {
                        const num = Math.abs(parseInt(fracMatch[1], 10));
                        const den = Math.abs(parseInt(fracMatch[2], 10));
                        if (den !== 0 && getGCD(num, den) > 1) {
                            needsSimp = true;
                        }
                    }

                    // 3. Structural Algebra Check (catches x + 2x + 4 while ignoring sqrt/frac structures)
                    if (!needsSimp) {
                        const uRaw = ce.parse(sClean, { canonical: false });
                        const tCanonical = tValue.canonical;

                        const uJson = JSON.stringify(uRaw.json);
                        const tJson = JSON.stringify(tCanonical.json);

                        const uVars = (uJson.match(/"[a-zA-Z]"/g) || []).length;
                        const tVars = (tJson.match(/"[a-zA-Z]"/g) || []).length;

                        if (uVars > tVars) {
                            needsSimp = true;
                        }
                    }

                    if (needsSimp) {
                        errors.push(`<strong>${label}</strong> is correct, but needs simplifying.`);
                    }
                }
            } catch (err) {
                console.error(`Math evaluation error on part ${label}:`, err);
                if (sClean.replace(/\s/g, '') !== tClean.replace(/\s/g, '')) {
                    errors.push(`<strong>${label}</strong> is incorrect.`);
                }
            }
        } else {
            // Choice/select checks
            if (studentRaw !== targetRaw) {
                errors.push(`<strong>${label}</strong> is incorrect.`);
            }
        }
    });

    if (errors.length === 0) {
        feed.textContent = "Correct!";
        feed.style.color = "green";
        if (solDiv) solDiv.style.display = "block";
        
        // Lock inputs on completion for accessibility
        keys.forEach(k => {
            const el = document.getElementById(`ans-${id}-${k}`);
            if (el) el.disabled = true;
        });
    } else {
        feed.innerHTML = errors.join("<br>");
        const isFatal = errors.some(e => e.includes("incorrect") || e.includes("empty") || e.includes("formatting"));
        feed.style.color = isFatal ? "red" : "orange";
    }

    if (window.MathJax) {
        MathJax.typesetPromise([feed]);
    }
}



/**
 * Checks fixed-answer simultaneous equations
 */
function checkSimultaneous(id, targetVal1, targetVal2) {
    const m1 = document.getElementById(`input-${id}-1`);
    const m2 = document.getElementById(`input-${id}-2`);
    const feedback = document.getElementById(`feedback-${id}`);
    const solDiv = document.getElementById(`solution-${id}`);

    if (!m1 || !m2 || !feedback) return;

    const raw1 = m1.value.trim();
    const raw2 = m2.value.trim();

    if (!raw1 || !raw2) {
        feedback.textContent = "Please provide answers for both variables.";
        feedback.className = "feedback-region feedback-incorrect";
        feedback.style.color = "red";
        return;
    }

    // Isolate mathematical values if the user types equations like "x = 5"
    function cleanMathInput(str) {
        let clean = str.replace(/\$/g, '').trim();
        if (clean.includes('=')) {
            clean = clean.split('=').pop().trim();
        }
        return clean;
    }

    const cleanUser1 = cleanMathInput(raw1);
    const cleanUser2 = cleanMathInput(raw2);
    const cleanTarget1 = cleanMathInput(targetVal1);
    const cleanTarget2 = cleanMathInput(targetVal2);

    try {
        const uExpr1 = ce.parse(cleanUser1);
        const uExpr2 = ce.parse(cleanUser2);
        const tExpr1 = ce.parse(cleanTarget1);
        const tExpr2 = ce.parse(cleanTarget2);

        if (!uExpr1.isValid || !uExpr2.isValid) {
            feedback.textContent = "Incorrect formatting. Try typing clearly!";
            feedback.className = "feedback-region feedback-incorrect";
            feedback.style.color = "red";
            return;
        }

        const is1Correct = uExpr1.isEqual(tExpr1);
        const is2Correct = uExpr2.isEqual(tExpr2);

        if (!is1Correct || !is2Correct) {
            feedback.textContent = "Incorrect. Try again!";
            feedback.className = "feedback-region feedback-incorrect";
            feedback.style.color = "red";
            return;
        }

        // Check if fractions need simplification
        let needsSimplify = false;
        [raw1, raw2].forEach(v => {
            if (v.includes('/') || v.includes('frac')) {
                const digits = v.match(/\d+/g);
                if (digits && digits.length >= 2) {
                    const n = parseInt(digits[digits.length - 2], 10);
                    const d = parseInt(digits[digits.length - 1], 10);
                    if (d !== 0 && getGCD(n, d) > 1) needsSimplify = true;
                }
            }
        });

        if (needsSimplify) {
            feedback.textContent = "Correct values, but please simplify your fractions fully.";
            feedback.className = "feedback-region feedback-warning";
            feedback.style.color = "orange";
        } else {
            feedback.textContent = "Correct!";
            feedback.className = "feedback-region feedback-correct";
            feedback.style.color = "green";
            
            // Disable inputs on complete success
            m1.disabled = true;
            m2.disabled = true;
            
            // Optionally display solution upon correct answer
            if (solDiv) solDiv.style.display = "block";
        }

    } catch (err) {
        console.error("Simultaneous check error:", err);
        feedback.textContent = "Error evaluating expression. Please re-check your formatting.";
        feedback.className = "feedback-region feedback-incorrect";
        feedback.style.color = "red";
    }

    if (window.MathJax) {
        MathJax.typesetPromise([feedback]);
    }
}


/**
 * Renders a dual-line linear graph SVG with customizable axis titles,
 * optional axis intercept markers, and optional manually supplied intersection points.
 */
function createDualLineSVG(l1, l2, showIntersection, ixVal, iyVal, ixLabel, iyLabel, xTitle, yTitle) {
    const size = 260;
    const center = size / 2;

    const axisXTitle = xTitle || "x";
    const axisYTitle = yTitle || "y";

    // Determine viewport scale to keep intercepts visible
    const points = [
        Math.abs(l1.xInt), Math.abs(l1.yInt), 
        Math.abs(l2.xInt), Math.abs(l2.yInt), 5
    ];

    if (showIntersection === "yes" && ixVal !== "" && iyVal !== "") {
        points.push(Math.abs(parseFloat(ixVal)), Math.abs(parseFloat(iyVal)));
    }

    const maxVal = Math.max(...points);
    const scale = (size / 2.6) / maxVal;

    // Helper to calculate SVG line end coordinates
    function computePoints(xInt, yInt) {
        const svgX1 = center + (-15 * scale);
        const svgY1 = center - (yInt * (1 - (-15) / xInt) * scale);
        const svgX2 = center + (15 * scale);
        const svgY2 = center - (yInt * (1 - 15 / xInt) * scale);
        const cx = center + (xInt * scale);
        const cy = center - (yInt * scale);
        return { svgX1, svgY1, svgX2, svgY2, cx, cy };
    }

    const line1Data = computePoints(l1.xInt, l1.yInt);
    const line2Data = computePoints(l2.xInt, l2.yInt);

    // Optional intersection rendering
    let intersectionMarkup = "";
    let ariaIntersectionText = "";

    if (showIntersection === "yes" && ixVal !== "" && iyVal !== "") {
        const rawIx = parseFloat(ixVal);
        const rawIy = parseFloat(iyVal);
        const svgIx = center + (rawIx * scale);
        const svgIy = center - (rawIy * scale);

        const labelX = ixLabel || ixVal;
        const labelY = iyLabel || iyVal;

        ariaIntersectionText = ` Intersecting at (${labelX}, ${labelY}).`;

        intersectionMarkup = `
            <circle cx="${svgIx}" cy="${svgIy}" r="5" fill="#d9534f" stroke="white" stroke-width="1.5" />
            <text x="${svgIx + 8}" y="${svgIy - 8}" font-size="11" font-weight="bold" fill="#d9534f" font-family="sans-serif">
                (${labelX}, ${labelY})
            </text>
        `;
    }

    const ariaDescription = `Graph depicting two lines on axes ${axisXTitle} and ${axisYTitle}. ${l1.name} crosses ${axisYTitle} at (0, ${l1.yLabel}) and ${axisXTitle} at (${l1.xLabel}, 0). ${l2.name} crosses ${axisYTitle} at (0, ${l2.yLabel}) and ${axisXTitle} at (${l2.xLabel}, 0).${ariaIntersectionText}`;

    return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="${ariaDescription}" style="background: white; border: 1px solid #ccc; border-radius: 4px; display: block;">
        <!-- Axes -->
        <line x1="0" y1="${center}" x2="${size}" y2="${center}" stroke="#888" stroke-width="1.5" />
        <line x1="${center}" y1="0" x2="${center}" y2="${size}" stroke="#888" stroke-width="1.5" />

        <!-- Axis Labels -->
        <text x="${size - 14}" y="${center - 6}" font-size="11" font-weight="bold" font-style="italic" font-family="sans-serif">${axisXTitle}</text>
        <text x="${center + 6}" y="14" font-size="11" font-weight="bold" font-style="italic" font-family="sans-serif">${axisYTitle}</text>

        <!-- Line 1 (Solid Blue) -->
        <line x1="${line1Data.svgX1}" y1="${line1Data.svgY1}" x2="${line1Data.svgX2}" y2="${line1Data.svgY2}" stroke="#004a75" stroke-width="2.5" />
        <circle cx="${line1Data.cx}" cy="${center}" r="3.5" fill="#004a75" />
        <circle cx="${center}" cy="${line1Data.cy}" r="3.5" fill="#004a75" />
        <text x="${line1Data.cx}" y="${center + 14}" font-size="10" text-anchor="middle" font-family="sans-serif">(${l1.xLabel}, 0)</text>
        <text x="${center + 5}" y="${line1Data.cy + 4}" font-size="10" font-family="sans-serif">(0, ${l1.yLabel})</text>

        <!-- Line 2 (Dashed Green) -->
        <line x1="${line2Data.svgX1}" y1="${line2Data.svgY1}" x2="${line2Data.svgX2}" y2="${line2Data.svgY2}" stroke="#2e7d32" stroke-width="2.5" stroke-dasharray="4,2" />
        <circle cx="${line2Data.cx}" cy="${center}" r="3.5" fill="#2e7d32" />
        <circle cx="${center}" cy="${line2Data.cy}" r="3.5" fill="#2e7d32" />
        <text x="${line2Data.cx}" y="${center - 6}" font-size="10" text-anchor="middle" font-family="sans-serif">(${l2.xLabel}, 0)</text>
        <text x="${center - 5}" y="${line2Data.cy + 4}" font-size="10" text-anchor="end" font-family="sans-serif">(0, ${l2.yLabel})</text>

        <!-- Optional Intersection Point -->
        ${intersectionMarkup}
    </svg>
    `;
}

//Prob
// Checks a full equation, ignoring case and spaces, but keeping the equals sign
function checkEquationCaseInsensitive(id, targetValue) {
    const mfield = document.getElementById(`input-${id}`);
    const feedback = document.getElementById(`feedback-${id}`);
    if (!mfield || !feedback) return;

    const studentRaw = mfield.value ? mfield.value.trim() : "";
    if (!studentRaw) {
        feedback.textContent = "Please enter an answer.";
        feedback.className = "feedback-region feedback-incorrect";
        return;
    }

    try {
        // Clean spaces and dollar signs, and make everything lowercase.
        // NOTICE: We are keeping the equals sign this time!
        const studentClean = studentRaw.replace(/[\$\s]/g, '').toLowerCase();
        const targetClean = targetValue.replace(/[\$\s]/g, '').toLowerCase();

        // Parse both using the math engine
        const userExpr = ce.parse(studentClean, { canonical: false });
        const targetExpr = ce.parse(targetClean, { canonical: false });

        // Check if the equations match
        if (userExpr.isEqual(targetExpr)) {
            feedback.textContent = "Correct!";
            feedback.className = "feedback-region feedback-correct";
        } else {
            feedback.textContent = "Incorrect. Try again!";
            feedback.className = "feedback-region feedback-incorrect";
        }

    } catch (err) {
        // Fallback plain text comparison (ignoring spaces and case)
        const fallbackStudent = studentRaw.replace(/[\$\s]/g, '').toLowerCase();
        const fallbackTarget = targetValue.replace(/[\$\s]/g, '').toLowerCase();

        if (fallbackStudent === fallbackTarget) {
            feedback.textContent = "Correct!";
            feedback.className = "feedback-region feedback-correct";
        } else {
            feedback.textContent = "Incorrect formatting. Try again.";
            feedback.className = "feedback-region feedback-incorrect";
        }
    }
}

/**
 * Checks if a student's answer is correct AND written in proper standard form.
 * Example: For 42000, correct standard form is 4.2 \times 10^4.
 * If they type 42000 or 42 \times 10^3, it asks them to adjust the format.
 */

function checkStandardForm(id, targetValue) {
    const mfield = document.getElementById(`input-${id}`);
    const feedback = document.getElementById(`feedback-${id}`);
    const solDiv = document.getElementById(`solution-${id}`);

    if (!mfield || !feedback) return;

    const studentRaw = mfield.value.trim();
    
    if (!studentRaw) {
        feedback.textContent = "Please enter an answer.";
        feedback.className = "feedback-region feedback-incorrect";
        return;
    }

    try {
        // Clean up symbols for the math engine
        const clean = (s) => s.replace(/\$/g, '').trim();
        const userClean = clean(studentRaw);
        const targetClean = clean(targetValue);

        const userExpr = ce.parse(userClean);
        const targetExpr = ce.parse(targetClean);

        // 1. Check if the mathematical value is correct
        if (!userExpr.isValid || !userExpr.isEqual(targetExpr)) {
            feedback.textContent = "Incorrect. Try again!";
            feedback.className = "feedback-region feedback-incorrect";
            return;
        }

        // 2. Check if it is in standard form (must contain a power of 10)
        // Flexible check using regex to allow optional spaces around the power caret (e.g., 10 ^ 4)
        const isUsingPowersOfTen = /10\s*\^/.test(studentRaw) || studentRaw.includes('10^{');

        if (!isUsingPowersOfTen) {
            feedback.textContent = "Correct value, but please write your answer in standard form.";
            feedback.className = "feedback-region feedback-warning";
            return;
        }

        // 3. Extract the coefficient (the number before \times or \cdot 10) to ensure 1 <= A < 10
        let coefficientVal = null;
        
        // Support both \times and \cdot (common in British notation)
        let parts = [];
        if (studentRaw.includes('\\times')) {
            parts = studentRaw.split('\\times');
        } else if (studentRaw.includes('\\cdot')) {
            parts = studentRaw.split('\\cdot');
        }

        if (parts.length > 0) {
            const coeffExpr = ce.parse(parts[0].replace(/\$/g, '').trim());
            if (coeffExpr.isValid) {
                coefficientVal = coeffExpr.N().valueOf(); // Numerical value
            }
        }

        // Check if coefficient is within the valid range [1, 10)
        if (coefficientVal !== null && (Math.abs(coefficientVal) < 1 || Math.abs(coefficientVal) >= 10)) {
            feedback.textContent = "Correct value, but ensure the number is between 1 and 10.";
            feedback.className = "feedback-region feedback-warning";
            return;
        }

        // If everything is correct and properly formatted
        feedback.textContent = "Correct!";
        feedback.className = "feedback-region feedback-correct";
        
        if (solDiv) solDiv.style.display = "block";
        mfield.disabled = true;

    } catch (err) {
        console.error("Standard Form Check Error:", err);
        feedback.textContent = "Error processing math. Try typing clearly.";
        feedback.className = "feedback-region feedback-incorrect";
    }
}
