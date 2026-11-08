---
layout: hsc5066y
title: Software Review
interactive: 1
mj: 1
---

<div class="explanation" markdown="1">

# Software Review

This workshop gives you a chance to use your software of choice to practise generating statistics and carrying out tests on a data set.

You can download the dataset <a href="ebp.sav">here.</a>

</div>

<div class="explanation" markdown="1">

The file contains information about 150 fictitious patients.  For each patient there is a recording of:

* `Age` - measured in years
* `Systolic` - the patient's systolic blood pressure
* `Diastolic` - the patient's diastolic blood pressure
* `HospitalDays` -  the length of stay, in days, the patient stayed in hospital.
* `k1`, `k2`, `k3`, `k4` - 4 different measurements that measure how wobbly someone's knees are
* `Knees` - the total of the `k1` to `k4` variables
* `PreCNH`, `PostCNH` - a measurement of a patient's level of chronic nose hair at two different periods
* `Treatment` - whether a patient recieved treatment for chronic nose hair (0 = no, 1 = yes)

</div>

---

### Descriptive Statistics

You are to find the following statistics for the 150 patients **age**:
* mean
* median
* minimum
* maximum
* skew

You also need to create a **histogram** of the age data.

<div class="instructions" markdown="1">

### SPSS starting point
Analyze → Descriptive Statistics → Explore

The histogram can be found in the **Plots** section

### jamovi starting point
Analyses → Exploration → Descriptives

The histogram can be found in the **Plots** dropdown

</div>

{% include question_numerical.html
    id="sw_age_mean"
    title="Mean age"
    question_text="What is the mean age, correct to 1 decimal point?"
    correct_answer="45.2"
    tolerance="0.05"
    solution_text="Mean from output table"
%}

{% include question_numerical.html
    id="sw_age_median"
    title="Median age"
    question_text="What is the median age, correct to whole number?"
    correct_answer="45"
    tolerance="0.05"
    solution_text="Median from output table"
%}

{% include question_numerical.html
    id="sw_age_min"
    title="Minimum age"
    question_text="What is the minimum age?"
    correct_answer="22"
    tolerance="0.05"
    solution_text="Minimum from output table"
%}

{% include question_numerical.html
    id="sw_age_max"
    title="Maximum age"
    question_text="What is the maximum age?"
    correct_answer="81"
    tolerance="0.05"
    solution_text="Maximum from output table"
%}

{% include question_numerical.html
    id="sw_age_skew"
    title="Skew"
    question_text="What is the skew value, correct to 3 decimal places?"
    correct_answer="0.682"
    tolerance="0.05"
    solution_text="Skewness from output table"
%}

{% include question_dropdown.html
    id="sw_age_histogram"
    title="Histogram shape"
    question_text="Comment on the shape of the histogram"
    solution_text="The histogram is not quite a normal shape as there some higher ages that are causing a positive skew to the shape (i.e. a tail to the right)"
%}

Repeat the descriptive statistics for the **Systolic Blood Pressure**.

{% include question_dropdown.html
    id="sw_systolic"
    title="Systolic blood pressure"
    question_text="What are the descriptive statistics and shape of the histogram for systolic blood pressure?"
    solution_text="
*   Mean = 130
*   Median = 130
*   Minimum = 101
*   Maximum = 155
*   Skew = -0.235
*   The histogram is fairly symettrical, but there is a slight negative skew with a peak in the graph to the right of the median value
    "
%}

---

### Comparing Two Variables

In this section you will practice using software to:
* create a scatter diagram between two continuous variables
* determine, using normality assumptions, which correlation coefficients can be used to assess the association between the variables
* generate a correlation coefficient
* interpret the result of a correlation coefficient

You are going to look for a relationship between **systolic** and **diastolic** blood pressure readings.

Create a scatter diagram to compare **systolic** and **diastolic** blood pressure readings.

<div class="instructions" markdown="1">

### SPSS starting point

Graphs → Scatter/Dot
Choose the **Simple Scatter**

### jamovi starting point

Analyses → Exploration → Scatterplot

</div>

{% include question_multiple_choice.html
    id="sw_scatter_sys_dia"
    title="Correlation"
    question_text="From the scatter plot, does there appear to be any correlation between the two variables?"
    options="no::No, there does not appear to be any correlation||ng::There appears to be a negative correlation||ps::There appears to be a positive correlation"
    correct_answer="ps"
    solution_text="Higher systolic blood pressure seems be associated with higher diastolic blood pressure, so **positive correlation**"
%}

{% include question_multiple_choice.html
    id="sw_which_coeff_sys_dia"
    title="Which correlation coefficient"
    question_text="Given that both variables can be assumed to be **normally distributed**, which correlation coefficient should be used to quantify the level of correlation?"
    options="pn::Pearson's Correlation Coefficient||sp::Spearman's Correlation Coefficient"
    correct_answer="pn"
    solution_text="As data are normal, you should use the **parametric** correlation coefficient: **Pearson's**"
%}

