---
layout: nbs4107a
title: Straight Lines
---

# Workshop: Straight Lines

This page contains practice questions covering straight lines, including gradients, intercepts, sketching, and solving simultaneous equations. Click "Show Solution" to see a step-by-step guide and the final answer for each question.

## Gradients, Intercepts and Sketches

### Question 1

For the straight line:

$$ y = 2x + 5 $$

{% include question_solve.html
    id="w03slq1a"
    title="1a"
    question_text="What is the gradient?"
    correct_answer="2"
    solution_text="The equation is of the form $y=mx+c$, where $m$ is the gradient"
%}

{% include question_solve.html
    id="w03slq1b"
    title="1b"
    question_text="Write down the $y$-cordinate of the point where the line crosses the $y$-axis, the $y$-intercept.  This the point where $x=0$"
    correct_answer="5"
    solution_text="Set $x=0$: $y = 2(0) + 5 = 5$"
%}

{% include question_solve.html
    id="w03slq1c"
    title="1c"
    question_text="Write down the point where the line crosses the $x$-axis (the x-intercept), by substituting $y=0$ and solving for $x$"
    correct_answer="-2.5"
    solution_text="Set $y=0$: $0 = 2x + 5 \\implies -5 = 2x \\implies x = -2.5$."
%}

{% include question_graph_choice.html
    id="w03slq1d"
    title="1d"
    question_text="Which of the following sketches represents the line $y=2x+5$?"
    correct_answer="A"
    ax="-2.5" ay="5"
    bx="2.5" by="5"
    cx="-2.5" cy="-5"
    dx="5" dy="-2.5"
    solution_text="The line crosses the y-axis at (0, 5) and the x-axis at (-2.5, 0)."
%}

### Question 2

For each of the following questions:

a. Rearrnage to make $y$ the subject

b. Determine whether the equation is a straight line

For those that **are straight lines**:

c. Find the gradient

d. Find the $y$-intercept, enter the $y$ coordinate

e. Find the $x$-intercept, enter the $x$ coordinate

f. Sketch the line

For parts c to d, enter answers as exact answers, so use fractions when needed, e.g. 1/3 not 0.33.

{% include question_line_analysis.html
    id="w03slq2i" title="2i" question_text="For the function $2y = 6x + 8$:"
    type_a="math" prompt_a="Rearrange for $y$" ans_a="y=3x+4"
    type_b="choice" prompt_b="Is it a line?" choices_b="Yes,No" ans_b="Yes" trigger_b="Yes"
    type_c="math" prompt_c="Gradient" ans_c="3"
    type_d="math" prompt_d="y-intercept" ans_d="4"
    type_e="math" prompt_e="x-intercept" ans_e="-4/3"
    type_f="choice" prompt_f="Sketch" choices_f="A,B,C,D" ans_f="A"
    ax="-4/3" ay="4" axl="-4/3" ayl="4"
    bx="4" by="-1.33" bxl="4" byl="-4/3"
    cx="-4/3" cy="8" cxl="-8/6" cyl="8"
    solution_text="Divide both sides by 2: <br> $$y= 3x + 4$$ <br> $y=mx+c$ this is a straight line. <br> 3 is the gradient, 4 is the $y$-intercept, solving for $x=0$:<br> $$0 = 3x+4$$ <br> $$x=-\frac{4}{3}$$ is the $x$-intercept"
%}

{% include question_line_analysis.html
    id="w03slq2ii" title="2ii" question_text="For the function $y - 2x = 10$:"
    type_a="math" prompt_a="Rearrange for $y$" ans_a="y=2x+10"
    type_b="choice" prompt_b="Is it a line?" choices_b="Yes,No" ans_b="Yes" trigger_b="Yes"
    type_c="math" prompt_c="Gradient" ans_c="2"
    type_d="math" prompt_d="y-intercept" ans_d="10"
    type_e="math" prompt_e="x-intercept" ans_e="-5"
    type_f="choice" prompt_f="Sketch" choices_f="A,B,C,D" ans_f="C"
    ax="5" ay="-10" axl="5" ayl="-10"
    bx="5" by="10" bxl="5" byl="10"
    cx="-5" cy="10" cxl="-5" cyl="10"
    solution_text="Add $2x$ to both sides: <br> $$y= 2x + 10$$ <br> $y=mx+c$ this is a straight line. <br> 2 is the gradient, 10 is the $y$-intercept, solving for $x=0$:<br> $$0 = 2x+10$$ <br> $$x=-5$$ is the $x$-intercept"
%}

