---
layout: nbs4107a
title: Reverse Percentages
---

<div class="explanation" markdown="1">

# Reverse Percentages

You may encounter a situation where a value has been increased or decreased by a percentage and all you know is the value after the increase or decrease. 

For example: In a 20% off sale an item costs £48.  What was the price before the sale?

In this example, you know a price has been reduced by 20% and you know that the result is 48, but you don't currently know the price before the sale.

**An Error**

The most common error is to add 20% back on to the sale price, to undo the 20% drop.  This would be wrong because you would be finding 20% of the £48 as part of the calculation.  When the £48 was calculated, 20% was calculated of an unknown amount, so the two 20% would not be equivalent.

## Changing by a Percentage Reminder

Let's look at decreasing a number by 20%, and then we will return to reverse percentages.  Let's decrease £15 by 20%, and let us do it like this:

- Start with 100%
- Decrease this by 20% to get 100% - 20% = 80%
- Write 80% as a decimal, 80% = 80 ÷ 100 = 0.8
- Find 80% of 15 by multiplying: 15 × 0.8 = 12

Taking 20% off £15 gives £12.

## Calculating a Reverse Percentage

Now you've seen that decreasing a number by 20% can be achieved by **multiplying by 0.8**, you can reverse this by **dividing by 0.8**:

12 ÷ 0.8 = 15

So, in the example from above (In a 20% off sale an item costs £48.  What was the price before the sale?):

$$48 \div 0.8 = 60$$

The price was £60 before the sale.

**Example**

A workshop experiences a 40% increase in numbers.  The new attendance is 84 people.  How many people attended previously?

Note that we are given a value after an increase or decrease, so we need to use **reverse percentages**

- Start with 100%
- Increase this by 40% to get 100% + 40% = 140%
- Write 140% as a decimal, 140% = 140 ÷ 100 = 1.4
- Since this is **reverse percentages** (you know the new value and want the original) divide by 1.4: 84 ÷ 1.4 = 60

There were 60 people before the increase.

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
<script src="{{  '/assets/js/nbs4107a/reverse-percentages.js' | relative_url }}"></script>

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
