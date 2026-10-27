---
layout: eco4001b
title: Standard Normal
---

<div class="explanation" markdown="1">

# Standard Normal Distribution

Standardising all scores, $x_i$, in a distribution, with the formula:

$$z = \frac{x - \mu}{\sigma}$$

results in a new distribution, $Z$, which will have a mean of 0 and a standard deviation of 1.

If the distribution is **normally distributed** then this is known as the **standard normal distribution**.

</div>

<div class="explanation" markdown="1">

## Defining a normal distribution

The normal distribution is defined in terms of its **mean, $\mu$** and its **variance, $\sigma^2$**.  It is written:

$$X \sim N(\mu, \sigma^2)$$

Normal distributions have defined shape and probabilities:

<a title="Dan Kernler, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Empirical_Rule.PNG"><img width="512" alt="Empirical Rule" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Empirical_Rule.PNG?20141031001827"></a>

<a href="https://commons.wikimedia.org/wiki/File:Empirical_Rule.PNG">Dan Kernler</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons

**Standardising** a normal distribution gives a normal distribution with **mean = 0** and **variance = 1**.  We can write:

$$Z \sim N(0,1)$$

</div>

<div class="explanation" markdown="1">

## Using the standard normal distribution

Since the standard normal distribution always has a mean of 0 and variance of 1, we can have defined probabilities.

![A standard normal distribution, with a vertical line at z = 1.25.  The area to the left is marked as 0.8944 and the area to the right is marked as 0.1056.]({{ "/courses/eco/4001b/normal/images/stnorm125.png" | relative_url }})

The image tells us that $P(Z < 1.25) = 0.8944$ and this means that the probability of being less than 1.25 standard deviations above the mean, in any normal distribution, is 0.8944.

We can use the fact that the total probability is 1, and so $P(Z > 1.25) = 1 - 0.8944 = 0.1056$.

Due to the symettry of the normal distribution we can also deduce that $P(Z > -1.25) = 0.8944$ and $P(Z < -1.25)=0.1056$.

Tables are produced to be able to find probabilities for the standard normal distribution.  One such table is <a href="https://math.arizona.edu/~rsims/ma464/standardnormaltable.pdf" target="_blank">linked here</a>.

**From the linked table, see if you can confirm that $P(Z<1.25)=0.8944$.**

Online calculators also exist:

{% include apps/normal_dist.html %}

**Use this calculator to confirm that for $Z \sim N(0,1)$, that $P(Z<1.25)=0.8944$

</div>

### Questions

For $Z \sim N(0,1)$, using tables or calculator, giving answers to 4 decimal places:

{% include question_numerical.html
id="standnorm1"
title="1"
question_text="What is $P(Z<1.1)$"
correct_answer="0.8643"
tolerance="0.0005"
solution_text="Use tables or calculator to get 0.8643"
%}

{% include question_numerical.html
id="standnorm2"
title="2"
question_text="What is $P(Z>-0.82)$"
correct_answer="0.7939"
tolerance="0.0005"
solution_text="Use tables or calculator to get 0.7939"
%}

Use the table of probabilities to find the $z$ value, or use the *Z from Probability* in the calculator to find $z$, such that:

{% include question_numerical.html
id="standnorm3"
title="3"
question_text="$z$ if $P(Z>z)=0.9826$"
correct_answer="-2.11"
tolerance="0.005"
solution_text="Use tables or calculator (one-tailed) to get -2.11"
%}

{% include question_numerical.html
id="standnorm4"
title="4"
question_text="$z$ if $P(Z<z)=0.6331$"
correct_answer="0.33"
tolerance="0.005"
solution_text="Use tables or calculator (one-tailed) to get 0.33"
%}


<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/eco/4001b/normal/" | relative_url }}">← Return to Normal Distribution Menu</a>
</div>

{% include pagination.html %}
