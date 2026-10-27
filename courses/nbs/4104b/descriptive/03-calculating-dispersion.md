---
layout: nbs4104b
title: Dispersions
---

<div class="explanation" markdown="1">

## Measures of Dispersion

As well as a central value, data can also be summarised by stating how spread out the values are.  These are **measures of dispersion**.

### Range
The **range** is the difference between the largest value and the smallest value, i.e. $ \text{largest} - \text{smallest} $.
The larger the range the more spread out the data is.

### Inter-quartile Range
The **inter-quartile range** is the difference between the 75th percentile and the 25th percentile.

The **percentiles** are points where that percentage of data are below this score.
So, the **25th percentile** is the point where 25% of data are below this value and 75% are avove this value.
The **75th percentile** is the point where 75% of data are below this value and 25% are above.

The **inter-quartile range** is the spread of the middle 50% of the data.

</div>

{% include question_numerical.html
id="calculate_range"
title="Calculate the Range"
question_text="Given the data 5, 8, 8, 9, 15, calculate the Range."
correct_answer="10"
tolerance="0"
solution_text="The difference between 15 and 5 is 10."
%}

{% include question_multiple_choice.html
    id="q_fifty_percentile"
    title="50th percentile"
    question_text="What is another name for the 50th percentile?"
    options="range::Range||mean::Mean||median::Median"
    correct_answer="median"
    solution_text="The 50th percentile is the middle point of the data."
%}

<div class="explanation" markdown="1">

### Variance
The **variance** is a measure of dispersion which is a *mean of the squared distances from the mean*.  The larger the variance the more disperse the data are.

If you collect a sample of $n$ data points, with each value represented by $x_i$, and the mean of these data represented by $\bar{x}$, then the calculation needed for the **sample variance**, $s^2$ is:

$$s^2=\frac{\Sigma (x_i-\overline{x})^2}{n-1}$$

### Standard Deviation
The **variance** will have units that are the square of the original units.  So, if you are measuring an item in $m$ then the variance will be in $m^2$.  It is therefore common to use the **standard deviation** to represent spread.  The standard deviation is the square root of the variance.  So for the sample standard deviation, $s$:

$$s=\sqrt{\frac{\Sigma \left (x_{i} - \overline{x} \right )^2}{n-1}}$$

</div>

## Question

A customer, who visits the gym regularly, records on a sample of visits the number of kilometres they complete on the running machine.  The records are:

Distance, d (km): 12, 10, 14, 14, 11, 8, 15, 18, 15

{% include question_numerical.html
id="distance_mean"
title="Calculate the Mean"
question_text="Find the mean distance"
correct_answer="13"
tolerance="0"
solution_text="The sum is 117 and there are 9 data points."
%}

Using $d_i$ to represent each data point and $\overline{d}$ to represent the mean calculated above:

<!-- 1. START CAPTURE: This saves the table into the variable 'num_table' -->
{% capture num_table %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th>$d_i$</th>
      <th>$(d_i-\bar{d})$</th>
      <th>$(d_i-\bar{d})^2$</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>12</td>
      <td>-1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>10</td>
      <td>-3</td>
      <td>9</td>
    </tr>
    <tr>
      <td>14</td>
      <td>1</td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>14</td>
      <td>1</td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>11</td>
      <td><input type="number" step="any"></td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>8</td>
      <td><input type="number" step="any"></td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>15</td>
      <td><input type="number" step="any"></td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>18</td>
      <td><input type="number" step="any"></td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>15</td>
      <td><input type="number" step="any"></td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>SUM</td>
      <td>----</td>
      <td><input type="number" step="any"></td>
    </tr>
  </tbody>
</table>
{% endcapture %}
<!-- 2. END CAPTURE -->

<!-- 3. Now we pass the captured 'num_table' variable to the include -->
{% include table_fill.html 
   id="distance_ds_01" 
   title="SD Calculation"
   question_text="Complete the table below."
   table_content=num_table
   answers="1 || 1 || -2 || 4 || -5 || 25 || 2 || 4 || 5 || 25 || 2 || 4 || 74"
   tolerance="0.01" 
   solution_text="The middle column is the difference between the distance and the mean (13).  The final column is the middle column squared.  The bottom row is the sum of the third column"
%}

Use the formula

$$s^2=\frac{\Sigma (d_i-\bar{d})^2}{n-1}$$

{% include question_numerical.html
id="distance_variance"
title="Sample Variance"
question_text="Calculate the sample variance, correct to 2 decimal places."
correct_answer="9.25"
tolerance="0.005"
solution_text="The sum of square distances is 74 and divide by 9-1=8"
%}

{% include question_numerical.html
id="distance_sd"
title="Sample Standard Deviation"
question_text="Calculate the sample standard deviation, correct to 2 decimal places."
correct_answer="3.04"
tolerance="0.005"
solution_text="The standard deviation is the square root of the variance."
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/nbs/4104b/descriptive/" | relative_url }}">← Return to Descriptive Statistics Menu</a>
</div>

{% include pagination.html %}
