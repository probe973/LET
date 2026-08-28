document.addEventListener('click', (event) => {
    if (!event.target.dataset.idx) return;
    const idx = parseInt(event.target.dataset.idx);
    const q = window.revisionQuestionsData[idx];
    const feed = document.getElementById(`feed-${idx}`);
    const sol = document.getElementById(`sol-${idx}`);

    if (event.target.classList.contains('btn-reveal-graph')) {
        sol.style.display = "block";
        if (window.MathJax) MathJax.typesetPromise([sol]);
    }

    if (event.target.classList.contains('btn-check-graph')) {
        const studentChoice = document.getElementById(`ans-${idx}`).value;

        if (studentChoice === q.check_val) {
            feed.textContent = "Correct!";
            feed.style.color = "green";
            sol.style.display = "block";
            document.getElementById(`ans-${idx}`).disabled = true;
            event.target.disabled = true;
            const revealBtn = event.target.parentElement.querySelector('.btn-reveal-graph');
            if (revealBtn) revealBtn.disabled = true;
        } else {
            feed.textContent = "Incorrect. Try again!";
            feed.style.color = "red";
        }
        if (window.MathJax) MathJax.typesetPromise([sol]);
    }
});
