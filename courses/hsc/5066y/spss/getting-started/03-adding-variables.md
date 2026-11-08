---
title: Adding and Defining Variables
layout: hsc5066y
interactive: 0
mj: 0
---

<div class="explanation" markdown="1">
## Adding and Defining Variables

Before we can enter any data, we need to set up the variables.  We are going to gather data on

*   **County of residence**
*   **Favoured hand** (1 = Left, 2 = Right)
*   **Opinion on The Beatles** (1 = Dislike, 2 = Neutral, 3 = Like, 4 = Adore)
*   **Height** (in centimetres)
</div>

<div class="instructions" markdown="1">
### Starting Instructions

Go to **Variable View** at the bottom of the SPSS window.
</div>

<div class="explanation" markdown="1">
### The Variable Setup

*   The first column, **Name** is where you put the name of the variable.  The name must contain no spaces and start with a letter of the alphabet.
*   The second column, **Type** tells SPSS whether this data is going to be numeric or non-numeric.  The ones we are interested in are **Numeric** and **String**.
*   The **Label** column is where you can enter a more user friendly name for the variable (which isn't restricted like the Name column).
*   The **Value Labels** column is used if you have used numeric values to store nominal or ordinal information.  For example, we can tell SPSS that 1 means left and 2 means right.
*   The **Measure** column is the choice of `Nominal`, `Ordinal`, or `Scale`. This refers to the type of data, not how it is entered. `County` and `Hand` will both be nominal, `The Beatles` will be ordinal, and `Height` will be continuous.
</div>

<div class="instructions" markdown="1">
### Setting Up Your Four Variables

1.  In the first row of the **Name** column enter `County`.

2.  Change **Type** to **String** (this allows characters rather than numbers to be entered).  Do this by clicking in the cell and choosing **String**

3.  Change the **Measure** to **Nominal**, by clicking in the cell and choosing **Nominal**.

4.  Move down to the next row and enter `Hand` into the **Name** column.

5.  Keep the **Type** as **Numeric**

6.  Click the three dots (...) in the **Value Labels** column.  Make use of the **plus button** to add two levels, entering a **value** of `1` and a **value label** of `Left`, as well as a **value** of `2` and a **value label** of `Right`. 

7.  Change the **Measure** to **Nominal**

8.  Enter variables of **Beatles** and **Height**, with **Numeric** type and **Ordinal** (for Beatles) and **Scale** (for height) for the **Measure Type**.
</div>

Your variable setup should now look like this:

![The spss variable view with the 4 variables entered as per instructions.]({{ "/assets/images/hsc/5066y/pspp/variable-view-setup.png" | relative_url }})

<!-- This automatically adds the "Previous" and "Next" navigation buttons -->
{% include pagination.html %}
