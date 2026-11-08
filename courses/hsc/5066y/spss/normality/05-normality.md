---
title: Normality Questions
layout: hsc5066y
interactive: 1
mj: 0
---

<div class="explanation" markdown="1">
##Normality Checking

You are interested whether the following baseline variables are normally distributed, for left-side CVA and right-side CVA participants:
* FAST - `FASTbase`
* ARAT - `ARATbase`
* Barthel - `Barthelbase`
* GHQ12 - `GHQ12base`

Generate descriptive statistics for these variables, separately for left- and right-side CVA, and draw histograms.

Get the results of the **Shapiro-Wilk** test for each of the 8 normality checks.

</div>

Based on the ***p*-value of the Shapiro-Wilk** test, what conclusion would you draw about the normality of the variable by CVA side?

{% include question_multiple_choice.html
    id="q_norm_fastb_left"
    title="FAST Base, left-side CVA"
    question_text="Does the Shapiro-Wilk test give evidence of FAST base in left-side CVA data not being normally distributed (i.e. is p smaller than 0.05)?"
    options="no::No, let's consider normally distributed||yes::Yes, let's consider not normally distributed"
    correct_answer="no"
    solution_text="p = 0.888, which is not significant, so we can stay with data being assumed to be normally distributed"
%}

{% include question_multiple_choice.html
    id="q_norm_fastb_right"
    title="FAST Base, right-side CVA"
    question_text="Does the Shapiro-Wilk test give evidence of FAST base in right-side CVA data not being normally distributed (i.e. is p smaller than 0.05)?"
    options="no::No, let's consider normally distributed||yes::Yes, let's consider not normally distributed"
    correct_answer="yes"
    solution_text="p<.001, which is significant, so we reject data being assumed to be normally distributed"
%}

{% include question_multiple_choice.html
    id="q_norm_aratb_left"
    title="ARAT Base, left-side CVA"
    question_text="Does the Shapiro-Wilk test give evidence of ARAT base in left-side CVA data not being normally distributed (i.e. is p smaller than 0.05)?"
    options="no::No, let's consider normally distributed||yes::Yes, let's consider not normally distributed"
    correct_answer="yes"
    solution_text="p = 0.026 < 0.05, which is significant, so we reject data being assumed to be normally distributed"
%}

{% include question_multiple_choice.html
    id="q_norm_aratb_right"
    title="ARAT Base, right-side CVA"
    question_text="Does the Shapiro-Wilk test give evidence of ARAT base in right-side CVA data not being normally distributed (i.e. is p smaller than 0.05)?"
    options="no::No, let's consider normally distributed||yes::Yes, let's consider not normally distributed"
    correct_answer="yes"
    solution_text="p = 0.013 < 0.05, which is significant, so we reject data being assumed to be normally distributed"
%}

{% include question_multiple_choice.html
    id="q_norm_barthelb_left"
    title="Barthel Base, left-side CVA"
    question_text="Does the Shapiro-Wilk test give evidence of Barthel base in left-side CVA data not being normally distributed (i.e. is p smaller than 0.05)?"
    options="no::No, let's consider normally distributed||yes::Yes, let's consider not normally distributed"
    correct_answer="no"
    solution_text="p = 0.057, which is not significant, so we stick with data being assumed to be normally distributed"
%}

{% include question_multiple_choice.html
    id="q_norm_barthelb_right"
    title="Barthel Base, right-side CVA"
    question_text="Does the Shapiro-Wilk test give evidence of Barthel base in right-side CVA data not being normally distributed (i.e. is p smaller than 0.05)?"
    options="no::No, let's consider normally distributed||yes::Yes, let's consider not normally distributed"
    correct_answer="no"
    solution_text="p = 0.218, which is not significant, so we stick with data being assumed to be normally distributed"
%}

{% include question_multiple_choice.html
    id="q_norm_ghqb_left"
    title="GHQ12 Base, left-side CVA"
    question_text="Does the Shapiro-Wilk test give evidence of GHQ12 base in left-side CVA data not being normally distributed (i.e. is p smaller than 0.05)?"
    options="no::No, let's consider normally distributed||yes::Yes, let's consider not normally distributed"
    correct_answer="no"
    solution_text="p = 0.273, which is not significant, so we stick with data being assumed to be normally distributed"
%}

{% include question_multiple_choice.html
    id="q_norm_ghqb_right"
    title="GHQ12 Base, right-side CVA"
    question_text="Does the Shapiro-Wilk test give evidence of GHQ12 base in right-side CVA data not being normally distributed (i.e. is p smaller than 0.05)?"
    options="no::No, let's consider normally distributed||yes::Yes, let's consider not normally distributed"
    correct_answer="yes"
    solution_text="p = 0.001 < 0.05, which is significant, so we reject data being assumed to be normally distributed"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/hsc/5066y/spss/" | relative_url }}">← Return to SPSS Guides Menu</a>
</div>

{% include pagination.html %}
