---
layout: nbs4104b
title: Box Plots
---

<div class="explanation" markdown="1">

# Box and Whisker Plots

A **box plot** (or **box-and-whisker plot**) is a standardised way of displaying the distribution of data based on a five-number summary:

<ul>
    <li>Minimum: The smallest value in the dataset.</li>
    <li>First Quartile (Q1): The 25th percentile, marking the end of the first quarter of the data.</li>
    <li>Median (Q2): The middle value of the dataset, also the 50th percentile.</li>
    <li>Third Quartile (Q3): The 75th percentile, marking the end of the third quarter of the data.</li>
    <li>Maximum: The largest value in the dataset.</li>
</ul>

It is particularly useful for:
                <ul>
                    <li>Visualising the spread, skewness, and potential outliers of a dataset.</li>
                    <li>Comparing distributions between different groups or categories at a glance.</li>
                </ul>

![Vertical box plot, with labels top to bottom of max, Q3 (75%), Median (50%), Q1(25%), and Min](images/box_plot.png)

</div>

### Questions

Here is a dataset summarised by a box and whisker plot.

![Vertical box plot, with a scale of 20 to 45 on the vertical axis.  The whiskers run between 21 and 44.  The box runs between 25 and 36.  The line in the box is at 30. ](images/box_plot_q.png)

{% include question_multiple_choice.html
    id="box_plot_q1"
    title="1"
    question_text="What is the median value of the data?"
    options="iqr::11|| min::21 || r::23 || lq::25 || med::30 || uq::36 || max::44"
    correct_answer="median"
    solution_text="The median is the line in the middle of the box."
%}

{% include question_multiple_choice.html
    id="box_plot_q2"
    title="2"
    question_text="25 percent of the data was below which value?"
    options="iqr::11|| min::21 || r::23 || lq::25 || med::30 || uq::36 || max::44"
    correct_answer="lq"
    solution_text="The lower quartile represents the point where 25 percent of the data is below this value."
%}

{% include question_multiple_choice.html
    id="box_plot_q3"
    title="3"
    question_text="25 percent of the data was above which value?"
    options="iqr::11|| min::21 || r::23 || lq::25 || med::30 || uq::36 || max::44"
    correct_answer="uq"
    solution_text="The upper quartile represents the point where 25 percent of the data is above this value, or 75 percent below."
%}

{% include question_multiple_choice.html
    id="box_plot_q4"
    title="4"
    question_text="What is the inter-quartile range?"
    options="iqr::11|| min::21 || r::23 || lq::25 || med::30 || uq::36 || max::44"
    correct_answer="iqr"
    solution_text="The inter-quartile range is $$UQ - LQ$$, so $$36 - 25$$."
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/nbs/4104b/descriptive/" | relative_url }}">← Return to Descriptive Statistics Menu</a>
</div>

{% include pagination.html %}
