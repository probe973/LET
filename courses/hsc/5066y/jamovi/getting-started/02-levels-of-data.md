---
layout: hsc5066y
title: Levels of Data
interactive: 1
mj: 0
---

<div class="explanation" markdown="1">
## Levels of Data in jamovi

All data can be broadly split into two main types: **categorical** and **numerical**. Understanding the difference is the first key step to choosing the correct analysis.

*   **Categorical Data** represents groups or categories. For example, Eye Colour (Blue, Brown, Green) or Highest Qualification (GCSE, A-Level, Degree).
*   **Numerical Data** represents quantities. For example, Height in centimetres, Number of siblings, or Temperature in Celsius.
</div>

<div class="explanation" markdown="1">
### Categorical Data: Nominal and Ordinal

When data is categorical, we can further classify it:

*   **Nominal:** These are categories with no inherent order or ranking. In jamovi, this is the **Nominal** data type.
    *   *Example:* Types of pets (Dog, Cat, Fish).

*   **Ordinal:** These are categories that have a meaningful order or rank, but the distance between the categories is not equal or measurable. In jamovi, this is the **Ordinal** data type.
    *   *Example:* A satisfaction rating (Very Dissatisfied, Dissatisfied, Neutral, Satisfied, Very Satisfied).
</div>

<div class="explanation" markdown="1">
### Numerical Data: Interval and Ratio

Academically, measured numerical data is often split into two types:

*   **Interval:** The data is ordered and the intervals between values are equal, but there is no "true zero".
    *   *Example:* Temperature in Celsius. The difference between 10°C and 20°C is the same as between 20°C and 30°C, but 0°C is a temperature, not the absence of all heat.

*   **Ratio:** The data has all the properties of interval data, but it also has a "true zero", meaning 0 represents the complete absence of the variable.
    *   *Example:* Height in centimetres. 0 cm means no height.

**Important:** For practical purposes, **jamovi calls both Interval and Ratio data 'Continuous'**.
</div>

<div class="explanation" markdown="1">
### Numerical Data: Discrete and Continuous

Another way to think about numerical data is whether it's discrete or continuous.

*   **Discrete Data** can only take specific, separate values (often whole numbers).
    *   *Example:* The number of siblings a person has. You can have 2 or 3 siblings, but not 2.5.

*   **Continuous Data** can take any value within a given range.
    *   *Example:* A person's height. It could be 175cm, 175.1cm, or 175.11cm, depending on the precision of the measurement.

**Important:** Once again, **jamovi simplifies this and calls all numerical data (both Discrete and Continuous) 'Continuous'**.
</div>

---

### Check Your Understanding
For the following variables, how would you classify them in jamovi?

{% include question_multiple_choice.html
    id="q_transport"
    title="Method of Transport"
    question_text="A variable recording a person's primary method of transport to work (e.g., Car, Bus, Train, Bicycle)."
    options="nominal::Nominal||ordinal::Ordinal||continuous::Continuous"
    correct_answer="nominal"
    solution_text="The transport methods are distinct categories with no logical order, making this Nominal data."
%}

{% include question_multiple_choice.html
    id="q_tshirt"
    title="T-Shirt Size"
    question_text="A variable recording a t-shirt size (e.g., Small, Medium, Large, Extra Large)."
    options="nominal::Nominal||ordinal::Ordinal||continuous::Continuous"
    correct_answer="ordinal"
    solution_text="The sizes have a clear, meaningful order, but the difference in measurement between 'Small' and 'Medium' isn't necessarily the same as between 'Large' and 'Extra Large'. This is Ordinal data."
%}

{% include question_multiple_choice.html
    id="q_weight"
    title="Weight of a Package"
    question_text="A variable recording the weight of a package in kilograms."
    options="nominal::Nominal||ordinal::Ordinal||continuous::Continuous"
    correct_answer="continuous"
    solution_text="Weight is a precise numerical measurement. In jamovi, all numerical data is classified as Continuous."
%}

{% include question_multiple_choice.html
    id="q_phone"
    title="Mobile Phone Brand"
    question_text="A variable recording the brand of a person's mobile phone (e.g., Apple, Samsung, Google)."
    options="nominal::Nominal||ordinal::Ordinal||continuous::Continuous"
    correct_answer="nominal"
    solution_text="Phone brands are just labels. There is no inherent ranking or order, so this is Nominal data."
%}

{% include question_multiple_choice.html
    id="q_injury"
    title="Injury Severity"
    question_text="A variable from a medical record classifying an injury as 'Mild', 'Moderate', or 'Severe'."
    options="nominal::Nominal||ordinal::Ordinal||continuous::Continuous"
    correct_answer="ordinal"
    solution_text="'Severe' is clearly worse than 'Moderate', so there is an order. However, the difference between the levels is not a measurable quantity. This is Ordinal data."
%}

<!-- This automatically adds the "Previous" and "Next" navigation buttons -->
{% include pagination.html %}
