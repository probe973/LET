---
layout: eco4001b
title: Using the Normal Distribution
---

<div class="explanation" markdown="1">

# Using the Normal Distribution

Once we have defined a normal distribution, $X \sim N(\mu, \sigma^2)$, we often want to find the probability of a value falling within a certain range. 

There are generally two ways to find these probabilities:
1. **Standardising** the value and using **Standard Normal Tables**.
2. Using an **online calculator** or statistical software directly.

Let's look at an example: Suppose the heights of adult males in a city are normally distributed with a mean, $\mu$, of 175 cm and a standard deviation, $\sigma$, of 10 cm. 

We write this distribution as:
$$X \sim N(175, 10^2)$$

</div>

<div class="explanation" markdown="1">

## Method 1: Using Standard Normal Tables

To use standard normal tables, we must first convert our $X$ value into a $Z$ score using the standardising formula:

$$z = \frac{x - \mu}{\sigma}$$

**Example:** What is the probability that a randomly selected male is shorter than 190 cm? ($P(X < 190)$)

1. First, find the $z$-score for $x = 190$:
   $$z = \frac{190 - 175}{10} = \frac{15}{10} = 1.5$$
2. This tells us that 190 cm is exactly 1.5 standard deviations above the mean. We now want to find $P(Z < 1.5)$.
3. Looking up $z = 1.5$ in a <a href="https://math.arizona.edu/~rsims/ma464/standardnormaltable.pdf" target="_blank">standard normal table</a> gives us **0.9332**.

So, $P(X < 190) = 0.9332$.

*(Note: If you wanted to find the probability of being **taller** than 190 cm, $P(X > 190)$, you would subtract this value from 1, because the total probability under the curve is always 1. So, $1 - 0.9332 = 0.0668$).*

</div>

<div class="explanation" markdown="1">

## Method 2: Using an Online Calculator Directly

If you have an online calculator or a graphical calculator, you do not always need to standardise to $Z$ first. You can input the mean ($\mu$) and standard deviation ($\sigma$) of your specific distribution directly.

**Example:** What is the probability that a randomly selected male is taller than 165 cm? ($P(X > 165)$)

Instead of calculating the $z$-score by hand, we can use a calculator. 
1. Enter the mean $\mu = 175$.
2. Enter the standard deviation $\sigma = 10$.
3. Enter $165$ as the raw score

{% include apps/normal_dist.html %}

**Use this calculator to confirm that $P(X > 165) = 0.8413$.**

*(Note: If you had standardised this, $z = \frac{165 - 175}{10} = -1.0$. Using the symmetry of the normal tables, $P(Z > -1.0)$ is exactly the same as $P(Z < 1.0) = 0.8413$. Both methods yield the exact same result!)*

</div>

<div class="explanation" markdown="1">

## Probabilities Between Two Values

Often, you will need to find the probability that a value falls *between* two numbers, $P(a < X < b)$. To do this, find the probability of being less than the upper boundary, and subtract the probability of being less than the lower boundary:

$$P(a < X < b) = P(X < b) - P(X < a)$$

**Example:** What is the probability that a randomly selected male is between 165 cm and 190 cm? ($P(165 < X < 190)$)

**Using Tables:**
1. We already know from Method 1 that for 190 cm ($z = 1.5$), the area to the left is **0.9332**.
2. For 165 cm, $z = -1.0$. Looking this up in the tables gives an area to the left of **0.1587**.
3. Subtract the smaller area from the larger area: 
   $$0.9332 - 0.1587 = 0.7745$$

**Using the Calculator:**
Because the embedded calculator above provides basic "Less than" or "Greater than" options, you perform the exact same subtraction:
1. Enter 190 as the raw score, and hit Calculate to get **0.93319** for less than.
2. Enter 165, and hit Calculate to get **0.15865** for less than.
3. Subtract the two values yourself: $0.93319 - 0.15865 = 0.77454$.

So, $P(165 < X < 190) = 0.7745$.

</div>

### Questions

