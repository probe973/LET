// assets/js/scripts-static-algebra.js

function checkExpandSimplifyStatic(id, targetValue) {
    const mfield = document.getElementById(`input-${id}`);
    const feedback = document.getElementById(`feedback-${id}`);
    
    if (!mfield || !feedback) return;

    // Get the student's answer and clean it up
    const studentRaw = mfield.value.trim();
    
    // Accessibility: Reset classes before checking so screen readers announce changes clearly
    feedback.className = ""; 
    
    if (!studentRaw) {
        feedback.textContent = "Please enter an answer.";
        feedback.classList.add("feedback-region", "feedback-incorrect");
        return;
    }

    try {
        // We assume ComputeEngine (ce) is already running from your main scripts.js
        const userParsed = ce.parse(studentRaw);
        const targetParsed = ce.parse(targetValue);

        // 1. Mathematical Equality Check
        // Does their answer mean the same thing mathematically?
        if (!userParsed.isEqual(targetParsed)) {
            feedback.textContent = "Incorrect. Please try again!";
            feedback.classList.add("feedback-region", "feedback-incorrect");
            return;
        }

        // 2. Expansion Check
        // Did they leave brackets in their answer?
        if (studentRaw.includes('(') || studentRaw.includes('\\left')) {
            feedback.textContent = "Your math is correct, but you need to expand the brackets.";
            feedback.classList.add("feedback-region", "feedback-warning");
            return;
        }

        // 3. Simplification Check
        // We check if their math structure is "heavier" (longer) than the correct answer.
        // This catches unsimplified answers like 3x^2 + 10x - 2x + 5.
        const userJSONLength = JSON.stringify(userParsed.json).length;
        const targetJSONLength = JSON.stringify(targetParsed.json).length;

        if (userJSONLength > targetJSONLength) {
            feedback.textContent = "You expanded it correctly, but please simplify your final answer by collecting like terms.";
            feedback.classList.add("feedback-region", "feedback-warning");
            return;
        }

        // 4. Perfect Answer
        feedback.textContent = "Correct!";
        feedback.classList.add("feedback-region", "feedback-correct");

    } catch (err) {
        // Safe fallback: If the math engine gets confused, it checks the text directly
        console.error("Math Engine Error:", err);
        
        const textMatchUser = studentRaw.replace(/\s/g, '');
        const textMatchTarget = targetValue.replace(/\s/g, '');
        
        if (textMatchUser === textMatchTarget) {
            feedback.textContent = "Correct!";
            feedback.classList.add("feedback-region", "feedback-correct");
        } else {
            feedback.textContent = "There was an error understanding that format. Please try typing it clearly.";
            feedback.classList.add("feedback-region", "feedback-incorrect");
        }
    }
}

// scripts-static-algebra.js
// Dedicated script for static algebra workshop pages

// Initialize Cortex ComputeEngine for static checking
if (typeof ce === 'undefined') {
    var ce = new ComputeEngine.ComputeEngine();
}

/**
 * Helper function to calculate structural complexity ("weight")
 * Counts variables, numbers, and JSON structural length.
 */
function getStaticStats(expr) {
    if (!expr) return { vars: 0, sum: 0, len: 0 };
    const jsonStr = JSON.stringify(expr.json || {});
    const varMatches = jsonStr.match(/"[a-z]"/g) || [];
    const numMatches = jsonStr.match(/\d+/g) || [];
    const numSum = numMatches.reduce((a, b) => a + Math.abs(parseInt(b, 10)), 0);
    return { vars: varMatches.length, sum: numSum, len: jsonStr.length };
}

/**
 * Standardises fixed answer inputs into clean math expressions.
 * Converts basic text fractions like (a+b)/c into LaTeX \frac{a+b}{c}
 */
