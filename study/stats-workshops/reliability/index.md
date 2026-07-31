---
layout: stats
title: Reliability
---

# Introductory Statistics Guide: Reliability Analysis & Cronbach's Alpha

When we measure something, like 'satisfaction' or 'anxiety', we often use multiple questions or 'items' to capture the full concept. Reliability analysis helps us understand if these items consistently measure the same thing.

This guide will look at:

* Calculating the reliability measure **Cronbach's Alpha (&alpha;)**
* Reverse coding scores
* Creating a new scale from item scores

<div class="explanation" markdown="1">

## 1. What is Reliability?

Imagine using a bathroom scale. If you step on it multiple times in a row and get wildly different readings each time, you'd consider it unreliable. In research, reliability refers to the consistency of a measure. If a questionnaire is reliable, it should produce similar results under consistent conditions.

### 1.1 Introducing Cronbach's Alpha

One of the most common ways to assess the internal consistency reliability of a scale is through **Cronbach's Alpha (α)**. It's a single number that ranges from 0 to 1, indicating how closely related a set of items are as a group. Think of it as an average correlation.

*   A higher Cronbach's Alpha generally indicates greater internal consistency.
*   **Interpretation Guidelines (general):**
    *   α ≥ 0.9: Excellent
    *   0.8 ≤ α < 0.9: Good
    *   0.7 ≤ α < 0.8: Acceptable
    *   0.6 ≤ α < 0.7: Questionable
    *   0.5 ≤ α < 0.6: Poor
    *   α < 0.5: Unacceptable

It's important to note that while a high alpha is desirable, it doesn't necessarily mean the scale is measuring what it's supposed to measure (that's validity). It just means the items are consistent with each other.

</div>

* * *

## 2. Data Setup: The Omni Dataset

This guide uses the omni dataset. If you need help loading this data, please refer to the loading data guides.

From this dataset you will be using the 5 satisfaction variables. These represent a 5-point likert scale response to a series of questions. Each of the questions use:

> 1 = strong disagree, 2 = disagree, 3 = neutral, 4 = agree, 5 = strongly agree

The questions associated with each of the variables are:

`satisfaction_q1`:
 The instructor starts the lessons on time

`satisfaction_q2`:
 I am aware of the expectations in each lesson

`satisfaction_q3`:
 The pace of the lesson is good

`satisfaction_q4`:
 The level of the work set is good

`satisfaction_q5`:
 There is too much poor behaviour in the lesson


<div class="explanation" markdown="1">

### 2.1 When Responses Might Need to be Reverse Scored

Sometimes, not all questions in a scale are phrased in the same direction. For example, in a satisfaction survey, most questions might ask about positive aspects of satisfaction ("I am happy with...", "I am pleased with..."), but one question might be phrased negatively ("I am dissatisfied with..."). If a high score on the 'satisfied' questions indicates high satisfaction, then a high score on the 'dissatisfied' question would indicate _low_ satisfaction.

To ensure all items contribute consistently to the overall score, we need to **reverse score** the negatively phrased items. This means transforming the response so that a high score on that item now also indicates high satisfaction.

#### 2.2 How to identify items for reverse scoring:

1.  **Examine the wording:** Carefully read each question. If a question is negatively phrased or indicates the opposite construct to the others, it likely needs reverse scoring.
2.  **Check correlations:** If an item is negatively correlated with the other items in the scale, it's a strong indicator that it needs to be reverse scored.

</div>

<div class="tasks" markdown="1">

Looking at the wording of the 5 questions, **do any of the questions need to be reverse scored?**

<button class="collapsible">Suggested Solution</button>
<div class="content" markdown="1">

The 5th question, `satisfaction_q5`, is worded negatively compared to other questions. A person who has high satisfaction with the lessons would score high on questions 1 to 4 and low on question 5.

To make the responses comparable, you would want to reverse the scores to question 5, so that a 1 is given 5, a 2 becomes 4, etc..

</div>
</div>


## 3. Using Software for Reliability Analysis

### 3.1 Checking Item Correlations

<div class="explanation" markdown="1">

**Correlation Coefficients** are numbers between -1 and 1. Postive numbers indicate positive correlations and negative numbers indicate negative correlations. Numbers closer to 1 (or -1) indicate stronger correlations.

