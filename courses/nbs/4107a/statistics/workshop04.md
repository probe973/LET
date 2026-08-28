---
layout: nbs4107a
title: Descriptive Statistics
---

{% capture nbsw04q2table %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Session/Journey</th>
      <th scope="col">Car</th>
      <th scope="col">No Car</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Free Weights</td>
      <td><input type="number" step="any" aria-label="Frequency of free weights and car"></td>
      <td><input type="number" step="any" aria-label="Frequency of free weights and no car"></td>
      <td><input type="number" step="any" aria-label="Total frequency of free weights"></td>
    </tr>
    <tr>
     <td>Cardio Machine</td>
      <td><input type="number" step="any" aria-label="Frequency of cardio machine and car"></td>
      <td><input type="number" step="any" aria-label="Frequency of cardio machine and no car"></td>
      <td><input type="number" step="any" aria-label="Total cardio machine"></td>
    </tr>
    <tr>
     <td>Fitness Class</td>
      <td><input type="number" step="any" aria-label="Frequency of fitness class and car"></td>
      <td><input type="number" step="any" aria-label="Frequency of fitness class and no car"></td>
      <td><input type="number" step="any" aria-label="Total frequency of fitness class"></td>
    </tr>
    <tr>
     <td>Bar</td>
      <td><input type="number" step="any" aria-label="Frequency of bar and car"></td>
      <td><input type="number" step="any" aria-label="Frequency of bar and no car"></td>
      <td><input type="number" step="any" aria-label="Total frequency of bar"></td>
    </tr>
    <tr>
      <td>TOTAL</td>
     <td><input type="number" step="any" aria-label="Total frequency of car"></td>
      <td><input type="number" step="any" aria-label="Total frequency of no car"></td>
      <td>16</td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% capture nbsw04q3table %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">$x$</th>
      <th scope="col">$x-\bar{x}$</th>
      <th scope="col">$(x-\bar{x})^2$</th>
    </tr>
  </thead>
    <tbody>
    <tr>
      <td>12</td>
      <td>-7</td>
      <td>49</td>
    </tr>
    <tr>
      <td>15</td>
      <td>-3</td>
      <td><input type="number" step="any" aria-label="the square of the difference between the value and the mean"></td>
    </tr>
    <tr>
      <td>16</td>
      <td><input type="number" step="any" aria-label="value minus 19, the mean"></td>
      <td><input type="number" step="any" aria-label="the square of the difference between the value and the mean"></td>
    </tr>
    <tr>
      <td>18</td>
      <td><input type="number" step="any" aria-label="value minus 19, the mean"></td>
      <td><input type="number" step="any" aria-label="the square of the difference between the value and the mean"></td>
    </tr>
    <tr>
      <td>20</td>
      <td>1</td>
      <td><input type="number" step="any" aria-label="the square of the difference between the value and the mean"></td>
    </tr>
    <tr>
      <td>21</td>
      <td><input type="number" step="any" aria-label="value minus 19, the mean"></td>
      <td><input type="number" step="any" aria-label="the square of the difference between the value and the mean"></td>
    </tr>
    <tr>
      <td>22</td>
      <td><input type="number" step="any" aria-label="value minus 19, the mean"></td>
      <td><input type="number" step="any" aria-label="the square of the difference between the value and the mean"></td>
    </tr>
    <tr>
      <td>28</td>
      <td><input type="number" step="any" aria-label="value minus 19, the mean"></td>
      <td><input type="number" step="any" aria-label="the square of the difference between the value and the mean"></td>
    </tr>
    <tr>
      <td>Sum, $\sum$</td>
      <td>---</td>
      <td><input type="number" step="any" aria-label="Total of the column for the value minus mean squared"></td>
    </tr>
    </tbody>
</table>
{% endcapture %}

# Descriptive Statistics

This page contains practice questions covering levels of data and descriptive statistics. Click "Show Solution" to see a step-by-step guide and the final answer for each question.

## Levels of Data

### Question 1

A questionnaire that is given to customers who visit the “Pecs Bar & Gym”, the place for those who want mean pecs, or a drink. Determine the level of data (Nominal, Ordinal, Interval, Ratio) produced for each of the questions.

{% include question_multiple_choice.html
    id="nbsrjw04q1a"
    title="1a"
    question_text="Do you use a car to come to the gym? (Yes / No)"
    options="n::Nominal||o::Ordinal||i::Interval||r::Ratio"
    correct_answer="n"
    solution_text="The answers are distinct categories with no inherent order."
%}

{% include question_multiple_choice.html
    id="nbsrjw04q1b"
    title="1b"
    question_text="How would you rate the cleanliness of our facilities? (Excellent, Good, Average, Poor)"
    options="n::Nominal||o::Ordinal||i::Interval||r::Ratio"
    correct_answer="o"
    solution_text="The answers have a meaningful order, but the intervals between them are not equal."
%}

{% include question_multiple_choice.html
    id="nbsrjw04q1c"
    title="1c"
    question_text="What distance, in km, do you live from the gym? (Please provide a number)"
    options="n::Nominal||o::Ordinal||i::Interval||r::Ratio"
    correct_answer="r"
    solution_text="The data is numerical, has equal intervals, and a true zero point."
%}

{% include question_multiple_choice.html
    id="nbsrjw04q1d"
    title="1d"
    question_text="How many times did you visit the gym last month?"
    options="n::Nominal||o::Ordinal||i::Interval||r::Ratio"
    correct_answer="r"
    solution_text="The data is a numerical count with equal intervals and a true zero."
%}

{% include question_multiple_choice.html
    id="nbsrjw04q1e"
    title="1e"
    question_text="Which of these services did you last use? <br> Free Weights <br> Cardio Machines <br> Fitness Class <br> Bar"
    options="n::Nominal||o::Ordinal||i::Interval||r::Ratio"
    correct_answer="n"
    solution_text="The answers are distinct categories with no inherent order."
%}


## Summarising Data

### Question 2

A sample of 16 customers are asked about the session they attended on their last visit and whether they came by car. The results are shown below:

<table style="width: 50%; margin-left: 2em;">
      <thead>
        <tr>
          <th scope="col" style="text-align: left;">Session</th>
          <th scope="col" style="text-align: left;">Journey</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Free Weights</td><td>Car</td></tr>
        <tr><td>Cardio Machines</td><td>Car</td></tr>
        <tr><td>Fitness Class</td><td>No Car</td></tr>
        <tr><td>Bar</td><td>No Car</td></tr>
        <tr><td>Cardio Machines</td><td>Car</td></tr>
        <tr><td>Free Weights</td><td>No Car</td></tr>
        <tr><td>Fitness Class</td><td>Car</td></tr>
        <tr><td>Cardio Machines</td><td>No Car</td></tr>
        <tr><td>Bar</td><td>No Car</td></tr>
        <tr><td>Free Weights</td><td>Car</td></tr>
        <tr><td>Cardio Machines</td><td>Car</td></tr>
        <tr><td>Fitness Class</td><td>Car</td></tr>
        <tr><td>Free Weights</td><td>Car</td></tr>
        <tr><td>Bar</td><td>Car</td></tr>
        <tr><td>Cardio Machines</td><td>Car</td></tr>
        <tr><td>Fitness Class</td><td>No Car</td></tr>
      </tbody>
</table>

{% include table_fill.html 
   id="nbsrjw04q2a" 
   title="2a"
   question_text="Create a cross-table (contingency table) for the frequencies of customers, with session in the rows and journey in the columns."
   table_content=nbsw04q2table
   answers="3 || 1 || 4 || 4 || 1 || 5 || 2 || 2 || 4 || 1 || 2 || 3 || 10 || 6"
   tolerance="0.01" 
   solution_text="Count from the table above each of the times the row by frequency occurs.  The totals are the sums of the rows and the columns."
%}

{% include question_numerical.html
    id="nbsrjw04q2b"
    title="2b"
    question_text="What percentage of the 16 customers used a car?"
    correct_answer="16.5"
    tolerance="0.05"
    solution_text="From the table, 10 out of 16 customers used a car.

Calculation: $$ \frac{10}{16} \times 100$$
"
%}

{% include question_numerical.html
    id="nbsrjw04q2c"
    title="2c"
    question_text="Of those who used a car, what percentage used the cardio machines?"
    correct_answer="40"
    tolerance="0.5"
    solution_text="From the table, 4 customers used cardio machines and a car, out of a total of 10 car users.

Calculation: $$ \frac{4}{10} \times 100$$

"
%}

{% include question_dropdown.html 
    id="nbsrjw04q2d" 
    title="2d" 
    question_text="Create a stacked bar chart, with session on the horizontal axis and a vertical axis that represents the percentage of customers for that session. Each bar should be stacked to show the proportion who used a car and who didn't."
    solution_text="A stacked bar chart, with percentages, puts the proportion of car and no car on top of each other for each of the different gym activities

For car percentages:

Free weights 75%

Cardio 80%

Fitness  50%

Bar 33.3%"
    solution_image="/courses/nbs/4107a/statistics/images/nbsw04q2d.png" 
    image_alt="Stacked bar chart. For free weights 75% car, 25% no car; for cardio 80% and 20%, for fitness 50% and 50%, for bar 33.3% and 66.7%"
%}

### Question 3

The gym is interested in how long it takes people to get to the gym. They conduct a survey of 8 people and ask how long it has taken them to get to the gym in minutes. All 8 people used a car to get to the gym. The sample results were:

> 12, 15, 16, 18, 20, 21, 22, 28

{% include question_numerical.html
    id="nbsrjw04q3a"
    title="3a"
    question_text="Calculate the mean time in minutes."
    correct_answer="19"
    tolerance="0.5"
    solution_text="Sum of values: 

$12 + 15 + 16+ 18 + 20+21+22+28 = 152$

Divide by the number of values, $n=8$, $\text{mean} = \frac{152}{8} = 19$"
%}

{% include question_numerical.html
    id="nbsrjw04q3b"
    title="3b"
    question_text="Calculate the median time in minutes."
    correct_answer="19"
    tolerance="0.5"
    solution_text="The data is already ordered. The middle two values are the 4th and 5th: 18 and 20.

The median is the average of these two: $\frac{18+20}{2} = 19$
"
%}

{% include question_numerical.html
    id="nbsrjw04q3c"
    title="3c"
    question_text="Calculate the value for the range in minutes."
    correct_answer="16"
    tolerance="0.5"
    solution_text="The range is the difference between the minimum and maximum value. $28 - 12 = 16$"
%}

The formula below is used to find the standard deviation, $s$, from a sample:

$$ s = \sqrt{ \frac{\sum{ (x_i - \bar{x})^2}}{n-1}} $$

Where

$\sum$ is the **sum**

$x_i$ is each of the data points

$\bar{x}$ is the **mean** of the data

$n$ is the **sample size**

{% include table_fill.html 
   id="nbsrjw04q3d" 
   title="3d"
   question_text="The table below can be used in calculating the standard deviation. Complete the missing values."
   table_content=nbsw04q3table
   answers="-4 || 16 || 9 || -1 || 1 || 1 || 2 || 4 || 3 || 9 || 9 || 81 || 170"
   tolerance="0.01" 
   solution_text="For the $x-\bar{x}$ column, subtract the mean from each of the values.  For the final column, square the values in the middle column."
%}

{% include question_numerical.html
    id="nbsrjw04q3e"
    title="3e"
    question_text="Calculate the value for the sample standard deviation. Give your answer correct to 2 decimal places"
    correct_answer="4.93"
    tolerance="0.005"
    solution_text="Using the formula

$$s = \sqrt{\frac{170}{8-1}} = 4.928... = 4.93$$"
%}

{% include question_dropdown.html 
    id="nbsrjw04q3f" 
    title="3f" 
    question_text="In a sample of people who did not use a car, the following statistics were found:

Mean = 25 minutes

Median = 24 minutes

Range = 18 minutes

Standard Deviation = 6.2 minutes

Compare the time taken by car users with the time taken by non-car users to get to the gym."

   solution_text="**Comparison of Averages**: Car users are faster on average (Mean 19 vs 25; Median 19 vs 24).

**Comparison of Spread**: Car users have a more consistent journey time as their range and standard deviation are lower (Range 16 vs 18; SD 4.93 vs 6.2)."
%}

## Transforming Data

### Question 4

The following dataset of 10 numbers has a mean of 5.5 and a sample standard deviation of 1.96.

5, 4, 7, 7, 8, 9, 4, 5, 4, 3

Stating how you can use the information about the mean and standard deviation above, find the mean and the standard deviation of the following datasets.

{% include question_dropdown.html 
    id="nbsrjw04q4a" 
    title="4a" 
    question_text="5000, 4000, 7000, 7000, 8000, 9000, 4000, 5000, 4000, 3000"

   solution_text="Each value has been multiplied by 1000.

**New Mean**: $5.5 \times 1000 = 5500$

**New Standard Deviation**: $1.96 \times 1000 = 1960$"
%}

{% include question_dropdown.html 
    id="nbsrjw04q4b" 
    title="4b" 
    question_text="105, 104, 107, 107, 108, 109, 104, 105, 104, 103"

   solution_text="100 has been added to each value.

**New Mean**: $5.5 + 100 = 105.5$

**New Standard Deviation**: Remains unchanged by addition and subtraction $1.96$"
%}

{% include question_dropdown.html 
    id="nbsrjw04q4c" 
    title="4c" 
    question_text="5100, 4100, 7100, 7100, 8100, 9100, 4100, 5100, 4100, 3100"

   solution_text="Each value has been multiplied by 1000, then 100 has been added.

**New Mean**: $5.5 \times 1000 + 1000= 5600$

**New Standard Deviation**: Only affected by the multiplication $1.96 \times 1000 = 1960$"
%}

{% include question_dropdown.html 
    id="nbsrjw04q4d"
    title="4d"
    question_text="Use the same technique, showing your working, to find the mean and standard deviation of the following dataset of 8 numbers:

20000, 20000, 30000, 40000, 60000, 70000, 70000, 90000"
    solution_text="**Step 1: Code the data** Divide all numbers by 10000: 2, 2, 3, 4, 6, 7, 7, 9

**Step 2: Find the mean of the coded data:** $\frac{40}{8}=5$

**Step 3: Find the standard deviation of the coded data:** $\sqrt{\frac{48}{8-1}} = 2.6186$

**Step 4: Decode the results**

Mean = $5 \times 10000 = 50000$

S.D. = $2.619 \times 10000 = 26186"
%}
