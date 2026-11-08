---
layout: hsc5066y
title: jamovi Chi-square
interactive: 0
mj: 1
---

<div class="explanation" markdown="1">

## Contingency Tables and Chi-Square Test

You are going to explore whether the proportion of left to right side CVA is different based on the participant's sex.  You can also see this as testing whether CVA side is associated with a person's sex.

</div>

<div class="instructions" markdown="1">

*  From the top ribbon in jamovi, click on **Frequencies**
*  Under **Contingency Tables** choose **Independent Samples**
*  Place the `Sex` variable into the **Rows** box
*  Place the `CVAside` variable into the **Columns** box

</div>

![The jamovi contingency table setup panel with sex placed in the rows and cva side placed in the columns.]({{ "descriptives-contingency-table-setup.png" }})

<div class="instructions" markdown="1">

### Getting percentages

*  Expand the **Cells** block
*  Tick the box under **Percentages** for **Row**

### Creating charts

* Expand the **Plots** block
* Tick the **Bar Plot** box
* Experiment with changing between **Side by side** and **Stacked**
* Experiment with changing between **Y-Axis** **Counts** and **Percentages** - (**Percentages within rows** will show the same percentages as the table in the output)

</div>

![The jamovi contingency table setup panel drop down cells and plots blocks. Observed counts and row percentages are chosen from counts.  Bar plot, side-by-side, within rows percentages are chosen from plots.]({{ "jamovi-chi-square-cells-plots-setup.png" }})

<div class="output" markdown="1">

### Chi-Square Output

  You should see a table that shows the observed counts and percentages of left and right-side CVA for both males and females.

  Overall 22\% of the participants had a left-side CVA.  There was some difference for females and males, with females having 20\% left-side and males having 25\% left-side.

  The **$\chi^2$ test table** shows the results of the test of whether these proportions differ significantly.  You should observe that:

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
    <a href="{{ "/courses/hsc/5066y/jamovi/" | relative_url }}">← Return to jamovi Guides Menu</a>
</div>

{% include pagination.html %}