Use your software to calculate the **correlation** coefficient.

<div class="instructions" markdown="1">

### SPSS starting point

Analyze → Correlate → Bivariate

### jamovi starting point

Analyses → Regression → Correlation Matrix

</div>

{% include question_numerical.html
    id="sw_sys_dia_cc"
    title="Correlation Coefficient Value"
    question_text="What is value of the correlation coefficient, correct to 3 decimal places?"
    correct_answer="0.839"
    tolerance="0.05"
    solution_text="Skewness from output table"
%}

{% include question_multiple_choice.html
    id="sw_sys_dia_cc_int"
    title="Interpretation"
    question_text="Which of the options best describes the correlation?"
    options="sn::There is a strong negative correlation||wn::There is a weak negative correlation||sp::There is a strong positive correlation||wp::There is a weak positive correlation"
    correct_answer="sp"
    solution_text="A correlation coefficient of 0.839 would be considered strong positive correlation."
%}

---

### Reliability of Measures

The **knobbly knees** measurement is calculated from 4 sub measures (`k1` to `k4`).

A **Cronbach alpha** of the 4 measurements is found to be $\alpha = 0.913$.

{% include question_multiple_choice.html
    id="sw_knee_alpha"
    title="Cronbach interpretation"
    question_text="How would you interpret this value of Cronbach's alpha"
    options="w::It shows poor levels of consistency in the subscales||m::It shows moderate levels of consistency in the subscales||s::It shows strong levels of consistency in the subscales"
    correct_answer="s"
    solution_text="A Cronbach alpha is between 0 and 1, with higher numbers representing better consistency.  Such a high value would be considered a strong level consistency."
%}

---

### Comparing Groups

You wish to explore how effective the chronic nose hair treatment program was.  The `Treatment` variable shows whether the patient was part of a treatment group or not.

To do this you are going to carry out a statistical test to see if there is a significant difference between the `PostCNH` variable (chronic nose hair after treatment) between the treatment group and the non-treatment group.

Before performing this analysis, you carry out a statistical test to see if there is a significant difference between these two groups on the `PreCNH` variable.

{% include question_dropdown.html
    id="sw_precnh_treat_why"
    title="Comparing before the treatment"
    question_text="Why should you explore if there is any difference between the groups before the start of the experiment period?"
    solution_text="If you find a difference between the two groups after the treatment, it may be because of the treatment or it may be because the two groups were different before the start of the experiment.  You are trying to establish that the two groups were not too disimilar in chronic nose hair before treatment/non-treatmen began"
%}

The following statistics are derived from the `PreCNH` variable:

| Treatment | N | Mean | Median | SD | Shapiro-Wilk p |
| :---- | :---- | :---- | :---- | :---- | :---- |
| No Treatment | 80 | 28.6 | 29.5 | 7.71 | 0.199 |
| Treatment | 70 | 28.7 | 29 | 8.27 | 0.084 |

{% include question_multiple_choice.html
    id="sw_precnh_cm"
    title="Comparing means"
    question_text="Do the descriptive statistics appear to show any major difference in the two groups mean values?"
    options="no::The two groups look quite similar||yes::The two groups look very different"
    correct_answer="no"
    solution_text="The mean CNH values of 28.6 and 28.7 do not suggest any major differences"
%}

{% include question_multiple_choice.html
    id="sw_precnh_norm"
    title="Normality"
    question_text="Are the p-values for the Shapiro-Wilk test significant, and should we therefore use a Mann-Whitney U test instead of an independent-samples t-test?"
    options="no::Both p-values are over 0.05, so use an independent-samples t-test to compare||yes::At least one p-value is below 0.05, so cannot assume normality, so use Mann-Whitney U test"
    correct_answer="no"
    solution_text="Both p-values are above the 0.05 threshold."
%}

You are going to use an **indepedendent-samples t-test** to determine whether there is a significant difference between the treatment and the non-treatment group at the pre-experiment stage.

You will also need to check the **homogeneity of variances** using a variance test such as the **Levene test**.


<div class="instructions" markdown="1">

### SPSS starting point

Analyze →  Compare Means → Independent-samples T test

Remember also to use the **Define Groups** button and enter **0** and **1** in as the groups

### jamovi starting point

Analyses → T-Tests → Independent Samples T-Test

Ensure that the **Homogeneity Test** is checked

</div>

A small p-value (less than 0.05) in the **Levene test** would suggest a violation of the homogeneity of variances assumption.

