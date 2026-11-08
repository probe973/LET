---
layout: hsc5066y
title: jamovi Paired t-test
interactive: 0
mj: 1
---

<div class="explanation" markdown="1">

## GHQ12 After 3-month course compared to baseline

The 12-item General Health Questionnaire (GHQ-12) is used to assess patients’ psychological well-being. It was scored from 0-12, with higher scores indicating greater psychological distress

You are interested in whether there has been a significant change in GHQ-12 scores after the 3-month course.

Since each participant is measured on two occasions, this is a **paired** type of test.

The **null hypothesis** is there has been no change.

The **research hypothesis** is there has been a change.

If the *p*-value of the test is below a cut-off, 0.05, there is evidence to reject the null hypothesis and say that you have evidence for a difference.

</div>

<div class="instructions" markdown="1">

### Setting the test up and checking the normality assumption

From the jamovi top menu:
* Go to **Analyses** → **T Tests** → **Paired Samples T-Test**
* Place `GHQ12base` and `GHQ3months` into the **Paired Variables** box
* From **Assumption Checks** choose the **Normality test**

</div>

![The jamovi paired-samples t-test dialog, with ghq base and ghq 3 months in the paired variables box,  The normality test option has been chosen.]({{ "/assets/images/hsc/5066y/jamovi-paired-t-test-dialog.png" | relative_url }})

<div class="output" markdown="1">

### Checking the normality assumption output

Look for the table titled **Tests of Normality**.

You should note that the *p*-value for the **Shapiro-Wilk** test is 0.165.  Since this is greater than the cut-off of 0.05, we are **not going to reject normality**, and so assume our differences data are normally distributed.

We can therefore proced with the **paired-samples t-test**.

</div>

<div class="instructions" markdown="1">

### Paired-samples t-test

From the same dialog you should see that **Student's** is already checked under **Tests**, this is the paired-samples t-test that you want.

Some additional output, choose the options for:
* Mean difference
* 95% confidence interval for mean difference
* Effect size
* Descriptives
* Descriptives plots

</div>

<div class="output" markdown="1">

### Output

We can report the **t-statistic** (with the **degrees of freedom** in brakets afterwards) and the ***p*-value**.  You should find that:

$$t(49)=0.307, p=0.760$$

You should also see that the mean difference between baseline and 3 months was 0.12, with the 3 month value being the lower amount (this can be seen from the descriptives table).
A lower amount shows on average there was some improvement in results over the time.

The 95% confidence interval for the difference made is -0.664 to 0.904, so you can see that no difference (0) is in the confidence interval range.

The **effect size** used is **Cohen's d**, and here you have $d=0.0435$.  The size of the effect can be interpreted using the guidelines:

|d|effect|
|:------|:------|
|0.2|small|
|0.5|medium|
|0.8|large|

</div>

<div class="explanation" markdown="1">

### Findings

Since the $p$-value is not below the cut-off of 0.05, we do not have enough evidence to reject the null hypothesis and say that there has been a difference over the 3-months.

This is backed up by the 95% confidence interval containing 0, indicating no difference made.

The size of the improvement would be considered very small, using the guidelines for Cohen's d


### Write-up

A paired-samples t-test was carried out to test whether individuals GHQ12 score changed after a 3-month course, from baseline (Mean = 4.72, SD = 3.98) to the 3-month reading (Mean = 4.84, SD = 3.72).

There was a very small and not significant change in score between the two time points ($t(49)=0.307, p=0.760$,  mean difference = 0.12, 95% CI [-0.664, 0.904]).

We do not have evidence that the 3-month period changed users GHQ12 score.

</div>

{% include pagination.html %}
