---
title: Finding Frequencies
layout: hsc5066y
interactive: 1
mj: 0
---

<div class="explanation" markdown="1">
## Frequencies

You are interested in finding out:
*  How many males and females (as a count and as a percentage) are in the sample.
*  How many patients had a left-side or right-side stroke (as a count and as a percentage).
</div>

<div class="instructions" markdown="1">
## Frequency Table

1.  From the **Analysze** menu at the top, choose **Descriptive Statistics**, then **Frequencies**.
2.  Find the variable called `Sex` (label of `Male 1 Female 2`) and move it into the **Variable(s)** box.
3.  Tick the box **Frequency tables**, if not already ticked.
4.  Click **OK**
</div>

![The spss descriptives setup panel. The variable called sex is placed in the variables box.]({{ "/assets/images/hsc/5066y/pspp/descriptives-frequency-table-setup.png" | relative_url }})

<div class="output" markdown="1">
## Output
  
The **Output** window should appear, if not switch to the new window, where the frequency table can be found.

| Sex    | Counts | % of Total |
|--------|--------|------------|
| Male   | 20     | 40 %       |
| Female | 30     | 60 %       |

</div>

<div class="instructions" markdown="1">

For the Left or Right side, either repeat the process from above and add `CVAside` (lable `Side of CVA` to the **Variable(s)** box.
</div>

{% include question_numerical.html
id="q_cva_right_count"
title="Right side CVA count"
question_text="From the frequency table, how many of the participants had a right-side CVA?"
correct_answer="39"
tolerance="0"
solution_text="Look for the number next to Right in the Counts column of the frequency table"
%}

<!-- This automatically adds the "Previous" and "Next" navigation buttons -->
{% include pagination.html %}
