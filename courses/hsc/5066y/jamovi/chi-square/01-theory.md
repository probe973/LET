---
layout: hsc5066y
title: Chi-Square Theory
interactive: 0
mj: 1
---

<div class="explanation" markdown="1">
## The Theory Behind the Chi-Square Test

The Chi-Square ($\chi^2$) test of independence is used to determine if there is a significant association (or relationship) between two categorical variables. In other words, it helps us test if there are significant **differences** in the proportions of categories in one variable when broken down by the categories of another variable.

Let's start with an example research question: **"Is there a relationship between the type of physiotherapy a patient receives and whether their condition improves?"**

This question can also be thought of in terms of differences between proportions. In other words, we are asking: **"Is there a difference in the proportion of patients who improve between the 'New Technique' group and the 'Standard Technique' group?"** The Chi-Square test is the tool we use to answer both phrasings of this question.

Our two variables are:
1.  `Therapy Type` (Nominal: 'New Technique', 'Standard Technique')
2.  `Outcome` (Nominal: 'Improved', 'Not Improved')

Imagine we collect data from 80 patients and record the results in a contingency table, which shows our **observed counts**:

|                | Improved | Not Improved | Total |
|:---------------|:--------:|:------------:|:-----:|
| New Technique  | 30       | 10           | 40    |
| Standard Tech. | 20       | 20           | 40    |
| **Total**      | **50**   | **30**       | **80**|

</div>

<div class="explanation" markdown="1">
### Observed vs. Expected

The Chi-Square test works by comparing our **observed** data with the data we would **expect** to see if there were *no relationship at all* between the variables.

Our **Null Hypothesis ($H_0$)** is that there is *no relationship* between therapy type and outcome (i.e., the proportion of patients who improve is the same for both groups).

If the null hypothesis were true, we would expect the *proportion* of patients who improve to be the same, regardless of which therapy they received. Let's look at the proportions in our data:

| Group            | Improved | Not Improved | Total Patients | % Improved |
|:-----------------|:--------:|:------------:|:--------------:|:----------:|
| New Technique    | 30       | 10           | 40             | 75.0%      |
| Standard Tech.   | 20       | 20           | 40             | 50.0%      |
| **Overall**      | **50**   | **30**       | **80**         | **62.5%**  |

As we can see, the overall improvement rate for all patients was **62.5%**. However, for patients who received the 'New Technique', the improvement rate was **75%**, while for the 'Standard Technique' it was only **50%**.
</div>

<div class="explanation" markdown="1">
### Making a Decision

The core question the Chi-Square test answers is: **"Is the difference between the group proportions (75% vs. 50%) large enough to be considered a real effect, or is it small enough that it could have just happened by random chance?"**

The test calculates a **Chi-Square test statistic** that quantifies this difference.

*   If the difference between observed and expected counts is **small**, the test statistic will be small, and the p-value will be large ($p > 0.05$). We **fail to reject the null hypothesis**.
*   If the difference is **large**, the test statistic will be large, and the p-value will be small ($p \le 0.05$). We **reject the null hypothesis** and conclude there is evidence of a significant relationship.
</div>

<div class="explanation" markdown="1">
### Understanding Degrees of Freedom (df)

When you run a Chi-Square test, the output will also include a value for **degrees of freedom (df)**. Degrees of freedom represent the number of values in the analysis that are free to vary.

For a Chi-Square test, the formula is:

$$df = (\text{Number of Rows} - 1) \times (\text{Number of Columns} - 1)$$

For our 2x2 table, this would be: $df = (2 - 1) \times (2 - 1) = 1$.
</div>

<div class="instructions" markdown="1">
### Example of Reporting the Result

When you write up the results of a Chi-Square test, you should report the test statistic with its degrees of freedom, and the p-value. For our example, let's assume jamovi gave us a $\chi^2$ value of 4.80 and a p-value of .03.

A standard way to report this would be:

> "There was a significant association between the type of physiotherapy received and patient outcome, \\(\chi^2(1) = 4.80, p = .03\\). A higher proportion of patients in the 'New Technique' group showed improvement (75%) compared to the 'Standard Technique' group (50%)."

The format \\(\chi^2(1) = 4.80\\) represents the Chi-Square symbol, the degrees of freedom in the brackets, and the calculated test statistic value.
</div>


{% include pagination.html %}
