---
layout: hsc5066y
title: Correlation Coefficients from jamovi
interactive: 0
mj: 1
---

<div class="instructions" markdown="1">

## Getting Correlation Coefficients in jamovi

You are going to get *all* of the pairwise correlation coefficients between the interval/ratio variables.

* From the top menu go to **Analyses** and choose **Regression** then **Correlation Matrix**
* Place all of the interval/ratio variables (age and the base and 3 month measurements for FAST, ARAT, Barthel, and GHQ) into the right-hand box.
* As there are a mix of normal and non-normal, check boxes for both **Pearson** and **Spearman** from **Correlation Coefficients**
* Tick the **Flag significant correlations** option from **Additional Options**

</div>

<div class="output" markdown="1">

You should see a table that you can read off each pair of variables (as each variable appears in both the row and the column).

### Age and 3-month FAST score

Both of these variables were normally distributed, so we can use the Pearson's correlation coefficient.  You should find for this pair that there was a non-significant and weak negative correlation.

You may see this result reported like $r(48)=-0.228, p=0.111$

### FAST baseline and 3-month FAST score

The FAST baseline score were not normally distributed, so we can use the Spearman's correlation coefficient. You should find there is a significant and strong positive correlation.

You may see this result reported like $r_s(48)=0.830, p<0.001$

</div>

Make some other comparisons between variables, and use you work on creating scatter diagrams to confirm that the correlation coefficient is showing the same thing as the diagram.

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/hsc/5066y/jamovi/" | relative_url }}">← Return to jamovi Guides Menu</a>
</div>

{% include pagination.html %}
