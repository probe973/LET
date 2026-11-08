---
layout: hsc5066y
title: Adding and Defining Variables
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

Go to **Variables → Edit** to enter setup mode.
</div>

<div class="explanation" markdown="1">
### The Variable Setup Panel

*   The top box is the **variable name** (`County`, `Hand`, `Beatles`, `Height`).
*   The next box is a **description**, which is an optional place to enter information about the variable.
*   **Measure type** is the choice of `Nominal`, `Ordinal`, or `Continuous`. This refers to the type of data, not how it is entered. `County` and `Hand` will both be nominal, `The Beatles` will be ordinal, and `Height` will be continuous.
*   **Data type** determines how we will enter our data (e.g. as text, as numbers). jamovi is good at picking this up from what you enter, so we can leave it here.
*   **Levels** is where we can convert data entered numerically (for example, 1 = left, 2 = right) into the text version.
*   **Missing values** is a number you can enter if a person does not have a value for a particular variable. Missing data can also be left blank.
</div>

<div class="instructions" markdown="1">
### Setting Up Your Four Variables

1.  In the variable list at the bottom of the window, press the **plus button (`+`)** in the blue circle, and from the `Data Variable` section choose either **Insert** or **Append**, to ensure we have 4 variables.

2.  Click on the name of the first variable in the list to select it.

3.  In the top setup part:
    *   Enter **County**, and set the measure type to **Nominal**.

4.  Press the **right arrow (`→`)** to move to the next variable.

5.  Enter the following:
    *   **Name:** `Hand`
    *   **Measure type:** `Nominal`
    *   Click the **plus button (`+`)** next to Levels, and in the input box, enter `1`.
    *   Repeat, but this time enter `2`.
    *   You should now see `1` and `2` in the levels list. Click on `1` and type `Left`. Click on `2` and type `Right`.

6.  Press the **right arrow (`→`)** to move to the next variable.
    *   Enter **Beatles**, and set the measure type to **Ordinal**.

7.  Press the **right arrow (`→`)** to move to the final variable.
    *   Enter **Height**, and set the measure type to **Continuous**.
</div>

Your `Hand` variable setup should now look exactly like this:

![The jamovi variable setup panel for the 'Hand' variable. The name is set to Hand, Measure type is Nominal, Data type is Integer, and the Levels are shown as 1 = Left and 2 = Right.]({{ "/assets/images/hsc/5066y/jamovi-hand-setup.png" | relative_url }})

<!-- This automatically adds the "Previous" and "Next" navigation buttons -->
{% include pagination.html %}
