---
layout: nbs4104b
title: Correlation Coefficients
---

# Correlation Coefficients

<div class="explanation" markdown="1">

## Pearson Correlation Coefficient

The **Pearson correlation coefficient, $r$,** is a number between $-1$ and $+1$ that measures the **linear association** between two variables, i.e. it evaluates how well the data points fall on a straight line.

Positive $r$ values indicate positive correlation.

Negative $r$ values indicate negative correlation.

The closer the $r$ value is to $+1$, for positive, or $-1$ for negative, the stronger the linear relationship.

| $r$ value | Interpretation |
|:---|:---|
|0.8 - 1 | Very strong |
|0.6 - 0.8 | Stong |
|0.4 - 0.6 | Moderate |
|0.2 - 0.4 | Weak |
|0 - 0.2 | Very weak |

</div>

### Questions

{% include scatter_display.html 
   id="pearsonSDq1" 
   title="q1"
   alt="The scatter diagram shows a strong positive correlation. As x increase from 2 to 9, y increase from 2 to 20."
   varX="x"
   varY="y"
   points="2,2 | 3,6 | 5,9 | 6,18 | 9,20"
   showTable="true" %}

{% include question_multiple_choice.html
    id="Pearson_q1"
    title="1"
    question_text="What is the most likely $r$ value for the scatter diagram shown?"
    options="a::-0.94||b::0.06||c::0.41||d::0.94"
    correct_answer="d"
    solution_text="This is very strong positive correlation"
%}

{% include scatter_display.html 
   id="pearsonSDq2" 
   title="q2"
   alt="The scatter diagram shows a moderate strong negative correlation. As x increase from 5 to 24, y decreases from 20 to 1."
   varX="x"
   varY="y"
   points="5,20 | 9,11 | 18,14 | 20,10 | 22,12 | 24,1"
   showTable="true" %}

{% include question_multiple_choice.html
    id="Pearson_q2"
    title="2"
    question_text="What is the most likely $r$ value for the scatter diagram shown?"
    options="a::-0.97||b::-0.73||c::-0.15||d::0.73||e::0.97"
    correct_answer="b"
    solution_text="This is strong negative correlation"
%}

<div class="explanation" markdown="1">

## Calculation

Pearson's correlation coefficient can be calculated between variables $x$, with mean $\bar{x}$ and $y$, with mean $\bar{y}$ using the formula:

$$r = \frac{\sum{(x-\bar{x})(y-\bar{y})}}{\sqrt{\sum{(x-\bar{x})^2} \sum{(y-\bar{y})^2}}}$$

</div>

{% capture r_table %}
<table class="table table-bordered">
  <thead>
    <tr>
       <th>Point</th>
      <th>$x$</th>
      <th>$y$</th>
      <th>$x-\bar{x}$</th>
      <th>$y-\bar{y}$</th>
      <th>$(x-\bar{x})^2$</th>
      <th>$(y-\bar{y})^2$</th>
      <th>$(x-\bar{x})(y-\bar{y})$</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>A</td>
      <td>1</td>
      <td>9</td>
      <td>-3</td>
       <td>-12</td>
      <td>9</td>
      <td>144</td>
       <td>36</td>
    </tr>
    <tr>
       <td>B</td>
      <td>3</td>
      <td>10</td>
      <td>-1</td>
       <td>-11</td>
       <td>1</td>
       <td>121</td>
       <td>11</td>
    </tr>
    <tr>
       <td>C</td>
      <td>4</td>
      <td>32</td>
      <td><input type="number" step="any" aria-label="x minus x bar"></td>
       <td><input type="number" step="any" aria-label="y minus y bar"></td>
       <td><input type="number" step="any" aria-label="x minus x bar squared"></td>
       <td><input type="number" step="any" aria-label="y minus y bar squared"></td>
       <td><input type="number" step="any" aria-label="x minus x bar times y minus y bar"></td>
    </tr>
    <tr>
       <td>D</td>
      <td>5</td>
      <td>16</td>
      <td><input type="number" step="any" aria-label="x minus x bar"></td>
       <td><input type="number" step="any" aria-label="y minus y bar"></td>
       <td><input type="number" step="any" aria-label="x minus x bar squared"></td>
       <td><input type="number" step="any" aria-label="y minus y bar squared"></td>
       <td><input type="number" step="any" aria-label="x minus x bar times y minus y bar"></td>
    </tr>
    <tr>
       <td>E</td>
      <td>7</td>
       <td>38</td>
      <td><input type="number" step="any" aria-label="x minus x bar"></td>
       <td><input type="number" step="any" aria-label="y minus y bar"></td>
       <td><input type="number" step="any" aria-label="x minus x bar squared"></td>
       <td><input type="number" step="any" aria-label="y minus y bar squared"></td>
       <td><input type="number" step="any" aria-label="x minus x bar times y minus y bar"></td>
    </tr>
     <tr>
        <td>SUM</td>
        <td>20</td>
        <td>105</td>
        <td>---</td>
        <td>---</td>
        <td><input type="number" step="any" aria-label="sum x minus x bar squared"></td>
       <td><input type="number" step="any" aria-label="sum y minus y bar squared"></td>
       <td><input type="number" step="any" aria-label="sum x minus x bar times y minus y bar"></td>
     </tr>
  </tbody>
