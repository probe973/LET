---
layout: nbs4107a
title: Collecting Like Terms
---

# Simplifying by Collecting Like Terms

<div class="explanation" markdown="1">

{% include qguides/algebra/collecting_like_terms.html %}

</div>

<section class="revision-container" aria-labelledby="revision-heading">
    <header class="revision-header">
        <h2 id="revision-heading">Algebra Practice: Simplifying Expressions</h2>
        <p><strong>Instructions:</strong> Practice random questions below. Click "Check Answer" to see if you are correct. If you need help, the solution will be revealed after your attempt.</p>
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
<script src="{{ '/assets/js/nbs4107a/algebra-simplifying.js' | relative_url }}"></script>
<!-- 2. Load Core Logic -->
<script src="{{ '/assets/js/algebra-revision-core.js' | relative_url }}"></script>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Double-check: variable name must be exactly what is in algebra-simplifying.js
        if (window.initAlgebraRevisionTest && window.simplifyingGenerators) {
            window.initAlgebraRevisionTest([
                { generator: window.simplifyingGenerators.add_like_terms, count: 3 },
                { generator: window.simplifyingGenerators.collect_like_terms, count: 7 }
            ]);
        } else {
            console.error("Scripts failed to load. Ensure variable names match in both files.");
        }
    });
</script>