Test your understanding. The weights of a certain type of apple, $X$, are normally distributed with a mean weight of 120g and a standard deviation of 15g. 

This means $X \sim N(120, 15^2)$.

{% include question_multiple_choice.html
    id="norm_mc_1"
    title="1"
    question_text="If you wanted to standardise an apple weighing 145g to use a standard normal table, which calculation gives the correct $z$-score?"
    options="wrong1::(145 - 15) / 120||correct::(145 - 120) / 15||wrong2::(120 - 145) / 15||wrong3::(145 - 120) / 225"
    correct_answer="correct"
    solution_text="The standardising formula is $$z = \frac{x - \mu}{\sigma}$$ where \(x\) is the value, \(\mu\) is the mean, and \(\sigma\) is the standard deviation."
%}

{% include question_multiple_choice.html
    id="norm_mc_2"
    title="2"
    question_text="Without doing any complex calculations, what is $P(X < 120)$?"
    options="wrong1::1||wrong2::0||correct::0.5||wrong3::0.95"
    correct_answer="correct"
    solution_text="The normal distribution is symmetric about the mean. <br> Therefore $$P(X < \mu) = 0.5$$ Since the mean is \(120\), exactly half the distribution lies below 120."
%}

{% include question_numerical.html
    id="norm_num_1"
    title="3"
    question_text="What is the probability that a randomly chosen apple weighs less than 132g? i.e. Find $P(X < 132)$"
    correct_answer="0.7881"
    tolerance="0.0005"
    solution_text="Standardise the value. <br> $$z = \frac{132 - 120}{15}$$ $$z = \frac{12}{15} = 0.8$$ <br> Then find $$P(Z < 0.8)$$ using tables or a calculator."
%}

{% include question_numerical.html
    id="norm_num_2"
    title="4"
    question_text="What is the probability that a randomly chosen apple weighs more than 100g? i.e. Find $P(X > 100)$"
    correct_answer="0.9082"
    tolerance="0.0005"
    solution_text="First standardise. $$z = \frac{100 - 120}{15}$$ $$z = \frac{-20}{15} \approx -1.33$$ <br> Using symmetry of the normal distribution: $$P(Z > -1.33) = P(Z < 1.33)$$ <br> From tables this is approximately \(0.9082\)."
%}

{% include question_numerical.html
    id="norm_num_3"
    title="5"
    question_text="What is the probability that a randomly chosen apple weighs between 105g and 135g? i.e. Find $P(105 < X < 135)$"
    correct_answer="0.6826"
    tolerance="0.005"
    solution_text="Standardise both bounds. $$z_1 = \frac{105 - 120}{15} = -1$$ $$z_2 = \frac{135 - 120}{15} = 1$$ <br> Then compute $$P(Z < 1) - P(Z < -1)$$ $$0.8413 - 0.1587 = 0.6826$$"
%}



<div class="explanation" markdown="1">

## Working Backwards: The Inverse Normal Distribution

Sometimes we are given the probability (or percentage) and need to work backwards to find the specific value. This is known as the **inverse normal** method.

Let's look at a new example. The daily commute time, $C$, for a worker is normally distributed with a mean of 45 minutes and a standard deviation of 8 minutes.

We write this as:
$$C \sim N(45, 8^2)$$

**Example: The worker wants to know the commute time that is only exceeded 10% of the time. i.e. Find $c$ such that $P(C > c) = 0.10$.**

### Method 1: Working backwards from the Tables

If $P(C > c) = 0.10$, then the area to the *left* is $0.90$. So, $P(C < c) = 0.90$.

1. Look in the **body** (the middle) of the standard normal tables for the value closest to $0.9000$. 
2. The closest value is $0.8997$, which corresponds to a $z$-score of **1.28**. (More precise tables or calculators might give 1.2816).
3. We now rearrange the standardising formula $z = \frac{x - \mu}{\sigma}$ to solve for $x$:
   $$x = \mu + z\sigma$$
4. Substitute our values in:
   $$c = 45 + (1.28 \times 8) = 45 + 10.24 = 55.24 \text{ minutes}$$

