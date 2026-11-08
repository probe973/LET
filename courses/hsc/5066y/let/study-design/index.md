---
layout: hsc5066y
title: Study Design Workshop
interactive: 1
mj: 0
---

<div class="explanation" markdown="1">
# Study Design

This workshop focuses on knowing different types of study design, the advantages and disadvantages of each, and the concept of blinding.
</div>

---

### Study Design

For each of the following studies, determine whether the design is cross-sectional, case control, cohort, or a randomised control trial.

<div class="explanation" markdown="1">
    
For distinguishing between case-control and cohort studies, you may find this image useful.

<a title="Jmarchn, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:ExplainingCaseControlSJW-en.svg"><img width="400" alt="A diagram explaining the differences between a case-control study, a prospective cohort study, and a retrospective cohort study." src="https://upload.wikimedia.org/wikipedia/commons/1/14/ExplainingCaseControlSJW-en.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"></a>

<center>
<a href="https://commons.wikimedia.org/wiki/File:ExplainingCaseControlSJW-en.svg">Jmarchn</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons
</center>

</div>


{% include question_multiple_choice.html
    id="studydesign1"
    title="Study 1"
    question_text="A group of people who contracted symptomatic Covid-19 and who did not contract symptomatic Covid-19 are selected. They are asked about their exercise habits to determine whether exercise habits are a contributing factor to symptomatic Covid-19."
    options="cs::Cross-sectional||cc::Case control||c::Cohort||rct::Randomised control trial"
    correct_answer="cc"
    solution_text="People have been selected by outcome (those who contracted Covid and those who didn’t). This is a **case-control study**."
%}

{% include question_multiple_choice.html
    id="studydesign2"
    title="Study 2"
    question_text="A researcher carries out a survey where people are asked whether they are a smoker and whether they have lung cancer. The researcher uses this to look for a connection between smoking and lung cancer."
    options="cs::Cross-sectional||cc::Case control||c::Cohort||rct::Randomised control trial"
    correct_answer="cs"
    solution_text="Exposure (smoking) and outcome (cancer) are simultaneously looked at, at a single point in time. This is a **cross-sectional study**."
%}

{% include question_multiple_choice.html
    id="studydesign3"
    title="Study 3"
    question_text="A group of people, suffering from chronic lower back pain, are selected to trial a new drug. They are randomly divided into two groups, with one group receiving a placebo and the other the new drug. They are checked after 3 months to analyse the effectiveness of the new drug."
    options="cs::Cross-sectional||cc::Case control||c::Cohort||rct::Randomised control trial"
    correct_answer="rct"
    solution_text="Participants are randomly assigned to one of two groups and given different treatments. This is a **randomised-control trial**."
%}

{% include question_multiple_choice.html
    id="studydesign4"
    title="Study 4"
    question_text="A group of people are selected based on whether they have high blood pressure or not. A researcher wants to determine whether having high blood pressure is linked to high meat consumption, so all people are asked to describe their diet."
    options="cs::Cross-sectional||cc::Case control||c::Cohort||rct::Randomised control trial"
    correct_answer="cc"
    solution_text="People have been selected by outcome (high blood pressure and not). The diet is then looked at. This is a **case-control study**."
%}

{% include question_multiple_choice.html
    id="studydesign5"
    title="Study 5"
    question_text="To determine if there is a link between work computer use and RSI, a group of people who spend more than 5 hours a day and a group of people who spend less than 5 hours a day on computers is selected. The two groups are followed to look for developing issues with RSI."
    options="cs::Cross-sectional||cc::Case control||c::Cohort||rct::Randomised control trial"
    correct_answer="c"
    solution_text="The starting point is exposure (more than 5 hours and less than 5 hours of computer use) and followed over time to look for outcomes. This is a **cohort study**."
%}

---

### Blinding

For study 3 above, there is the option of blinding or double blinding in the study.

{% include question_dropdown.html
    id="studydesign6"
    title="Blinding Definition"
    question_text="Explain what is meant by the terms **blinding** and **double blinding** in research studies."
    solution_text="
**Blinding**: The participants are unaware of which group they have been assigned to.
**Double blinding**: Both the participants and the researcher are unaware of which group participants have been assigned to.
"
%}

{% include question_dropdown.html
    id="studydesign7"
    title="Blinding Advantages/Disadvantages"
    question_text="What are the advantages and disadvantages of blinding in research studies?"
    solution_text="
*   If participants are aware of which group they belong to (for example active drug or placebo drug) it can affect the behaviour of the participant. This can introduce **bias** into a study.
*   Similarly, if researchers are experimenting and are aware of which group is which, this can also introduce **bias** into the research. **Double-blinded studies** may carry more weight when reporting results.
*   The same procedures of a blinded study can be replicated, and similar results add validity to the study.

**Disadvantages:**
*   Blinding is not always possible, as it is sometimes obvious which group a participant belongs to (e.g. a high carb diet group and a high protein diet group, participants could probably tell which group they are in).
*   Blinding may not reflect real-life circumstances.
"
%}

---

### Advantages/Disadvantages of each study type

Each of the study designs given have their advantages and disadvantages.

{% include question_dropdown.html
    id="studydesign8"
    title="Case Control"
    question_text="What are the advantages and disadvantages of a **case-control** study?"
    solution_text="
**Advantages**:
*   Cheap and quick.
*   Smaller number of subjects needed compared to cross-sectional.
*   For rare disorders, it’s often the only feasible type of study.

**Disadvantages**:
*   Recall bias of participants.
*   Creating appropriate control groups is difficult.
*   Confounding variables.
"
%}

{% include question_dropdown.html
    id="studydesign9"
    title="Cohort"
    question_text="What are the advantages and disadvantages of a **cohort** study?"
    solution_text="
**Advantages**:
*   Easier and cheaper to administer than a randomised-control trial.
*   Can establish timing and direction of events.
*   Ethically safe.

**Disadvantages**:
*   Exposure may be linked to a confounder that is hidden.
*   No randomisation.
*   For rare disorders, large samples sizes or long follow-up are needed.
"
%}

{% include question_dropdown.html
    id="studydesign10"
    title="Cross-sectional"
    question_text="What are the advantages and disadvantages of a **cross-sectional** study?"
    solution_text="
**Advantages**:
*   Cheap and simple.
*   Generally not a problem with ethics.

**Disadvantages**:
*   Recall bias of participants.
*   May have unequal groups sizes.
*   Often establishes **association** and not **causality**.
*   Confounding variables may be unequally distributed.
"
%}

{% include question_dropdown.html
    id="studydesign11"
    title="Randomised Control Trial (RCT)"
    question_text="What are the advantages and disadvantages of a **randomised control trial** study?"
    solution_text="
**Advantages**:
*   Confounders are distributed randomly.
*   Blinding is possible.
*   Can establish **causality**.

**Disadvantages**:
*   Expensive to carry out.
*   Volunteer bias.
*   Potential to be tricky ethically.
"
%}
