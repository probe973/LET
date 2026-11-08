---
title: Contingency Tables
layout: hsc5066y
interactive: 1
mj: 0
---

<div class="explanation" markdown="1">

## Contingency Tables

A **contingency table** or **2-way table** can be used to show frequencies of one categorical variable as a function of another categorical variable.
Suppose you want to split the left and right side CVA by the different sexes.  You could then explore whether the proportion of left and right side CVA is different between sexes.

</div>

<div class="instructions" markdown="1">

*  From the top menu in SPSS, click on **Analyze**, then **Descriptive Statistics**, then **Crosstabs**
*  Place the `Sex` variable into the **Rows** box
*  Place the `CVAside` variable into the **Columns** box
*  Click **OK**

</div>

![The spss crosstabs setup panel with sex placed in the rows and cva side placed in the columns.]({{ "/assets/images/hsc/5066y/pspp/descriptives-contingency-table-setup.png" | relative_url }})

<div class="output" markdown="1">

From the output you should still observe there are **20 males** and **30 females** in the sample.  You should also observe there are **11 left** and **39 right** CVA.
Inside the table you will also see the counts for the number of males who were left side, males who were right side, females who were left side CVA, and females who were right side CVA.

</div>

{% include question_numerical.html
id="q_cva_right_female_count"
title="Right side CVA count for females"
question_text="From the contingency table, how many of the female participants had a right-side CVA?"
correct_answer="24"
tolerance="0"
solution_text="Look for the number in the female row and right column"
%}

<div class="explanation" markdown="1">

You are also interested in knowing the proportion of left and right CVA within each of the sexes.  This can give you some idea whether CVA side differs between the sexes.

</div>

<div class="instructions" markdown="1">

From the same area used to create the contingency table (click on the contignecy table in the output if it has disappeared from view)

*  From the top menu in SPSS, click on **Analyze**, then **Descriptive Statistics**, then **Crosstabs**
*  Click the **Cells** button
*  Tick the box under **Percentages** for **Row**

Choosing **Row** will give the percentages of left vs right for each of the row (`Sex`) items.
If you choose **Column** for the percentages, this would give the percentage of the different sexes that are left side and the percentage of different sexes that are right side.
If you choose **Total**, this would give the percentage of each of the options (male, left etc.) out of the total sample.

</div>

{% include question_numerical.html
id="q_cva_right_female_percent"
title="Right side CVA percent for females"
question_text="From the contingency table, what percentage of the female participants had a right-side CVA?"
correct_answer="80"
tolerance="0"
solution_text="Look for the % within row in the female row and right column"
%}

{% include question_numerical.html
id="q_cva_male_left_percent"
title="Male percent for left side CVA percent"
question_text="From the contingency table, what percentage of the left-side CVA participants were male?  You may need to get a different percentage option for this."
correct_answer="45.5"
tolerance="0"
solution_text="You need to choose the column percentages and look for the % within column in the male row and left column"
%}

<div class="explanation" markdown="1">

## Clustered Bar Charts

You can also show the contingency table as a bar chart.

A **clustered bar chart** shows the left and right side CVA counts (or percentages) side by side for each of the sexes.

</div>

<div class="instructions" markdown="1">

From the **Contingency Tables** menu:

*  From the top menu in SPSS, click on **Analyze**, then **Descriptive Statistics**, then **Crosstabs**
*  Check the box for **Display clustered bar charts**
*  Click **OK**

</div>

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/hsc/5066y/spss/" | relative_url }}">← Return to SPSS Guides Menu</a>
</div>

{% include pagination.html %}
