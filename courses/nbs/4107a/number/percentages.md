---
layout: nbs4107a
title: Percentages
---

<div class="explanation" markdown="1">

# Percentages

Percentages are measures out of 100, denoted using the % symbol.

65 % means 65 out of 100, or $\frac{65}{100}$

## Percentages of an Amount

To find a percentage of an amount, you divide by 100 (as the percentage is out of 100) and multiply by the amount.

**Example:**

Find 24% of 250

So:

$\frac{24}{100} \times 250 = 60$


## Finding the Percentage

If you want to convert a number out of a another number into a percentage, you can write the out of as a fraction and multiply by 100 (making it out of 100 and so a percentage).

**Example**

Write 55 out of 80 as a percentage.

So:

$\frac{55}{80} \times 100 = 68.75$

55 out of 80 is 68.75%.

## Increasing or Decreasing by a Percentage

To change a number by a percentage, you can either 
 
* find the percentage of the number and then add (if increasing) or subtract (if decreasing) from the original amount
* add or subtract the percentage to 100 and find this percentage.

**Example**

Increase 40 by 12%.

Find 12% of 40:

$\frac{12}{100} \times 40 = 4.8$

Add this on

$40 + 4.8 = 44.8$

**or**

Add the 12% to 100%, to get 112% and find 112% of 40:

$\frac{112}{100} \times 40 = 44.8$


**Example**

Decrease 32 by 18%.

Find 18% of 32:

$\frac{18}{100} \times 32 = 5.76$

$32 - 5.76 = 26.24$

**or**

Subtract 18% from 100% to get 82%

$\frac{82}{100} \times 32 = 26.25$



</div>

---

<section class="revision-container" aria-labelledby="revision-heading">
    <div class="revision-header">
        <h2 id="revision-heading">Questions</h2>
        <p>Practice 10 random questions. Check your answer after each question.</p>
    </div>

    <div id="revision-questions-container">
        <!-- Questions will be injected here as fieldsets for accessibility -->
    </div>

    <div class="revision-footer">
        <button type="button" onclick="window.location.reload()" class="btn">Generate New Set of Questions</button>
    </div>
</section>


<!-- 1. Load the specific question generators for this page -->
<script src="{{  '/assets/js/nbs4107a/percentages.js' | relative_url }}"></script>

<!-- 2. Load the core revision logic -->
<script src="{{ '/assets/js/revision-core-logic.js' | relative_url }}"></script>

<!-- 3. Initialize the revision test with the appropriate generators -->
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Ensure initRevisionTest is available (from revision-core-logic.js)
        // and numeracyQuestionGenerators is available (from numeracy-questions.js)
        if (window.initRevisionTest && window.reviewQuestionGenerators) {
            const desiredQuestionCount = 10;
            window.initRevisionTest(window.reviewQuestionGenerators, desiredQuestionCount); 
        } else {
            console.error("Required revision scripts not loaded correctly.");
        }
    });
</script>