</table>
{% endcapture %}

### Questions

{% include scatter_display.html 
   id="pearsonSDq3" 
   title="q3"
   alt="The scatter diagram shows a moderate strong positive correlation. As x increase from 1 to 7, y increases from 9 to 38."
   varX="x"
   varY="y"
   points="1,9 | 3,10 | 4,32 | 5,16 | 7,38"
   showTable="true" %}


Given $\bar{x}=4$ and $\bar{y}=21$,

{% include table_fill.html 
   id="pearsonq3" 
   title="3"
   question_text="Complete the table"
   table_content=r_table
   answers="0 || 11 || 0 || 121 || 0 || 1 || -5 || 1 || 25 || -5 || 3 || 17 || 9 || 289 || 51 || 20 || 700 || 93"
   tolerance="0" 
   solution_text="Subtract the means from the $x$ and $y$ data.  Square both of these columns.  Multiply the $x-\bar{x}$ and $y-\bar{y}$ columns.  Add up the columns."
%}

{% include question_numerical.html
    id="pearsonq4"
    title="4"
    question_text="Use the column sums and the formula to calculate Pearson's correlation coefficient, to 3 d.p."
    correct_answer="0.786"
    tolerance="0.0005"
    solution_text="$\frac{93}{\sqrt{20 \times 700}}$ "
%}

<div class="explanation" markdown="1">

## Spearman Correlation Coefficient

The **Spearman correlation coefficient** is also a measure of correlation that runs between $-1$ and $+1$.  It doesn't look for a linear relationship betwwen the two variables but a **monotonic** one, that is are higher values in one are associated with higher (or lower) values in another, which don't necessarily need to be a linear one.  It uses **ordinal** data or the **rank** value of continuous data.

$$r_s = 1 - \frac{6 \sum d^2}{n(n^2-1)}$$

Where $r_s$ is the correlation coefficient, $d$ is the difference in the ranks of the point in their variables, $n$ is the number of data points.

### Example

Consider the dataset:

| $x$ | $y$ |
|:---|:---|
| 2 | 11 |
| 3 | 10 |
| 5 | 18 |
| 6 | 18 |
| 8 | 17 |
| 10 | 28 |
| 12 | 41 |
| 14 | 60 |

* You would first work out the ranks for each $x$ and $y$, 1 being highest. If ranks are tied, find the average of the ranks.
* You would then find the difference in the ranks of each $(x,y)$ point, $d$.
* You would square this difference value and add them all up, multiply this by 6.
* You would then divide by $n(n^2-1)$, in this case $n=8$

| $x$ | $y$ | rank $x$ | rank $y$ | $d$ | $d^2$ |
|:---|:---|:---|:---|:---|:---|
| 2 | 11 | 8 | 7 | 1 | 1 |
| 3 | 10 | 7 | 8 | 1 | 1 |
| 5 | 18 | 6 | 4.5 | 1.5 | 2.25 |
| 6 | 18 | 5 | 4.5 | 0.5 | 0.25 |
| 8 | 17 | 4 | 6 | 2 | 4 |
| 10 | 28 | 3 | 3 | 0 | 0 |
| 12 | 41 | 2 | 2 | 0 | 0 |
| 14 | 60 | 1 | 1 | 0 | 0 |
| SUM | | | | | 8.5 |

