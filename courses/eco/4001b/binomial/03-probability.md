---
layout: eco4001b
title: Binomial Dsitribution
---

<div class="explanation" markdown="1">

# Binomal Distribution

So, if we have fixed $n$, independent trials, binary outcomes (often referred to as **success** and **fail**), and constant probability of $p$.

If $X = \text{"the number of successes"}$, then we write:

$$X \sim B(n, p)$$

You can work out the probability of **x** successes with the formula:

$$P(X=x) = {n \choose x} p^x (1-p)^{n-x}$$

The online calculator below can also do this for you.

<div class="gigacalculator" data-tool="/calculators/binomial-probability-calculator.php" data-width="450">
  <div class="gigacalctitle">Binomial Distribution Calculator</div>
  <div class="gigacalcfooter">
    <a href="https://www.gigacalculator.com/calculators/binomial-probability-calculator.php">Binomial Distribution Calculator</a> by <a class="gigacalclink" href="https://www.gigacalculator.com/">GIGAcalculator.com</a>
  </div>
</div>
<script defer src="https://cdn.gigacalculator.com/embed.min.js"></script>

Georgiev G.Z., "Binomial Distribution Calculator", [online] Available at: https://www.gigacalculator.com/calculators/binomial-probability-calculator.php


### Example

The probability that an archer hits the bull is known to be a constant 0.7.  The archer takes 5 shots.

* What is the probability that they hit the bull exactly 4 times?

$X \sim B(5, 0.7)$

$P(X = 4) = {5 \choose 4} \times 0.7^4 \times 0.3^1 = 0.360$

* What is the probability that they hit the bull 4 or more times?

$P(X \geq 4) = P(X=4)+P(X=5) = {5 \choose 4} \times 0.7^4 \times 0.3^1 + {5 \choose 5} \times 0.7^5 \times 0.3^0 = 0.528$

* What is the probability that they hit bull fewer than 4 times?

$P(X \lt 4) = 1 - P(X \geq 4) = 1 - 0.528 = 0.472$

You can also get these results by putting $p=0.7, n=5, x=4$ in the calculator above.


## Mean and Variance of a Binomial Distribution

The mean, $\mu$, or expected value $E(X)$ of a binomial distribution $X \sim (n, p)$ is given by:

$$\mu = E(X) = np$$

The variance $\sigma^2$ or $\text{Var}(X)$ is given by:

$$\sigma^2 = \text{Var}(X) = np(1-p)$$

So in the **archer example** above:

Expected hits of the bull: $\mu = 5 \times 0.7 = 3.5$

Variance: $\sigma^2 = 5 \times 0.7 \times 0.3 = 1.05$


</div>


### Questions

The “Pecs Bar & Gym” knows, from experience, that the probability that its rather old coffee vending machine works correctly with a purchase is 0.8. A customer is about to order 6 drinks.

{% include question_numerical.html
id="binomial1a"
title="1a"
question_text="What is expected number of correctly vended drinks?"
correct_answer="4.8"
tolerance="0.05"
solution_text="$6 \times 0.8$"
%}

{% include question_numerical.html
id="binomial1b"
title="1b"
question_text="What is the probability that all 6 drinks are vended correctly?  Give your answer correct to 3 decimal places."
correct_answer="0.262"
tolerance="0.0005"
solution_text="Use the online calculator or $P(D=6)={6 \choose 6} \times 0.8^6 \times 0.2^0$"
%}

{% include question_numerical.html
id="binomial1c"
title="1c"
question_text="What is the probability that exactly 4 drinks are vended correctly?  Give your answer correct to 3 decimal places."
correct_answer="0.246"
tolerance="0.0005"
solution_text="Use the online calculator or $P(D=4)={6 \choose 4} \times 0.8^4 \times 0.2^2$"
%}

{% include question_numerical.html
id="binomial1d"
title="1d"
question_text="What is the probability that there is more than 1 failed vends?  Give your answer correct to 3 decimal places."
correct_answer="0.967"
tolerance="0.0005"
solution_text="More than 1 failed means 2, 3, 4, 5, or 6 fails.  This represents 4, 3, 2, 1, or 0 successes, so looking for 4 or less successes, $P(D \leq 4) = 1-P(D>4)=1-(P(D=5)+P(D=6))$"
%}

For the discrete random variable X, such that $X \sim B(10, 0.25)$, calculate:

{% include question_numerical.html
id="binomial2a"
title="2a"
question_text="The expected value of X, $E(X)$."
correct_answer="2.5"
tolerance="0"
solution_text="$E(X) = 10 \times 0.25$"
%}

{% include question_numerical.html
id="binomial2b"
title="2b"
question_text="The variance value of X, $\text{Var}(X)$."
correct_answer="1.875"
tolerance="0"
solution_text="$E(X) = 10 \times 0.25 \times 0.75$"
%}

{% include question_numerical.html
id="binomial2c"
title="2c"
question_text="$P(X = E(X))$."
correct_answer="0"
tolerance="0"
solution_text="It is not possible for there to be a non-integer value of successes."
%}

{% include question_numerical.html
id="binomial2d"
title="2d"
question_text="$P(X \gt E(X))$, giving answer correct to 3 d.p."
correct_answer="0.474"
tolerance="0"
solution_text="This means greater than 2.5, so greater than or equal to 3.  Use online calculator or work out $P(X \geq 3) = 1 - P(X \lt 3) = 1-(P(X = 0)+P(X = 1)+P(X = 2))$"
%}


A game is played by rolling five, four-sided dice (labeled 1, 2, 3, 4).  You *win* if you roll 4 or more 4's.


{% include question_multiple_choice.html
    id="binomial3"
    title="3"
    question_text="If a gamer plays the game 10 times, what is the probability that they will *win* exactly 2 times?"
    options="a::0.966%||b::1.46%||c::1.56%||d::28.16%"
    correct_answer="a"
    solution_text="The probability of winning the game is based on the distribution G ~ B(5, 0.25) <br>
5 trials each with a probability of 0.25 <br>
$P(G \geq 4) = P(G=4) + P(G=5) = {5 \choose 4} \times 0.25^4 \times 0.75^1 + 0.25^5 = 0.0156$ <br><br>
We now have 10 trials with a probability of winning of 0.0156, so X ~ B(10, 0.0156) <br>
$P(X=2)={10 \choose 2} \times 0.0156^2 \times 0.9844^8 = 0.009657$"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/eco/4001b/binomial/" | relative_url }}">← Return to the Binomial Distribution Menu</a>
</div>

{% include pagination.html %}
