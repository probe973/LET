const ceAnalysis = new ComputeEngine.ComputeEngine();

document.addEventListener('click', (event) => {
    if (!event.target.dataset.idx || !event.target.classList.contains('btn-check-analysis')) return;
    
    const idx = parseInt(event.target.dataset.idx);
    const q = window.revisionQuestionsData[idx];
    const feed = document.getElementById(`feed-${idx}`);
    const sol = document.getElementById(`sol-${idx}`);

    let errors = [];

    q.subQuestions.forEach((sub, subIdx) => {
        const inputEl = document.getElementById(`ans-${idx}-${subIdx}`);
        // Skip checking if the field is hidden
        if (inputEl.parentElement.style.display === "none") return;

        const userVal = inputEl.value;
        
        if (sub.type === "math") {
            const u = ceAnalysis.parse(userVal.split('=').pop().trim(), {canonical: false});
            const t = ceAnalysis.parse(sub.check.toString(), {canonical: false});
            
            if (!u.isEqual(t)) {
                errors.push(`Part ${sub.label} is incorrect.`);
            } else {
                // Simplification Check: Only if not a simple number
                if (JSON.stringify(u.json).length > JSON.stringify(t.json).length) {
                    errors.push(`Part ${sub.label} is correct but needs simplifying.`);
                }
            }
        } else {
            if (userVal !== sub.check) errors.push(`Part ${sub.label} is incorrect.`);
        }
    });

    if (errors.length === 0) {
        feed.textContent = "Correct!";
        feed.style.color = "green";
        sol.style.display = "block";
        event.target.disabled = true;
    } else {
        feed.innerHTML = errors.join("<br>");
        feed.style.color = errors.some(e => e.includes("simplifying")) ? "orange" : "red";
    }
});
