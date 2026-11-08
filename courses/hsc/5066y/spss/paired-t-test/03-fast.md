---
title: SPSS Wilcoxon
layout: hsc5066y
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

### Creating the difference variable to check the normality assumption

From the SPSS menus:

* Go to **Transform** → **Compute Variable**
* Press **Reset** if there are things already entered
* In the **Target Variable** box give the new variable a name, let's say `FAST_Change`
* In the **Numeric Expression** box we will put the equation that gives the difference between the FAST 3 months and FAST baseline: `FAST3month` - `FASTbase`
* Click OK

You should now have a new variable in your dataset that is the difference made over the 3 months.

</div>

<div class="instructions" markdown="1">

### Checking the normality assumption

From the SPSS menu:

* Go to **Analyze** → **Descriptive Statistics** → **Explore**
* Press the **Reset** button to remove previous work
* Place the `FAST_Change` variable into the **Dependent List** box
* Click the **Plots** button and choose **Histogram** and **Normality plots with tests**
* Click **Continue**
* Click **OK**

</div>

<div class="output" markdown="1">

### Checking the normality assumption output

Look for the table titled **Tests of Normality**.

You should note that the *p*-value for the **Shapiro-Wilk** test is <0.001.  Since this is less than the cut-off of 0.05, we are **going to reject normality**, and so assume our differences data are not normally distributed.

We therefore proced with the **Wilcoxon rank test**.

</div>

<div class="instructions" markdown="1">

### Wilcoxon Rank Test

From the SPSS menu:

* **Analyze** → **Nonparametric Tests** → **Legacy Dialogs** →  **2 Related Samples**
* Place the baseline and 3 month FAST variables into the **Test Pairs** box
* Make sure the box for **Wilcoxon** is checked
* Click the **Options** button, choose **Descriptive**, click **Continue**
* Click **OK**

</div>

<div class="output" markdown="1">

### Output

From the **Test Statistics** table, you should see

The test statistic is $Z = -4,767$ and $p < 0.001$

</div>

<div class="explanation" markdown="1">

### Findings

Since the p-value is smaller than the 0.05 cut-off, we can reject the null hypothesis, and state that we have evidence that the FAST score has changed over the 3-months.


### Write-up

Due to the differences between individuals FAST pre and 3 month scores not being normally distributed, a Wilcoxon rank test was carried out to test whether scores on FAST at baseline (mean = 25) were different to that at 3 months (mean = 27.1).

A significant difference was found for the change over the 3 months ($Z = -4,767, p<.001$).

</div>

{% include pagination.html %}
