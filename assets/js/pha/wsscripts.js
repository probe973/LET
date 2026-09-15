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