### Method 2: Using an Inverse Normal Calculator

Most graphical calculators and online statistics tools have an **Inverse Normal** function. 
 
1. Select "Z from Probability" (or the equivalent option).
2. Enter the Probability (e.g., $0.90$ for the area to the left).
3. The calculator will directly output the z-score.
4. We now rearrange the standardising formula $z = \frac{x - \mu}{\sigma}$ to solve for $x$:
   $$x = \mu + z\sigma$$
5. Substitute our values in:
   $$c = 45 + (1.28 \times 8) = 45 + 10.24 = 55.24 \text{ minutes}$$

</div>

### Questions

Test your inverse normal skills using both the apple distribution ($X \sim N(120, 15^2)$) and the commute distribution ($C \sim N(45, 8^2)$).

{% include question_numerical.html
    id="norm_num_4"
    title="6"
    question_text="The farm wants to package the heaviest 5% of their apples as 'Jumbo' sized. Recall that $X \sim N(120, 15^2)$. What is the minimum weight required for an apple to be classified as Jumbo? (Give your answer in grams to 2 decimal places)."
    correct_answer="144.67"
    tolerance="0.1"
    solution_text="We want $$P(X > x) = 0.05$$ so $$P(X < x) = 0.95$$ <br> From standard normal tables the corresponding value is $$z \approx 1.645$$ <br> Convert back using $$x = \mu + z\sigma$$ $$x = 120 + (1.645 \times 15) = 144.675$$ <br> So the minimum Jumbo weight is approximately \(144.67\) g."
%}

{% include question_multiple_choice.html
    id="norm_mc_3"
    title="7"
    question_text="A farmer harvests a batch of 2000 apples. Based on the normal distribution $X \sim N(120, 15^2)$, approximately how many of these apples are expected to weigh more than 150g?"
    options="wrong1::150||wrong2::100||correct::46||wrong3::5"
    correct_answer="correct"
    solution_text="Standardise the value. <br> $$z = \frac{150 - 120}{15} = 2$$ <br> From tables $$P(Z < 2) = 0.9772$$ so $$P(Z > 2) = 1 - 0.9772 = 0.0228$$ <br> Expected apples: $$0.0228 \times 2000 = 45.6$$ which rounds to **46**."
%}

{% include question_numerical.html
    id="norm_num_5"
    title="8"
    question_text="The worker gets a warning if they are in the top 2% of longest commute times. What is the cut-off time for getting a warning? $C \sim N(45, 8^2)$. (Give your answer to 2 decimal places)."
    correct_answer="61.43"
    tolerance="0.1"
    solution_text="We want $$P(C > c) = 0.02$$ so $$P(C < c) = 0.98$$ <br> The corresponding standard normal value is approximately $$z \approx 2.054$$ <br> Convert back: $$c = \mu + z\sigma$$ $$c = 45 + (2.054 \times 8) = 61.43$$ minutes."
%}



### Mixed Practice

Test your understanding with some new scenarios.

{% include question_numerical.html
    id="mixed_new_1"
    title="9"
    question_text="A machine fills plastic bottles with water. The volume of water in each bottle, $V$, is normally distributed with a mean of 505 ml and a standard deviation of 2 ml. What is the probability that a randomly selected bottle contains less than the advertised 500 ml? (Give your answer to 4 decimal places)."
    correct_answer="0.0062"
    tolerance="0.0005"
    solution_text="The distribution is $$V \sim N(505,2^2)$$ <br> Standardise: $$z = \frac{500 - 505}{2} = -2.5$$ <br> Then $$P(Z < -2.5) \approx 0.0062$$"
%}

{% include question_numerical.html
    id="mixed_new_2"
    title="10"
    question_text="IQ scores in a population are modelled by a normal distribution with a mean of 100 and a standard deviation of 15. To be invited to join a high-IQ society, a person must score in the top 2% of the population. What is the minimum IQ score required? (Give your answer to 1 decimal place)."
    correct_answer="130.8"
    tolerance="0.2"
    solution_text="We want $$P(I > x) = 0.02$$ so $$P(I < x) = 0.98$$ <br> From tables $$z \approx 2.054$$ <br> Convert back: $$x = 100 + (2.054 \times 15) = 130.81$$ <br> So the required IQ is approximately \(130.8\)."
%}

