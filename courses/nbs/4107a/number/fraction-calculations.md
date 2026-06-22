---
layout: nbs4107a
title: Fraction Arithmetic
---

<div class="explanation" markdown="1">

# Fraction Arithmetic

## Adding and Subtracting

To add or subtract fractions you need the fractions to have the same denominator. When this is the case the numerators can be added or subtracted.

In order to get the denominators of the fractions the same you find a common multiple they all share. For example the numbers 4 and 6 has a common multiple of 12, since 12 is 3 × 4 and 2 × 6, so 12 is in both the 4 and 6 times table. There isn't a unique common multiple, for example you could have chosen 24.

Once you know your common denominator you adjust each numerator to keep the fraction the same value.

**Example**

Calculate 

$$ \frac{5}{9} + \frac{1}{6} $$

Looking at the denominators of 9 and 6, you could use 18 as a common denominator (which is 2 lots of 9 and 3 lots of 6). The numerators can be multiplied by 2 and by 3 respectively.

$$ \frac{5}{9} + \frac{1}{6} = \frac{10}{18} + \frac{3}{6} $$

Once the denominators are the same we can add the numerators.

$$ \frac{10}{18} + \frac{3}{6} = \frac{10+3}{18} = \frac{13}{18} $$

We then check whether the fraction can be simplified, which it can't in this instance.

**Example**

Calculate

$$ \frac{3}{4} - \frac{1}{12} $$

Both can be written as fractions over 12:

$$ \frac{3}{4} - \frac{1}{12} = \frac{9}{12} - \frac{1}{12} = \frac{8}{12} $$

Simplifying to

$$\frac{8}{12} = \frac{4 \times 2}{4 \times 3} = \frac{2}{3}$$


## Multiplying

Multiplying fractions involves multiplying the numerators and multiplying the denominators.

**Example**

Calculate

$$ \frac{10}{21} \times \frac{3}{8} $$

So one method is to just go ahead and multiply:

$$ \frac{10}{21} \times \frac{3}{8} = \frac{10 \times 3}{21 \times 8} = \frac{30}{168}$$

You could then simplify 

$$\frac{30}{168} = \frac{5}{28}$$

Alternatively you can simplify before carrying out the multiplication:

$$ \frac{10}{21} \times \frac{3}{8} = \frac{10 \times 3}{21 \times 8} = \frac{2 \times 5 \times 3}{3 \times 7 \times 2 \times 4}$$

This was achieved by spotting that the 10 on top and 8 on the bottom share a common factor of 2, and the 3 on top and the 21 on the bottom share a common factor of 3.

$$\frac{2 \llap{/} \times 5 \times 3 \llap{-} }{3 \llap{-} \times 7 \times 2 \llap{/} \times 4} = \frac{5}{7 \times 4} = \frac{5}{28}$$


## Dividing

Dividing by a number is the same as multiplying by the reciprocal of that number.

### Reciprocal

The reciprocal of a number is essentially writing the number as a fraction and then flipping it, so the numerator and denominator swap places.

So, the reciprocal of $\frac{2}{3}$ is $\frac{3}{2}$.

The reciprocal of $5$, which is the same as $\frac{5}{1}$ is $\frac{1}{5}$

**Example**

Calculate

$$ \frac{4}{5} \div \frac{2}{3} $$

You are dividing by $\frac{2}{3}$, so this number needs to be flipped and then you can multiply.

$$ \frac{4}{5} \div \frac{2}{3} = \frac{4}{5} \times \frac{3}{2} = \frac{4 \times 3}{5 \times 2} = \frac{12}{10} = \frac{6}{5} $$


</div>

<section class="revision-container" aria-labelledby="revision-heading">
    <div class="revision-header">
        <h2 id="revision-heading">Fraction Quiz</h2>
        <p>Practice 10 random fraction questions. Check your answer after each question.</p>
        <p>Give all answers as fractions in their lowest form.</p>
        <p>If an answer is a whole number, write it as a fraction over 1, e.g $5 = \frac{5}{1}$</p>
    </div>

    <div id="revision-questions-container">
        </div>

    <div class="revision-footer">
        <button type="button" onclick="window.location.reload()" class="btn">Generate New Set of Questions</button>
    </div>
</section>

<script src="{{ '/assets/js/nbs4107a/fractions.js' | relative_url }}"></script>

<script src="{{ '/assets/js/revision-fractions-logic.js' | relative_url }}"></script>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (window.initFractionRevisionTest && window.reviewQuestionGenerators) {
            const desiredQuestionCount = 10;
            window.initFractionRevisionTest(window.reviewQuestionGenerators, desiredQuestionCount); 
        } else {
            console.error("Required fraction revision scripts not loaded correctly.");
        }
    });
</script>
