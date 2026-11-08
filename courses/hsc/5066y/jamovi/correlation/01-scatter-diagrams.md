---
layout: hsc5066y
title: Scatter diagrams
interactive: 0
mj: 0
---

<div class="explanation" markdown="1">

## Scatter Diagrams

A **scatter diagram** is a visual representation of pairs of scores on two measured variables.  For each individual you plot their score on variable against their score on the other variable in a two-dimensional x-y plot.

Using the scatter diagram you can observe if there is any relationship between the two variables:
* If you observe that people who score high on variable 1 also tend to score on high on variable 2, this would be referred to as **positive correlation**
* If you observe that people who score high on variable 1 tend to score low on variable 2, this would be referred to as **negative correlation**
* If you observe no pattern, this would be referred to as **no correlation**

</div>

<div class="instructions" markdown="1">

### jamovi scatter diagram age and ARAT at 3 months

You are going to see if there is an association with users age and their ARAT score after 3 months.

* From the jamovi menu go to **Analyses** → **Exploration** → **Scatterplot**
* Place `Age` in the **X-Axis** box
* Place `ARAT3month` in the **Y-Axis** box

</div>

<div class="output" markdown="1">
  
![Scatter diagram with age on the x-axis and ARAT 3 month on the y-axis.  There appears to be a downward trend, with higher age resulting in lower ARAT]({{ "scatter-age-ARAT3.png" }})

The trend appears to be that as age increases the ARAT score decreases.  This would be referred to as **negative correlation**.

</div>

<div class="instructions" markdown="1">

### jamovi scatter diagram ARAT baseline and Barthel baseline

You are going to see if there is an association with users age and their ARAT score after 3 months.

* From the jamovi menu go to **Analyses** → **Exploration** → **Scatterplot**
* Place `ARATbase` in the **X-Axis** box
* Place `Barthelbase` in the **Y-Axis** box

</div>

<div class="output" markdown="1">
  
![Scatter diagram with ARAT base on the x-axis and Barthel base on the y-axis.  There appears to be an upward trend, with higher ARAT resulting in higher Barthel]({{ "scatter-ARAT-Barthel.png" }})

The trend appears to be that as ARAT increases the Barthel score increases.  This would be referred to as **positive correlation**.

</div>

Create scatter diagrams of other variables and decide on the correlation.

{% include pagination.html %}