{% include question_numerical.html
    id="mixed_new_3"
    title="11"
    question_text="The battery life of a particular smartphone model on a single charge is normally distributed with a mean of 24 hours and a standard deviation of 2.5 hours. What is the probability that a fully charged phone lasts between 20 and 26 hours? (Give your answer to 4 decimal places)."
    correct_answer="0.7333"
    tolerance="0.001"
    solution_text="Standardise both bounds. <br> $$z_1 = \frac{20 - 24}{2.5} = -1.6$$ $$z_2 = \frac{26 - 24}{2.5} = 0.8$$ <br> Then compute $$P(Z < 0.8) - P(Z < -1.6)$$ $$0.7881 - 0.0548 = 0.7333$$"
%}

{% include question_multiple_choice.html
    id="mixed_new_4"
    title="12"
    question_text="A factory produces metal bolts. The length of the bolts is normally distributed as $L \sim N(50, 0.5^2)$ mm. Quality control rejects any bolt that is longer than 51 mm or shorter than 49 mm. What is the probability that a randomly selected bolt is rejected?"
    options="wrong1::0.9544||correct::0.0456||wrong2::0.0228||wrong3::0.0500"
    correct_answer="correct"
    solution_text="Standardise the boundaries. <br> $$z = \frac{51 - 50}{0.5} = 2$$ $$z = \frac{49 - 50}{0.5} = -2$$ <br> Probability accepted: $$P(-2 < Z < 2) = 0.9772 - 0.0228 = 0.9544$$ <br> Probability rejected: $$1 - 0.9544 = 0.0456$$"
%}

### Question 13

From experience, it is known that the length of time customers spend on the running machine is normally distributed with a mean of 28 minutes and a standard deviation of 10 minutes.  A gym ask for volunteers to showcase the gym, but decide they will only take people who spend more than 40 minutes on the running machine.

{% include question_numerical.html
    id="normal_13a"
    title="13 a"
    question_text="Given that a member spends more than 40 minutes on the running machine, what is the probability that they spend more than 50 minutes on the running machine?  Give answer correct to 3 d.p."
    correct_answer="0.122"
    tolerance="0.001"
    solution_text="$X =$ time on running machine <br>
    $X \sim N(28, 10^2)$ <br>
    $P(X > 40) = P(Z > 1.2) = 0.115$ <br>
    $P(X > 40 \text{ AND } X > 50) = P(X > 50) = P(Z > 2.2) = 0.014$ <br>
    $P(X > 50 | X > 40) = \frac{0.014}{0.115} = 0.122$
"
%}

{% include question_numerical.html
    id="normal_13b"
    title="13 b"
    question_text="If 6 people volunteer to showcase the gym, what is the probability that less than half of them will be taken up on their offer?  Give answer correct to 3 d.p."
    correct_answer="0.977"
    tolerance="0.003"
    solution_text="Probability of being selected = $P(X>40)=0.115$ <br>
    $S = $ number of people selected <br>
    $S \sim B(6, 0.115)$ <br>
    $P(S < 3) = P(S = 0) + P(S = 1) + P(S = 2)$ <br>
    $P(S = 0) = {6 \choose 0} \times 0.115^0 \times (1 - 0.115)^6 = 0.480$ <br>
    $P(S = 1) = {6 \choose 1} \times 0.115^1 \times (1 - 0.115)^5 = 0.375$ <br>
    $P(S = 2) = {6 \choose 2} \times 0.115^2 \times (1 - 0.115)^4 = 0.122$ <br>
    $P(S < 3) = 0.977$
"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/eco/4001b/normal/" | relative_url }}">← Return to Normal Distribution Menu</a>
</div>

{% include pagination.html %}
