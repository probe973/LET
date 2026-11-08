---
layout: hsc5066y
title: jamovi normality
interactive: 0
mj: 0
---

<div class="explanation" markdown="1">
## Using jamovi to check normality

Note for this guide it would be useful to have the **jjplots** module loaded.  See the **getting to know jamovi** guide to remind yourself how to add this.

You are going to check the following:
* Is there evidence that the `age` variable is normally distributed?
* Is there evidence that the `age` variable is normally distributed for all groups in the `sex` variable?

</div>

<div class="instructions" markdown="1">

  In jamovi:
  * Analyses → Exploration → Descriptives
  * Place the `age` variable into the **Variables** box
  * From **Statistics** choose **Shapiro-Wilk** from the **Normality** section
  * From **Plots** choose **Histogram**

</div>

<div class="output" markdown="1">

Things you should note here:

|Statistic|Mean|Median|Shapiro-Wilk, W|Shapiro-Wilk, p|
|-------|------|------|------|------|
|Age|67.2|68|0.981|0.574|

The shape of the histogram created.

</div>

<div class="explanation" markdown="1">
  
  Here you can note:
  * The histogram seems to be have symmetrical shape
  * The mean and the median are very similar values
  * The p-value for the Shapiro-Wilk test is **not significant** (i.e. it is not less than 0.05)

This provides evidence that the age data **are normally distributed**
</div>

{% include pagination.html %}
