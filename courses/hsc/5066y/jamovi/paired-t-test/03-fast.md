---
layout: hsc5066y
title: jamovi Wilcoxon
interactive: 0
mj: 1
---

<div class="explanation" markdown="1">

## FAST After 3-month course compared to baseline

The Frenchay Aphasia Screen Test (FAST) assesses whether patients may have a language deficit. It is scored from 0-30, with higher scores indicating better performance

You are interested in whether there has been a significant change in FAST scores after the 3-month course.

Since each participant is measured on two occasions, this is a **paired** type of test.

The **null hypothesis** is there has been no change.

The **research hypothesis** is there has been a change.

If the *p*-value of the test is below a cut-off, 0.05, there is evidence to reject the null hypothesis and say that you have evidence for a difference.

</div>

<div class="instructions" markdown="1">

### Setting the test up and checking the normality assumption

From the jamovi top menu:
* Go to **Analyses** → **T Tests** → **Paired Samples T-Test**
* Place `FASTbase` and `FAST3month` into the **Paired Variables** box
* From **Assumption Checks** choose the **Normality test**

</div>

<div class="output" markdown="1">

### Checking the normality assumption output

Look for the table titled **Tests of Normality**.

You should note that the *p*-value for the **Shapiro-Wilk** test is <0.001.  Since this is less than the cut-off of 0.05, we are **going to reject normality**, and so assume our differences data are not normally distributed.

We therefore proced with the **Wilcoxon rank test**.

</div>

<div class="instructions" markdown="1">

### Wilcoxon Rank Test

* From the dialog choose the option for **Wilcoxon rank** and uncheck the option for **Student's**
* From **Additional Statistics** choose **Effect size** and **Descriptives**

</div>

<div class="output" markdown="1">

### Output

From the **Paired Samples T-Test** output, you should see we actually run a **Wilcoxon** test.

The test statistic is $W = 7.5$ and $p < 0.001$

The effect size is $r = 0.97$

</div>

<div class="explanation" markdown="1">

### Findings

Since the p-value is smaller than the 0.05 cut-off, we can reject the null hypothesis, and state that we have evidence that the FAST score has changed over the 3-months.  The effect size is measured using the rank biserial correlation coefficient ($r$) and can be interpreted:

| r | Effect Size |
|:---:|:---|
| 0.1 | small |
| 0.3 | medium |
| 0.5 | large |

### Write-up

Due to the differences between individuals FAST pre and 3 month scores not being normally distributed, a Wilcoxon rank test was carried out to test whether scores on FAST at baseline (median = 27.5) were different to that at 3 months (median = 29.0).

A very large and significant difference was found for the change over the 3 months ($W=7.5, p<.001$).

</div>

{% include pagination.html %}
