---
layout: eco4001b
title: t tests
---

# Hypothesis Testing and t-Tests

<div class="explanation" markdown="1">

This workshop will help you to understand hypothesis testing for one- and two-tailed tests, form the null and alternative hypotheses, and test them. It also looks at carrying out t-tests, you will need access to critical values of the t-statistic tables. 

Click <a href="/LET/assets/apps/ttable" target="_blank">here</a> to get a the **one-tailed critical values t table**. 

## Useful Formulae

Pooled Variance, assuming equal variances:

$$s^2_{\text{pooled}}=\frac{(n_1-1)s^2_1+(n_2-1)s^2}{n_1+n_2-2}$$

One-sample t-test:

$$t=\frac{\bar{x}-\mu}{\frac{s}{\sqrt{n}}}$$

Two-sample t-test, assuming equal variances:

$$t=\frac{\bar{x}_1-\bar{x}_2}{s_p \sqrt{ \left ( \frac{1}{n_1}+\frac{1}{n_2}\right )}}$$

</div>

### Question 1

Decide whether the following requires the use of a one-tailed or two-tailed test

{% include question_multiple_choice.html
    id="t1a"
    title="1 a"
    question_text="To test whether there has been a change in the proportion of cats that prefer a cat food brand"
    options="one::One-tail||two::Two-tail"
    correct_answer="two"
    solution_text="Change indicates preference could increase or decrease, so two-tailed"
%}

{% include question_multiple_choice.html
    id="t1b"
    title="1 b"
    question_text="To test whether there is a difference in shot accuracy of right-handed vs left-handed pool players"
    options="one::One-tail||two::Two-tail"
    correct_answer="two"
    solution_text="Difference indicates preference could increase or decrease, so two-tailed"
%}

{% include question_multiple_choice.html
    id="t1c"
    title="1 c"
    question_text="To test whether a new road safety scheme has decreased the number of road accidents"
    options="one::One-tail||two::Two-tail"
    correct_answer="one"
    solution_text="Decreased number of accidents only, so one-tailed"
%}

### Question 2

A farmer test whether the mass of their strawberries is increased by using some magic growth formula. The known mean of the farmer’s strawberries is 12 g each. A sample of strawberry plants is given the magic formula and a one-sample t-test is then carried out to see if the mean of the sample gives evidence of the formula working.

{% include question_multiple_choice.html
    id="t2a"
    title="2 a"
    question_text="Write down the null hypothesis of the one-sample t-test"
    options="eq::$H_0:  \mu = 12$||neq::$H_0: \mu \neq 12$||gt::$H_0: \mu > 12$||lt::$H_0: \mu < 12$"
    correct_answer="eq"
    solution_text="Null: The mean mass of the strawberries is 12 g"
%}

{% include question_multiple_choice.html
    id="t2b"
    title="2 b"
    question_text="Write down the alternative hypothesis of the one-sample t-test"
    options="eq::$H_1: \mu = 12$||neq::$H_1: \mu \neq 12$||gt::$H_1: \mu > 12$||lt::$H_1: \mu < 12$"
    correct_answer="gt"
    solution_text="Alternative: The mean mass of the strawberries is greater than 12 g"
%}

{% include question_multiple_choice.html
    id="t2c"
    title="2 c"
    question_text="The test does not find evidence that the formula increases the size of the strawberries, and so the farmer disposes of the remaining formula (in an environmentally friendly way). It becomes clear that the magic formula indeed works. Is this an example of a type I or type II error in the statistical test?"
    options="one::Type-I||two::Type-II"
    correct_answer="two"
    solution_text="In this example the null hypothesis was not rejected when the null hypothesis was false. Therefore, it is a Type II Error"
%}


### Question 3

A lecturer believes that the mean IQ of the students in this year is higher than the mean value of 100. She gives a sample of the students an IQ test and gets a sample mean of 111. A one-sample t-test is then performed to see if this sample mean shows evidence at the 5% level of a mean greater than 100. The test gives p = 0.0477.


{% include question_multiple_choice.html
    id="t3a"
    title="3 a"
    question_text="What are the null and alternative hypotheses?"
    options="eq::$H_0:  \mu = 100 ; H_1: \mu = 100 $||neq::$H_0:  \mu = 100 ; H_1: \mu \neq 100 $||gt::$H_0:  \mu = 100 ; H_1: \mu > 100 $||lt::$H_0:  \mu = 100 ; H_1: \mu < 100 $"
    correct_answer="gt"
    solution_text="Testing for an increase in the mean"
%}

