---
layout: nbs4107a
title: Rearranging
---

<section class="revision-container" aria-labelledby="revision-heading">
    <header class="revision-header">
        <h2 id="revision-heading">Algebra Practice: Rearranging Expressions</h2>
        <p><strong>Instructions:</strong> Practice random questions below. Click "Check Answer" to see if you are correct. If you need help, the solution will be revealed after your attempt.</p>
        <p><strong>Note:</strong> For this exercise the marking mechanism will just check for <i>any correct</i> rearrangement.  Please check the <strong>solution</strong> to see if your answer can be simplified further.  Also note that different looking answers can still be fully correct.</p>
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
<script src="{{ '/assets/js/nbs4107a/algebra-rearranging.js' | relative_url }}"></script>
<!-- 2. Load Core Logic -->
<script src="{{ '/assets/js/algebra-revision-core.js' | relative_url }}"></script>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (window.initAlgebraRevisionTest && window.rearrangingGenerators) {
            window.initAlgebraRevisionTest([
                { generator: window.rearrangingGenerators.type1, count: 2 },
                { generator: window.rearrangingGenerators.type2, count: 3 },
                { generator: window.rearrangingGenerators.type3, count: 3 },
                { generator: window.rearrangingGenerators.type4, count: 3 },
                { generator: window.rearrangingGenerators.type5, count: 3 },
                { generator: window.rearrangingGenerators.type6, count: 2 }
            ]);
        } else {
            console.error("Scripts failed to load. Ensure variable names match in both files.");
        }
    });
</script>
