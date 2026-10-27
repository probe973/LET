---
layout: eco4001b
title: DRV Mean and Variance
---

# Mean and Variance of a Discrete Random Variable

<div class="instructions" markdown="1">

### Mean

Given a discrete random variable $X$ that can take a set of values of $x$, then the **mean** or **expected** value of $X$ is given by:

$$\mu = E(X) = \sum xP(X=x)$$

Both the symbols $\mu$ and $E(X)$ are used to represent the mean of the distribution.

### Variance

The variance of the distribution is given by:

$$\sigma^2 = \text{Var}(X) = \sum (x - \mu)^2P(X=x)$$

This can also be calculated, and is often easier to, using the formula:

$$\sigma^2 = \text{Var}(X) = \sum x^2P(X=x) - \left ( \sum xP(X=x) \right)^2$$

which is the same as:

$$\sigma^2 = \text{Var}(X) = \sum \left( x^2P(X=x) \right ) - \mu^2$$

$\sum x^2P(X=x)$ is often written $E(X^2)$


The $\sum$ symbol means **sum**, and for the discrete random variable you add up for all possible values of the discrete random variable.

**Example**

Find the mean and variance of the discrete random variable $X$ given:

| $x$ | $P(X = x)$ |
|:----|:----|
| 1 | 0.25 |
| 2 | 0.4 |
| 3 | 0.2 |
| 4 | 0.15 |

To find the mean we need:

$$\mu = \sum xP(X=x) = 1 \times 0.25 + 2 \times 0.4 + 3 \times 0.2 + 4 \times 0.15 = 0.25 + 0.8 + 0.6 + 0.6 = 2.25$$

To find the variance we can extend the table with columns for $x - \mu$ and $(x - \mu)^2P(x)$.  We know that $\mu = 2.25$.

| $x$ | $P(X = x)$ | $(x - \mu)$ | $(x - \mu)^2P(X=x)$ |
|:----|:----|:----|:----|
| 1 | 0.25 | -1.25 | 0.390625 |
| 2 | 0.4 | -0.25 | 0.025 |
| 3 | 0.2 | 0.75 | 0.1125 |
| 4 | 0.15 | 1.75 | 0.459375 |

Adding up the final column gives:

$$\sigma^2 = 0.390625+0.025+0.1125+0.459375 = 0.9875$$

Alternatively, workout $E(X^2) = \sum x^2P(X=x)$

$$E(X^2) = 1^2 \times 0.25 + 2^2 \times 0.4 + 3^2 \times 0.2 + 4^2 \times 0.15 = 6.05$$

Then subtract $\mu^2$:

$$\sigma^2 = 6.05 - 2.25^2 = 0.9875$$

</div>

### Questions

1. The “Pecs Bar & Gym” has a gambling machine available to members.  It costs £1 per play and involves 4 spinning pictures.  If there are 2, 3, or 4 matching pictures then the member wins some cash prize.  The prizes and the probability of those prizes are given below.

| Matches | Prize, £ | Probability |
|:----|:----|:----|
| 0 | 0 | 0.7 |
| 2 | 0.20 | 0.25 |
| 3 | 5 | 0.048 |
| 4 | 50 | 0.002 |

{% include question_numerical.html
id="drvmean1a"
title="1a"
question_text="What is the probability of winning a prize?  Give your answer as a decimal number between 0 and 1."
correct_answer="0.3"
tolerance="0"
solution_text="All but 0 matches win a prize so $P( \text{win})=1-0.7$"
%}

{% include question_numerical.html
id="drvmean1b"
title="1b"
question_text="What is mean prize payout per play in £?  Give your answer correct to 2 decimal places."
correct_answer="0.39"
tolerance="0.005"
solution_text="$\mu = 0 \times 0.7 + 0.2 \times 0.25 + 5 \times 0.048 + 50 \times 0.002$"
%}

{% include question_numerical.html
id="drvmean1c"
title="1c"
question_text="What is mean profit to the company per play in £"
correct_answer="0.61"
tolerance="0.005"
solution_text="Revenue from each play is £1, mean payout per play is £0.39, so $\pi = 1 - 0.39$"
%}

{% include question_numerical.html
id="drvmean1d"
title="1d"
question_text="What is variance in the prize payout per play, giving your answer correct to 2 d.p."
correct_answer="6.06"
tolerance="0.005"
solution_text="$E(X^2)=0^2 \times 0.7 + 0.2^2 \times 0.25 + 5^2 \times 0.048 + 50^2 \times 0.002 = 6.21$ <br>
$Var (X)=6.21 - 0.39^2=6.0579$"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/eco/4001b/drv/" | relative_url }}">← Return to Discrete Random Variables Menu</a>
</div>

{% include pagination.html %}
