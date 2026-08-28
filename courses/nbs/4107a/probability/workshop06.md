---
layout: nbs4107a
title: Normal Distribution
---

# The Normal Distribution

## Understanding The Shape

### Question 1

These questions concern the standard normal distribution, Z, which has a mean $\mu = 0$ and a variance $\sigma^2 = 1$, so you can write $Z \sim N(0,1)$.

You will also consider the distribution of the length of donkey's tails, $D \sim N(35,16)$, that is the normal distribution with mean $\mu = 35 \text{ cm}$ and variance $\sigma^2 = 16 \text{ cm}^2$

No tables or calculators are required for this first question.

#### Question 1a

Given the following information $P(Z<0)=0.5$ and diagram:

{% include svg/nbs4107a/workshop06/q1a.html %}

{% include question_numerical.html
    id="nbsrjw06q1ai"
    title="1a i"
    question_text="What is the numerical value of $x$ in the diagram?"
    correct_answer="35"
    tolerance="0.05"
    solution_text="Due to symettry, the middle of the distribution is the mean value, which is 35"
%}

{% include question_numerical.html
    id="nbsrjw06q1aii"
    title="1a ii"
    question_text="What is $P(D < x)$"
    correct_answer="0.5"
    tolerance="0.05"
    solution_text="Half of the area is less than the mean, so $P(D<35)=0.5$"
%}

#### Question 1b

Given the following diagram for the standard normal and the donkey tails:

{% include svg/nbs4107a/workshop06/q1b.html %}

{% include question_numerical.html
    id="nbsrjw06q1bi"
    title="1b i"
    question_text="What is the $P(Z>0)$?"
    correct_answer="0.5"
    tolerance="0.05"
    solution_text="Half of the data will be above the mean of 0."
%}

{% include question_numerical.html
    id="nbsrjw06q1bii"
    title="1b ii"
    question_text="What is the numerical value of $x$ in the diagram?"
    correct_answer="35"
    tolerance="0.05"
    solution_text="Due to symettry, the middle of the distribution is the mean value, which is 35"
%}

{% include question_expression.html
    id="nbsrjw06q1biii"
    title="1b iii"
    question_text="Write the correct probability statement using D for the donkey tail variable, the correct value of x and the correct probability (i.e. something that looks like $P(D>40)=0.7$)"
    correct_answer="P(D>35)=0.5"
    solution_text="Use P for probability, D for donkey tail, and note the mean of 35 and a probability of 0.5"
%}

#### Question 1c

Given the following diagram:

{% include svg/nbs4107a/workshop06/q1c.html %}

{% include question_numerical.html
    id="nbsrjw06q1ci"
    title="1c i"
    question_text="What is the approximate value of $P(Z>-4)$?"
    correct_answer="1"
    tolerance="0.01"
    solution_text="Nearly all of the area is shaded, we can approximate this area with the value of 1"
%}

{% include question_numerical.html
    id="nbsrjw06q1cii"
    title="1c ii"
    question_text="What is the numerical value of $x$ in the diagram?"
    correct_answer="19"
    tolerance="0.05"
    solution_text="This is the equivalent of 4 standard deviations below the mean, so $35 - 4 \times \sqrt{16} = 35 - 4 \times 4 = 35 - 16 = 19$"
%}

{% include question_expression.html
    id="nbsrjw06q1ciii"
    title="1c iii"
    question_text="Write the correct probability statement using D for the donkey tail variable, the correct value of x and the correct probability (i.e. something that looks like $P(D>40)=0.7$)"
    correct_answer="P(D>19)=1"
    solution_text="Use P for probability, D for donkey tail, and note the x value of 19 and a probability of 1"
%}

#### Question 1d

Given the following diagram and using all information so far collected in previous questions:

{% include svg/nbs4107a/workshop06/q1d.html %}


