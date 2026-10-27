---
layout: eco4001b
title: Distribution Proportions - Chebyshev's Theorem
---

<div class="explanation" markdown="1">

## Chebyshev's Inequality

**Chebyshev's Theorem** provides an *estimate* for the *minimum* proportion of values that lie within a given number of standard deviations from the mean.

For any given distribution, the minimum proportion of observations that lie within $k$ standard deviation of the mean ($k>1$), is given by:

$$1-\frac{1}{k^2}$$

For example, the minimum proportion of observations that lie within 3 standard deviations of the mean (so between the mean minus 3 standard deviations and the mean plus 3 standard deviations) is:

$$1-\frac{1}{3^2}=1-\frac{1}{9}=\frac{8}{9} \approx 89 \% $$

This also implies that **at most** 11% of observations lie **outside of 3 standard deviations from the mean**

An estimate for the maximum number of observations that lie outside of $k$ standard deviations ($k>1$) is given by:

$$\frac{1}{k^2}$$

</div>

### Questions

{% include question_numerical.html
id="Cdist1"
title="Chebyshev 1"
question_text="What is the minimum proportion (giving answer as a percentage) of observations that lie within $\sqrt{2}$ standard deviations of the mean?"
correct_answer="50"
tolerance="0.005"
solution_text="$1-\frac{1}{\sqrt{2}^2}=1-\frac{1}{2}$"
%}

{% include question_numerical.html
id="Cdist2"
title="Chebyshev 2"
question_text="What is the maxmimum proportion (giving answer as a percentage) of observations that lie beyond 2 standard deviations of the mean?"
correct_answer="25"
tolerance="0.005"
solution_text="$\frac{1}{2^2}=\frac{1}{4}$"
%}

{% include question_numerical.html
id="Cdist3"
title="Chebyshev 3"
question_text="A distribution has a mean value of 50 and a standard deviation of 5. What is the minimum proportion of observations (giving answer as a percentage) that are between 40 and 60?"
correct_answer="75"
tolerance="0.005"
solution_text="40 is 2 standard deviations below the mean, 60 is 2 standard deviations above the mean.  Chebyshev using $k=2$."
%}

{% include question_multiple_choice.html
    id="Cdist4"
    title="Chebysev 4"
    question_text="A distribution has a mean value of 60 and a standard deviation of 20.  What is the minimum proportion of observations that are between 30 and 90?"
    options="a::40%||b::44%||c::50%||d::56%||e::not enough information to tell"
    correct_answer="d"
    solution_text="30 to 90 is 1.5 standard deviations, Chebyshev's rule gives 5/9 minimum within."
%}


{% include pagination.html %}
