---
title: Determining the Correct Paired Test
layout: hsc5066y
interactive: 1
mj: 0
---

<div class="explanation" markdown="1">
## Paired Samples t-test vs. Wilcoxon Signed-Rank Test

Both the Paired Samples t-test and the Wilcoxon Signed-Rank Test are used when you have two continuous measures taken from the **same group** of participants (a 'within-groups' or 'repeated measures' design).

The choice between them depends entirely on the assumption of normality.
</div>

<div class="explanation" markdown="1">
### The Normality Assumption

The Paired Samples t-test requires that the **difference between the two matched variables are normally distributed**.

*   If the two original variables (e.g., Pre-Intervention and Post-Intervention scores) **are both normally distributed, this is sufficient** for the Paired Samples t-test.

*   If the two original variables **are not normally distributed, this does not necessarily mean** the normality assumption is violated, as the difference between the two variables may still be normally distributed.

*   In SPSS you can compute the difference between the two variables, and then test the normality of this variable

*   If the difference variable **are** normally distributed, you use the **Paired Samples t-test**.
*   If the difference variable **are not** normally distributed, you must use its non-parametric alternative, the **Wilcoxon Signed-Rank Test**.
</div>

<div class="explanation" markdown="1">
### The Wilcoxon Signed-Rank Test

The Wilcoxon Signed-Rank test is the non-parametric alternative. This test works by using the **ranks** of each individual's score and looks for differences between the groups in rank position.
</div>

---

### Check Your Understanding

{% include question_multiple_choice.html
    id="q_paired_test_1"
    title="Scenario 1: Both Normality Checks Pass"
    question_text="A researcher is comparing patients' well-being scores before and after an intervention. A Shapiro-Wilk test shows both the 'Before' and 'After' scores are normally distributed."
    options="paired_t_test::Paired Samples t-test||wilcoxon::Wilcoxon Signed-Rank Test"
    correct_answer="paired_t_test"
    solution_text="Since both the 'Before' and 'After' variables are normally distributed, the Paired Samples t-test is the correct choice."
%}

{% include question_multiple_choice.html
    id="q_paired_test_2"
    title="Scenario 2: The Difference is Normal"
    question_text="A researcher is comparing reading speeds before and after a training course. The 'Before' score is not normally distributed, but a normality check on the **difference score** (Before - After) confirms it is normally distributed."
    options="paired_t_test::Paired Samples t-test||wilcoxon::Wilcoxon Signed-Rank Test"
    correct_answer="paired_t_test"
    solution_text="The Paired Samples t-test is the correct choice. Even though one of the original variables was not normal, the critical assumption—that the difference variable is normal—was met."
%}

{% include question_multiple_choice.html
    id="q_paired_test_3"
    title="Scenario 3: Normality of Difference is Violated"
    question_text="A researcher is comparing pain levels before and after a treatment. A normality check on the **difference score** (Before - After) shows that the scores are **not normally distributed**."
    options="paired_t_test::Paired Samples t-test||wilcoxon::Wilcoxon Signed-Rank Test"
    correct_answer="wilcoxon"
    solution_text="The correct test is the Wilcoxon Signed-Rank Test. If the difference score is not normally distributed, the non-parametric alternative must be used."
%}

<!-- This automatically adds the "Previous" and "Next" navigation buttons -->
{% include pagination.html %}
