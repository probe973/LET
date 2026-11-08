---
layout: hsc5066y
title: SPSS Chi-square
interactive: 0
mj: 1
---

<div class="explanation" markdown="1">

## Contingency Tables and Chi-Square Test

You are going to explore whether the proportion of left to right side CVA is different based on the participant's sex.  You can also see this as testing whether CVA side is associated with a person's sex.

</div>

<div class="instructions" markdown="1">

*  From the top menu in SPSS, **Analyze** → **Descriptive Statistics** → **Crosstabs**
*  Place the `Sex` variable into the **Rows** box
*  Place the `CVAside` variable into the **Columns** box

</div>

![The spss contingency table setup panel with sex placed in the rows and cva side placed in the columns.]({{ "/assets/images/hsc/5066y/pspp/descriptives-contingency-table-setup.png" | relative_url }})

<div class="instructions" markdown="1">

### Getting percentages

*  Click the **Cells** button
*  Tick the box under **Percentages** for **Row**
*  Press **Continue**

### Creating charts

* Click the box for **Display clustered bar charts**

### Getting the chi-square statistic

* Click the **Statistics** button
* Check the box for **Chi-square**
* Click **Continue**

### Get the results

* Click the **OK** button

</div>

<div class="output" markdown="1">

### Chi-Square Output

  You should see a table that shows the observed counts and percentages of left and right-side CVA for both males and females.

  Overall 22\% of the participants had a left-side CVA.  There was some difference for females and males, with females having 20\% left-side and males having 25\% left-side.

  The **Chi-Square Tests** table shows the results of the test of whether these proportions differ significantly.  You should observe, by reading the **Pearson Chi-Square** row that:

  $$\chi^2=0.175$$
  
  $$df=1$$
  
  $$p=0.676$$
  
</div>

<div class="explanation" markdown="1">

### Conclusion

  Since the *p*-value is not less than 0.05 we **can not reject the null hypothesis**, and this sample does not give evidence that the side of CVA is associated with sex of participant.

  We would report the results as $\chi^2(1)=0.175, p=.676$
  
</div>

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/hsc/5066y/spss/" | relative_url }}">← Return to SPSS Guides Menu</a>
</div>

{% include pagination.html %}
