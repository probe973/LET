---
layout: hsc5066y
title: jamovi normality of groups
interactive: 0
mj: 0
---

<div class="instructions" markdown="1">
## Using jamovi to check normality for different groups

In order to check whether the `age` variable is normally distributed for all groups in the `sex` variable, we need to make use of the **Split by** box in the jamovi **Descriptives** dialog.

Either or go to the analysis you previously did for `age` and add the `sex` variable to the **Split by** box or create a fresh output:

* Go to Analyses → Exploration → Descriptives
* Place `age` into the **Variables** box
* Place `sex` into the **Split by** box
* From the **Statistics** section check **Shapiro-Wilk**
* From the **Plots** section check **Histogram**

</div>

<div class="output" markdown="1">

Things you should note here:

|Statistic|Mean|Median|Shapiro-Wilk, W|Shapiro-Wilk, p|
|-------|------|------|------|------|
|Age Male|67.3|68|0.980|0.928|
|Age Female|67.1|67.5|0.973|0.612|

The shape of the histograms created.

The histograms in jamovi, when using the **Split by** button, well they're a bit naff.  For better histograms:

* Go to Analyses → JJStatsPlot → Histogram
* Place `Age` into the **Variables** box
* Place `Sex` into the **Split By** box
* For clarity here, uncheck the **Statistical Results** from the **Plot** block.

You should now see histograms for the different groups, as well as one for the entire sample.
</div>

<div class="explanation" markdown="1">
  
  For both sexes here, you should see that their means and medians are similar.

  You should see that the histograms have a *normal* type shape.

  You should see that the **Shapiro-Wilk** test returned *p*-values that were not less than 0.05, indicating that the distributions were normal.
</div>

{% include pagination.html %}