{% include question_multiple_choice.html
    id="sw_precnh_lev"
    title="Homogeneity of variances"
    question_text="Is the p-value for the Levene test significant?"
    options="no::the p-value is greater than 0.05, so equal variances can be assumed, use Student's t||yes::the p-value is smaller than 0.05, so equal variances can not be assumed, use Welch's t"
    correct_answer="no"
    solution_text="p-value is above the 0.05 threshold, assume equal variances."
%}

Using the correct **independent-samples t-test** (either Student's - equal variances assumed or Welch's - equal variances no assumed):

{% include question_numerical.html
    id="sw_precnh_t"
    title="t-statistic"
    question_text="What is value of t-statistic, correct to 2 decimal places?  (If you have a negative t-statistic, plese only give the positive value in the answer box)"
    correct_answer="0.05"
    tolerance="0.05"
    solution_text="Equal variances assumed, gives a $t=0.0534$"
%}

{% include question_numerical.html
    id="sw_precnh_df"
    title="Degrees of freedom"
    question_text="How many degrees of freedom are there?"
    correct_answer="148"
    tolerance="0.05"
    solution_text="$df=148$, equal variances assumed"
%}

{% include question_numerical.html
    id="sw_precnh_p"
    title="p-value"
    question_text="What is the p-value of the independent-samples t-test?  Give your answer to 3 decimal places."
    correct_answer="0.958"
    tolerance="0.005"
    solution_text="Equal variances assumed, gives a $p=0.958$"
%}

{% include question_multiple_choice.html
    id="sw_precnh_con"
    title="Conclusion"
    question_text="Is there evidence that the treatment group and non-treatment group are significantly different at the baseline (pre) reading on CNH?"
    options="no::the p-value is greater than 0.05, so there is not enough evidence that the groups differ at baseline||yes::the p-value is smaller than 0.05, so there is evidence of a difference between the groups at baseline"
    correct_answer="no"
    solution_text="p-value is above the 0.05 threshold, not enough evidence to say the two groups are different from one another."
%}

You are now going to carry out an independent-samples t-test or Mann-Whitney U test (depending on whether both groups are normally distributed) for the CNH readings after the treatment period `PostCNH`.

{% include question_dropdown.html
    id="sw_postcnh_t"
    title="Conclusion Post Treatment"
    question_text="Use the software to perform the correct test, and write up the result."
    solution_text="Both groups were found to be normally distributed, using the Shapiro-Wilk test, for the Post CNH readings.  Homogeneity of variances was also established using the Levene test. An independent-samples t-test was therefore used to determine whether there was a significant difference in CNH for those you received treament (n=70, Mean = 25.3, SD = 8.78) and for those that did not (n = 80, Mean = 27.4, SD = 7.64). There was a small (using Cohen's d guidelines of small, moderate, large of 0.2, 0.5, and 0.8) and not significant difference in the CNH readings between the groups (Mean difference = 2.07, $t(148)=1.55, p=0.124, d=0.25$)."
%}

---

<div class="explanation" markdown="1">

## Alternative to comparing the treatment and no treatment group

An alternative, and maybe preferred method, to see whether the treatment group improved more than the no treatment group, would be to calculate a variable that represents how much improvement there has been for each individual over the pre to post period.

You would then carry out the independent-samples t-test on the change variable

</div>

<div class="instructions" markdown="1">

## Computing a new variable

### SPSS

Transform → Compute Variable

Place the `PostCNH` variable into the **Numeric Expression**, type `-` or click the `-` button, then place the `PostCNH` variable into the **Numeric Expression**

It should read PostCNH - PreCNH

In the **Target Variable** give this new variable a name, such as `Change`.

Click **OK**

### Jamovi

Find acolumn at the end of the jamovi dataset, such as `Treatment` and click one of the participants in there.

Goto **Data** then click **Compute**

Change the name of the variable (the top box) from the letter that is there to something like `Change`

Click the **$f_x$** button

From the **Variables** list double-click the `PostCNH` variable.

It will appear in the box above.  Type a minus `-` sign after this.

From the **Variables** list double-click the `PreCNH` variable.

The box should read PostCNH - PreCNH

The `Change` variable should now be populated.

</div>

<div class="instructions" markdown="1">

## Independent-Samples t-Test

You should now carry out the independent-samples t-test, with the `Change` variable as the dependent variable and the `Treatment` variable as the grouping variable.

</div>

<div class="output" markdown="1">

You should find that:

Homogeneity of variances, as assessed by the Levene test, was not violated, so equal variances can be assumed.

The mean change of the no treatment group was a decrease of 1.19 in CNH

THe mean change of the treatment group was a decrease of 3.33 in CNH

This is mean difference between the groups of 2.14, in favour of the treatment group, with a 95% confidence interval of (1.48, 2.80)

The independent-samples t-test found evidence that the amount of change in the treatment group was significantly higher than the amount of change in the no treatment group.

$$t(148) = 6.44, p < .001$$

</div>




### End of the workshop
