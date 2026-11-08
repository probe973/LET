---
title: Determining the Correct t-test or Alternative
layout: hsc5066y
interactive: 1
mj: 1
---

<div class="explanation" markdown="1">
## T-Test vs. Mann-Whitney U Test

The fundamental scenario for both tests is the same: **You have a continuous variable, and you want to know whether two independent groups differ on this variable.**

The choice between them depends entirely on whether the assumptions for the parametric test (the t-test) are met.
</div>

<div class="explanation" markdown="1">
### The Normality Assumption

The primary condition for using the Independent Samples t-test is that the scores on the continuous variable are **normally distributed within both of the two groups**.

*   This assumption is assessed using techniques covered in an earlier guide, such as the **Shapiro-Wilk test**.
*   If the data for both groups are normally distributed, you proceed to the next step (checking variances).
*   If normality cannot be assumed for one or both groups, you **cannot use the t-test** and must use its non-parametric alternative, the **Mann-Whitney U Test**.
</div>

<div class="explanation" markdown="1">
### The Equality of Variances Assumption

The Independent Samples t-test has a further assumption: that the **variances** (a measure of dispersion, calculated as the standard deviation squared) are equal for both groups being compared.

*   This assumption is assessed with a variance test, such as the **Levene's Test** (which we will use in this guide).
*   The Levene's test produces a p-value. If the Levene's test p-value is **greater than 0.05 ($p > .05$)**, the assumption of equal variances is considered **not violated**.
*   If the Levene's test p-value is **less than or equal to 0.05 ($p \le .05$)**, the assumption of equal variances **is violated**.
</div>

<div class="explanation" markdown="1">
### The Decision Path

The assumptions lead to the selection of one of three tests:

1.  **Student's t-test (Standard):** Used when the normality assumption is met AND the equality of variances assumption is NOT violated ($p > .05$ for Levene's test).
2.  **Welch t-test (Adjusted):** Used when the normality assumption is met, but the equality of variances assumption **IS violated** ($p \le .05$ for Levene's test). The Welch test is an adjustment that does not assume equal variances.
3.  **Mann-Whitney U Test (Non-Parametric):** Used when the normality assumption is **NOT met**. This test works by using the **ranks** of each individual's score instead of the score itself and looks for differences in rank position between the groups.
</div>

---

### Check Your Understanding

{% include question_multiple_choice.html
    id="q_determining_test_1"
    title="Scenario 1: Normality Violated"
    question_text="You want to compare the mean anxiety score between male and female participants. The data is continuous, but a Shapiro-Wilk test shows the anxiety scores for the female group are **not normally distributed**."
    options="student_t::Student's t-test||welch_t::Welch t-test||mann_whitney::Mann-Whitney U Test"
    correct_answer="mann_whitney"
    solution_text="The correct test is the Mann-Whitney U Test. If the normality assumption is violated for either group, the non-parametric alternative must be used."
%}

{% include question_multiple_choice.html
    id="q_determining_test_2"
    title="Scenario 2: Equal Variances"
    question_text="You want to compare the mean reaction time between two different experimental conditions. The data is normally distributed for both groups, and the Levene's test for equality of variances is **p = 0.45**."
    options="student_t::Student's t-test||welch_t::Welch t-test||mann_whitney::Mann-Whitney U Test"
    correct_answer="student_t"
    solution_text="The correct test is the Student's t-test. Both normality and equality of variances assumptions are met (p > 0.05 for Levene's test), allowing you to use the standard t-test."
%}

{% include question_multiple_choice.html
    id="q_determining_test_3"
    title="Scenario 3: Unequal Variances"
    question_text="You want to compare the mean fatigue scores between patients from two different clinics. The data is normally distributed for both groups, but the Levene's test for equality of variances is **p = 0.02**."
    options="student_t::Student's t-test||welch_t::Welch t-test||mann_whitney::Mann-Whitney U Test"
    correct_answer="welch_t"
    solution_text="The correct test is the Welch t-test. Normality is met, but the equality of variances assumption is violated (p ≤ 0.05 for Levene's test). The Welch adjustment must be used."
%}

<!-- This automatically adds the "Previous" and "Next" navigation buttons -->
{% include pagination.html %}