{% include question_numerical.html
    id="nbsrjw06q1di"
    title="1d i"
    question_text="Give the value of $z$ such that $P(Z>z) \approx 0$"
    correct_answer="4"
    tolerance="0.01"
    solution_text="Values exceeding 4 give close to no area."
%}

{% include question_expression.html
    id="nbsrjw06q1dii"
    title="1d ii"
    question_text="Write the correct equivalent probability statement for D (use equals for the probability)."
    correct_answer="P(D>51)=0"
    solution_text="The equivalent value of $z=4$ would be 4 standard deviations above the mean, so $d = 35 + 4 \times 4 = 51$, $P(D>51)=0$"
%}

#### Question 1e

Given the following diagram that shows $P(Z<0.8) = 0.788$:

{% include svg/nbs4107a/workshop06/q1e.html %}

{% include question_numerical.html
    id="nbsrjw06q1ei"
    title="1e i"
    question_text="What is the numerical value of $x$ in the diagram?"
    correct_answer="38.2"
    tolerance="0.05"
    solution_text="This is the equivalent of 0.8 standard deviations above the mean, so $35 + 0.8 \times 4 = 35 + 3.2 = 38.2$"
%}

{% include question_numerical.html
    id="nbsrjw06q1eii"
    title="1e ii"
    question_text="What is the numerical value $P(D < x)$?"
    correct_answer="0.788"
    tolerance="0.00005"
    solution_text="P(D < 38.2) = P(Z < 0.8) = 0.788"
%}

{% include question_numerical.html
    id="nbsrjw06q1eiii"
    title="1e iii"
    question_text="What is the numerical value $P(Z > 0.8)$?"
    correct_answer="0.212"
    tolerance="0.0005"
    solution_text="The probabilities total 1, so $P(Z > 0.8) = 1 - P(Z < 0.8) = 1-0.788 = 0.212$"
%}

{% include question_numerical.html
    id="nbsrjw06q1eiv"
    title="1e iv"
    question_text="What is the numerical value $P(D > x)$?"
    correct_answer="0.212"
    tolerance="0.0005"
    solution_text="$P(D > 38.2) = P(Z > 0.8) = 0.212$"
%}

#### Question 1f

Given the following diagram showing $P(Z < a) = 0.212$, and information from question 1e:

{% include svg/nbs4107a/workshop06/q1f.html %}

{% include question_numerical.html
    id="nbsrjw06q1fi"
    title="1f i"
    question_text="What is the numerical value of $a$ in the diagram?"
    correct_answer="-0.8"
    tolerance="0.05"
    solution_text="In the previous question you had $P(Z>0.8)=0.212$, so by the symettry of the distribution $P(Z<-0.8)=0.212$"
%}

{% include question_numerical.html
    id="nbsrjw06q1fii"
    title="1f ii"
    question_text="What is the numerical value of $x$ in the diagram?"
    correct_answer="31.8"
    tolerance="0.05"
    solution_text="This is the equivalent of 0.8 standard deviations below the mean, so $35 - 0.8 \times 4 = 35 - 3.2 = 31.8$"
%}

#### Question 1g

Given the following diagram showing $P(-0.8 < Z < 0.8)$ and the equivalent donkey info, as well as information from previous questions.

{% include svg/nbs4107a/workshop06/q1g.html %}

{% include question_numerical.html
    id="nbsrjw06q1gi"
    title="1g i"
    question_text="What is the numerical value the area shown, $P(-0.8 < Z < 0.8)$?"
    correct_answer="0.576"
    tolerance="0.0005"
    solution_text="You have the information $P(Z < 0.8) = 0.788$ and $P(Z < -0.8) = 0.212$. The probability in question is the difference in these areas:

$$P(-0.8 < Z < 0.8) = P(Z < 0.8) - P(Z < -0.8) = 0.788 - 0.212 = 0.576$$"
%}

