---
title: SPSS normality
layout: hsc5066y
interactive: 0
mj: 0
---

<div class="explanation" markdown="1">
## Using SPSS to check normality

You are going to check the following:
* Is there evidence that the `age` variable is normally distributed?
* Is there evidence that the `age` variable is normally distributed for all groups in the `sex` variable?

</div>

<div class="instructions" markdown="1">

  In SPSS:
  * Analyses → Descriptive Statistics → Explore
  * Press the **Reset** if there are entries in the dialog already
  * Place the `age` variable into the **Dependendent List** box
  * Click the **Plots** button
  * From **Explore Plots** choose **Histogram** from **Descriptive** and **unchoose Stem-and-leaf**
  * Tick the box **Normality plots with tests**
  * Click **Continue**
  * Click **OK**

</div>

<div class="output" markdown="1">

Things you should note here:

|Statistic|Mean|Median|Shapiro-Wilk, W|Shapiro-Wilk, p|
|-------|------|------|------|------|
|Age|67.2|68|0.981|0.574|

The shape of the histogram created.

You can find these results from the **Descriptives**, **Tests of Normality**, and **Histogram** output

</div>

<div class="explanation" markdown="1">
  
  Here you can note:
  * The histogram seems to be have symmetrical shape.
  * The histogram has a slight negative skew, seen by a tail to the left and a **Skewness** value that is negative.
  * The mean and the median are very similar values
  * The p-value for the Shapiro-Wilk test is **not significant** (i.e. it is not less than 0.05)

This provides evidence that the age data **are normally distributed**
</div>

{% include pagination.html %}