$$r_s = 1 - \frac{6 \times 8.5}{8(8^2-1)} = 1 - \frac{51}{504} = 0.899$$

</div>

### Questions

{% include scatter_display.html 
   id="pearsonSDq5" 
   title="q5"
   alt="The scatter diagram shows a moderate strong negative monotonic correlation. As x increase from 1 to 8, y decreases from 52 to 16."
   varX="x"
   varY="y"
   points="1,52 | 3,50 | 4,55 | 5,21 | 6,25 | 8, 16 "
   showTable="true" %}

{% capture rs_table %}
<table class="table table-bordered">
  <thead>
    <tr>
       <th>Point</th>
      <th>$x$</th>
      <th>$y$</th>
      <th>rank $x$</th>
      <th>rank $y$</th>
      <th>$d$</th>
      <th>$d^2$</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>A</td>
      <td>1</td>
      <td>52</td>
      <td>6</td>
       <td>2</td>
      <td>4</td>
      <td>16</td>
    </tr>
    <tr>
       <td>B</td>
       <td>3</td>
       <td>50</td>
       <td>5</td>
       <td><input type="number" step="any" aria-label="point B rank y"></td>
       <td><input type="number" step="any" aria-label="point B difference"></td>
       <td><input type="number" step="any" aria-label="point B difference squared"></td>
    </tr>
    <tr>
       <td>C</td>
       <td>4</td>
       <td>55</td>
       <td><input type="number" step="any" aria-label="point C rank x"></td>
       <td><input type="number" step="any" aria-label="point C rank y"></td>
       <td><input type="number" step="any" aria-label="point C difference"></td>
       <td><input type="number" step="any" aria-label="point C difference squared"></td>
    </tr>
    <tr>
       <td>D</td>
       <td>5</td>
       <td>21</td>
       <td><input type="number" step="any" aria-label="point D rank x"></td>
       <td><input type="number" step="any" aria-label="point D rank y"></td>
       <td><input type="number" step="any" aria-label="point D difference"></td>
       <td><input type="number" step="any" aria-label="point D difference squared"></td>
    </tr>
    <tr>
       <td>E</td>
       <td>6</td>
       <td>25</td>
       <td><input type="number" step="any" aria-label="point E rank x"></td>
       <td><input type="number" step="any" aria-label="point E rank y"></td>
       <td><input type="number" step="any" aria-label="point E difference"></td>
       <td><input type="number" step="any" aria-label="point E difference squared"></td>
    </tr>
    <tr>
       <td>F</td>
       <td>8</td>
       <td>16</td>
       <td><input type="number" step="any" aria-label="point F rank x"></td>
       <td><input type="number" step="any" aria-label="point F rank y"></td>
       <td><input type="number" step="any" aria-label="point F difference"></td>
       <td><input type="number" step="any" aria-label="point F difference squared"></td>
    </tr>
     <tr>
      <td>SUM</td>
     <td>---</td>
     <td>---</td>
     <td>---</td>
     <td>---</td>
     <td>---</td>
     <td><input type="number" step="any" aria-label="sum d squared"></td>
     </tr>
    </tbody>
</table>
{% endcapture %}

{% include table_fill.html 
   id="pearsonq5a" 
   title="5a"
   question_text="Complete the table, use only positive values in the $d$ column for this exercise."
   table_content=rs_table
   answers="3 || 2 || 4 || 4 || 1 || 3 || 9 || 3 || 5 || 2 || 4 || 2 || 4 || 2 || 4 || 1 || 6 || 5 || 25 || 62"
   tolerance="0" 
   solution_text="Rank each of $x$ and $y$, find the difference in ranks for each point, sum the column and multiply by 6, use the formula with $n=6$ points."
%}

{% include question_numerical.html
    id="pearsonq5b"
    title="5b"
    question_text="Calculate the Spearman correlation coefficient, correct to 3 decimal places."
    correct_answer="-0.771"
    tolerance="0.0005"
    solution_text="$\frac{6*62}{\sqrt{6 \times 35}}$ "
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/nbs/4104b/correlation/" | relative_url }}">← Return to Correlation Menu</a>
</div>

{% include pagination.html %}
