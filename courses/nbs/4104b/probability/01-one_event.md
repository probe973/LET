---
layout: nbs4104b
title: Single Event Probability
---

# Single Event Probability

<div class="instructions" markdown="1">

### Calculating the probability of an event

To calculate the probability that an event will happen you need to use:

$$P(\text{Event}) = \frac{\text{number of ways event can happen}}{\text{total number of possible outcomes}}$$

You will see the solution written as either a fraction, a decimal, or a percentage.

**Example**

A bag contains 20 counters, 3 are coloured red, 12 are coloured blue, and the rest are coloured green.

* What is the probability of drawing a **red** counter?

There are 3 red counters out of a possible 20 counters.  Therefore the probability is:

$$P(\text{red}) = \frac{3}{20} \text{ or } = 0.15 = 15 \% $$

* What is the probability of not drawing a **blue** counter?

There 12 blue counters, so 8 are not blue.

$$P(\text{not blue}) = \frac{8}{20} =\frac{2}{5} \text{ or } = 0.4 = 40 \% $$

</div>

{% include question_multiple_choice.html
    id="single_prob_1"
    title="Question 1"
    question_text="On a standard fair six-sided die, what is the probability of rolling a four?"
    options="wrong1::6||correct::1/6||wrong2::1/2||wrong3::1/4"
    correct_answer="correct"
    solution_text="There are six total outcomes and only and only 1 option has a four"
%}

{% include question_multiple_choice.html
    id="single_prob_2"
    title="Question 2"
    question_text="On a standard fair six-sided die, what is the probability of rolling a prime number?"
    options="wrong1::1/6||wrong2::2/3||correct::1/2||wrong3::0"
    correct_answer="correct"
    solution_text="There are six total outcomes and there are three primes (2, 3, and 5)."
%}

{% include question_multiple_choice.html
    id="single_prob_3"
    title="Question 3"
    question_text="A card set has cards that contain: 2 red squares, 3 blue rectangles, 5 red triangles, 1 blue pentagon, and 1 green pentagon.  What is the probability of picking, at random, a red card?"
    options="wrong1::1/6||wrong2::5/12||wrong3::1/2||correct::7/12"
    correct_answer="correct"
    solution_text="There are 12 total outcomes, of which there are 2 red squares and 5 red triangles."
%}

{% include question_multiple_choice.html
    id="single_prob_4"
    title="Question 4"
    question_text="A card set has cards that contain: 2 red squares, 3 blue rectangles, 5 red triangles, 1 blue pentagon, and 1 green pentagon.  What is the probability of picking, at random, a card with a shape of less than 5 sides?"
    options="correct::5/6||wrong1::1/6||wrong2::1||wrong3::0"
    correct_answer="correct"
    solution_text="There are 12 total outcomes, of which there are 10 shapes with less than 5 sides (triangles, squares, and rectangles)."
%}

<div class="instructions" markdown="1">

### Calculating expected number of outcomes

Given a constant probability of an evenet occurring, you can calculate how many *successful* outcomes you would expect if repeated a set number of times:

$$\text{Expected number of outcomes} = P(\text{outcome}) \times \text{number of repeats}$$

**Example**

A spinner lands on green with a probability of $\frac{2}{5}$.  If the spinner is spun 20 times, how many times would you expect it to land on green?

$$\text{Expected number of greens} = \frac{2}{5} \times 20 = 8$$

</div>

{% include question_numerical.html
id="sing_prob_5"
title="Question 5"
question_text="A bag contains 20 red counters and 30 blue counters.  A counter is selected, recorded, then returned to the bag.  If 15 draws are made, what is the expected number of blue counters?"
correct_answer="9"
tolerance="0"
solution_text="There is a probability of 3/5 for selecting a blue counter each time.  Multiply this by 15."
%}

{% include question_numerical.html
id="sing_prob_6"
title="Question 6"
question_text="A bus is late to my stop with a probability of 0.28.  In a 14-day period, how many times would I expect the bus to be on time?  Give answer correct to 2 decimal places."
correct_answer="10.08"
tolerance="0.005"
solution_text="There is a probability of 0.72 ($1-0.28$) of being on time.  Multiply this by 14."
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/nbs/4104b/probability/" | relative_url }}">← Return to Probability Menu</a>
</div>

{% include pagination.html %}
