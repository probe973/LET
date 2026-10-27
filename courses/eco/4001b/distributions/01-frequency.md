---
layout: eco4001b
title: Frequency table
---

<div class="explanation" markdown="1">

## Frequency, Cumulative Frequency, Relative Frequency, Cumulative Relative Frequency

### Frequency
**Frequency** is a numerical value that says how many occurrences of an item or value there have been.  For continuous data, it may show the number of occurrences within a range.

### Cumulative frequency
**Cumulative frequency** is a running total of frequencies.  It shows the number of occurrences that are less than or equal to the current value.  The last value in the cumulative frequencies will be the total frequency.

### Relative frequency
**Relative frequency** is the frequency divided by the total frequency.  It gives the proportion of the data that are within this group.

### Cumulative relative frequency
**Cumulative relative frequency** is the running total of the relative frequencies. It gives the proportion of the data that are less than or equal to the current value.  The last value in the cumulative relative frequencies will be 1, representing 100% of the data.

Cumulative relative frequency can be used to find **percentiles** of the data.  For example, the 10th percentile is the point where 10% of values are below this and 90% of values are above this.  You can look to see where the cumulative relative frequency passes the percentile value.  The **median** is the 50th percentile.

</div>

### Question

A bar sells scratch cards, for £3, where the customer can win between £0 and £10, in whole number of £.  The winnings record over the past 250 cards sold is given as a frequency table.

{% capture freq_table %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th>Winnings, £</th>
      <th>Frequency</th>
      <th>Relative Frequency</th>
      <th>Cumulative Relative Frequency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>48</td>
      <td>0.192</td>
      <td>0.192</td>
    </tr>
    <tr>
      <td>1</td>
      <td>60</td>
      <td>0.24</td>
      <td>0.432</td>
    </tr>
    <tr>
      <td>2</td>
      <td>42</td>
      <td><input type="number" step="any"></td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>3</td>
      <td>31</td>
      <td><input type="number" step="any"></td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>4</td>
      <td>33</td>
      <td><input type="number" step="any"></td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>5</td>
      <td>12</td>
      <td><input type="number" step="any"></td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>6</td>
      <td>8</td>
      <td><input type="number" step="any"></td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>7</td>
      <td>9</td>
      <td><input type="number" step="any"></td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>8</td>
      <td>5</td>
      <td><input type="number" step="any"></td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>9</td>
      <td>1</td>
      <td><input type="number" step="any"></td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>10</td>
      <td>1</td>
      <td><input type="number" step="any"></td>
      <td><input type="number" step="any"></td>
    </tr>   
  </tbody>
</table>
{% endcapture %}

{% include table_fill.html 
   id="distance_ds_01" 
   title="Frequncy Calculations"
   question_text="Complete the relative and cumulative relative frequency columns, to 3 decimal places."
   table_content=freq_table
   answers="0.168 || 0.6 || 0.124 || 0.724 || 0.132 || 0.856 || 0.048 || 0.904 || 0.032 || 0.936 || 0.036 || 0.972 || 0.02 || 0.992 || 0.004 || 0.996 || 0.004 || 1"
   tolerance="0.0001" 
   solution_text="The relative frequencies are the frequency divided by 250 (the total frequency).  The cumulative relative frequencies are the running total of the relative frequencies."
%}

{% include question_numerical.html
id="cards_mode"
title="Mode"
question_text="Identify the mode, by finding the payout with the highest frequency"
correct_answer="1"
tolerance="0.005"
solution_text="The highest frequency is 60."
%}

{% include question_numerical.html
id="cards_median"
title="Median"
question_text="Use the cumulative relative frequencies to find the median payout (50th percentile)."
correct_answer="2"
tolerance="0.005"
solution_text="There are 43.2% of values up to £1, and then 60% up to £2.  The 50% point must have occurred during the £2 group."
%}

{% include question_numerical.html
id="cards_lq"
title="Lower quartile"
question_text="Find the lower quartile (25th percentile)."
correct_answer="1"
tolerance="0.005"
solution_text="Find the value where the cumulative relative frequency first goes over 25%."
%}

{% include question_numerical.html
id="cards_uq"
title="Upper quartile"
question_text="Find the upper quartile (75th percentile)."
correct_answer="4"
tolerance="0.005"
solution_text="Find the value where the cumulative relative frequency first goes over 75%."
%}

{% include question_numerical.html
id="cards_90"
title="90th percentile"
question_text="Find the 90th percentile."
correct_answer="5"
tolerance="0.005"
solution_text="Find the value where the cumulative relative frequency first goes over 90%."
%}

A bar chart of the frequencies of winnings is shown:

![A bar chart that has the winnings on the x-axis, the frequency on the y-axis, and bars showing the frequencies form the table.]({{ "images/winnings_bar.png" }})

{% include question_multiple_choice.html
    id="card_skew"
    title="Skew"
    question_text="Describe the skew of the distribution (left-skew, right-skew, or symmetric) based on the shape of the bar chart."
    options="left::Left-skew||right::Right-skew||symmetric::Symmetric"
    correct_answer="right"
    solution_text="The tail is to the right."
%}

{% include question_numerical.html
id="cards_profit"
title="Profit"
question_text="Calculate the total revenue on scratchcards (£3 each), total amount paid out in winnings (from table), and enter the profit in the box below."
correct_answer="151"
tolerance="0.5"
solution_text="$TR = 250 \times 3 = £750$, $TC = 48 \times 0 + 60 \times 1 + 42 \times 2 + ...$"
%}

{% include pagination.html %}
