---
layout: hsc5066y
title: Reliability Workshop
interactive: 1
mj: 0
---

<div class="explanation" markdown="1">
# Reliability Coefficients

This workshop focuses on working with measures of reliability.
</div>

---

A blood pressure machine is used to record patients’ systolic blood pressure.  A few minutes later a second reading is taken by the same machine.  The results for 12 patients are shown

| Patient | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Reading1 | 118 | 125 | 131 | 122 | 144 | 110 | 112 | 135 | 116 | 122 | 125 | 132 |
| Reading2 | 137 | 148 | 148 | 139 | 161 | 129 | 125 | 151 | 130 | 136 | 146 | 154 |

{% include question_multiple_choice.html
    id="reliability1a"
    title="Reliable Readings"
    question_text="Does the table suggest that this machine is working correctly?"
    options="no::No||yes::Yes"
    correct_answer="no"
    solution_text="You would expect the first and second reading to be similar for each patient, as they are only a few minutes apart.  ICC for test-retest measures how similar the two readings are, not just how correlated they are (since it checks absolute agreement).  Therefore, the machine doesn’t appear to be working correctly."
%}

{% include question_multiple_choice.html
    id="reliability1b"
    title="Reliable Rating"
    question_text="An intraclass correlation coefficient (ICC) is calculated to check test-retest absolute agreement.  The coefficient value is 0.395.  How would you interpret this value?"
    options="poor::Poor||acceptable::Acceptable||good::Good||vg::Very good"
    correct_answer="poor"
    solution_text="ICC values of less than 0.5 indicate **poor reliability**.  This matches the suspicions of the sample."
%}

{% include question_multiple_choice.html
    id="reliability1c"
    title="Reliable Rating Comparison"
    question_text="A second machine is used and found to have an ICC = 0.993 for test-retest.  Compare this machine to the first."
    options="weaker::The higher ICC of 0.993 means that this second machine is less reliable||equal::ICC of 0.395 and of 0.993 both represent poor reliability||stronger::The higher ICC of 0.993 means that this second machine is more reliable"
    correct_answer="stronger"
    solution_text="ICC values of greater than 0.9 indicate excellent reliability.  This is a much better and more reliable machine than the first."
%}

---

Trained health care workers assess the mobility of recovering road traffic accident patients using a new index.  5 healthcare workers all assess the same 25 patients using the scale.  An intraclass correlation coefficient (ICC) is calculated to assess the inter-rater reliability of the scale and produces ICC = 0.76.

{% include question_multiple_choice.html
    id="reliability2"
    title="Reliable Rating"
    question_text="How would you rate the reliability of this index between different health care workers assessments?"
    options="poor::Poor||acceptable::Acceptable||good::Good||vg::Very good||ex::Excellent"
    correct_answer="good"
    solution_text="ICC values between 0.7 and 0.8 indicate good reliability.  This means that the 5 healthcare workers are in good agreement on the mobility of their patients."
%}

---

To assess a patient’s memory skills, the patient is graded on scale of 1 to 10 on 5 different assessments.  From these 5 assessments a memory skill index is produced for the patient by summing the individual scores.

{% include question_dropdown.html
    id="reliability3a"
    title="Coefficient Name"
    question_text="Name a coefficient that can be used to assess the internal consistency of the 5 assessments in measuring memory skill."
    solution_text="Internal consistency of scales can be measured using **Cronbach’s Alpha**"
%}

{% include question_dropdown.html
    id="reliability3b"
    title="Coefficient Rating"
    question_text="Given that the coefficient returns a value of 0.72, how would you assess the internal consistency of the 5 scales?"
    solution_text="Cronbach Alpha values of over 0.7 are generally considered **good internal consistency**.  It would be worth checking whether removing any of the 5 assessments improves the alpha value."
%}

{% include question_dropdown.html
    id="reliability3c"
    title="Assessment Removal"
    question_text="If the 4th assessment in the scale is removed from the index calculation, the coefficient becomes 0.85.  What would you conclude about this assessment?"
    solution_text="The internal consistency of the scale has been improved by removing the 4th assessment.  This suggests that the 4th assessment was not measuring the same latent variable (memory skill)."
%}
