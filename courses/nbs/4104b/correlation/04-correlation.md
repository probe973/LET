---
layout: nbs4104b
title: Correlation Workshop
---

# Correlation Workshop

### Questions

When creating the scatter diagrams, click on the grid to place each point in turn.  To move an already created point, click and hold on the point and move.  If you are not able to use a mouse then please enter the points in the input table.

{% include question_scatter.html 
   id="cw_q1a" 
   title="Question 1 a"
   instruction="Plot the relationship between the two exam scores for the 6 candidates shown."
   varX="Exam Score 1"
   varY="Exam Score 2"
   points="3,7 | 5,13 | 4,12 | 7,16 | 2,4 | 6,14 " %}

{% include question_multiple_choice.html
    id="cw_q1b"
    title="1 b"
    question_text="What type of correlation is shown between the two exam scores?"
    options="pos::Positive||none::None||neg::Negative"
    correct_answer="pos"
    solution_text="Higher scores on exam 1 are associated with higher scores on exam 2"
%}

{% include question_multiple_choice.html
    id="cw_q1c"
    title="1 c"
    question_text="The Pearson product moment correlation coefficient is calculated.  Which one of the following options do you think would be its value?"
    options="a::r = 1||b::r = 0.96||c::r = 0.45||d::r = 0.03||e::r=-0.86"
    correct_answer="b"
    solution_text="There is very strong linear relationship between the two variables, which is positive.  It is not quite a perfect straight-line relationship, so r = 1 is ruled out."
%}

{% capture scatter_table_1d %}
<table class="table table-bordered">
  <thead>
    <tr>
       <th>Candidate</th>
      <th>Exam 1 Score, $x$</th>
      <th>Exam 2 Score, $y$</th>
      <th>$x-\bar{x}$</th>
      <th>$y-\bar{y}$</th>
      <th>$(x-\bar{x})^2$</th>
      <th>$(y-\bar{y})^2$</th>
      <th>$(x-\bar{x})(y-\bar{y})$</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>1</td>
      <td>3</td>
      <td>7</td>
      <td>-1.5</td>
       <td>-4</td>
      <td>2.25</td>
      <td>16</td>
       <td>6</td>
    </tr>
    <tr>
       <td>2</td>
      <td>5</td>
      <td>13</td>
      <td>0.5</td>
       <td>2</td>
       <td>0.25</td>
       <td>4</td>
       <td>1</td>
    </tr>
    <tr>
       <td>3</td>
      <td>4</td>
      <td>12</td>
      <td>-0.5</td>
       <td>1</td>
       <td>0.25</td>
       <td>1</td>
       <td>-0.5</td>
    </tr>
    <tr>
       <td>4</td>
      <td>7</td>
      <td>16</td>
      <td>2.5</td>
       <td><input type="number" step="any" aria-label="y minus y bar for cand 4"></td>
       <td>6.25</td>
       <td><input type="number" step="any" aria-label="y minus y bar squared for cand 4"></td>
       <td>12.5</td>
    </tr>
    <tr>
       <td>5</td>
      <td>2</td>
       <td>4</td>
      <td>-2.5</td>
       <td><input type="number" step="any" aria-label="y minus y bar for cand 5"></td>
       <td>6.25</td>
       <td><input type="number" step="any" aria-label="y minus y bar squared for cand 5"></td>
       <td><input type="number" step="any" aria-label="x minus x bar times y minus y bar for cand 5"></td>
    </tr>
    <tr>
       <td>6</td>
      <td>6</td>
       <td>14</td>
      <td>1.5</td>
       <td><input type="number" step="any" aria-label="y minus y bar for cand 6"></td>
       <td>2.25</td>
       <td><input type="number" step="any" aria-label="y minus y bar squared for cand 6"></td>
       <td><input type="number" step="any" aria-label="x minus x bar times y minus y bar for cand 6"></td>
    </tr>
     <tr>
        <td>SUM</td>
        <td>27</td>
        <td>66</td>
        <td>---</td>
        <td>---</td>
        <td>17.5</td>
       <td><input type="number" step="any" aria-label="sum y minus y bar squared"></td>
       <td><input type="number" step="any" aria-label="sum x minus x bar times y minus y bar"></td>
     </tr>
  </tbody>
</table>
{% endcapture %}

