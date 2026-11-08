---
layout: hsc5066y
title: Reading Inferential Statistics Workshop
interactive: 1
mj: 0
---

<div class="explanation" markdown="1">

# Reading Inferential Statistics

This workshop focuses on reading statistics presented in tables.
</div>

---

### Footloose

A new treatment for loose feet has been designed.  The foot loose index (FLI) is a measure of the performance of the foot, with higher values demonstrating better performance.  A group of individuals are recruited to test the new treatment.  The FLI is recorded before treatment and then again after 3 months of treatment.

{% include question_multiple_choice.html
    id="readingtables1a"
    title="Study Design"
    question_text="Is this an example of a between-groups analysis (that is individuals are divided into distinct groups) or a within-groups analysis (that is the same individuals having multiple recordings)?"
    options="bg::Betweeen-groups||wg::Within-groups"
    correct_answer="wg"
    solution_text="Each participant is measured on two different occasions, before treatment and after 3 months.  This is a **within-groups** analysis."
%}


A **related-samples t-test** is carried out to test whether there is evidence that the treatment works.  The summary results and t-test are given:

|  | N | Mean | SD | Mean Difference (After – Before) | 95% CI for Mean Difference | t | p |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Before | 35 | 11.1 | 5.54 | 1.91 | (0.734, 3.09) | 3.30 | 0.002 |
| After | 35 | 13.1 | 6.61 |  |  |  |  |

{% include question_dropdown.html
    id="readingtables1b"
    title="Drop-out"
    question_text="Did any participants drop-out during the trials?  Explain your answer."
    solution_text="The sample size at the start is 35, and it is 35 at the end.  Therefore, no participants dropped out of the trial."
%}

{% include question_dropdown.html
    id="readingtables1c"
    title="Confidence Interval"
    question_text="Interpret the 95% confidence interval for the mean of the difference between before and after treatment."
    solution_text="95% of possible samples will have the true mean difference contained within the 95% confidence interval. We can be 95% confident that the true population mean increase in FLI after treatment is between 0.734 and 3.09"
%}

{% include question_dropdown.html
    id="readingtables1d"
    title="Hypothesis Test"
    question_text="Use the confidence interval and p-value given to determine whether there is any evidence that the treatment makes a difference to FLI."
    solution_text="The lower and upper end of the 95% confidence interval both indicate a positive difference in FLI between before and after.  The p-value of 0.002 is less than the standard cut-off of 0.05.  Low p-values mean that we can reject the null hypothesis of there being no difference.  There is evidence that the treatment makes a difference to FLI."
%}

---

### Good Sleep

Treatments for excessive snoring are going to be tested.  A good sleep index (gsi) is to be used, with higher values representing better sleep.  Two drugs, codenamed Drug A and Drug B, are going to be tested.  Three groups of participants are going to be given either a placebo or one of the two drugs.  The trial will be double-blinded.

{% include question_multiple_choice.html
    id="readingtables2a"
    title="Study Design"
    question_text="Is this an example of a between-groups analysis (that is individuals are divided into distinct groups) or a within-groups analysis (that is the same individuals having multiple recordings)?"
    options="bg::Betweeen-groups||wg::Within-groups"
    correct_answer="bg"
    solution_text="There are three distinct groups.  This is a **between-groups** analysis."
%}

{% include question_dropdown.html
    id="readingtables2b"
    title="Blinding"
    question_text="What is meant by ‘double-blinded’ and what are the advantages of this?"
    solution_text="Double-blinded means that the participants are not aware of which drug they are receiving.  Additionally, the researcher is also unaware when analysing the results which group belongs to which drug.  This reduces risks of participant and researcher bias."
%}

The summary statistics are given below.  Mean gsi was adjusted for age and sex of participants.

| Treatment | N | Mean | Adjusted Mean | 95% CI for Adjusted Mean |
| :---- | :---- | :---- | :---- | :---- |
| Placebo | 25 | 47.7 | 47.7 | 43.7, 51.7 |
| Drug A | 25 | 50.7 | 51.1 | 47.0, 55.2 |
| Drug B | 22 | 51.8 | 51.4 | 47.0, 55.7 |

{% include question_dropdown.html
    id="readingtables2c"
    title="Evidence"
    question_text="Is there any evidence in the table above that either of the drugs are significantly effective in improving a person’s gsi?"
    solution_text="There isn’t any test statistic and p-values given in the table.  However, we can get some indication by looking at the 95% confidence intervals for the three adjusted means.  We can see that the mean gsi for the placebo is likely to lie between 43.7 and 51.7.  This interval overlaps with the confidence intervals for both drugs.  Therefore, this indicates that there may not be any difference in gsi between the drugs and the placebo."
%}

An analysis of covariance was carried out (with age and sex taken as confounding variables) and the results for treatment type were:   
   $$F(2, 67) = 1.020, p = 0.366$$ 

{% include question_dropdown.html
    id="readingtables2d"
    title="Interpret"
    question_text="How would you interpret this result in determining the effectiveness of either of the drugs?"
    solution_text="The p-value is not below the traditional cut-off value of 0.05.  We would therefore not have enough evidence of a difference in the drugs."
%}

---

### To Go Boldly

A medical researcher is concerned about whether wearing a red top causes premature death.  To test this, they watch episodes of the original series of Star Trek and record deaths based on whether the crew member wore a red shirt.  
   

| Shirt and Status | Dead | Alive | TOTAL |
| :---- | :---- | :---- | :---- |
| Red | 24 | 215 | 239 |
| Not Red | 16 | 175 | 191 |
| TOTAL | 40 | 390 | 430 |

{% include question_numerical.html
    id="readingtables3a"
    title="Proportion Red"
    question_text="Find the percentage (correct to 1 decimal place) of crew members who died whilst in red."
    correct_answer="10.0"
    tolerance="0.05"
    solution_text="$\frac{24}{239} \times 100 = 10.04 = 10.0$ (1 d.p.)"
%}

{% include question_numerical.html
    id="readingtables3b"
    title="Proportion Red"
    question_text="Find the percentage (correct to 1 decimal place) of crew members who died whilst not in red."
    correct_answer="8.4"
    tolerance="0.05"
    solution_text="$\frac{16}{191} \times 100 = 8.4$ (1 d.p.)"
%}

{% include question_multiple_choice.html
    id="readingtables3c"
    title="Difference in proportions"
    question_text="Which group, wear red v did not wear red, had the higher proportion of deaths"
    options="r::Red shirt||nr::Not red shirt"
    correct_answer="r"
    solution_text="10 percent is higher than 8.4 percent"
%}

A chi-square test of association gives the result $\chi^2=0.349, p=0.555$.

{% include question_dropdown.html
    id="readingtables3d"
    title="Interpret"
    question_text="Is there evidence that wearing red is anymore dangerous than not wearing red?"
    solution_text="The p-value is more than the traditional cut-off of p<0.05.  Therefore, there isn’t any evidence that wearing red is associated with premature termination."
%}