{% include question_line_analysis.html
    id="w03slq2iii" title="2iii" question_text="For the function $xy-5 = 10$:"
    type_a="math" prompt_a="Rearrange for $y$" ans_a="y=15/x"
    type_b="choice" prompt_b="Is it a line?" choices_b="Yes,No" ans_b="No" trigger_b="Yes"
    type_c="math" prompt_c="Gradient" ans_c="NA"
    type_d="math" prompt_d="y-intercept" ans_d="NA"
    type_e="math" prompt_e="x-intercept" ans_e="NA"
    type_f="choice" prompt_f="Sketch" choices_f="A,B,C,D" ans_f="NA"
    ax="5" ay="-10" axl="5" ayl="-10"
    bx="5" by="10" bxl="5" byl="10"
    cx="-5" cy="10" cxl="-5" cyl="10"
    solution_text="Add 5 to both sides then divide by $x$: <br> $y=\frac{15}{x}$ <br> Not in the $y=mx+c$ form, so not a straight line."
%}

{% include question_line_analysis.html
    id="w03slq2iv" title="2iv" question_text="For the function $3x+2y-8=0$:"
    type_a="math" prompt_a="Rearrange for $y$" ans_a="y=\\frac{(8-3x)}{2}"
    type_b="choice" prompt_b="Is it a line?" choices_b="Yes,No" ans_b="Yes" trigger_b="Yes"
    type_c="math" prompt_c="Gradient" ans_c="\\frac{-3}{2}"
    type_d="math" prompt_d="y-intercept" ans_d="4"
    type_e="math" prompt_e="x-intercept" ans_e="\\frac{8}{3}"
    type_f="choice" prompt_f="Sketch" choices_f="A,B,C,D" ans_f="C"
    ax="3" ay="2" axl="3" ayl="2"
    bx="4" by="2.67" bxl="4" byl="8/3"
    cx="2.67" cy="4" cxl="8/3" cyl="4"
    solution_text="Add 8 and subtract $3x$ from both sides: <br> $2y=8-3x$ <br> Divide all terms by 2: <br> $y=4 - \frac{3x}{2}$ <br> In the $y=mx+c$ form, so a straight line, with gradient $\frac{-3}{2}$ or $-1.5$ and $y$-intercept of $4$ <br> Make $y=0 \implies 3x=8 \implies x = \frac{8}{3}$ <br> Grace C matches this."
%}

{% include question_line_analysis.html
    id="w03slq2v" title="2v" question_text="For the function $x^2-3y = 6$:"
    type_a="math" prompt_a="Rearrange for $y$" ans_a="y=\\frac{(x^2-6)}{3}"
    type_b="choice" prompt_b="Is it a line?" choices_b="Yes,No" ans_b="No" trigger_b="Yes"
    type_c="math" prompt_c="Gradient" ans_c="NA"
    type_d="math" prompt_d="y-intercept" ans_d="NA"
    type_e="math" prompt_e="x-intercept" ans_e="NA"
    type_f="choice" prompt_f="Sketch" choices_f="A,B,C,D" ans_f="NA"
    ax="5" ay="-10" axl="5" ayl="-10"
    bx="5" by="10" bxl="5" byl="10"
    cx="-5" cy="10" cxl="-5" cyl="10"
    solution_text="Add $3y$ and subtract 6 from both sides: <br> $x^2-6=3y$ <br>Divide both sides by 3: <br> $y = \frac{x^2-6}{3}$ <br> Not in the $y=mx+c$ form, so not a straight line."
%}

{% include question_line_analysis.html
    id="w03slq2vi" title="2vi" question_text="For the function $x^2-3y^2 = 6$:"
    type_a="math" prompt_a="Rearrange for $y$" ans_a="y=\\sqrt{\\frac{(x^2-6)}{3}}"
    type_b="choice" prompt_b="Is it a line?" choices_b="Yes,No" ans_b="No" trigger_b="Yes"
    type_c="math" prompt_c="Gradient" ans_c="NA"
    type_d="math" prompt_d="y-intercept" ans_d="NA"
    type_e="math" prompt_e="x-intercept" ans_e="NA"
    type_f="choice" prompt_f="Sketch" choices_f="A,B,C,D" ans_f="NA"
    ax="5" ay="-10" axl="5" ayl="-10"
    bx="5" by="10" bxl="5" byl="10"
    cx="-5" cy="10" cxl="-5" cyl="10"
    solution_text="Add $3y^2$ and subtract 6 from both sides: <br> $x^2-6=3y^2$ <br>Divide both sides by 3 then square root: <br> $y = \sqrt{\frac{x^2-6}{3}}$ <br> Not in the $y=mx+c$ form, so not a straight line."
%}

