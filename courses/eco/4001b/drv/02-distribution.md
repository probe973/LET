---
layout: eco4001b
title: DRV Distribution
---

<div class="instructions" markdown="1">

# Discrete Random Variable Probability Distribution

The **probability distribution** of a discrete random variable shows all of the possible outcomes along with its associated probability.

**The sum of the probabilities will be 1**

If $X$ is a discrete random variable then:

$P(X=1)$ means the probability that the random variable $X$ takes on the value 1.  You may also see this written as simply $P(1)$.

$P(X<5)$ means the probability that the random variable $X$ takes on a value less than 5.

</div>

### Questions

{% capture drvdistribution1 %}
<table class="table table-bordered">
  <thead>
    <tr>
    <th scope="col">x</th>
    <th scope="col">P(X=x)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>0.2</td>
    </tr>
    <tr>
      <td>2</td>
      <td>0.4</td>
    </tr>
    <tr>
      <td>3</td>
      <td>0.25</td>
    </tr>
    <tr>
      <td>4</td>
      <td><input type="number" step="any" aria-label="Probability that X is 4"></td>
    </tr>
  </tbody>
</table>
{% endcapture %}

**Question 1** refers to the discrete random variable $X$, which can take on values of $x = {1, 2, 3, 4}$.  Its probability distribution looks like:

| $x$ | $P(X=x)$ |
|:----|:----|
| 1 | 0.2 |
| 2 | 0.4 |
| 3 | 0.25 |
| 4 | ? |

{% include table_fill.html 
   id="drvdistribution1a" 
   title="1a"
   question_text="Complete the table for the probability distribution of the discrete random variable X."
   table_content=drvdistribution1
   answers="0.15"
   tolerance="0.001" 
   solution_text="The total probability must sum to 1."
%}

{% include question_numerical.html
id="drvdistribution1b"
title="1b"
question_text="What is P(X < 3)?"
correct_answer="0.6"
tolerance="0"
solution_text="The value can be 1 or 2, with probabilities of 0.2 and 0.4."
%}


**Question 2** refers to the discrete random variable $Y$, which can take on values of $y = {0, 1, 2, 3, 4}$.  Its probability distribution looks like:

| $y$ | $P(Y=y)$ |
|:----|:----|
| 0 | ? |
| 1 | 0.12 |
| 2 | 0.22 |
| 3 | 0.15 |
| 4 | ? |

It is known that $P(Y = 0) = 2P(Y = 4)$

{% capture drvdistribution2 %}
<table class="table table-bordered">
  <thead>
    <tr>
    <th scope="col">y</th>
    <th scope="col">P(Y=y)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td><input type="number" step="any" aria-label="Probability that Y is 0"></td>
    </tr>
    <tr>
      <td>1</td>
      <td>0.12</td>
    </tr>
    <tr>
      <td>2</td>
      <td>0.22</td>
    </tr>
    <tr>
      <td>3</td>
      <td>0.15</td>
    </tr>
    <tr>
      <td>4</td>
      <td><input type="number" step="any" aria-label="Probability that Y is 4"></td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% include table_fill.html 
   id="drvdistributionq2" 
   title="2"
   question_text="Complete the table for the probability distribution of the discrete random variable Y."
   table_content=drvdistribution2
   answers="0.34 || 0.17"
   tolerance="0.001" 
   solution_text="The total probability must sum to 1.  Set probability of Y equals 4 as p, then probability of Y equals 0 is 2p <br>
   $2p + 0.12 + 0.22 + 0.15 + p = 1$ <br>
    $3p = 0.51$ <br>
  $p = 0.17$ <br>
  $2p = 0.34$"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/eco/4001b/drv/" | relative_url }}">← Return to Discete Random Variables Menu</a>
</div>

{% include pagination.html %}
