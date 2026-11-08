---
layout: hsc5066y
title: Dispersions
interactive: 1
mj: 1
---

<div class="explanation" markdown="1">

## Measures of Dispersion

As well as a central value, data can also be summarised by stating how spread out the values are.  These are **measures of dispersion**.

### Standard Deviation
You will see **standard deviation** quoted when the average value of the **mean** is used.  Its calculation is beyond the scope of this guide but you can *sort of think of it* as an average distance points are from the mean.
The larger the standard deviation the more spread out the data is.
The units of standard deviation are the same as the units of the measurement.  So, if you are measuring things in grams, the standard deviation will be in the unit of grams.

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

{% include pagination.html %}