function cleanStaticMathInput(rawString) {
    if (!rawString) return "";
    let clean = rawString.trim().replace(/[\$]/g, '');
    
    // Remove "x =" or "y =" if present
    if (clean.includes('=')) {
        clean = clean.split('=').pop().trim();
    }
    
    // Convert basic linear division (A)/B or A/B into LaTeX fraction format
    if (clean.includes('/') && !clean.includes('\\frac')) {
        const parts = clean.split('/');
        if (parts.length === 2) {
            let num = parts[0].trim().replace(/^\((.*)\)$/, '$1'); // strip outer brackets
            let den = parts[1].trim().replace(/^\((.*)\)$/, '$1');
            clean = `\\frac{${num}}{${den}}`;
        }
    }
    return clean;
}

/**
 * Accessible feedback helper
 * Updates text and sets CSS classes without replacing aria-live regions
 */
function setAccessibleFeedback(element, message, statusClass) {
    element.textContent = message;
    element.className = `feedback-region ${statusClass}`;
}

// --- STATIC CHECKING FUNCTIONS ---

function checkSimplifyOnly(id, targetValue) {
    const mfield = document.getElementById(`input-${id}`);
    const feedback = document.getElementById(`feedback-${id}`);
    if (!mfield || !feedback) return;

    const studentRaw = mfield.value ? mfield.value.trim() : "";
    if (!studentRaw) {
        setAccessibleFeedback(feedback, "Please enter an answer.", "feedback-incorrect");
        return;
    }

    try {
        const studentClean = cleanStaticMathInput(studentRaw);
        const targetClean = cleanStaticMathInput(targetValue);

        const userExpr = ce.parse(studentClean, { canonical: false });
        const targetExpr = ce.parse(targetClean, { canonical: false });

        // 1. Value check
        if (!ce.parse(studentClean).isEqual(ce.parse(targetClean))) {
            setAccessibleFeedback(feedback, "Incorrect. Try again!", "feedback-incorrect");
            return;
        }

        // 2. Structural weight check
        const u = getStaticStats(userExpr);
        const t = getStaticStats(targetExpr);

        if (u.vars > t.vars || u.len > (t.len + 10)) {
            setAccessibleFeedback(feedback, "Correct value, but please simplify further.", "feedback-warning");
            return;
        }

        setAccessibleFeedback(feedback, "Correct!", "feedback-correct");

    } catch (err) {
        setAccessibleFeedback(feedback, "Incorrect format. Try again!", "feedback-incorrect");
    }
}

function checkFactoriseOnly(id, targetValue) {
    const mfield = document.getElementById(`input-${id}`);
    const feedback = document.getElementById(`feedback-${id}`);
    if (!mfield || !feedback) return;

    const studentRaw = mfield.value ? mfield.value.trim() : "";
    if (!studentRaw) {
        setAccessibleFeedback(feedback, "Please enter an answer.", "feedback-incorrect");
        return;
    }

    try {
        const studentClean = cleanStaticMathInput(studentRaw);
        const targetClean = cleanStaticMathInput(targetValue);

        const userExpr = ce.parse(studentClean, { canonical: false });
        const targetExpr = ce.parse(targetClean, { canonical: false });

        // 1. Value check
        if (!ce.parse(studentClean).isEqual(ce.parse(targetClean))) {
            setAccessibleFeedback(feedback, "Incorrect. Try again!", "feedback-incorrect");
            return;
        }

        // 2. Bracket check
        if (!studentRaw.includes('(') && !studentRaw.includes('\\left')) {
            setAccessibleFeedback(feedback, "Correct value, but please factorise the expression.", "feedback-warning");
            return;
        }

        // 3. Weight check
        const u = getStaticStats(userExpr);
        const t = getStaticStats(targetExpr);

        if (u.vars > t.vars || u.sum > t.sum) {
            setAccessibleFeedback(feedback, "Correct value, but please factorise fully.", "feedback-warning");
            return;
        }

        setAccessibleFeedback(feedback, "Correct!", "feedback-correct");

    } catch (err) {
        setAccessibleFeedback(feedback, "Incorrect format. Try again!", "feedback-incorrect");
    }
}