{% include question_line_analysis.html
    id="w03slq2vii" title="2vii" question_text="For the function $5x-8y=9$:"
    type_a="math" prompt_a="Rearrange for $y$" ans_a="y=\\frac{(5x-9)}{8}"
    type_b="choice" prompt_b="Is it a line?" choices_b="Yes,No" ans_b="Yes" trigger_b="Yes"
    type_c="math" prompt_c="Gradient" ans_c="\\frac{5}{8}"
    type_d="math" prompt_d="y-intercept" ans_d="\\frac{-9}{8}"
    type_e="math" prompt_e="x-intercept" ans_e="\\frac{9}{5}"
    type_f="choice" prompt_f="Sketch" choices_f="A,B,C,D" ans_f="B"
    ax="1.5" ay="-2.5" axl="5/8" ayl="-9/8"
    bx="3.6" by="-2.5" bxl="9/5" byl="-9/8"
    cx="-3.6" cy="-2.5" cxl="-9/5" cyl="-9/8"
    solution_text="Add 8y and subtract $9$ from both sides: <br> $5x-9=8y$ <br> Divide all terms by 8: <br> $y=\frac{5}{8}x - \frac{9}{8}$ <br> In the $y=mx+c$ form, so a straight line, with gradient $\frac{5}{8}$ or $0.625$ and $y$-intercept of $\frac{-9}{8} = -1.125$ <br> Make $y=0 \implies 5x=9 \implies x = \frac{9}{5} = 1.8$ <br> Grace B matches this."
%}

{% include question_line_analysis.html
    id="w03slq2viii" title="2viii" question_text="For the function $\frac{2y-x}{5}=x+3$:"
    type_a="math" prompt_a="Rearrange for $y$" ans_a="y=\\frac{3x+15}{2}"
    type_b="choice" prompt_b="Is it a line?" choices_b="Yes,No" ans_b="Yes" trigger_b="Yes"
    type_c="math" prompt_c="Gradient" ans_c="3"
    type_d="math" prompt_d="y-intercept" ans_d="\\frac{15}{2}"
    type_e="math" prompt_e="x-intercept" ans_e="-5"
    type_f="choice" prompt_f="Sketch" choices_f="A,B,C,D" ans_f="A"
    ax="-5" ay="7.5" axl="-5" ayl="15/2"
    bx="5" by="-7.5" bxl="5" byl="-15.2"
    cx="-5" cy="-7.5" cxl="-5" cyl="-15/2"
    solution_text="Add 8y and subtract $9$ from both sides: <br> $5x-9=8y$ <br> Divide all terms by 8: <br> $y=\frac{5}{8}x - \frac{9}{8}$ <br> In the $y=mx+c$ form, so a straight line, with gradient $\frac{5}{8}$ or $0.625$ and $y$-intercept of $\frac{-9}{8} = -1.125$ <br> Make $y=0 \implies 5x=9 \implies x = \frac{9}{5} = 1.8$ <br> Grace B matches this."
%}

## Simultaneous Equations and Intersections of Lines

### Question 3

For each pair of straight lines given in the questions below:

- Solve them as simultaneous equations
- Sketch each pair on a single graph, labeling the points where the lines cross the axes and where they cross each other.


{% include question_simultaneous.html
    id="w03slq3ia"
    title="3i part a"
    question_text="Solve the simultaneous equations:<br>$$y=2x+3$$<br>$$y=x+5$$"
    var1_label="x"
    var2_label="y"
    ans_var1="2"
    ans_var2="7"
    solution_text="Substitute $y$ from one equation into the other: <br> $2x+3 = x+5$ <br> Subtract $x$ and $3$ from both sides: <br> $x=2$ <br> Substitute into one of the equations: <br> $y=(2)+5=7$"
%}


{% include question_dual_line.html
    id="w03slq3ib"
    title="3i part b"
    question_text="On the same axes, sketch the lines $y = 2x + 3$ and $y = x +5$. Label the points where each line crosses the coordinate axes and where the two lines cross."
    x_title="x" y_title="y"
    l1_x="-1.5" l1_y="3" l1_xl="-1.5" l1_yl="3" l1_name="y=2x+3"
    l2_x="-5" l2_y="5" l2_name="y=x+5"
    show_intersection="yes"
    ix="2" iy="7" ixl="2" iyl="7"
    solution_text="For $y=2x+3$, the $y$-intercept is when $x=0$, so $y=3$. <br> The $x$-intercept is when $y=0$, solving $0=2x+3$ gives $x=\frac{-3}{2}$ or $-1.5$. <br> For $y=x+5$, the $y$-intercept is (0,5) and the $x$-intercept is (-5,0). <br> The solution to the simulataneous equations was $x=2, y=7$, so the lines cross at the point $(2,7)$"
%}

