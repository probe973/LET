---
layout: nbs4104b
title: Scatter Diagrams
---

# Scatter Diagrams

<div class="explanation" markdown="1">
  
## Plotting

Scatter diagrams are useful in showing relationships between two measured variables.  Each paired reading of the two variables are plotted on a 2-dimensional grid, with one variable on the horizontal axis and the other on the vertical axis.

### Example

Below are some students readings on how many hours they spent studying and what they scored on a test.  The study hours are measured along the horizontal axis and the test scores are measured along the vertical axis.  Each point on the graph represents a participant.

{% include scatter_display.html 
   id="scattereg1" 
   title="Study Time and Exam Results"
   alt="The scatter diagram shows a strong positive correlation. As study hours increase from 2 to 10, test scores increase from 40 to 95."
   varX="Hours Studied"
   varY="Test Score (%)"
   points="2,40 | 4,48 | 6,85 | 8,80 | 10,95"
   showTable="true" %}

</div>

<div class="explanation" markdown="1">

## Correlation

In the scatter diagram in the above example, it can be seen that subjects who studied longer scored better exam results, in general.  A trend of one variable increasing being related to another variable increasing is known as **positive correlation**.

If two variables were related in such a way that has one variable increased the other decreased, this would be known as **negative correlation**.

If two variables shown no relationship then this would be **no correlation**.

</div>

### Questions

When creating the scatter diagrams, click on the grid to place each point in turn.  To move an already created point, click and hold on the point and move.  If you are not able to use a mouse then please enter the points in the input table.

{% include question_scatter.html 
   id="scatter_q1a" 
   title="Question 1 a"
   instruction="Plot the relationship between advertising budget and sales."
   varX="Advertising (£ 000s)"
   varY="Sales (£ 000s)"
   points="12,4 | 14,8 | 15,10 | 15,15 | 20,14 | 25,16 " %}

{% include question_multiple_choice.html
    id="scatter_q1b"
    title="Question 1 b"
    question_text="What type of correlation is shown between advertising budget and sales?"
    options="pos::Positive||none::None||neg::Negative"
    correct_answer="pos"
    solution_text="Higher sales are associated with higher advertising, so positive correlation"
%}

{% include question_scatter.html 
   id="scatter_q2a" 
   title="Question 2 a"
   instruction="Plot the relationship between temperature and heating energy."
   varX="Temp (C)"
   varY="Heating (KWh)"
   points="2,20 | 3,18 | 5,14 | 8,10 | 9,12 | 12,9 | 14,4 | 18,2 " %}

{% include question_multiple_choice.html
    id="scatter_q2b"
    title="Question 2 b"
    question_text="What type of correlation is shown between temperature and heating energy?"
    options="pos::Positive||none::None||neg::Negative"
    correct_answer="neg"
    solution_text="Higher temperatures are associated with lower energy use, so negative correlation"
%} 

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/nbs/4104b/correlation/" | relative_url }}">← Return to Correlation Menu</a>
</div>

{% include pagination.html %}