{% include question_multiple_choice.html
    id="t3b"
    title="3 b"
    question_text="Is there evidence, at the 5% level, of there being a higher than 100 mean IQ score?"
    options="yes::Yes||no::No"
    correct_answer="yes"
    solution_text="The p-value is less than 5% (4.77%). Therefore, we would reject the null hypothesis at the 5% level, and state there is evidence of mean IQ being greater than 100."
%}

{% include question_multiple_choice.html
    id="t3c"
    title="3 c"
    question_text="Is there evidence, at the 1% level, of there being a higher than 100 mean IQ score?"
    options="yes::Yes||no::No"
    correct_answer="no"
    solution_text="The p-value is not less that 1%. We do not have evidence at the 1% level."
%}

### Question 4

A local council believes that a road safety campaign has reduced the number of traffic incidents on a particular stretch of road. Historically the mean number of incidents per week was 9.

{% include question_multiple_choice.html
    id="t4a"
    title="4 a"
    question_text="What are the null and alternative hypotheses?"
    options="eq::$H_0:  \mu = 9 ; H_1: \mu = 9 $||neq::$H_0:  \mu = 9 ; H_1: \mu \neq 9 $||gt::$H_0:  \mu = 9 ; H_1: \mu > 9 $||lt::$H_0:  \mu = 9 ; H_1: \mu < 9 $"
    correct_answer="lt"
    solution_text="Testing for an decrease in the mean"
%}

Over a **10-week period**, after the road safety campaign, the mean number of accidents is recorded at **7.3** per week, with a sample variance of **3.2**.

Test the hypothesis, using a one-sample t-test, that you have set up at the 5% level.

{% include question_numerical.html
    id="t4bi"
    title="4b i"
    question_text="What is the value of the t-statistic? If you get a negative answer, just give the numerical part without the minus in the box below."
    correct_answer="3"
    tolerance="0.5"
    solution_text="$t=\frac{7.3-9}{\sqrt{\frac{3.2}{10}}}=-3$"
%}


{% include question_numerical.html
    id="t4bii"
    title="4b ii"
    question_text="How many degrees of freedom are there?"
    correct_answer="9"
    tolerance="0"
    solution_text="$df=n-1=10-1=9$"
%}

{% include question_numerical.html
    id="t4biii"
    title="4b iii"
    question_text="Use tables to determine the critical value of t for testing at the 5% level.  Give answer to 3 decimal places."
    correct_answer="1.833"
    tolerance="0.0005"
    solution_text="Use tables with 9 df and one-tailed at 5%"
%}

{% include question_multiple_choice.html
    id="t4biv"
    title="4 b iv"
    question_text="Is there evidence, at the 5% level, of the scheme reducing road accidents?"
    options="yes::Yes||no::No"
    correct_answer="yes"
    solution_text="Since 3 exceeds the critical value, we will reject the null hypothesis. There is evidence that the scheme has reduced the number of accidents."
%}


### Question 5

Samples of worms from two different sites are collected. Their lengths are measured before returning them to the wild. A two-sample t-test, assuming equal variances, is carried out to test for a difference in worm length between the two sites. The test was carried out using Microsoft Excel and the following was generated:

<table role="table" aria-describedby="table-desc">
  <caption id="table-desc">
    Two-sample t-test assuming equal variances for worm length at Site 1 and Site 2
  </caption>

  <thead>
    <tr>
      <th scope="col">Measure</th>
      <th scope="col">Site 1</th>
      <th scope="col">Site 2</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Mean</th>
      <td>50.9</td>
      <td>48.2</td>
    </tr>
    <tr>
      <th scope="row">Variance</th>
      <td>4.999</td>
      <td>9.874</td>
    </tr>
    <tr>
      <th scope="row">Observations</th>
      <td>10</td>
      <td>14</td>
    </tr>

    <tr>
      <th scope="row">Pooled Variance</th>
      <td>7.88</td>
      <td aria-hidden="true"></td>
    </tr>
    <tr>
      <th scope="row">Degrees of Freedom (df)</th>
      <td>22</td>
      <td aria-hidden="true"></td>
    </tr>
    <tr>
      <th scope="row">t Statistic</th>
      <td>2.31</td>
      <td aria-hidden="true"></td>
    </tr>
    <tr>
      <th scope="row">P(T ≤ t) one-tail</th>
      <td>0.015</td>
      <td aria-hidden="true"></td>
    </tr>
    <tr>
      <th scope="row">P(T ≤ t) two-tail</th>
      <td>0.031</td>
      <td aria-hidden="true"></td>
    </tr>
  </tbody>
</table>

{% include question_numerical.html
    id="t5a"
    title="5 a"
    question_text="What is the total sample size?"
    correct_answer="24"
    tolerance="0"
    solution_text="$n_1=10, n_2=14$"
%}

