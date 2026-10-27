---
layout: eco4001b
title: Confidence Intervals
---

<div class="explanation" markdown="1">

# Confidence Intervals

In this workshop you will look at what a confidence interval is.  You will also explore what factors influence the size of a confidence interval.

Researchers often want to estimate a measure, such as the mean, of a population.  Measures that describe a population are known as parameters.  If everyone in the population can be measured (i.e. a census) then there is no need to estimate parameters.  However, samples from a population are more often used and statistics are calculated from the sample.  These statistics are then used to estimate the population parameters.

</div>


<div class="instructions" markdown="1">

### Point and Interval Estimates

A **statistic** means something that is calculated from a sample.  For example, when we calculate the mean score from a sample, this score is known as a **statistic**

A **parameter** is a measure from the population, and is often unknown.  When you calculate statistics from a sample you are often trying to estimate the value of a **population parameter**

The **mean** is often a useful piece of information to know about a population.  A **sample mean** can be used to estimate the **population mean**.  So if a sample of 80 people in a particular population of interest gives a mean score of 52, you would estimate the population mean to be 52.  This is known as a **point estimate**

Point estimates are good for giving readers a precise answer, but you have no confidence that this is the **true** value in the population.  This is because:

$$\text{true score} = \text{sample estimate} \pm \text{error}$$

Researchers will often also give **interval estimates** of the population parameter, so a range of possible values it can take.  It will also be associated with a **level of confidence** in the interval.  A commonly used interval is a **95% confidence interval**.  So a 95% confidence interval for a population mean may be given as:

$$52 \pm 6$$

This means that we can be 95% confident that the true mean lies between $52 - 6 = 46$ and $52+6=58$, so the confidence interval may also be written $(46, 58)$.

It's 95%, or whatever percent is given, because when a researcher calculates the 95% confidence interval from their sample, 95% of samples will correctly 'trap' the true mean.

</div>

Let’s say that a researcher is interested in the mean length of time people spend using a particular product each year.  They collect a sample from the population of people who have the product and calculate the mean length to be 6.4 days.  

{% include question_numerical.html
    id="ciq1"
    title="1"
    question_text="With the information given, what would be the researcher’s estimate of the population mean number of days people are using the product?"
    correct_answer="6.4"
    tolerance="0.01"
    solution_text="The best estimate for the population mean would be the sample mean: 6.4 days"
%}

Using other statistics collected from the sample, the researcher also calculates a 95% confidence interval for the population mean.  It is calculated as (4.6, 8.2).

{% include question_multiple_choice.html
    id="ciq2"
    title="2"
    question_text="What is the interpretation of this confidence interval?"
    options="wrong1::We are 5% confident that the true mean is between 4.6 and 8.2 days||correct::We are 95% confident that the true mean is between 4.6 and 8.2 days||wrong2::We are 95% confident that the true mean is outside of 4.6 and 8.2 days||wrong3::We have no idea how many days people use the product for for on average"
    correct_answer="correct"
    solution_text="We are 95% confident that the true mean is between 4.6 and 8.2 days"
%}

<div class="instructions" markdown="1">

### What factors influence the width of a confidence interval?

The size of the confidence interval (the difference between the two values in the interval) is determined by:
* the amount of spread there is in the sample data
* the size of the sample
* the level of confidence

</div>

Below are some confidence intervals for the mean where:
Sample mean = 70, sample standard deviation = 5, sample size = 50.

80% Confidence Interval (69.1 to 70.9)

90% Confidence Interval (68.8 to 71.2)

95% Confidence Interval (68.6 to 71.4)

99% Confidence Interval (68.2 to 71.8)

Each of these confidence intervals can be written as $\text{mean} \pm \text{margin of error}$.  

So, for example, the 80% confidence interval can be written as:

$$ 70 \pm 0.9$$

So the margin of error here was 0.9.

{% include question_numerical.html
    id="ciq3a"
    title="3a"
    question_text="What is the margin of error for the 90% confidence interval?"
    correct_answer="1.2"
    tolerance="0"
    solution_text="71.1 is 1.2 above the mean and 68.8 is 1.2 below the mean"
%}

{% include question_numerical.html
    id="ciq3b"
    title="3b"
    question_text="What is the margin of error for the 95% confidence interval?"
    correct_answer="1.4"
    tolerance="0"
    solution_text="71.4 is 1.4 above the mean and 68.6 is 1.4 below the mean"
%}

{% include question_numerical.html
    id="ciq3c"
    title="3c"
    question_text="What is the margin of error for the 99% confidence interval?"
    correct_answer="1.8"
    tolerance="0"
    solution_text="71.8 is 1.8 above the mean and 68.2 is 1.8 below the mean"
%}

{% include question_multiple_choice.html
    id="ciq4"
    title="4"
    question_text="What do you notice between the relationship of confidence level and margin of error?"
    options="wrong1::There is no relationship between the confidence level and the margin of error||wrong2::As the level of confidence increases, the margin of error decreases||correct::As the level of confidence increases, the margin of error increases"
    correct_answer="correct"
    solution_text="With the increasing confidence the margin of errors are 0.9, 1.2, 1.6, and 1.8"
%}

Below are 95% confidence intervals for different samples that have a mean of 70 and a standard deviation of 5.  The sample size is different for each of the samples:

Sample size = 50; 95% Confidence Interval (68.6 to 71.4)

Sample size = 10; 95% Confidence Interval (66.9 to 73.1)

Sample size = 2000; 95% Confidence Interval (69.8 to 70.2)

{% include question_multiple_choice.html
    id="ciq5"
    title="5"
    question_text="What do you notice between the relationship of sample size and margin of error for the 95% confidence intervals?"
    options="wrong1::There is no relationship between the sample size and the margin of error||correct::As the sample size increases, the margin of error decreases||wrong2::As the sample increases, the margin of error increases"
    correct_answer="correct"
    solution_text="Sample size 50, margin of error is 1.4, sample size of 10, margin of error is 3.1, sample size of 2000, margin of error is 0.2"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/eco/4001b/confidence/" | relative_url }}">← Return to Confidence Intervals Menu</a>
</div>

{% include pagination.html %}