You are going to confirm the correlation coefficient, by either using the table below or using the CORREL command on Excel.

Please use the mean of exam 1 was 4.5, and the mean of exam 2 was 11, if completing the table below.

The formula for Pearson's correlation coefficient is:

$$r = \frac{\sum{(x-\bar{x})(y-\bar{y})}}{\sqrt{\sum{(x-\bar{x})^2} \sum{(y-\bar{y})^2}}}$$


{% include table_fill.html 
   id="cw_1d" 
   title="1 d"
   question_text="Complete the table to confirm to Pearson correlation coefficient."
   table_content=scatter_table_1d
   answers="5 || 25 || -7 || 49 || 17.5 || 3 || 9 || 4.5 || 104 || 41 "
   tolerance="0" 
   solution_text="Subtract the means from the $x$ and $y$ data.  Square both of these columns.  Multiply the $x-\bar{x}$ and $y-\bar{y}$ columns.  Add up the columns."
%}

{% include question_multiple_choice.html
    id="cw_q1e"
    title="1 e"
    question_text="Does your calculation match the estimate from 1 c?"
    options="yes::Yes||no::No"
    correct_answer="yes"
    solution_text="If done correctly, it should match."
%}

{% capture scatter_table_1f %}
<table class="table table-bordered">
  <thead>
    <tr>
       <th>Candidate</th>
      <th>Exam Score 1</th>
      <th>Exam Score 2</th>
      <th>rank Score 1</th>
      <th>rank Score 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>1</td>
       <td>3</td>
       <td>7</td>
       <td><input type="number" step="any" aria-label="point 1 rank score 1"></td>
       <td><input type="number" step="any" aria-label="point 1 rank score 2"></td>
    </tr>
    <tr>
      <td>2</td>
      <td>5</td>
      <td>13</td>
      <td><input type="number" step="any" aria-label="point 2 rank score 1"></td>
      <td><input type="number" step="any" aria-label="point 2 rank score 2"></td>
    </tr>
    <tr>
      <td>3</td>
      <td>4</td>
      <td>12</td>
      <td><input type="number" step="any" aria-label="point 3 rank score 1"></td>
      <td><input type="number" step="any" aria-label="point 3 rank score 2"></td>
    </tr>
    <tr>
      <td>4</td>
      <td>7</td>
      <td>16</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>5</td>
      <td>2</td>
      <td>4</td>
      <td><input type="number" step="any" aria-label="point 2 rank score 5"></td>
      <td><input type="number" step="any" aria-label="point 2 rank score 5"></td>
    </tr>
    <tr>
      <td>6</td>
      <td>6</td>
      <td>14</td>
      <td><input type="number" step="any" aria-label="point 2 rank score 6"></td>
      <td><input type="number" step="any" aria-label="point 2 rank score 6"></td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% include table_fill.html 
   id="cw_1f" 
   title="1 f"
   question_text="For both exam 1 and exam 2, write down each candidates rank position (with 1 being the best and 6 being the worst).  "
   table_content=scatter_table_1f
   answers="5 || 5 || 3 || 3 || 4 || 4 || 6 || 6 || 2 || 2"
   tolerance="0" 
   solution_text=""
%}

{% include question_numerical.html
    id="cw_1g"
    title="1 g"
    question_text="Without any calculations, what is the value of Spearman's rank correlation coefficient?"
    correct_answer="1"
    tolerance="0"
    solution_text="The ranks are perfectly aligned, so a value of plus 1."
%}