{% include question_dropdown.html
    id="t5bi"
    title="5 b i"
    question_text="Verify, showing your calculations, the degrees of freedom"
    solution_text="$df=10+14-2=22$"
%}

{% include question_dropdown.html
    id="t5bii"
    title="5 b ii"
    question_text="Verify, showing your calculations, the pooled variance"
    solution_text="$\frac{(10-1) \times 4.999 + (14-1) \times9.874}{10+14-2}=7.88$"
%}

{% include question_dropdown.html
    id="t5biii"
    title="5 b iii"
    question_text="Verify, showing your calculations, the t statistic"
    solution_text="$t=\frac{50.9-48.2}{\sqrt{7.88}\sqrt{\left( \frac{1}{10} + \frac{1}{14} \right)}}=2.32$"
%}

{% include question_multiple_choice.html
    id="t5ci"
    title="5 c i"
    question_text="Given that the test was to look for a difference in worm lengths between the two sites, what are the null and alternative hypotheses?"
    options="eq::$H_0:  \mu_1 = \mu_2 ; H_1: \mu_1 = \mu_2 $||neq::$H_0:  \mu_1 = \mu_2 ; H_1: \mu_1 \neq \mu_2 $||gt::$H_0:  \mu_1 = \mu_2 ; H_1: \mu_1 > \mu_2 $||lt::$H_0:  \mu_1 = \mu_2 ; H_1: \mu_1 < \mu_2 $"
    correct_answer="neq"
    solution_text="Testing for a difference so could be greater or less than, so use not equal"
%}

{% include question_numerical.html
    id="t5cii"
    title="5 c ii"
    question_text="What is the p-value associated with the test?"
    correct_answer="0.031"
    tolerance="0"
    solution_text="Use the two-tailed p-value"
%}

{% include question_multiple_choice.html
    id="t5ciii"
    title="5 c iii"
    question_text="Write a conclusion"
    options="no::There is not enough evidence of a difference between the two lengths of worm at the two sites||yes::There is evidence of a difference of lengths of worms, at the 5% level, between the two sites."
    correct_answer="yes"
    solution_text="$p<0.05$"
%}


### Question 6

The waiting time (in minutes) for two customer service departments are given: <br>

    Department X: 1, 2.2, 1.5, 1, 1.7

    Department Y: 1.1, 0.3, 0.8, 0.4, 0.8, 1.4, 1.1

<br>

Test whether there is evidence that the two departments differ in the waiting times at the 5% level. You are given that the sample variance of department X is 0.257 and of department Y is 0.156. Equal variances can be assumed.

{% include question_numerical.html
    id="t6a"
    title="6 a"
    question_text="What is the mean, correct to 3 s.f., waiting time at department X?"
    correct_answer="1.48"
    tolerance="0.005"
    solution_text="$\bar{x}=\frac{1+2.2+1.5+1+1.7}{5}=1.48$"
%}

{% include question_numerical.html
    id="t6b"
    title="6 b"
    question_text="What is the mean, correct to 3 s.f., waiting time at department Y?"
    correct_answer="0.843"
    tolerance="0.0005"
    solution_text="$\bar{x}=\frac{1.1 + 0.3 + 0.8 + 0.4 + 0.8 + 1.4 + 1.1}{7}=0.843$"
%}

{% include question_numerical.html
    id="t6c"
    title="6 c"
    question_text="What is the pooled variance, correct to 4 d.p?"
    correct_answer="0.1964"
    tolerance="0.0005"
    solution_text="$s^2_p=\frac{4 \times 0.257 + 6 \times 0.156}{10}=0.1964$"
%}

{% include question_numerical.html
    id="t6d"
    title="6 d"
    question_text="What is the t statistic, correct to 3 d.p?"
    correct_answer="2.455"
    tolerance="0.005"
    solution_text="$t = \frac{1.48-0.843}{\sqrt{0.1964}\sqrt{\left ( \frac{1}{5} + \frac{1}{7} \right )}} = 2.455$"
%}

{% include question_numerical.html
    id="t6e"
    title="6 e"
    question_text="How many degrees of freedom?"
    correct_answer="10"
    tolerance="0.005"
    solution_text="$df = 5+7 -2 =10$"
%}

{% include question_numerical.html
    id="t6f"
    title="6 f"
    question_text="What is the critical t value for the test at the 5% level of significance?"
    correct_answer="2.228"
    tolerance="0.05"
    solution_text="Use t-tables"
%}

{% include question_multiple_choice.html
    id="6g"
    title="6 g"
    question_text="Write a conclusion"
    options="no::There is not enough evidence of a difference in waiting times between the two departments||yes::There is evidence of a difference in waiting times between the two departments, at the 5% level"
    correct_answer="yes"
    solution_text="$p<0.05$"
%}