{% include question_simultaneous.html
    id="w03slq3iia"
    title="3ii part a"
    question_text="Solve the simultaneous equations:<br>$$x+y=10$$<br>$$2x-y=2$$"
    var1_label="x"
    var2_label="y"
    ans_var1="4"
    ans_var2="6"
    solution_text="There is $y$ in the top equation and $-y$ in the bottom, so adding the two equations will eliminate $y$: <br> $3x=12$ <br> Divide both sides by 3: <br> $x=4$ <br> Substitute into one of the equations: <br> $(4)+y=10 \implies y=6$"
%}

{% include question_dual_line.html
    id="w03slq3iib"
    title="3ii part b"
    question_text="On the same axes, sketch the lines $x+y=10$ and $2x-y=2$. Label the points where each line crosses the coordinate axes and where the two lines cross."
    x_title="x" y_title="y"
    l1_x="10" l1_y="10" l1_xl="10" l1_yl="10" l1_name="x+y=10"
    l2_x="1" l2_y="-2" l2_name="2x-y=2"
    show_intersection="yes"
    ix="4" iy="6" ixl="4" iyl="6"
    solution_text="For $x+y=10$, the $y$-intercept is when $x=0$, so $y=10$. <br> The $x$-intercept is when $y=0$, so $x=10$. <br> For $2x-y=2$, the $y$-intercept: $-y=2 \implies (0,-2)$ and the $x$-intercept: $2x=2 \implies (1,0)$. <br> The solution to the simulataneous equations was $x=4, y=6$, so the lines cross at the point $(4,6)$"
%}

### Question 4

Consider the following functions for supply and demand, relating price ($P$) and quantity ($Q$):

$$\text{Supply:   } P = Q+18$$

$$\text{Demand:   } 3Q = 30-P$$

{% include question_dual_line.html
    id="w03slq4i"
    title="4i"
    question_text="On the same axes, sketch the supply and demand functions. Place $Q$ on the horizontal axis and $P$ on the vertical axis"
    x_title="Q" y_title="P"
    l1_x="-18" l1_y="18" l1_xl="-18" l1_yl="18" l1_name="P=Q+18"
    l2_x="10" l2_y="30" l2_name="3Q=30-P"
    solution_text="For the supply equation, when $Q=0, P=18$, so crosses $(0,18)$, and when $P=0, Q=-18$, so crosses $(-18,0)$ <br> For demand, when $Q=0, P=30 \implies (0,30)$, when $P=0, Q=10 \implies (10,0)$"
%}

{% include question_simultaneous.html
    id="w03slq4ii"
    title="4ii"
    question_text="Solve the simultaneous equations for supply and demand, $P = Q+18$ and $3Q = 30-P$, to find the equilibrium price and quantity."
    var1_label="P"
    var2_label="Q"
    ans_var1="21"
    ans_var2="3"
    solution_text="Substitute $P=Q+18$ for $P$ in $3Q=30-P$: <br> $3Q = 30 - (Q+18) \implies 3Q=30-Q-18 \implies 3Q=12-Q$ <br> Add $Q$ to both sides: $4Q=12$ <br> Solve: $Q=3$ <br> Substitute: $P=(3)+18=21$"
%}

## Problem Solving

### Question 5

Consider the three graphs below which represent the total cost of a gym based on the number of entries. The point where the axes lines meet is the point (0,0), no other values have been shown on the axes.

<div class="row3">
  <div class="column3">
    <figure>
    <img src="images\w_lines_q_im1.png" alt="Graph. Horizontal axis labelled entries, vertical axis labelled cost. Line drawn, going through the origin point and moving upwards from left to right." style="width:100%">
    <figcaption>Graph A</figcaption>
    </figure>
  </div>
  <div class="column3">
    <figure>
    <img src="images\w_lines_q_im2.png" alt="Graph. Horizontal axis labelled entries, vertical axis labelled cost. Line drawn, going through a point above the cost axis and moving upwards from left to right." style="width:100%">
    <figcaption>Graph B</figcaption>
    </figure>
  </div>
  <div class="column3">
    <figure>
    <img src="images\w_lines_q_im3.png" alt="Graph. Horizontal axis labelled entries, vertical axis labelled cost. There is a horizontal line, parallel to the entries axis, through a point above the origin on the cost axis." style="width:100%">
    <figcaption>Graph C</figcaption>
    </figure>
  </div>
