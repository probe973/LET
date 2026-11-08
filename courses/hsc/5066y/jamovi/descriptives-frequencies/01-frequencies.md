---
layout: hsc5066y
title: Finding Frequencies
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

1.  From the **Analyses** menu in the top ribbon, choose **Exploration**.
2.  From the **Exploration** menu that pops up, choose **Descriptives**.
3.  Find the variable called `Sex` and move it into the **Variables** box.
4.  Tick the box **Frequency tables**.
</div>

![The jamovi descriptives setup panel. The variable called sex is placed in the variables box and the frequency tables button is checked]({{ "/assets/images/hsc/5066y/descriptives-frequency-table-setup.png" | relative_url }})

<div class="output" markdown="1">
## Output
  
The descriptives part at the top, giving statistics such as the mean, are not relevant for a nominal variable. The table below **Frequencies** is the area of interest.

| Sex    | Counts | % of Total |
|--------|--------|------------|
| Male   | 20     | 40 %       |
| Female | 30     | 60 %       |

</div>

<div class="instructions" markdown="1">
For the Left or Right side, either repeat the process from above or add `CVAside` to the **Variables** box.
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
