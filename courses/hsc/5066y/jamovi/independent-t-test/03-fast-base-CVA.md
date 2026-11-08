---
layout: hsc5066y
title: jamovi Mann-Whitney U Test
interactive: 0
mj: 1
---

<div class="explanation" markdown="1">

## FAST baseline score with left-side CVA compared to right-side CVA?

You want to test whether there is a difference in the FAST baseline score for those with left-side CVA compared to those with right-side CVA.

`FASTbase` is a **continuous variable**
`CVAside` is a factor variable with two independent levels (left and right)

You are therefore interested in running one of the **two-group test of differences**.
</div>

<div class="instructions" markdown="1">

### Normality check

In the way we checked normality from the previous guide:

* Go to Analyses → Exploration → Descriptives
* Place `FASTbase` into the **Variables** box
* Place `CVAside` into the **Split by** box
* From the **Statistics** section check **Shapiro-Wilk**

</div>

<div class="output" markdown="1">

Things you should note here:

| Statistic | Mean | Median | Shapiro-Wilk (W) | Shapiro-Wilk (p) |
|:----------|:-----|:-----|:-----------------|:-----------------|
| FAST base Left  | 16.0 | 15   | 0.970            | 0.888            |
| FAST base Right | 27.5 | 28   | 0.872            | < 0.001          |

</div>

<div class="explanation" markdown="1">

## Mann-Whitney U Test

Since the **Shapiro-Wilk** test is **significant** for at least one group (the right-side CVA group, where $p < 0.05$), we **will not assume normality** and will proceed with a **Mann-Whitney U Test**.

For the **Mann-Whitney U Test**, we **do not** need to perform a homogeneity of variances check.
</div>

<div class="instructions" markdown="1">

From the jamovi top-menu

* Go to **Analyses → T-Tests → Independent Samples T-Test**
* Place `FASTbase` in the **Dependent Variables** box
* Place `CVAside` in the **Grouping Variable** box
* In the **Tests** section, **Student's** is chosen by default, uncheck this and choose **Mann-Whitney U**.
* From **Additional Statistics** choose **Effect size**, **Descriptives**, and **Descriptive plots**.

</div>

<div class="output" markdown="1">

### Mann-Whitney U test

From the **Independent Samples T-Test** table you should observe the following:

* FASTbase (showing the variable being tested)
* Mann-Whitney U (indicating the test that was run)
* Statistic = 7.50 (this is the **U statistic**)
* $p < 0.001$ (the p-value of the test)
* Effect size = 0.965 (for a U-test, this is **Rank biserial correlation**)

</div>

<div class="explanation" markdown="1">

### Findings

Since the *p*-value is much smaller than 0.05, we have found significant evidence of a difference in the FAST baseline score between the left and right side CVA patients.

When reporting the **U-statistic**, you write $U = \text{U-statistic}$.

The **effect size** is a measure of how big the difference is between the two groups. For a Mann-Whitney U test, you will use **Rank biserial correlation** ($r$), which has the following guidelines:

| r | Effect Size |
|:---:|:---|
| 0.1 | small |
| 0.3 | medium |
| 0.5 | large |

### Write-up

A Mann-Whitney U test was conducted to compare the FAST baseline scores for left-side CVA patients (Median = 15.0, range [8 to 25]) and right-side CVA patients (Median = 28.0, range [22 to 30]). The test revealed a statistically significant, very large difference between the two groups ($U = 7.50$, $p < 0.001$, $r = 0.965$). The right-side CVA patients had a higher median FAST baseline score, indicating better performance.

</div>

{% include pagination.html %}
