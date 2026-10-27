---
layout: nbs4104b
title: Confidence Intervals with Unknown Population Variance
---

<div class="explanation" markdown="1">
    
# Calculating a confidence interval for the mean, with an uknown population standard deviation

If you do not have the population standard deviation when calculating a confidence interval for the mean, you can make use of the standard deviation of the sample.  When doing this you will need to make use of the **t-distribution**, rather than the normal distribution.

$$ \bar{x} \pm t_\text{critical} \frac{s}{\sqrt{n}}$$

Where $\bar{x}$ is the sample mean, $s$ is the sample standard deviation, $n$ is the sample size, and $t_\text{critical}$ is based on the level of confidence and the **degrees of freedom (df)**.

The **df** here is given by: $\text{df} = n-1$

</div>

<div class="explanation" markdown="1">

## Calculating the confidence interval

You can use the following calculator or tables of critical t-values.

<div class="gigacalculator" data-tool="/calculators/critical-value-calculator.php" data-width="450">
  <div class="gigacalctitle">Critical Value Calculator</div>
  <div class="gigacalcfooter">
    <a href="https://www.gigacalculator.com/calculators/critical-value-calculator.php">Critical Value Calculator</a> by <a class="gigacalclink" href="https://www.gigacalculator.com/">GIGAcalculator.com</a>
  </div>
</div>
<script defer src="https://cdn.gigacalculator.com/embed.min.js"></script>

So for a sample of size $n=16$, a sample mean $\bar{x}=50$ and sample standard deviation $s=10$ is calculated.

For a 95% confidence interval for the mean, using the calculator:

* Set it to **T-distributed**
* Set the **Type of test** to **One-tailed**
* Enter **0.025** as the **Significance leve** (this is half of 5%)
* Enter **15** as the **Degrees of Freedom**

You should find that $t_\text{critical}=2.131$.

You can also use the t-table <a href="/nbs-4104b/t-table/" target="_blank">here</a> to get a the critical t-value.  This can be used in confidence intervals and t-tests.

Therefore the 95% confidence interval is:

$$50 \pm 2.131 \times \frac{10}{\sqrt{16}} = 16 \pm 5.33$$

This can written as (44.67, 55.33)

</div>

### Questions

From a sample of size 20, a sample mean of 156 and a sample standard deviation of 12.2 is found.

{% include question_numerical.html
    id="ciT1a"
    title="1a"
    question_text="What would be the critical t value for a 95% confidence interval, correct to 3 d.p.?"
    correct_answer="2.093"
    tolerance="0.001"
    solution_text="Use the calculator or tables, with one-sided 0.025, and degrees of freedom of 19."
%}

{% include question_multiple_choice.html
    id="ciT1b"
    title="1b"
    question_text="What would be the 95% confidence interval for the mean?"
    options="correct::(150.29, 161.71)||wrong2::(145.23, 167.77)||wrong3::(155.1, 156.9)||wrong1::(150.1, 165.9)"
    correct_answer="correct"
    solution_text="$156 \pm 2.093 \times \frac{12.2}{\sqrt{20}}$"
%}

From a sample of size 12, a sample mean of 100 and a sample standard deviation of 15 is found.

{% include question_confidence_interval.html
    id="ciqT2"
    title="2"
    question_text="Calculate the 90% confidence interval for the mean, correct to 2 d.p."
    lower_answer="92.22"
    upper_answer="107.78"
    tolerance="0.005"
    solution_text="Critical t value is 1.796, so $100 \pm 1.796 \times \frac{15}{\sqrt{12}}$ <br> (92.22, 107.78)"

%}


<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/nbs/4104b/confidence/" | relative_url }}">← Return to Confidence Intervals Menu</a>
</div>

{% include pagination.html %}
