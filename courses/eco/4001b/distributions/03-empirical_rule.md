---
layout: eco4001b
title: Frequency table
---

<div class="explanation" markdown="1">

## Emprical Rule for Normal Distributions

Distributions that are described as **normally distributed** have a particular shape and have defined characteristics.

* **Symmetry**: The curve is perfectly symmetrical around its centre, meaning the left side is a mirror image of the right.
* **Bell Shape**: It forms a distinctive bell curve, with the highest point at the mean and tails that extend infinitely but never touch the x-axis (asymptotic).
* **Central Tendency**: The mean, median, and mode are all identical and located at the peak (center) of the distribution.
* **Defined by Mean & Standard Deviation**: Only two parameters, the mean (μ, center) and standard deviation (σ, spread), are needed to describe any normal distribution.
* **Empirical Rule** (68-95-99.7):
* About 68% of data falls within 1 standard deviation (±σ) of the mean.
* About 95% falls within 2 standard deviations (±2σ).
* About 99.7% falls within 3 standard deviations (±3σ).
* **Concentration**: Data points are most frequent near the mean and become less probable further away in the tails. 

<a title="Dan Kernler, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Empirical_Rule.PNG"><img width="512" alt="Empirical Rule" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Empirical_Rule.PNG?20141031001827"></a>

<a href="https://commons.wikimedia.org/wiki/File:Empirical_Rule.PNG">Dan Kernler</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons

### Example

This information allows you to know that if a distribution is normally distributed that

* 68% of the data lie within 1 standard deviation of the mean
* 34% (100 - 68) of the data lie beyond 1 standard deviation of the mean
* By symmetry, 17% (34/2) of the data lie above 1 standard deviation of the mean and 17% of the data lie below 1 standard deviation of the mean

</div>

### Questions

{% include question_multiple_choice.html
    id="Ndist1"
    title="Empirical Rule 1"
    question_text="Approximately what proportion of data lie above 2 standard deviations above the mean, given the data are normally distributed?"
    options="a::2.5%||b::5%||c::47.5%||d::95%||e::97.5%"
    correct_answer="a"
    solution_text="95% within 2 standard deviations, 5% outside - shared between above and below 2 standard deviations."
%}

{% include question_multiple_choice.html
    id="Ndist2"
    title="Empirical Rule 2"
    question_text="Approximately what proportion of data lie above 1 standard deviations below the mean, given the data are normally distributed?"
    options="a::17%||b::34%||c::68%||d::84%||e::Not possible to tell from this information"
    correct_answer="d"
    solution_text="By symmetry 16% lie below 1 standard deviation below the mean, and the whole distribution sums to 100%"
%}

{% include question_numerical.html
id="Ndist3"
title="Empirical Rule 3"
question_text="An office coffee machine distributes liquids, in a normal distribution, that have a mean volume of 250 ml and a standard deviation of 6 ml. What percentage of coffees will be between 238 and 262 ml?"
correct_answer="95"
tolerance="0.05"
solution_text="238 is 2 sd below the mean, and 262 is 2 sd above the mean."
%}

{% include question_numerical.html
id="Ndist4"
title="Empirical Rule 4"
question_text="An office coffee machine distributes liquids, in a normal distribution, that have a mean volume of 250 ml and a standard deviation of 6 ml. What percentage of coffees will be over 268 ml?"
correct_answer="0.15"
tolerance="0.005"
solution_text="268 ml is 3 sd above the mean, need to use symmetry to split the proportion outside 3 sd into two."
%}

{% include question_numerical.html
id="Ndist5"
title="Empirical Rule 5"
question_text="The bulb on a photocopier has a mean life of 16000 hours and a variance of 250000 square hours, and the life is normally distributed.  What percentage of bulbs last longer than 15000 hours?"
correct_answer="97.5"
tolerance="0.005"
solution_text="Standard deviation is the square root of variance, 15000 hours is then 2 standard deviations below the mean.  Use symmetry to work out the probability above this."
%}


<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/eco/4001b/" | relative_url }}">← Return to Workshops Menu</a>
</div>

{% include pagination.html %}
