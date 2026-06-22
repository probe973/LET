// assets/js/scripts.js

/**
 * ACCESSIBLE SOLUTION TOGGLE
 * Updated to be compatible with all question types.
 */
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
}
