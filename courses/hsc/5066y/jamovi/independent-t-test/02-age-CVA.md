---
layout: hsc5066y
title: jamovi Student's t-test
interactive: 0
mj: 1
---

<div class="explanation" markdown="1">

## Age with left-side CVA compared to right-side CVA?

You want to test whether there is a difference in age for those with left-side CVA compared to those with right-side CVA.

`Age` is a continuous variable
`CVAside` is a factor variable with two independent levels (left and right)

You are therefore interested in running one of the two-group test of differences.
</div>

<div class="instructions" markdown="1">

### Normality check

In the way we checked normality from the previous guide:

* Go to Analyses → Exploration → Descriptives
* Place `Age` into the **Variables** box
* Place `CVAside` into the **Split by** box
* From the **Statistics** section check **Shapiro-Wilk**

</div>

<div class="output" markdown="1">

Things you should note here:

| Statistic | Mean | Median | Shapiro-Wilk (W) | Shapiro-Wilk (p) |
|:----------|:-----|:-----|:-----------------|:-----------------|
| Age Left  | 70.0 | 69   | 0.965            | 0.836            |
| Age Right | 66.4 | 67   | 0.974            | 0.501            |

</div>

<div class="explanation" markdown="1">

## Independent-samples t-test

Since the **Shapiro-Wilk** test is not significant for both groups ($p>0.05$), then we will assume normality and proceed with an **independent-samples t-test**.

While carrying out this test you will also conduct the **Levene test**, to test whether variances can be assumed to be equal (homogeneity of variances).

</div>

<div class="instructions" markdown="1">

From the jamovi top-menu

* Go to **Analyses → T-Tests → Independent Samples T-Test**
* Place `Age` in the **Dependent Variables** box
* Place `CVAside` in the **Grouping Variable** box
* In the **Tests** section, **Student's** is chosen by default, and we will leave it like this until we review the output
* From **Additional Statistics** choose **Mean difference**, **Effect size**, **Descriptives**, and **Descriptive plots**
* Additionally for **Mean difference**, choose **Confidence interval** and leave at **95\%**
* From **Assumption Checks** choose **Homogeneity test**

</div>

 ![The jamovi independent-samples t-test dialog, with age in the dependent variable and CVA side in the grouping variable,  Options are selected as in information given in the instuctions.]({{ "/assets/images/hsc/5066y/jamovi-t-test-dialog.png" | relative_url }})

<div class="output" markdown="1">

### Levene's test

Look for the **Homogeneity of Variances Tests** table, this is where we will find the **Levene test**.

You should observe that $p=0.995$.  Since this is greater than 0.05, we can assume equality of variances, and stay with the **Student's** option.  If this were less than 0.05 you could
 choose the **Welch** option instead.

### t-test

From the **Independent Samples T-Test** table you should observe the following:

* Age (showing the variable being tested)
* Student's (indicating the test that was run)
* Statistic = 1.26 (this is the **t statistic**)
* df = 48.0 (these are the **degrees of freedom**)
* $p = 0.215$ (the p-value of the test)
* Mean difference = 3.59 (this is the difference in the means of the two groups)
* SE difference = 2.86 (this is the standard error of the difference in the means of the two groups, used to calculate a **confidence interval**)
* 95% Confidence Interval = -2.16 to 9.34
* Effect size = 0.429 (for a t-test, this is **Cohen's d**)

</div>

<div class="explanation" markdown="1">

### Findings

Since the *p*-value is not smaller than 0.05, we have not found enough evidence of a difference in age between the left and right side CVA patients.  This is further 
highlighted by the confidence interval containing 0, representing no difference.

When reporting the **t-statistic**, you write $t(\text{df}) = \text{t-statistic}$.

The 95% Confidence Interval (-2.16 to 9.34) is a range of values where we believe the true population difference may lie. Since this range includes 0, it supports the finding of no significant difference.

The **effect size** is a measure of how big the difference is between the two groups.  For a t-test you will use **Cohen's d**, which has the following guidelines:

|d|effect|
|------|------|
|0.2|small|
|0.5|medium|
|0.8|large|

### Write-up

An independent-samples t-test was conducted to assess whether there was a difference in age of participants with left CVA (Mean = 70.0, SD = 8.81) compared to right CVA 
(Mean = 66.4, SD = 8.25).  Homogeneity of variances was assessed by the Levene's test and was found not to be violated.  There was a small but not significant difference found 
between the groups ($t(48) = 1.26$, $p = 0.215$, $d = 0.429$, mean difference = 3.59, 95% confidence interval [-2.16, 9.34]).

</div>

{% include pagination.html %}