{% include question_expression.html
    id="nbsrjw06q1gii"
    title="1g ii"
    question_text="Write the correct equivalent probability statement for D."
    correct_answer="P(31.8 < D < 38.2) = 0.576"
    solution_text="Using calculated d values earlier of 31.8 and 38.2, the 0.576 area will be the probability between these two values.
"
%}


## Standardising


<div class="explanation" markdown="1">

The standard normal distribution, $Z$, has mean 0 and variance 1, $Z \sim N(0,1)$.

The $z$-score will represent the number of standard deviations the value is from the mean. This standard measure can be useful when comparing scores from different distributions. To convert a raw score, $x$, from a normal distribution that has mean $\mu$ and variance $\sigma^2$, so $X \sim N(\mu, \sigma^2)$, you can use the following formula:

$$z = \frac{x-\mu}{\sigma}$$

To convert a standardised score back to a raw score, you can rearrange the formula:

$$x = \mu + z \sigma$$

Standard tables can be used to calculate probabilities associated with the standard normal distribution. Therefore converting a raw score to a standard score allows you to calculate probabilities. So, for example, if a raw score of $x_1$ is standardised into a score of $z_1$, then

$$P(X < x_1) = P(Z < z_1)$$

</div>

{% capture nbsw06q2table %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Distribution</th>
      <th scope="col">$x$-value</th>
      <th scope="col">$z$-score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$X \sim N(30,25)$</td>
      <td>35</td>
      <td><input type="number" step="any" aria-label="z score for the given x score"></td>
    </tr>
    <tr>
     <td>$X \sim N(20,25)$</td>
      <td>20</td>
      <td><input type="number" step="any" aria-label="z score for the given x score"></td>
    </tr>
    <tr>
     <td>$X \sim N(100,256)$</td>
      <td><input type="number" step="any" aria-label="x score for the given z score"></td>
      <td>1.5</td>
    </tr>
    <tr>
     <td>$X \sim N(100,256)$</td>
      <td>140</td>
      <td><input type="number" step="any" aria-label="z score for the given x score"></td>
    </tr>
    <tr>
      <td>$X \sim N(50, 6^2)$</td>
      <td>29</td>
      <td><input type="number" step="any" aria-label="z score for the given x score"></td>
    </tr>
  </tbody>
</table>
{% endcapture %}

### Question 2

{% include table_fill.html 
   id="nbsrjw06q2a" 
   title="2"
   question_text="Calculate the standardised score $z$ and the destandardised score $x$ for each of the distributions below"
   table_content=nbsw06q2table
   answers=" 1 || -2 || 124 || 2.5 || -3.5 "
   tolerance="0.01" 
   solution_text="Use the formulas to convert $z$ to $x$ and $x$ to $z$."
%}

## Using the Normal Distribution

The following calculator may be useful:

{% include apps/normal_dist.html %}


### Question 3

For each of the questions, about normal distributions $X \sim (\mu, \sigma^2)$, below you will be asked to:

- Write the equivalent expression for the standard normal distribution, i.e. enter something like $P(Z < 1.2)$
- Draw a sketch for both the original distribution and the standard normal distribution that shows the required area
- Calculate the probability, using tables or calculators

#### Question 3a

Given $X \sim (80, 25)$:

{% include question_expression.html
    id="nbsrjw06q3ai"
    title="3a i"
    question_text="Write the correct equivalent probability statement for $Z$ of $P(X < 85)$."
    correct_answer="P(Z<1)"
    solution_text="Standardising the score of 85 (mean 80 standard deviation 5) gives a z-score of 1."
%}

{% include question_dropdown.html 
    id="nbsrjw06q3aii" 
    title="3a ii" 
    question_text="Draw sketches to show this probability on the $X$ distribution and on the $Z$ distribution"
    solution_text="Draw the area to the left of $x=85$ and $z=1$"
    solution_image="/courses/nbs/4107a/probability/images/nbsw06q3aii.svg" 
    image_alt="Side by side images, with the x distribution on the left, normal shape with the area of x less than 85 shaded. The equivalent graph for z less than 1 is shown next to this."
%}

{% include question_numerical.html
    id="nbsrjw06q3aiii"
    title="3a iii"
    question_text="To 3 decimal places what is $P(X < 85)$?"
    correct_answer="0.841"
    tolerance="0.0006"
    solution_text="Using either standard normal tables for $P(Z < 1)$ or calculators, should yield 0.841 as the required probability."
%}

{% include question_expression.html
    id="nbsrjw06q3aiv"
    title="3a iv"
    question_text="Write the correct equivalent probability statement for $Z$ of $P(X > 70)$."
    correct_answer="P(Z>-2)"
    solution_text="Standardising the score of 70 (mean 80 standard deviation 5) gives a z-score of -2."
%}

{% include question_dropdown.html 
    id="nbsrjw06q3av" 
    title="3a v" 
    question_text="Draw sketches to show this probability on the $X$ distribution and on the $Z$ distribution"
    solution_text="Draw the area to the right of $x=70$ and $z=-2$"
    solution_image="/courses/nbs/4107a/probability/images/nbsw06q3av.svg" 
    image_alt="Side by side images, with the x distribution on the left, normal shape with the area of x more than 70 shaded. The equivalent graph for z more than  minus 2 is shown next to this."
%}

{% include question_numerical.html
    id="nbsrjw06q3avi"
    title="3a vi"
    question_text="To 3 decimal places what is $P(X > 70)$?"
    correct_answer="0.977"
    tolerance="0.0006"
    solution_text="Using either standard normal tables for $P(Z > -2)$ or calculators, should yield 0.977 as the required probability."
%}

{% include question_expression.html
    id="nbsrjw06q3avii"
    title="3a vii"
    question_text="Write the correct equivalent probability statement for $Z$ of $P(78 < X < 82)$."
    correct_answer="P(-0.4 < Z < 0.4)"
    solution_text="Standardising the score of 78 (mean 80 standard deviation 5) gives a z-score of -0.4 and the 82 gives 0.4."
%}

{% include question_dropdown.html 
    id="nbsrjw06q3aviii" 
    title="3a viii" 
    question_text="Draw sketches to show this probability on the $X$ distribution and on the $Z$ distribution"
    solution_text="Draw the area between $x=78$ and $x = 82$.  For the standard normal between $z=-0.4$ and $z=0.4$"
    solution_image="/courses/nbs/4107a/probability/images/nbsw06q3aviii.svg" 
    image_alt="Side by side images, with the x distribution on the left, normal shape with the area between 78 and 82 shaded. The equivalent graph for z minus 0.4 to 0.4 is shaded."
%}

{% include question_numerical.html
    id="nbsrjw06q3aix"
    title="3a ix"
    question_text="To 3 decimal places what is $P(78 < X < 82)$?"
    correct_answer="0.311"
    tolerance="0.0015"
    solution_text="$P(X < 82) = 0.6554$ and $P(X < 78) = 0.3446$

$$P(78 < X < 82) = 0.6554 - 0.3446 = 0.311$$"
%}


#### Question 3b

Given $X \sim (150, 156.25)$:

{% include question_expression.html
    id="nbsrjw06q3bi"
    title="3b i"
    question_text="Write the correct equivalent probability statement for $Z$ of $P(X < 143.75)$."
    correct_answer="P(Z<-0.5)"
    solution_text="Standardising the score of 143.75 (mean 150 standard deviation 12.5) gives a z-score of -0.5."
%}

{% include question_dropdown.html 
    id="nbsrjw06q3bii" 
    title="3b ii" 
    question_text="Draw sketches to show this probability on the $X$ distribution and on the $Z$ distribution"
    solution_text="Draw the area to the left of $x=143.75$ and $z=-0.5$"
    solution_image="/courses/nbs/4107a/probability/images/nbsw06q3bii.svg" 
    image_alt="Side by side images, with the x distribution on the left, normal shape with the area of x less than 143.75 shaded. The equivalent graph for z less than minus 0.5 is shown next to this."
%}

{% include question_numerical.html
    id="nbsrjw06q3biii"
    title="3b iii"
    question_text="To 3 decimal places what is $P(X < 143.75)$?"
    correct_answer="0.309"
    tolerance="0.0006"
    solution_text="Using either standard normal tables for $P(Z < -0.5)$ or calculators, should yield 0.309 as the required probability."
%}

{% include question_expression.html
    id="nbsrjw06qbaiv"
    title="3b iv"
    question_text="Write the correct equivalent probability statement for $Z$ of $P(X > 180)$."
    correct_answer="P(Z>2.4)"
    solution_text="Standardising the score of 180 (mean 150 standard deviation 12.5) gives a z-score of 2.4."
%}

{% include question_dropdown.html 
    id="nbsrjw06q3bv" 
    title="3b v" 
    question_text="Draw sketches to show this probability on the $X$ distribution and on the $Z$ distribution"
    solution_text="Draw the area to the right of $x=180$ and $z=2.4$"
    solution_image="/courses/nbs/4107a/probability/images/nbsw06q3bv.svg" 
    image_alt="Side by side images, with the x distribution on the left, normal shape with the area of x more than 180 shaded. The equivalent graph for z more than 2.4 is shown next to this."
%}

{% include question_numerical.html
    id="nbsrjw06q3bvi"
    title="3b vi"
    question_text="To 3 decimal places what is $P(X > 180)$?"
    correct_answer="0.008"
    tolerance="0.0006"
    solution_text="Using either standard normal tables for $P(Z > 2.4)$ or calculators, should yield 0.008 as the required probability."
%}

{% include question_expression.html
    id="nbsrjw06q3bvii"
    title="3a vii"
    question_text="Write the correct equivalent probability statement for $Z$ of $P(145 < X < 170)$."
    correct_answer="P(-0.4 < Z < 1.6)"
    solution_text="Standardising the score of 145 (mean 80 standard deviation 5) gives a z-score of -0.4 and the 170 gives 1.6."
%}

{% include question_dropdown.html 
    id="nbsrjw06q3bviii" 
    title="3a viii" 
    question_text="Draw sketches to show this probability on the $X$ distribution and on the $Z$ distribution"
    solution_text="Draw the area between $x=145$ and $x = 170$.  For the standard normal between $z=-0.4$ and $z=1.6$"
    solution_image="/courses/nbs/4107a/probability/images/nbsw06q3bviii.svg" 
    image_alt="Side by side images, with the x distribution on the left, normal shape with the area between 145 and 170 shaded. The equivalent graph for z minus 0.4 to 1.6 is shaded."
%}

{% include question_numerical.html
    id="nbsrjw06q3bix"
    title="3a ix"
    question_text="To 3 decimal places what is $P(145 < X < 170)$?"
    correct_answer="0.6"
    tolerance="0.001"
    solution_text="$P(Z < 1.6) = 0.9452$ and $P(Z < -0.4) = 0.3446$

$$P(145 < X < 170) = 0.9452 - 0.3446 = 0.6$$"
%}

### Question 4

Given the information about the population distribution, find the values that are represented by the following probabilities/proportions. **Give your answers correct to 1 decimal place**.

#### Question 4a

Given $X \sim N(100,16)$

{% include question_numerical.html
    id="nbsrjw06q4ai"
    title="4a i"
    question_text="What is the value of $r$ such that $P(X < r) = 0.9772$?"
    correct_answer="108"
    tolerance="0.2"
    solution_text="Using either standard normal tables gives a standardised value of $z \approx 2$. Destandardise this gives $x = 100 + 2*4 = 108$"
%}

{% include question_numerical.html
    id="nbsrjw06q4aii"
    title="4a ii"
    question_text="What is the value of $s$ such that $P(X > s) = 0.9772$?"
    correct_answer="92"
    tolerance="0.2"
    solution_text="Using either standard normal tables, using a probability of less than $1-0.9772 = 0.0228$ gives a standardised value of $z \approx -2$. Destandardise this gives $x = 100 - 2*4 = 92$"
%}

{% include question_numerical.html
    id="nbsrjw06q4aii"
    title="4a ii"
    question_text="What is the value of $t$ such that $P(X < t) = 0.35$?"
    correct_answer="98.5"
    tolerance="0.2"
    solution_text="Using tables or calculator should yield a result of $z \approx -.4$ or $x \approx 98.5$, from calculator.  Answers in this area accepted."
%}

#### Question 4b

Given $X \sim N(20,4)$

{% include question_numerical.html
    id="nbsrjw06q4bi"
    title="4b i"
    question_text="What is the value of $r$ such that $P(X < r) = 0.9772$?"
    correct_answer="24"
    tolerance="0.2"
    solution_text="Using either standard normal tables gives a standardised value of $z \approx 2$. Destandardise this gives $x = 20 + 2*2 = 24$"
%}

{% include question_numerical.html
    id="nbsrjw06q4bii"
    title="4b ii"
    question_text="What is the value of $t$ such that $P(X > t) = 65\%$?"
    correct_answer="19.2"
    tolerance="0.2"
    solution_text="Using the calculator, with a less than probability of $0.35$ $(100-65)\%$, gives a values of 19.2"
%}

### Question 5

A hot drinks machine is known to dispense liquid in a volume that is normally distributed with a mean of 250 ml and a standard deviation of 5 ml, so $V \sim N(250,25)$.

{% include question_numerical.html
    id="nbsrjw06q5a"
    title="5a"
    question_text="What proportion of drinks are expected to be dispensed that are over 254 ml? Give your answer as a decimal between 0 and 1, correct to 4 decimal places."
    correct_answer="0.2119"
    tolerance="0.00006"
    solution_text="Using either standard normal tables gives a standardised value of $z = 0.8$, gives a probability of 0.2119."
%}

{% include question_numerical.html
    id="nbsrjw06q5b"
    title="5b"
    question_text="What proportion of drinks are expected to be under 246 ml in volume? Give your answer as a decimal between 0 and 1, correct to 4 decimal places."
    correct_answer="0.2119"
    tolerance="0.00006"
    solution_text="Using either standard normal tables gives a standardised value of $z = -0.8$, gives a probability of 0.212."
%}

{% include question_numerical.html
    id="nbsrjw06q5c"
    title="5c"
    question_text="Use your answers and sketches to parts a and b to work out the probability that a drink is dispensed that is between 246 ml and 254 ml. Give your answer as a decimal between 0 and 1, correct to 4 decimal places."
    correct_answer="0.5762"
    tolerance="0.0006"
    solution_text="$$P(V<254) = 1-0.2119 = 0.7881$$

$$P(246 < V < 254) = P(V<254) - P(V<246) = 0.7881 - 0.2119 = 0.5762$$"
%}

{% include question_numerical.html
    id="nbsrjw06q5d"
    title="5d"
    question_text="What volume are 75% of drinks less than? Give your answer correct to 1 decimal place."
    correct_answer="253.4"
    tolerance="0.06"
    solution_text="Using a probability of 0.75 gives a standardised score $z = 0.674$, which gives $v = 253.4$."
%}

{% include question_numerical.html
    id="nbsrjw06q5e"
    title="5e"
    question_text="You find that your cup overflows 2% of the time. How big is your cup? Give your answer correct to 1 decimal place."
    correct_answer="260.3"
    tolerance="0.06"
    solution_text="Using a probability of 0.98, as it will be under this value 98% of the time gives a standardised score $z = 2.054$, which gives $v = 260.3$."
%}


<script src="https://unpkg.com/mathlive"></script>
<script src="https://unpkg.com/@cortex-js/compute-engine"></script>
