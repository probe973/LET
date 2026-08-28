---
layout: nbs4107a
title: Expanding Brackets
---

{% include qguides/algebra/expanding_brackets.html %}

<section class="revision-container" aria-labelledby="revision-heading">
    <header class="revision-header">
        <h2 id="revision-heading">Algebra Practice: Expanding and Simplifying Expressions</h2>
        <p><strong>Instructions:</strong> Practice random questions below. Click "Check Answer" to see if you are correct. If you need help, the solution will be revealed after your attempt.</p>
        <p>Write all of the expanded answers in their simplest form (e.g. $10x + 3x$ write as $13x$; $4x \times 5x$ write as $20x^2$)</p>
    </header>

    <!-- The JS will inject questions here -->
    <div id="revision-questions-container"></div>

    <footer class="revision-footer" style="margin-top: 20px;">
        <button type="button" onclick="window.location.reload()" class="btn">Generate New Set of Questions</button>
    </footer>
</section>

<!-- Required Libraries -->
<script src="https://unpkg.com/mathlive"></script>
<script src="https://unpkg.com/@cortex-js/compute-engine"></script>

<!-- 1. Load Generators -->
<script src="{{ '/assets/js/nbs4107a/algebra-expand-brackets.js' | relative_url }}"></script>
<!-- 2. Load Core Logic -->
<script src="{{ '/assets/js/algebra-revision-core.js' | relative_url }}"></script>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (window.initAlgebraRevisionTest && window.expandingGenerators) {
            window.initAlgebraRevisionTest([
                { generator: window.expandingGenerators.one_pair_one_var, count: 1 },
                { generator: window.expandingGenerators.one_pair_two_var_inside, count: 1 },
                { generator: window.expandingGenerators.one_pair_two_var_inside_outside, count: 1 },
                { generator: window.expandingGenerators.one_pair_two_var_inside_outside_share, count: 1 },
                { generator: window.expandingGenerators.two_pair_add, count: 2 },
                { generator: window.expandingGenerators.two_pair_mult_1var_c1, count: 2 },
                { generator: window.expandingGenerators.two_pair_mult_1var, count: 2 }
            ]);
        } else {
            console.error("Scripts failed to load. Ensure variable names match in both files.");
        }
    });
</script>
