---
layout: nbs4107a
title: Ratio
---

# Ratio

<div class="explanation" markdown="1">

A ratio compares quantities of two or more objects.  For example, if a workforce contains 40 junior, 50 senior, and 15 executive employees, you can say that the ratio of junior to senior to executives is 40:50:15.

## Simplifying Ratios

In the above example you had the ratio 40:50:15.  Since 5 goes into each of these quantities, you can divide each quantity by 5 and keep the ratio equivalent:

40:50:15 is equivalent to 8:10:3

## Calculating With Ratios

Knowing a ratio and knowing one of the quantites allows you to work out the other quantites.

**Example**

Given there are 9 right-handers to every 2 left-handers in a room, and given that there are 8 left-handers, how many right-handers are there?

We know the ratio of right:left is 9:2.

We know the number of left handers is 8, so this ratio is equivalent to the ratio ? : 8.

Dividing the 8 by 2 (since you know the 2 is equivalent to the 8 in the ratio), gives 4.  Therefore every part in the ratio is worth 4 people.

The right-handers make up 9 parts, so there are 9 × 4 = 36 right-handers.

**Example**

£36000 is to be split between 3 people in the ratio of 2:1:3.  How much is the largest share?

Here you know the total is £36000.  

You can also work out the total number of the shares: 2 + 1 + 3 = 6.

Therefore £36000 is equivalent to 6 shares, so each share is worth £36000 ÷ 6 = £6000.

The largest number of shares is 3, so 3 shares are 3 × £6000 = £18000

</div>

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
<script src="{{  '/assets/js/nbs4107a/ratio.js' | relative_url }}"></script>

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
