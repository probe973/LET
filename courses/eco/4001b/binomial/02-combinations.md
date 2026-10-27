---
layout: eco4001b
title: The Binomial Coefficient
---

<div class="explanation" markdown="1">

# The Binomial Coefficient

The binomial coefficient is the number of ways of picking $k$ unordered outcomes from $n$ possibilities, and is written $n \choose k$ or $^nC_k$.

So the number of ways we can choose **2** outcomes from the set of **3** items A, B, C, where order doesn't matter:

AB, AC, and BC

So, ${3 \choose 2} = 3$, as there were 3 possibilities.

If we wanted to choose **2** outcomes from the set of **4** items A, B, C, D:

AB, AC, AD, BC, BD, CD

So ${4 \choose 2} = 6$

### Formula

$${n \choose k} = \frac{n!}{k!(n-k)!}$$

So for the second example above:

$${4 \choose 2} = \frac{4!}{2!(4-2)!} = \frac{4!}{2! \times 2!} = \frac{24}{2 \times 2} = 6$$

You may also have a button on your calculator, something like `nCx` and you can use it like `4` `nCx` `2`.


The coefficient also tells how many ways you can get $k$ successes in $n$ trials.  For example, if you can either succeed or fail, and you complete **5** trials, how many different ways can you get **2** successes?

S - success, F - fail

SSFFF

SFSFF

SFFSF

SFFFS

FSSFF

FSFSF

FSFFS

FFSSF

FFSFS

FFFSS

10 ways or ${5 \choose 2} = 10$


</div>

### Questions

{% include question_numerical.html
id="bincoef1"
title="1"
question_text="What is the value of $10 \choose 4$ ?"
correct_answer="210"
tolerance="0"
solution_text="$\frac{10!}{4! \times 6!}$"
%}

{% include question_numerical.html
id="bincoef2"
title="2"
question_text="How many different ways can you get 7 successes in 20 trials?"
correct_answer="77520"
tolerance="0"
solution_text="$ 20 \choose 7$"
%}

{% include question_dropdown.html
    id="bincoef3"
    title="3"
    question_text="Show algebraically that $${n \choose x}={n \choose n-x}$$"
    solution_text="${n \choose x} = \frac{n!}{x!(n-x)!}$ <br> ${n \choose n-x} = \frac{n!}{(n-x)!(n-(n-x))!}=\frac{n!}{(n-x)!x!}=\frac{n!}{x!(n-x)!}={n \choose x}$"
%}


<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/eco/4001b/binomial/" | relative_url }}">← Return to the Binomial Distribution Menu</a>
</div>

{% include pagination.html %}
