---
layout: hsc5066y
title: Choosing the Correct Statistical Test
interactive: 1
mj: 0
---

<div class="explanation" markdown="1">
## Choosing the Correct Statistical Test

Selecting the right statistical test can be challenging. The correct choice depends on three key things:

1.  **Your research question:** Are you looking for differences between groups, changes within a group over time, or relationships between variables?
2.  **The number of groups or variables** you are comparing.
3.  **The level of measurement** of your data (Nominal, Ordinal, or Continuous).

These tables will guide you to the correct test for common, single-factor research designs.
</div>

---

### Table 1: Tests for Differences **Between** Groups

Use this table when you are comparing scores from two or more separate, independent groups (e.g., comparing an experimental group to a control group).

| Number of Groups | Level of Measurement of Outcome | Are the Data Normally Distributed? | Test to Use |
|:-----------------|:--------------------------------|:----------------------------------|:------------|
| 2 Groups         | Nominal                         | (Not Applicable)                  | **Chi-Square Test of Independence** |
| 2 Groups         | Ordinal                         | (Not Applicable)                  | **Mann-Whitney U Test** |
| 2 Groups         | Continuous (Interval/Ratio)     | Yes                               | **Independent Samples t-test** |
| 2 Groups         | Continuous (Interval/Ratio)     | No                                | **Mann-Whitney U Test** |
| 2+ Groups        | Nominal                         | (Not Applicable)                  | **Chi-Square Test of Independence** |
| 2+ Groups        | Ordinal                         | (Not Applicable)                  | **Kruskal-Wallis H Test** |
| 2+ Groups        | Continuous (Interval/Ratio)     | Yes                               | **One-Way ANOVA** |
| 2+ Groups        | Continuous (Interval/Ratio)     | No                                | **Kruskal-Wallis H Test** |

<br>

### Table 2: Tests for Differences **Within** Groups

Use this table when you are measuring the same group of participants at different times or under different conditions (repeated measures).

| Number of Conditions/Time Points | Level of Measurement of Outcome | Are the Data Normally Distributed? | Test to Use |
|:---------------------------------|:--------------------------------|:----------------------------------|:------------|
| 2 Conditions                     | Nominal                         | (Not Applicable)                  | **McNemar's Test** |
| 2 Conditions                     | Ordinal                         | (Not Applicable)                  | **Wilcoxon Signed-Rank Test** |
| 2 Conditions                     | Continuous (Interval/Ratio)     | Yes                               | **Paired Samples t-test** |
| 2 Conditions                     | Continuous (Interval/Ratio)     | No                                | **Wilcoxon Signed-Rank Test** |
| 2+ Conditions                    | Ordinal                         | (Not Applicable)                  | **Friedman's Test** |
| 2+ Conditions                    | Continuous (Interval/Ratio)     | Yes                               | **Repeated Measures ANOVA** |
| 2+ Conditions                    | Continuous (Interval/Ratio)     | No                                | **Friedman's Test** |

<br>

### Table 3: Tests for Relationships (Correlations)

Use this table when you want to see if two variables are related or associated with each other.

| Variable 1 Level of Measurement | Variable 2 Level of Measurement | Are the Data Normally Distributed? | Test to Use |
|:--------------------------------|:--------------------------------|:-----------------------------------|:------------|
| Nominal                         | Nominal                         | (Not Applicable)                   | **Chi-Square Test of Association** |
| Ordinal                         | Ordinal                         | (Not Applicable)                   | **Spearman's Rank Correlation** |
| Continuous (Interval/Ratio)     | Continuous (Interval/Ratio)     | Yes                                | **Pearson's Correlation** |
| Continuous (Interval/Ratio)     | Continuous (Interval/Ratio)     | No                                 | **Spearman's Rank Correlation** |

<div class="explanation" markdown="1">
**Note:** What is the relationship between a continuous variable (e.g., Age) and a categorical variable (e.g., County)? This is actually the same question as asking "Is there a difference in Age *between* the different Counties?" You would use the 'Tests for Differences Between Groups' table for this (e.g., a One-Way ANOVA).
</div>

---

### Check Your Understanding

For the following research scenarios, which is the most appropriate statistical test to use?

{% include question_multiple_choice.html
    id="q_test_choice_1"
    title="Scenario 1: Blood Pressure Medication"
    question_text="A researcher wants to know if a new drug lowers blood pressure. They measure the systolic blood pressure of 50 patients before and after they take the drug for one month. The blood pressure data is continuous and normally distributed."
    options="ind_t_test::Independent Samples t-test||paired_t_test::Paired Samples t-test||anova::One-Way ANOVA"
    correct_answer="paired_t_test"
    solution_text="The correct test is a Paired Samples t-test. This is because the same group of participants was measured twice (before and after), making it a 'within-groups' design with two conditions and a continuous, normally distributed outcome."
%}

{% include question_multiple_choice.html
    id="q_test_choice_2"
    title="Scenario 2: Types of Physiotherapy"
    question_text="A physiotherapist wants to compare the effectiveness of three different types of therapy for improving mobility. They randomly assign patients to one of the three therapy groups and measure their mobility score (an ordinal scale from 1-10) at the end of the study."
    options="anova::One-Way ANOVA||chi_square::Chi-Square Test||kruskal_wallis::Kruskal-Wallis H Test"
    correct_answer="kruskal_wallis"
    solution_text="The correct test is a Kruskal-Wallis H Test. This is because we are comparing three independent groups on an outcome variable that is measured at the ordinal level."
%}

{% include question_multiple_choice.html
    id="q_test_choice_3"
    title="Scenario 3: Smoking and Lung Cancer"
    question_text="A public health researcher wants to know if there is a relationship between smoking status and whether or not someone develops lung cancer. Both variables are categorical (Smoker/Non-Smoker and Cancer/No Cancer)."
    options="chi_square::Chi-Square Test||pearson::Pearson's Correlation||mann_whitney::Mann-Whitney U Test"
    correct_answer="chi_square"
    solution_text="The correct test is a Chi-Square Test of Independence (or Association). This is the standard test for examining the relationship between two nominal variables."
%}

{% include question_multiple_choice.html
    id="q_test_choice_4"
    title="Scenario 4: Age and Grip Strength"
    question_text="An occupational therapist wants to see if there is a relationship between a person's age (in years) and their grip strength (in kg). Both variables are continuous, but the grip strength data is not normally distributed."
    options="pearson::Pearson's Correlation||spearman::Spearman's Rank Correlation||paired_t_test::Paired Samples t-test"
    correct_answer="spearman"
    solution_text="The correct test is Spearman's Rank Correlation. This is because we are looking for a relationship between two continuous variables, but the assumption of normality for a Pearson's correlation has not been met."
%}

{% include question_multiple_choice.html
    id="q_test_choice_5"
    title="Scenario 5: Comparing Two Clinics"
    question_text="A manager wants to know if there is a difference in patient satisfaction scores between two different clinics. Patient satisfaction is measured on a continuous scale from 0-100 and the data is normally distributed."
    options="ind_t_test::Independent Samples t-test||anova::One-Way ANOVA||paired_t_test::Paired Samples t-test"
    correct_answer="ind_t_test"
    solution_text="The correct test is an Independent Samples t-test. This is because we are comparing the means of two independent groups (Clinic A vs. Clinic B) on a continuous, normally distributed outcome variable."
%}

<!-- This is the link back to the main jamovi guides page -->
<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/hsc/5066y/spss/" | relative_url }}">← Return to SPSS Guides Menu</a>
</div>

{% include pagination.html %}
