---
layout: eco4001b
title: Confidence Intervals with Known Population Variance
---

<div class="explanation" markdown="1">
    
# Calculating a 95% confidence interval for the mean, with a known population standard deviation

The margin of error in a confidence interval is determined by the level of confidence, the sample size, and the standard deviation.  When the population standard deviation is known you can use the formula, for a 95% confidence interval:

$$\bar{x} \pm 1.96 \times \frac{\sigma}{\sqrt{n}} $$

Where $\bar{x}$ is the sample mean, $\sigma$ is the population standard deviation, $n$ is the sample size.

If the sample size is large, then this formula is a close approximation when using the sample standard deviation rather than the population.

</div>

{% include question_confidence_interval.html
    id="ciq1"
    title="1"
    question_text="Calculate the 95% confidence interval if sample mean = 40, population standard deviation = 10, sample size = 100, correct to 2 d.p."
    lower_answer="38.04"
    upper_answer="41.96"
    tolerance="0.005"
    solution_text="The margin of error is $1.96 \times \frac{10}{\sqrt{10}}=1.96$ <br> $40 \pm 1.96 = (38.04, 41.96)$"

%}

{% include question_confidence_interval.html
    id="ciq2"
    title="2"
    question_text="Calculate the 95% confidence interval if sample mean = 100, population standard deviation = 15, sample size = 25, correct to 2 d.p."
    lower_answer="94.12"
    upper_answer="105.88"
    tolerance="0.005"
    solution_text="The margin of error is $1.96 \times \frac{15}{\sqrt{25}}=5.88$ <br> $100 \pm 5.88 = (94.12, 105.88)$"

%}

{% include question_confidence_interval.html
    id="ciq3"
    title="3"
    question_text="Calculate the 95% confidence interval if sample mean = 100, population standard deviation = 15, sample size = 225, correct to 2 d.p."
    lower_answer="98.04"
    upper_answer="101.96"
    tolerance="0.005"
    solution_text="The margin of error is $1.96 \times \frac{15}{\sqrt{225}}=1.96$ <br> $100 \pm 1.96 = (98.04, 101.96)$"

%}

{% include question_confidence_interval.html
    id="ciq4"
    title="4"
    question_text="Calculate the 95% confidence interval if sample mean = 100, population standard deviation = 75, sample size = 225, correct to 2 d.p."
    lower_answer="90.2"
    upper_answer="109.2"
    tolerance="0.005"
    solution_text="The margin of error is $1.96 \times \frac{75}{\sqrt{225}}=9.2$ <br> $100 \pm 9.2 = (90.2, 109.2)$"

%}


<div class="explanation" markdown="1">

## Other size confidence intervals

The $1.96$ part in the confidence interval for the mean of $\bar{x} \pm 1.96 \times \frac{\sigma}{\sqrt{n}} $ is linked to the 95%.

It can be derived from **normal tables** or by using the online calculator tool below.

To get this number for a **95%** interval:

* Choose **Z-distributed**
* If using **One-tailed** enter **0.025** into **Significance** or if using **Two-tailed** enter **0.05** into **Significance**
* Click **Calculate Critical Value**

You should see $1.96$ as the **Critical Z Value**.

<div class="gigacalculator" data-tool="/calculators/critical-value-calculator.php" data-width="450">
  <div class="gigacalctitle">Critical Value Calculator</div>
  <div class="gigacalcfooter">
    <a href="https://www.gigacalculator.com/calculators/critical-value-calculator.php">Critical Value Calculator</a> by <a class="gigacalclink" href="https://www.gigacalculator.com/">GIGAcalculator.com</a>
  </div>
</div>
<script defer src="https://cdn.gigacalculator.com/embed.min.js"></script>


For a **90% Confidence Interval**, we can use the calculator with the following **Z** settings:

* One-tailed - set significance to 0.05
* Two-tailed - set significance to 0.10

You should find that $1.645$ is the critical value.

So a 90% confidence interval for the mean can be calculated with, given population variance is known:

$$\bar{x} \pm 1.645 \times \frac{\sigma}{\sqrt{n}} $$

</div>

{% include question_numerical.html
    id="ciq5"
    title="5"
    question_text="What is the critical value for a 99% confidence interval of the mean?  Give answer to 3 d.p. and positive."
    correct_answer="2.576"
    tolerance="0.0005"
    solution_text="Set significance to 0.01 on two-tailed, and get 2.576"
%}

{% include question_multiple_choice.html
    id="ci6"
    title="6"
    question_text="Given a sample mean of 100, population standard deviation of 30, and sample size of 225, what is the 99% confidence interval of the mean?"
    options="wrong1::(96.71, 103.29)||wrong2::(96.08, 103.92)||wrong3::(95.35, 104.65)||correct::(94.85, 105.15)"
    correct_answer="correct"
    solution_text="$100 \pm 2.576 \frac{30}{\sqrt{225}}$"
%}


<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/eco/4001b/confidence/" | relative_url }}">← Return to Confidence Intervals Menu</a>
</div>

{% include pagination.html %}
