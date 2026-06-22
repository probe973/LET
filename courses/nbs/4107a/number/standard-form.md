---
layout: nbs4107a
title: Standard Form
---

# Standard Form

<div class="explanation" markdown="1">

**Standard (Index) Form** is a way of writing numbers using powers of 10.  It is particularly useful for writing very large or very small numbers, which would often conatin many zeros.

## Writing a Number in Standard Form

Numbers in standard form look like:

$$a \times 10^n $$

Where $1 \leq a \lt 10$ and $n$ is a whole number (integer)

### Writing large numbers in standard form

Consider the number 483000.

You first start from the left and write a number 1 or more but less than 10.  Here it would be **4.83**.

You then repeatedly multiply by 10 to make the number the same as what you started.  Here you would need to

- multiply by 10 to get 48.3
- multiply by 10 again to get 483
- multiply by 10 again to get 4830
- mulitply by 10 again to get 48300
- multiply by 10 again to get 483000

Here, you have multiplied by 10 to the power of 5, $10^5$.

Therefore:

$$483000 = 4.83 \times 10^5$$

### Writing small numbers in standard form

Now consider the number 0.0025.

You begin the same way and identify the number between 1 and 10 as **2.5**.

However, in order to make this the same as 0.0025, you would need to repeatedly divide by 10.  Standard form does not use the ÷ sign though.

Using fraction knowledge, dividing by 10 is the same as multiplying by $\frac{1}{10}$.

Using indices knowledge, $\frac{1}{x^n} = x^{-n}$

So, in this example you would

- divide by 10 to get 0.25
- divide by 10 again to get 0.025
- divide by 10 again to get 0.0025

So, divide by $10^{3}$, which is the same as multiplying by $10^{-3}$.

Therefore:

$$0.0025 = 2.5 \times 10^{-3}$$

</div>

<div class="explanation" markdown="1">

## Writing Numbers from Standard Form to Normal Form

To convert a number out of standard form, you multiply (or divide if a negative power of 10) the required numbers of times by 10.

$1.618 \times 10^6$ need to multiply by 10 repeatedly (6 times), which moves the decimal 6 places to the right to give 1618000

</div>

<section class="revision-container" aria-labelledby="sf-heading">
    <div class="revision-header">
        <h2 id="sf-heading">Standard Form Quiz</h2>
        <p>Practice 10 random standard form questions.</p>
        <p>Write answers in the form $a \times 10^n$ where $1 \le a < 10$.</p>
    </div>

    <!-- The ID for Standard Form -->
    <div id="sf-questions-container"></div>

    <div class="revision-footer">
        <button type="button" onclick="window.location.reload()" class="btn">
            Generate New Set of Questions
        </button>
    </div>
</section>

<section class="revision-container" aria-labelledby="revision-heading">
    <div class="revision-header">
        <h2 id="revision-heading">Questions</h2>
        <p>Practice 10 random questions. Check your answer after each question.</p>
    </div>

    <!-- The original ID for Core Logic -->
    <div id="revision-questions-container"></div>

    <div class="revision-footer">
        <button type="button" onclick="window.location.reload()" class="btn">Generate New Set of Questions</button>
    </div>
</section>

<!-- 1. Load Standard Form Files -->
<script src="{{ '/assets/js/nbs4107a/to-standard-form.js' | relative_url }}"></script>
<script src="{{ '/assets/js/revision-standard-form-logic.js' | relative_url }}"></script>

<!-- 2. Load Core Revision Files -->
<script src="{{ '/assets/js/nbs4107a/from-standard-form.js' | relative_url }}"></script>
<script src="{{ '/assets/js/revision-core-logic.js' | relative_url }}"></script>

<!-- 3. Start both quizzes -->
<script>
document.addEventListener('DOMContentLoaded', () => {
    // Start Standard Form Quiz
    if (window.initStandardFormRevisionTest && window.standardFormGenerators) {
        window.initStandardFormRevisionTest(window.standardFormGenerators, 10);
    }

    // Start Core Quiz
    if (window.initRevisionTest && window.reviewQuestionGenerators) {
        window.initRevisionTest(window.reviewQuestionGenerators, 10); 
    }
});
</script>
