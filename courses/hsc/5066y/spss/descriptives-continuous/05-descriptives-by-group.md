---
layout: default
title: Statistics by Group
interactive: 1
mj: 0
---

<div class="explanation" markdown="1">

## Statistics by Grouping Variable

Sometimes you may be interested in descriptive statistics (mean, median, standard deviation, etc.) on a particular measure of different groups.  This may be to explore differences or similarities between the groups.

In this example you are going to generate the descriptive statistics for age again, but this time you are going to look at the values for the different sexes seperately.

</div>

<div class="instructions" markdown="1">

*  From SPSS, go to **Analyze**, **Descripitve Statistics** then **Explore**
*  Place the `Age` variable into the **Dependent List** box
*  Place the `Sex` variable into the **Factor List** box

You should now see each of the statistics split for each of the sexes in the datafile.

</div>

<div class="output" markdown="1">

### Some Selected Output

Some selected statistics you should have:

| Statistic | Female | Male |
|----------|----------|----------|
| N | 30 | 20 |
| Mean | 67.1 | 67.3 |
| Median | 67.5 | 68.0 |
| S.D. | 8.19 | 8.98 |

</div>

{% include question_multiple_choice.html
    id="q_compare_age_mean"
    title="Average age"
    question_text="Which of the following best describes the data?"
    options="similar::The sexes were on average similar in age||male::Males were on average much older than females||female::Females were on average much older than males"
    correct_answer="similar"
    solution_text="The means and medians for males and females were very similar within this sample."
%}

{% include question_multiple_choice.html
    id="q_compare_age_deviation"
    title="Age dispersion"
    question_text="Which of the following best describes data?"
    options="same::All results that measure spread were identical for all sexes||male::Male ages were slightly more spread out in age than females||female::Female ages were slightly more spread out in age than males"
    correct_answer="male"
    solution_text="The standard deviation, range, and inter-quartile range show that male ages were more spread out than females."
%}

{% include question_multiple_choice.html
    id="q_age_youngest"
    title="Youngest participant"
    question_text="Which sex was the youngest participant?"
    options="same::There was a tie between the age of the youngest particpant||male::The youngest participant was a male||female::The youngest participant was a female"
    correct_answer="female"
    solution_text="The minimum age was lowest for females (45)."
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/hsc/5066y/spss/" | relative_url }}">← Return to SPSS Guides Menu</a>
</div>

{% include pagination.html %}