{% capture scatter_table_2 %}
<table class="table table-bordered">
  <thead>
    <tr>
       <th>Job</th>
      <th>Workers</th>
      <th>Days to Complete</th>
      <th>rank workers</th>
      <th>rank complete</th>
      <th>$d$</th>
      <th>$d^2$</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>1</td>
       <td>8</td>
       <td>12</td>
       <td><input type="number" step="any" aria-label="job 1 rank score workers"></td>
       <td><input type="number" step="any" aria-label="job 1 rank score complete"></td>
       <td><input type="number" step="any" aria-label="job 1 rank difference"></td>
       <td><input type="number" step="any" aria-label="job 1 rank difference squared"></td>      
    </tr>
    <tr>
       <td>2</td>
       <td>9</td>
       <td>10</td>
       <td><input type="number" step="any" aria-label="job 2 rank score workers"></td>
       <td><input type="number" step="any" aria-label="job 2 rank score complete"></td>
       <td><input type="number" step="any" aria-label="job 2 rank difference"></td>
       <td><input type="number" step="any" aria-label="job 2 rank difference squared"></td>      
    </tr>
    <tr>
       <td>3</td>
       <td>7</td>
       <td>14</td>
       <td><input type="number" step="any" aria-label="job 3 rank score workers"></td>
       <td><input type="number" step="any" aria-label="job 3 rank score complete"></td>
       <td><input type="number" step="any" aria-label="job 3 rank difference"></td>
       <td><input type="number" step="any" aria-label="job 3 rank difference squared"></td>      
    </tr>
    <tr>
       <td>4</td>
       <td>10</td>
       <td>13</td>
       <td><input type="number" step="any" aria-label="job 4 rank score workers"></td>
       <td><input type="number" step="any" aria-label="job 4 rank score complete"></td>
       <td><input type="number" step="any" aria-label="job 4 rank difference"></td>
       <td><input type="number" step="any" aria-label="job 4 rank difference squared"></td>      
    </tr>
    <tr>
       <td>5</td>
       <td>5</td>
       <td>18</td>
       <td><input type="number" step="any" aria-label="job 5 rank score workers"></td>
       <td><input type="number" step="any" aria-label="job 5 rank score complete"></td>
       <td><input type="number" step="any" aria-label="job 5 rank difference"></td>
       <td><input type="number" step="any" aria-label="job 5 rank difference squared"></td>      
    </tr>
    <tr>
       <td>6</td>
       <td>2</td>
       <td>50</td>
       <td><input type="number" step="any" aria-label="job 6 rank score workers"></td>
       <td><input type="number" step="any" aria-label="job 6 rank score complete"></td>
       <td><input type="number" step="any" aria-label="job 6 rank difference"></td>
       <td><input type="number" step="any" aria-label="job 6 rank difference squared"></td>      
    </tr>
    <tr>
       <td>7</td>
       <td>6</td>
       <td>15</td>
       <td><input type="number" step="any" aria-label="job 7 rank score workers"></td>
       <td><input type="number" step="any" aria-label="job 7 rank score complete"></td>
       <td><input type="number" step="any" aria-label="job 7 rank difference"></td>
       <td><input type="number" step="any" aria-label="job 7 rank difference squared"></td>      
    </tr>
  </tbody>
</table>
{% endcapture %}

The formula for Spearman's rank correlation coefficient, where $d$ is the difference in the ranks is:

$$r_s = 1 - \frac{6 \sum d^2}{n(n^2-1)}$$

Below is shown the number of workers and the time to complete a job, for 7 different jobs.

{% include table_fill.html 
   id="cw_2" 
   title="2 a"
   question_text="Complete the table.  Put only positive values for the $d$ column."
   table_content=scatter_table_2
   answers="3 || 6 || 3 || 9 || 2 || 7 || 5 || 25 || 4 || 4 || 0 || 0 || 1 || 5 || 4 || 16 || 6 || 2 || 4 || 16 || 7 || 1 || 6 || 36 || 5 || 3 || 2 || 4 ||"
   tolerance="0" 
   solution_text=""
%}

{% include question_numerical.html
    id="cw_2 b"
    title="2 b"
    question_text="What is the sum of the $d^2$ column?"
    correct_answer="106"
    tolerance="0"
    solution_text="Add up the final column."
%}

{% include question_numerical.html
    id="cw_2 c"
    title="2 c"
    question_text="Calculate the value of Spearman's rank correlation coefficient, correct to 3 d.p."
    correct_answer="-0.893"
    tolerance="0.0005"
    solution_text="$r_s = 1 - \frac{6 \times 106}{7(7^2-1)}=-0.89286$"
%}

{% include question_multiple_choice.html
    id="cw_q2d"
    title="2 d"
    question_text="What type of monotonic correlation is shown between number of workers and completion time?"
    options="pos::Positive||none::None||neg::Negative"
    correct_answer="neg"
    solution_text="More workers are associated with shorter completion times."
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/nbs/4104b/correlation/" | relative_url }}">← Return to Correlation Menu</a>
</div>

{% include pagination.html %}
