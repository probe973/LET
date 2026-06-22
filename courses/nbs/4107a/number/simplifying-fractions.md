---
layout: nbs4107a
title: Simplifying Fractions
---

<div class="explanation" markdown="1">

# Simplifying Fractions

Simplifying a fraction involves dividing the numerator (top) and denominator (bottom) of a fraction by a number that divides into both of them, a factor. When there are no common factors, other than 1, between the numerator and denominator, the fraction is in its lowest form.

**Example**

Write $\frac{12}{36}$ in its lowest form.

Note that 2 goes into both 12 (2 × 6) and 36 (2 × 18). The 2 can be divided out of the top and bottom to leave 6 over 18:

$\frac{12}{36} = \frac{2 \times 6}{2 \times 18} = \frac{6}{18}$

Also note that 2 goes into both 6 and 18, so:

$\frac{12}{36} = \frac{6}{18} = \frac{2 \times 3}{2 \times 9} = \frac{3}{9}$

3 goes into both 3 and 9:

$\frac{12}{36} = \frac{3}{9} = \frac{3 \times 1}{3 \times 3} = \frac{1}{3}$

This is the lowest form of the fraction.

**Alternatively**

You could find the largest number that divides into both 12 and 36, the highest common factor or greatest common divisor.

In this case 12 is the highest common factor of 12 and 36.

$\frac{12}{36} = \frac{12 × 1}{12 × 3} = \frac{1}{3}$

 
</div>

<section class="revision-container" aria-labelledby="revision-heading">
    <div class="revision-header">
        <h2 id="revision-heading">Fraction Quiz</h2>
        <p>Practice 10 random fraction questions. Check your answer after each question.</p>
    </div>

    <div id="revision-questions-container">
        </div>

    <div class="revision-footer">
        <button type="button" onclick="window.location.reload()" class="btn">Generate New Set of Questions</button>
    </div>
</section>

<script src="{{ '/assets/js/nbs4107a/simplifying-fraction-questions.js' | relative_url }}"></script>

<script src="{{ '/assets/js/revision-fractions-logic.js' | relative_url }}"></script>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (window.initFractionRevisionTest && window.reviewQuestionGenerators) {
            const desiredQuestionCount = 12;
            window.initFractionRevisionTest(window.reviewQuestionGenerators, desiredQuestionCount); 
        } else {
            console.error("Required fraction revision scripts not loaded correctly.");
        }
    });
</script>