A **positive correlation** means that higher numbers on one score are associated with higher numbers on another score.

A **negative correlation** means that higher numbers on one score are associated with lower numbers on another score.
</div>

<button class="collapsible">jamovi Guide</button>
<div class="content" markdown="1">

You will look to see if each of the scale items are related to the other scale items.

From the top jamovi menu, go to:

> `Analysis` tab, then `Factor` and select `Reliability Analysis`

Then:

* Place the 5 `satisfaction_q` variables into the `Items` box
* Choose the checkboxes for:
    * **Cronbach &alpha;** from **Scale Statistics**
    * **Correlation heatmap** from **Additional Options**

You should see that the first 4 questions are all positively associated with each other (green colour in jamovi), but question 5 is negatively associated with the other scores (red colour in jamovi). This was expected due to the negative wording of question 5 compared to the other questions.

This means that the Cronbach &alpha; score is very low, and wouldn't be acceptable reliability.

</div>

<button class="collapsible">R Studio Guide</button>
<div class="content" markdown="1">



</div>

<button class="collapsible">SPSS Guide</button>
<div class="content" markdown="1">



</div>

<div class="output" markdown="1">
Without reverse coding question 5, you should find:

> Cronbach &alpha; = 0.49

The 5 items are unreliable together in measuring satisfaction.

Question 5 was negatively correlated with the other 4 questions, which were positively correlated with each other.

</div>

### 3.2 Reverse Scoring Question 5 and Getting the Cronbach Aplha Value

The wording of the question and the negative correlation of question 5 means that it will need to be reverse scored. This means that we will swap a score of 1 for 5, 2 for 4, 3 will still be 3, 4 for 2, and 5 for 1. Then high scores still represent high satisfaction ratings.

<button class="collapsible">jamovi Guide</button>
<div class="content" markdown="1">

Make sure you still have the output with the correlation heatmap selected (click on the output), so that the menu for reliability analysis is still visible.

* Expand the section **>Reversed Scale Items**
* Place the `satisfaction_q5` variable into the `Reversed Scale Items` box

You should now see the output update.

</div>

<button class="collapsible">R Studio Guide</button>
<div class="content" markdown="1">



</div>

<button class="collapsible">SPSS Guide</button>
<div class="content" markdown="1">



</div>

<div class="output" markdown="1">
After reverse coding question 5, you should find:

> Cronbach &alpha; = 0.96

The items have excellent inter-item reliability.
</div>

### 3.3 Creating a New Scale That Measures Satisfaction

If items work reliably together, you may wish to create a single variable that measures the construct the items are trying to measure. In this example we are using the 5 likert scale items to measure satisfaction with lessons. There are different ways in which you can do this, but you could add the scores together to get a total or you could find the mean of the scores. Any reverse scored items must be used in the calculation of the new measure.

Here you are going to create a score which is the total of the 5 item scores. With the reverse scored item, higher scores on this new score represent higher satisfaction.

<button class="collapsible">jamovi Guide</button>
<div class="content" markdown="1">

Make sure you still have the output with the correlation heatmap selected (click on the output), so that the menu for reliability analysis is still visible.

* Expand the section **>Save**
* Check the box **Sum score**

Nothing will appear to happen on checking the **Sum score** box. In your data there will be a new column, which is the total score (taking into account the reverse scored item).

* Choose Data from the top navigation
* Move to the rightmost part of the dataset, where you will see a column called `Sum Score`
* Click on this column and then choose **Setup** from the top menu
* Change the variable name to **satisfaction** by overtyping **Sum Score**

</div>

<button class="collapsible">R Studio Guide</button>
<div class="content" markdown="1">



</div>

<button class="collapsible">SPSS Guide</button>
<div class="content" markdown="1">



</div>

<div class="tasks" markdown="1">
Create some descriptive statistics for the newly created **satisfaction** variable. Find the **mean**, **median**, and **standard deviation**.

<button class="collapsible">Suggested Solutions</button>
<div class="content" markdown="1">
**Satisfaction**
* Mean = 15.7
* Median = 16.0
* Standard Deviation = 6.85
</div>

</div>

<script src="{{ '/assets/js/collapsible.js' | relative_url }}"></script>
