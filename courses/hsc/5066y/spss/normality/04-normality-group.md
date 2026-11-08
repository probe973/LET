---
title: SPSS normality of groups
layout: hsc5066y
interactive: 0
mj: 0
---

<div class="instructions" markdown="1">
## Using SPSS to check normality for different groups

In order to check whether the `age` variable is normally distributed for all groups in the `sex` variable, we need to make use of the **Factor List** box in the SPSS **Explore** dialog.

* Go to Analyze → Descriptive Statistics → Explore
* Place `age` into the **Dependent List** box
* Place `sex` into the **Factor List** box
* From the **Plots** button check **Histogram** and **Normality plots with tests**
* Click **Continue** then **OK**

</div>

<div class="output" markdown="1">

Things you should note here:

|Statistic|Mean|Median|Shapiro-Wilk, W|Shapiro-Wilk, p|
|-------|------|------|------|------|
|Age Male|67.3|68|0.980|0.928|
|Age Female|67.1|67.5|0.973|0.612|

The shape of the histograms created.

</div>

<div class="explanation" markdown="1">
  
  For both sexes here, you should see that their means and medians are similar.

  You should see that the histograms have a *normal* type shape.

  You should see that the **Shapiro-Wilk** test returned *p*-values that were not less than 0.05, indicating that the distributions were normal.
</div>

{% include pagination.html %}
