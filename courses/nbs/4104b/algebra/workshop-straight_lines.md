---
layout: nbs4104b
title: Straight Line Graphs
---

# Straight Line Graphs

This workshop focuses on gradients and the equation of a straight line

$$y=mx+c$$


<div class="instructions" markdown="1">

### Gradient

**Gradient** is the measure of how steep something is.  For a straight-line, the gradient is the same throughout, straight-lines do not get steeper or shallower.

The **gradient of a straight-line** is a numerical value that tells you how far up (if a positive value) or down (if a negative value) when you move one unit horizontally to the right.  It can be calculated as:

$$\text{Gradient}=\frac{\Delta y}{\Delta x}$$

$\Delta$ represents the amount of change.

If the points with coordinates $(x_1, y_1)$ and $(x_2, y_2)$ lie on a straight-line, the gradient will be calculated as:

$$\text{Gradient}=\frac{\Delta y}{\Delta x}=\frac{y_2-y_1}{x_2-x_1}$$

**Example**

Find the gradient of a straight-line that passes through the points $(0,1)$ and $(2,5)$

![A straight-line going through the points 0 1 and 2 5.  The x-axis runs from -2 to 6 and the y-axis runs from -1 to 6.  A dotted horizontal and dotted vertical line, forming a triangle with the line show how much change there has been in y and how much change there has been in x.]({{ "/assets/images/nbs/straight_lines/SL-Eg1.png" | relative_url }})

You can use the triangle in the image to calculate how much movement there has been in $y$ and how much movemement there has been in $x$.  Lines that are rising when reading from left to right have a **positive** gradient.

$$\text{Gradient}=\frac{5-1}{2-0}=\frac{4}{2}=2$$

</div>

{% include question_numerical.html
    id="sl_grad_1"
    title="1"
    question_text="Find the gradient of the straight-line that passes through the points $(1,1)$ and $(5,13)$"
    correct_answer="3"
    tolerance="0"
    solution_text="$\frac{13-1}{5-1}=3$"
%}

{% include question_numerical.html
    id="sl_grad_2"
    title="2"
    question_text="Find the gradient of the straight-line that passes through the points $(2,-1)$ and $(10,3)$"
    correct_answer="0.5"
    tolerance="0"
    solution_text="$\frac{3-(-1)}{10-2}=0.5$"
%}

{% include question_numerical.html
    id="sl_grad_3"
    title="3"
    question_text="Find the gradient of the straight-line that passes through the points $(5,18)$ and $(7,8)$"
    correct_answer="-5"
    tolerance="0"
    solution_text="$\frac{8-18}{7-5}=-5$"
%}

<div class="instructions" markdown="1">

### Equation of a Straight-Line

The general equation of a straight line is:

$$y=mx+c$$

Here, $m$ is the **gradient of the straight-line** and $c$ is the **$y$-intercept**, which is the value of $y$ when $x=0$ and the point on the $y$-axis where the line crosses it.

Any function that is written in this form, or can be rearranged to be in this form, are straight-lines.

**Example**

Find the gradient and the $y$-intercept of the straight line $2y-4x=5$.

**Step 1:** Rearrange into the form $y=mx+c$:

Add $4x$ to both sides:

$$2y=5+4x$$

Divide both sides by 2

$$y=\frac{5}{2}+\frac{4x}{2}$$

Write in the form $y=mx+c$

$$y=2x+\frac{5}{2}$$

The straight-line has **gradient of 2** and **$y$-intercept of $\left ( 0,\frac{5}{2} \right )$**

</div>

{% include question_simultaneous.html
    id="w02slq4"
    title="4"
    question_text="What is the gradient and $y$-coordinate of the $y$-intercept of the straight-line $y=5x+1$"
    var1_label="\text{Gradient}"
    var2_label="y\text{-intercept}"
    ans_var1="5"
    ans_var2="1"
    solution_text="Already in the correct format $y=mx+c$:

gradient = 5, $y$-intercept = $(0,1)$, so $y$-coordinate is 1."
%}

{% include question_simultaneous.html
    id="w02slq5"
    title="5"
    question_text="What is the gradient and $y$-coordinate of the $y$-intercept of the straight-line $y=15-2x$"
    var1_label="\text{Gradient}"
    var2_label="y\text{-intercept}"
    ans_var1="-2"
    ans_var2="15"
    solution_text="Already in the correct format $y=mx+c$:

$y = -2x + 15$

gradient = -2, $y$-intercept = $(0,15)$, so $y$-coordinate is 15."
%}