</div>

{% include question_multiple_choice.html
    id="w03slq5i"
    title="5i"
    question_text="A new gym charges £20 per entry. Which of the graphs shown above best represents this pricing structure?"
    options="a::Graph A||b::Graph B||c::Graph C"
    correct_answer="a"
    solution_text="No entries are £0, and every entry costs an extra £20, so a linear increase per entry"
%}

{% include question_multiple_choice.html
    id="w03slq5ii"
    title="5ii"
    question_text="The manager also considers an alternative pricing structure. They offer a membership price of £20, and thereafter it only costs £12 per entry. Which of the graphs above would best represent this?"
    options="a::Graph A||b::Graph B||c::Graph C"
    correct_answer="b"
    solution_text="No entries are £20, and every entry costs an extra £12, so a linear increase per entry from a starting point of £20"
%}

{% include question_dropdown.html
    id="w03slq5iii"
    title="5iii"
    question_text="For the unselected graph, what would be a suitable scenario for this?"
    solution_text="Graph C has a zero gradient, so there is no cost per session, and a positive intercept, so a one-off cost. For example, pay a one-off fee of £60 and attend as many sessions as you like."
%}

{% include question_rearrange.html
    id="w03slq5iv"
    title="5iv"
    question_text="Consider the first scenario, £20 per entry. Using $c$ for cost and $n$ for number of entries, write the formula, the equation of the line, for cost in the form $c=$."
    correct_answer="c=20n"
    solution_text="There is a gradient of 20, the £20 per entry, and the intercept is 0. So $c=20n$"
%}

{% include question_solve.html
    id="w03slq5v"
    title="5v"
    question_text="In the £20 per entry structure, how much would it cost to enter 4 times? (Do not enter the £ sign)"
    correct_answer="80"
    solution_text="$c=20 \times 4 = 80$ "
%}

{% include question_rearrange.html
    id="w03slq5vi"
    title="5vi"
    question_text="Consider the second scenario, £20 fixed membership price and thereafter £12 per entry. Using $c$ for cost and $n$ for entries, write the formula, the equation of the line, for cost in the form $c=$."
    correct_answer="c=12n+20"
    solution_text="There is a gradient of 12, the £12 per entry, and the intercept is 20. So $c=12n+20$"
%}

{% include question_solve.html
    id="w03slq5vii"
    title="5vii"
    question_text="In the £20 membership plus £20 per entry structure, how much would it cost to enter 4 times? (Do not enter the £ sign)"
    correct_answer="68"
    solution_text="$c=12 \times 4 + 20= 68$ "
%}

{% include question_simultaneous.html
    id="w03slq5viii"
    title="5viii"
    question_text="For both the £20 per entry (scheme 1) and the £20 membership plus £12 per entry (scheme 2), what is the maximum number of times you can attend if you have £100?"
    var1_label="\text{Scheme 1}"
    var2_label="\text{Scheme 2}"
    ans_var1="5"
    ans_var2="6"
    solution_text="For $c=20n$: <br> $100 = 20n \implies n = 5$ <br> 5 entries <br><br> For $c=12n+20$: <br> $100=12n+20 \implies 12n=80 \implies n=80 \div 12 = 6.67$ <br> Max of 6 entries"
%}

{% include question_simultaneous.html
    id="w03slq5ix"
    title="5ix"
    question_text="Solve the two schemes equations simultaneously, and comment on what this would mean for the customer. Put the exact solutions to the simultaneous equations."
    var1_label="n"
    var2_label="c"
    ans_var1="2.5"
    ans_var2="50"
    solution_text="Want to find where $20n = 12n+20$ <br> Subtract $12n$ from both sides: $8n=20$ <br> Divide both sides by 8: $n=2.5$ <br> $c=20(2.5)=50$ <br> <br> For 3 or more entries the membership scheme is cheaper"
%}

<script src="https://unpkg.com/mathlive"></script>
<script src="https://unpkg.com/@cortex-js/compute-engine"></script>
<link rel="stylesheet" href="{{ '/assets/css/threepic.css' | relative_url }}">
<style>
figure {
  border: 1px #cccccc solid;
  padding: 4px;
  margin: auto;
}
</style>

