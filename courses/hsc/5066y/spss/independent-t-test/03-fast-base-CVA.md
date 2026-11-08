---
title: SPSS Mann-Whitney U Test
layout: hsc5066y
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

* Go to **Analysze** → **Descriptive Statistics** → **Explore**
* Place `FastBase` (`Frenchay Aphasia Screening Test - Baseline`) into the **Dependent List** box
* Place `CVAside` into the **Factor List** box
* From the **Plots** button check **Normality plots with tests** and click **Continue**
* Click **OK**

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

From the SPSS menu

* Go to **Analyze → Nonparametric Tests → Legacy Dialogs → 2 Independent Samples**
* Place `FASTbase` in the **Test Variable List** box
* Place `CVAside` in the **Grouping Variable** box
* Click **Define Groups** and add `1` and `2` as the two group codes.
* In the **Test Type** section choose **Mann-Whitney U**
* Click the **Options** button, select **Descriptives** from the **Statistics** section, and click **Continue**
* Click **OK**

</div>

<div class="output" markdown="1">

### Mann-Whitney U test

From the **Mann-Whitney Test - Test Statistics** table you should observe the following:

* Mann-Whitney U = 7.50 (this is the **U statistic**)
* $p < 0.001$ (the p-value of the test)

SPSS does not give an effect size here.  For a Mann-Whitney U test, the **rank biserial correlation**, **r** is often used as an effect size.  It can be calculated manually like:

$$r=1-\frac{2U}{n_1 \times n_2}$$

$U$ is the test statistic; $n_1$ and $n_2$ are the sample sizes.  Here we get:

$$r=1-\frac{2 \times 7.5}{11 \times 39}=0.965$$

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
