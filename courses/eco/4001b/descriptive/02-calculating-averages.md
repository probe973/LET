---
layout: eco4001b
title: Averages
---

<div class="explanation" markdown="1">

## Measures of Average

Data can be summarised by calculating a **central value**, known as an **average**.  There are different types of average.

### Mean
The **mean** is a measure that is calculated by adding up all of the values in the variable and then dividing by the number of values.  It is the value every participant would be if the total was shared equally between them.

The **mean** can be **skewed** by extreme values.  So for example, if annual wages at a company are:

£20000, £25000, £25000, £500000

Then the mean would be:
$$ \frac{20000 + 25000 + 25000 + 500000}{4}=142500 $$

£142500 may not be a "*good*" measure of centre in this situation.

### Median
The **median** is a measure that is the value for which half (50%) of values are below and half are above. It is the value in the middle of the data when values are written in numerical order.  If there are two values in the middle, then the median is the half-way point between these two values.

### Mode
The **mode** is the value in the dataset that appears most often.  Sometimes variables have no mode and sometimes they may have several modes.

</div>

{% include question_numerical.html
id="calculate_mean"
title="Calculate the Mean"
question_text="Given the data 5, 8, 8, 9, 15, calculate the mean."
correct_answer="9"
tolerance="0"
solution_text="The values add up to 45.  There are 5 values.  45 divided by 5 is 9."
%}

{% include question_numerical.html
id="calculate_median"
title="Calculate the Median"
question_text="Given the data 5, 8, 8, 9, 15, calculate the median."
correct_answer="8"
tolerance="0"
solution_text="The numbers are in numerical order, the value 8 is in the middle."
%}

{% include question_numerical.html
id="calculate_mode"
title="Calculate the Mode"
question_text="Given the data 5, 8, 8, 9, 15, find the mode."
correct_answer="8"
tolerance="0"
solution_text="The number 8 appears most often."
%}

{% include pagination.html %}
