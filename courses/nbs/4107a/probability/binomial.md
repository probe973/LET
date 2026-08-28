---
layout: nbs4107a
title: Binomial Distributions
---

<section class="revision-container" aria-labelledby="revision-heading">
    <header class="revision-header">
        <h2 id="revision-heading">Statistics Practice: Probabilities from Contingency Tables</h2>
        <p><strong>Instructions:</strong> Practice random questions below. Click "Check Answer" to see if you are correct. If you need help, the solution will be revealed after your attempt. Enter fractions in their simplest form.</p>
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

<!-- Load the Solving generators and the Core Logic -->
<script src="{{ '/assets/js/nbs4107a/binomial.js' | relative_url }}"></script>
<script src="{{ '/assets/js/number-revision-core.js' | relative_url }}"></script>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Changed initAlgebraRevisionTest to initNumberRevisionTest
        if (window.initNumberRevisionTest && window.binomialGenerators) {
            window.initNumberRevisionTest([
                { generator: window.binomialGenerators.equals, count: 3 },
                { generator: window.binomialGenerators.lessthan, count: 1 }
            ]);
        }
    });
</script>
