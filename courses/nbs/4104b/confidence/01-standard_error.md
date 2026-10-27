---
layout: nbs4104b
title: Standard Error of the Mean
---

# Standard Error of the Mean

<div class="explanation" markdown="1">

The standard error of the mean (SEM) measures how far a sample mean is likely to differ from the true population mean, quantifying the precision of the estimate.  It helps determine how well the sample mean represents the entire population and is used to calculate confidence intervals.

As sample size ($n$) increases, the SEM decreases, meaning larger samples provide more precise estimates.

## Formula

$$\text{SEM} = \frac{s}{\sqrt{n}}$$

$s$ is the sample standard deviation (if $\sigma$, the population standard deviation, is known then it can be used).

$n$ is the sample size 

</div>

### Questions

Calculate the standard error of the mean, correct to 2 decimal places, for the following sample data:

{% include question_numerical.html
    id="cose1"
    title="1"
    question_text="Sample mean = 100, standard deviation = 15, sample size = 25"
    correct_answer="3"
    tolerance="0"
    solution_text="$\frac{15}{\sqrt{25}}=3$"
%}

{% include question_numerical.html
    id="cose2"
    title="2"
    question_text="Sample mean = 84.6, standard deviation = 10, sample size = 40"
    correct_answer="1.58"
    tolerance="0.005"
    solution_text="$\frac{10}{\sqrt{40}}=1.58$"
%}

{% include question_numerical.html
    id="cose3"
    title="3"
    question_text="Sample mean = 84.6, standard deviation = 10, sample size = 400"
    correct_answer="0.5"
    tolerance="0.005"
    solution_text="$\frac{10}{\sqrt{400}}=0.5$"
%}

{% include question_numerical.html
    id="cose4"
    title="4"
    question_text="Sample mean = 84.6, standard deviation = 5, sample size = 40"
    correct_answer="0.25"
    tolerance="0.005"
    solution_text="$\frac{5}{\sqrt{40}}=0.25$"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/nbs/4104b/confidence/" | relative_url }}">← Return to Confidence Intervals Menu</a>
</div>

{% include pagination.html %}
