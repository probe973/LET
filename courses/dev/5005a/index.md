---
layout: default
title: Home
interactive: 1
mj: 1
---

{% capture ygsextable %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Year Group/Sec</th>
      <th scope="col">Year 10</th>
      <th scope="col">Year 11</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Female</td>
      <td><input type="number" step="any" aria-label="Frequency of year 10 and female"></td>
      <td><input type="number" step="any" aria-label="Frequency of year 10 and male"></td>
      <td>200</td>
    </tr>
    <tr>
     <td>Male</td>
      <td><input type="number" step="any" aria-label="Frequency of year 11 and male"></td>
      <td><input type="number" step="any" aria-label="Frequency of year 11 and female"></td>
      <td>170</td>
    </tr>
    <tr>
     <td>Total</td>
      <td>180</td>
      <td>190</td>
      <td>370</td>
    </tr>
  </tbody>
</table>
{% endcapture %}

# Workshop: Stata Helpdesk

In this helpdesk you can ask questions about the use of Stata in your course or work through these questions.

  
* Open Stata
* Download <a href="exploreschool.dta">here</a> the datafile
* Open this file in stata

## Frequencies

The data contains some information recorded by a school several years ago.

* Use the command `br`
* Comment on what is contained in the dataset.
* Use the `table` command to find information about frequencies.
 

<div class="explanation" markdown="1">

The `table` command can be used with the following syntax:

`table` Variable_Name

</div>

{% include question_dropdown.html 
    id="q1" 
    title="1" 
    question_text="What are the variable names are recorded in the dataset" 
    solution_text="The variables are
* year group
* tv
* iq
* height m
* weight kg
* sex" 
%}

* The `tv` variable is a measure of how many hours of tv were watched per week
* The `iq` is the score on an IQ test

{% include question_numerical.html
    id="q2"
    title="2"
    question_text="How many students are in the database"
    correct_answer="370"
    tolerance="0.05"
    solution_text="There are a total of 370 records"
%}

{% include question_numerical.html
    id="q3"
    title="3"
    question_text="How many students are in year 10"
    correct_answer="200"
    tolerance="0.05"
    solution_text="The `table YearGroup` command shows 200 in year 10 and 170 in year 11"
%}

{% include question_numerical.html
    id="q4"
    title="4"
    question_text="How many students are female"
    correct_answer="200"
    tolerance="0.05"
    solution_text="The `table Sex` command shows 180 female"
%}

<div class="instructions" markdown="1">

The `table` command can also create **two-way tables**

`table variable_1 variable_2`

</div>

{% include table_fill.html 
   id="q5" 
   title="5"
   question_text="Complete the cross-table (contingency table) for the frequencies of year groups by sex by using a stata table command."
   table_content=ygsextable
   answers="94 || 106 || 86 || 84"
   tolerance="0.01" 
   solution_text="`table YearGroup Sex` yields

   94 year 10 females, 106 year 10 males, 86 year 11 females, and 84 year 11 males.
   "
%}

## Summary Statistics of Measured Variables

Summary statistics such as the **mean**, **median** (50th percentile), and **standard deviation** can be obtained with the `sum` (short for summarize) command

<div class="instructions" markdown="1">

The `sum` command is used like:

`sum variable`

To get summaries of variables called **a** and **b**, for example, you would run:

`sum a b`

You can also get additional information by adding `detail` to the end of the command:

`sum variable, detail`

</div>
  
Use the `summarize` or `sum` command to get summary statistics for **height**, **weight**, **TV hours**, and **IQ**

{% include question_numerical.html
    id="q6"
    title="6"
    question_text="What is the mean IQ in the group? Give your answer correct to 1 decimal place."
    correct_answer="100.4"
    tolerance="0.05"
    solution_text="The `sum IQ` command should give you a mean of 100.3886"
%}

{% include question_numerical.html
    id="q7"
    title="7"
    question_text="What is the standard deviation of the heights in the group? Give your answer correct to 2 decimal places."
    correct_answer="0.12"
    tolerance="0.005"
    solution_text="The `sum Heightm` command should give you a std. dev. of 0.1153799"
%}

{% include question_numerical.html
    id="q8"
    title="8"
    question_text="What is most number of hours of TV watched per week?"
    correct_answer="190"
    tolerance="0.005"
    solution_text="The `sum TV` command should give you a max of 190"
%}

{% include question_numerical.html
    id="q9"
    title="9"
    question_text="What is the median weight in kg?"
    correct_answer="54"
    tolerance="0.005"
    solution_text="The `sum Weightkg, detail` command should give you a 50th percentile of 54"
%}

Consider the command

    `by YearGroup, sort: sum TV IQ`

This should give you summary statistics for TV hours and IQ split by the two year groups.

{% include question_multiple_choice.html
    id="q10"
    title="10"
    question_text="Which year group had the higher mean TV hours?"
    options="a::Year 10||b::Year 11"
    correct_answer="b"
    solution_text="Year 10 had a mean of 19.9 hours, year 11 had 21.5 hours. Therefore year 11."
%}

{% include question_multiple_choice.html
    id="q11"
    title="11"
    question_text="Which sex had the higher mean TV hours?"
    options="a::Female||b::Male"
    correct_answer="a"
    solution_text="Use the command `by Sex, sort: sum TV` to find that females had a higher mean TV hour average."
%}


## Association Between Continuous Variables

<div class="instructions" markdown="1">

### Scatter Diagrams

Scatter diagrams show how one measured variable is related to another measured variable. Each piece of data is plotted on an x-y grid. The stata command to get this is:

`twoway (scatter yvar xvar)`

Where `xvar` is the name of the variable you want on the horizontal axis and `yvar` is the name of the variable you want on the vertical axis.

Try the command

    `twoway (scatter Weightkg Heightm)`


* Create a scatter diagram of TV hours against IQ for the year 10 group using:

    `twoway (scatter IQ TV if YearGroup == 10)`

This should create a scatter diagram that only shows the year 10 relationship


</div>

In the dataset, females are coded as 1 and males are coded as 2, within the `Sex` variable. This can be confirmed with the following command:

    `codebook Sex`

{% include question_dropdown.html 
    id="q12" 
    title="12" 
    question_text="Create a scatter diagram with weight on the horizontal and height on the vertical for **males only**" 
    solution_text="Use the command `twoway (scatter Weightkg Heightm if Sex == 2)`

You should see there is a relationship that taller people tend to be heavier." 
    solution_image="/courses/dev/5005a/images/scatter.png" 
    image_alt="scatter diagram with height on the horizontal and weight on the vertical. As points move further up height they are further up weight"
%}

<div class="instructions" markdown="1">

### Correlation Coefficients

The strength of the association between continuous variables can be measured with a **correlation coefficient**.

The correlation coefficient between two variables is a number between -1 and +1. If the number is negative it suggests a negative correlation between the two variables, and a positive value suggests a positive relationship between the two variables.

The close the coefficient is to +1 or -1, the stronger the correlation.

In stata you can find the correlation by using `pwcorr`.

`pwcorr var1 var2 var3 etc`

This command will give you every pair of correlations between the entered variables.

You can also test if there is a **significant correlation** between the variables, using a hypothesis test. The null hypothesis is no relationship and the alternative hypothesis is there is a relationship between the variables. In order to reject the null hypothesis, you require a **small *p*-value**, conventionally ***p*<0.05**.

To get the p-value in the output, you would use:

`pwcorr var1 var2 var3 etc, sig`

The top number in the output is the correlation coefficient and the bottom number is the *p*-value.

</div>

{% include question_numerical.html
    id="q13"
    title="13"
    question_text="Find the **correlation coefficient** between the height and the weight variables. Give your answer correct to 2 decimal places"
    correct_answer="0.49"
    tolerance="0.005"
    solution_text="The `pwcorr Heightm Weightkg` command should give you a correlation coefficient of 0.4851"
%}

{% include question_multiple_choice.html
    id="q14"
    title="14"
    question_text="Is the correlation between height and weight significant?"
    options="a::no, p > 0.05||b::yes, p < 0.05"
    correct_answer="b"
    solution_text="Use the command `pwcorr Heightm Weightkg, sig` to find a value for p of 0.000. This means p < 0.001"
%}



* Find the **correlation coefficient** between the height and the weight variables.  Use the `pwcorr` command/
* Is the sign of the correlation what you would expect?
* Add `, sig` to the end of the correlation command to determine whether the correlation is **significant**
    




## Histograms

A **histogram** is a chart for continuous variables.  Values for the measure are put into small groups (1 to 5, 5 to 9, etc) and then bars are drawn to show how many people (or whatever the participants represent) belong to that group. 

They are useful in showing the shape of the distribution, shows where the **mode** is (or are if there are more than one) and whether there are any extreme values that may **skew** results.

<div class="instructions" markdown="1">

### Normal Distribution

A **normally distributed** variable has a *bell like shape*.  It is symmetrical about the **mean** with a sinlge **mode** at the mean.  Due to the symmetry, the **median** is also the mean value.  
An example of a histogram which could be considered normally distributed is shown below.

![A histogram that has a classic normal disribution shape.  The values on the x-axis range from -3 to 4 and on the y-axis from 0 to 120.  The modal area is at 0.]({{ "/assets/images/hsc/5066y/histnorm.png" | relative_url }})
</div>

  

<div class="explanation" markdown="1">
### Skew

If a distribution has some values that are much smaller than the rest of the distribution, or much larger than the rest of the distribution, this is known as **skew**. 
Skew can have an effect of distorting the **mean** from being a *good* indication of central tendency.

Having values that are lower than the bulk of the data will have the effect of making the mean smaller, and you will find in such a distribution that the **mean will be smaller than the median**.  The histogram will 
have a **tail to the left**.  This type of skew is called a **negative skew** or a **left skew**.

Having values that are higher than the bulk of the data will have the effect of making the mean larger, and you will find in such a distribution that the **mean will be greater than the median**.  The histogram will 
have a **tail to the right**.  This type of skew is called a **positive skew** or a **right skew**.

Reporting the mean may not be appropriate when data are skewed, and the median may be a better choice.  The calculation of standard deviation, as a measure of dispersion, makes use of the mean, so this may also not be 
the best measure; the inter-quartile range may be a better choice.

Many statisical tests rely on assumptions about **parameters** such as the **mean** and **standard deviation**.  These type of tests are known as **parametric tests**.  It is important that we know whether data 
is normally distributed, for both reporting purposes and for choosing the correct statistical model.

 ![Side by side histograms where the first has a tail to the left, showing negative skew, and the second has a tail to the right, showing positive skew.]({{ "/assets/images/hsc/5066y/histskew.png" | relative_url }})
</div>


{% include question_dropdown.html 
    id="q15" 
    title="15" 
    question_text="Create a **histogram** to the show the distribution of IQ scores.  Use the command `histogram IQ`" 
    solution_text="" 
    solution_image="/courses/dev/5005a/images/histogramIQ.png" 
    image_alt="A histogram of the IQ scores.  It is fairly symmetrical, centred around 100 IQ, but there is something sticking up at a very low IQ level, between 0 and 50."
%}

{% include question_dropdown.html 
    id="q16" 
    title="16" 
    question_text="Does the histogram indicate there are any errors in the dataset for IQ?" 
    solution_text="Yes, there appears to be an IQ value that is below 25, which is very unlikely." 
    solution_image="/courses/dev/5005a/images/histogramIQ.png" 
    image_alt="A histogram of the IQ scores.  It is fairly symmetrical but there is something sticking up at a very low IQ level, between 0 and 50."
%}

* Create a **histogram** to the show the distribution of IQ scores.  Use the command `histogram IQ`
* Does there appear to be any errors in the dataset?
* Create a histogram to show the distribution of weekly tv hours.
* Does there appear to be any skew within the tv hours data?

{% include question_dropdown.html 
    id="q17" 
    title="17" 
    question_text="Create a histogram to show the distribution of weekly tv hours." 
    solution_text="`histogram TV`" 
    solution_image="/courses/dev/5005a/images/histogramTV.png" 
    image_alt="A histogram of the TV scores.  It is skewed to the right."
%}

{% include question_multiple_choice.html
    id="q18"
    title="18"
    question_text="Does there appear to be any skew within the tv hours data?"
    options="a::no, symmetrical||b::positive skew, skewed to the right||c::negative skew, skewed to the left"
    correct_answer="b"
    solution_text="There is a tail in the histogram to the right, so positively skewed."
%}

## T-test

<div class="instructions" markdown="1">

A t-test allows you to determine whether two groups are significantly different on a particular measure.

* The null hypothesis is that the two groups are not different
* The alternative hypothesis is that the two groups are different

Small *p*-values, conventionally less than 0.05 are used to reject the null hypothesis, and therefore say there is evidence of a difference.

If you wanted to test whether the TV scores were significantly different between year 10 and year 11, you would use the stata command:

    `ttest TV, by (YearGroup)`

From the output you are looking at:

* The descriptive statistics part, the first part of the output
* The t-statistic, written as t in the output, which is reported as part of the result
* The degrees of freedom, again reported as part of the result
* The p-value of the test, here you are looking for **P($\vert$T$\vert$ > $\vert$t$\vert$)** under the section titled **Ha: diff != 0**

Note != is computer code for not equal, so the last point above is saying this is the p-value for the alternative hypothesis (Ha) that the difference between the groups in score is not 0.

You would report the result as:

$$t(368) = -0.903, p = 0.3671$$

Not enough evidence to say that the TV hours is significantly different between the two groups.

Note the results are reported as:

$$t(\text{degrees of freedom}) = \text{t-statistic}, p= \text{p-value}$$

</div>

{% include question_dropdown.html 
    id="q19" 
    title="19" 
    question_text="Carry out a t-test to determine whether there is any significant difference between the heights of the two year groups." 
    solution_text="`ttest Heightm, by(YearGroup)`" 
%}


{% include question_dropdown.html 
    id="q20" 
    title="20" 
    question_text="Report the findings of the previous t-test" 
    solution_text="
$$t(368) = -0.3073, p = 0.7588$$

No significant difference in heights of the two year groups." 
%}






