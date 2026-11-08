---
layout: hsc5066y
title: Correlation Coefficients
interactive: 1
mj: 0
---

<div class="explanation" markdown="1">

## Correlation Coefficients

| Variable 1 Level of Measurement | Variable 2 Level of Measurement | Are the Data Normally Distributed? | Test to Use |
|:--------------------------------|:--------------------------------|:-----------------------------------|:------------|
| Ordinal                         | Ordinal                         | (Not Applicable)                   | **Spearman's Rank Correlation** |
| Continuous (Interval/Ratio)     | Continuous (Interval/Ratio)     | Yes                                | **Pearson's Correlation** |
| Continuous (Interval/Ratio)     | Continuous (Interval/Ratio)     | No                                 | **Spearman's Rank Correlation** |

**Correlation coefficients** measure the strength of the relationship between two measured variables.  They range from negative 1 to positive 1, with negative values indicating negative correlation and positive values indicating positive correlation.

The size of the coefficient indicates how strongly the two variables are correlated.

| Coefficient | Strength |
|:------------|:---------|
| 0 | No correlation |
| < 0.29 | Weak correlation |
| 0.3 to 0.49 | Moderate correlation |
| 0.5 to 1 | Strong correlation |

</div>

<div class="explanation" markdown="1">

### Pearson or Spearman

The choice between using the Pearson correlation coefficient or the Spearman correlation coefficient depends on the level of measurement and whether data are considered normally distributed or not.  The options are seen in the table above.

Note that both variables need to be interval/ratio and normally distributed for the Pearson correlation coefficient.

You can, or have shown in previous parts of the course, that, based on the Shapiro-Wilk test:

| Variable | Normal/Non-normal |
|:---------|:------------------|
| `Fastbase` | Non-normal |
| `ARATbase` | Non-normal |
| `Barthelbase` | Non-normal |
| `GHQ12base` | Non-normal |
| `Fast3month` | Normal |
| `Barthel3month` | Non-normal |
| `GHQ3months` | Non-normal |
| `Age` | Normal |

</div>

{% include question_multiple_choice.html
    id="q_coefficient_Age_Fast3"
    title="Correlation between Age and 3-month FAST score"
    question_text="You are going to calculate the correlation coefficient between a person's age and their FAST score after 3-months.  Which correlation coefficient is appropriate?"
    options="pear::Pearson's||spear::Spearman's"
    correct_answer="pear"
    solution_text="Both variables are interval/ratio and normally distributed, so use Pearson's correlation coefficient"
%}

{% include question_multiple_choice.html
    id="q_coefficient_FastB_Fast3"
    title="Correlation between Baseline FAST and 3-month FAST score"
    question_text="You are going to calculate the correlation coefficient between a person's baseline FAST score and their FAST score after 3-months.  Which correlation coefficient is appropriate?"
    options="pear::Pearson's||spear::Spearman's"
    correct_answer="spear"
    solution_text="One of the variables is not normally distributed, so use Spearman's correlation coefficient"
%}

{% include pagination.html %}