{% include question_simultaneous.html
    id="w02slq6"
    title="6"
    question_text="What is the gradient and $y$-coordinate of the $y$-intercept of the straight-line $4y=4x+12$"
    var1_label="\text{Gradient}"
    var2_label="y\text{-intercept}"
    ans_var1="1"
    ans_var2="3"
    solution_text="Divide through by $4$:

$$\frac{4y}{4} = \frac{4x}{4} + \frac{12}{4}$$

$$y= x + 3$$

gradient = 1, $y$-intercept = $(0,3)$, so $y$-coordinate is 3."
%}

{% include question_simultaneous.html
    id="w02slq7"
    title="7"
    question_text="What is the gradient and $y$-coordinate of the $y$-intercept of the straight-line $4x-2y-9=0$"
    var1_label="\text{Gradient}"
    var2_label="y\text{-intercept}"
    ans_var1="2"
    ans_var2="-9/2"
    solution_text="Add $2y$ to both sides:

$$4x-9=2y$$

Divide through by 2:

$$2x-\frac{9}{2}=y$$

gradient = 2, $y$-intercept = $(0,-\frac{9}{2})$, so $y$-coordinate is $-\frac{9}{2}$."
%}

{% include question_simultaneous.html
    id="w02slq8"
    title="8"
    question_text="What is the gradient and $y$-coordinate of the $y$-intercept of the straight-line $42x+3y=-7$"
    var1_label="\text{Gradient}"
    var2_label="y\text{-intercept}"
    ans_var1="-2/3"
    ans_var2="-7/3"
    solution_text="
$$3y=-2x-7 \implies y=\frac{-2}{3}x - \frac{7}{3}$$

gradient = $- \frac{2}{3}$, $y$-intercept = $(0,-\frac{7}{3})$, so $y$-coordinate is $-\frac{7}{3}$."
%}




<div class="instructions" markdown="1">

### Finding the Equation of a Straight-Line

If you have two points on a straight-line, you can find its equation by:

**Step 1**:  Find the gradient between the two points

**Step 2**:  Writing the partial answer $y=mx+c$, using your value of the gradient for $m$

**Step 3**:  Substitute either of the coordinates in for $x$ and $y$ into $y=mx+c$ and solve for $c$

**Example**

Find the equation of the straight-line that passes through the points $(3, 8)$ and $(6, 17)$.

**Gradient**

$$\text{Gradient}=m=\frac{17-8}{6-3}=\frac{9}{3}=3$$

**Partial Solution**

$$y=3x+c$$

**Substitute $(3, 8)$**

$$8=3(3)+c \implies 8=9+c \implies -1=c$$

**Equation**

$$y=3x-1$$

</div>

{% include question_rearrange.html
    id="w02slq9"
    title="9"
    question_text="Find the equation of the straight-line that passes through the points (1,6) and (3,10).

Give your answer in the form $y=mx+c$."
    correct_answer="y=2x+4"
    var_label="y="
    solution_text="$m=\frac{10-6}{3-1}=2$ <br> $y=2x+c$ <br> $6=2(1)+c \implies c=4$ <br> $y=2x+4$"
%}

{% include question_rearrange.html
    id="w02slq10"
    title="10"
    question_text="Find the equation of the straight-line that passes through the points (5,12) and (12,-9).

Give your answer in the form $y=mx+c$."
    correct_answer="y=-3x+27"
    var_label="y="
    solution_text="$m=\frac{-9-12}{12-5}=-3$ <br> $y=-3x+c$ <br> $12=-3(5)+c \implies c=27$ <br> $y=-3x+27$"
%}


![A straight-line going through the points 0.5 2.45 and 2 6.2.  The x-axis and y-axis runs from -2 to 8]({{ "/assets/images/nbs/straight_lines/SL-Ex1.png" | relative_url }})

{% include question_rearrange.html
    id="w02slq11"
    title="11"
    question_text="Find the equation of the straight-line shown in the image above.

Give your answer in the form $y=mx+c$."
    correct_answer="y=\\frac{5}{2}x+\\frac{6}{5}"
    var_label="y="
    solution_text="$m=\frac{6.2-2.45}{2-0.5}=2.5$ <br> $y=2.5x+c$ <br> $6.2=2.5(2)+c \implies c=1.2$ <br> $y=2.5x+1.2$"
%}


{% include question_dropdown.html
    id="w02slq12"
    title="12"
    question_text="Use your answer from question 11 to write the equation of this line in the form
    $$ax+by+c=0$$ <br> Where $a$, $b$, and $c$ are all integers (whole numbers)."
    solution_text="$y=2.5x+1.2$ <br> Multiply all terms by 10: $10y=25x+12$ <br> Subtract $10y$ from both sides: $0=25x+12-10y$ <br> $$25x-10y+12=0$$ <br> Note also that $-25x+10y-12=0$ is also a correct solution."
%}

<script src="https://unpkg.com/mathlive"></script>
<script src="https://unpkg.com/@cortex-js/compute-engine"></script>
