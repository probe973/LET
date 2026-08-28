---
layout: eco5007a
title: Workshop Rearranging
---

<script src="https://unpkg.com/mathlive"></script>
<script src="https://unpkg.com/@cortex-js/compute-engine"></script>

# Workshop: Rearranging Expressions

This page contains practice questions covering rearranging an expression to make a variable the subject.

### Questions

In each of the questions below, make $x$ the subject of the given expression.

{% include question_rearrange.html
    id="eco5007aw1q1"
    title="1"
    question_text="Make $x$ the subject of the formula $x+y=12$."
    correct_answer="12-y"
    solution_text="Subtract $y$ from both sides: 

$$x+y - y = 12-y$$ 

$$x = 12-y$$"
%}

{% include question_rearrange.html
    id="eco5007aw1q2"
    title="2"
    question_text="Make $x$ the subject of the formula $5x+4=y$."
    correct_answer="(y-4)/5"
    solution_text="Subtract $4$ from both sides: 

$$5x = y - 4$$

Divide both sides by $5$

$$x = \frac{y-4}{5} $$"
%}

{% include question_rearrange.html
    id="eco5007aw1q3"
    title="3"
    question_text="Make $x$ the subject of the formula $ax-3by=9$."
    correct_answer="(9+3by)/a"
    solution_text="Add $3by$ to both sides: 

$$ax = 9 + 3by$$

Divide both sides by $a$

$$x = \frac{9+3by}{a} $$"
%}

{% include question_rearrange.html
    id="eco5007aw1q4"
    title="4"
    question_text="Make $x$ the subject of the formula $y=mx+c$."
    correct_answer="(y-c)/m"
    solution_text="Subtract $c$ from both sides: 

$$y-c = mx$$

Divide both sides by $m$

$$x = \frac{y-c}{m} $$"
%}

{% include question_rearrange.html
    id="eco5007aw1q5"
    title="5"
    question_text="Make $x$ the subject of the formula $2+5xy=6$."
    correct_answer="4/5y"
    solution_text="Subtract $2$ to both sides: 

$$5xy = 4$$

Divide both sides by $5y$

$$x = \frac{4}{5y} $$"
%}

{% include question_rearrange.html
    id="eco5007aw1q6"
    title="6"
    question_text="Make $x$ the subject of the formula $9x+6y=4x+1$."
    correct_answer="(1-6y)/5"
    solution_text="Subtract $6y$ and $4x$ from both sides, to get all $x$ together: 

$$9x-4x = 1-6y$$

$$5x = 1 - 6y$$

Divide both sides by $5$

$$x = \frac{1-6y}{5} $$"
%}

{% include question_rearrange.html
    id="eco5007aw1q7"
    title="7"
    question_text="Make $x$ the subject of the formula $ax+by=4x+1$."
    correct_answer="(1-by)/(a-4)"
    solution_text="Subtract $by$ and $4x$ from both sides, to get all $x$ together: 

$$ax-4x = 1-by$$

Factor out the $x$:

$$x(a-4) = 1 - by$$

Divide both sides by $a-4$

$$x = \frac{1-by}{a-4} $$"
%}

{% include question_rearrange.html
    id="eco5007aw1q8"
    title="8"
    question_text="Make $x$ the subject of the formula $ax-by=bx-8$."
    correct_answer="(by-8)/(a-b)"
    solution_text="Add $by$ to and subtract $bx$ from both sides, to get all $x$ together: 

$$ax-bx = -8 + by$$

Factor out the $x$:

$$x(a-b) = by - 8$$

Divide both sides by $a-b$

$$x = \frac{by-8}{a-b} $$"
%}

{% include question_rearrange.html
    id="eco5007aw1q9"
    title="9"
    question_text="Make $x$ the subject of the formula $\frac{2ty+mx}{ty-mx}=1$."
    correct_answer="(-ty)/(2m)"
    solution_text="Multiply through by $ty-mx$:

$$2ty+mx = ty - mx$$

Add $mx$ to and subtract $2ty$ from both sides:

$$mx + mx = ty - 2ty$$

$$2mx = -ty$$

Divide through by $2m$:

$$ x = \frac{-ty}{2m}$$
"
%}

{% include question_rearrange.html
    id="eco5007aw1q10"
    title="10"
    question_text="Make $x$ the subject of the formula $\frac{ty+mx}{ty-3mx}=k$."
    correct_answer="(ty(k-1))/(m(1+3k))"
    solution_text="Multiply through by $ty-3mx$:

$$ty+mx = k(ty - 3mx)$$

Expand the brackets on the right:

$$ty + mx = kty - 3kmx$$

Add $3kmx$ to and subtract $ty$ from both sides:

$$mx + 3kmx = kty - ty$$

Factor out the $mx$ from the left and the $ty$ from the right:

$$mx(1+3k) = ty(k-1)$$

Divide both sides by $m(1+3k)$:

$$x = \frac{ty(k-1)}{m(1+3k)}$$
"
%}

{% include question_rearrange.html
    id="eco5007aw1q11"
    title="11"
    question_text="Make $x$ the subject of the formula $9x^2=4y$."
    correct_answer="(2 \\sqrt{y})/(3)"
    solution_text="Divide both sides by $9$:

$$x^2 = \frac{4y}{9}$$

Square root both sides

$$x = \frac{2 \sqrt{y}}{3}$$
"
%}

{% include question_rearrange.html
    id="eco5007aw1q12"
    title="12"
    question_text="Make $x$ the subject of the formula $x^3-5m=t$."
    correct_answer="\\sqrt[3]{t+5m}"
    solution_text="Add $5m$ to both sides:

$$x^3 = t+5m$$

Cube root both sides

$$x = \sqrt[3]{t+5m}$$
"
%}

{% include question_simultaneous.html
    id="eco5007aw1q13"
    title="13"
    question_text="Solve the quadratic equation for $x$ given $x^2-2x=15$ Give the answers $x_1$ and $x_2$ in numerical order, with $x_1$ being the lowest value."
    var1_label="x_1"
    var2_label="x_2"
    ans_var1="-3"
    ans_var2="5"
    solution_text="Subtract $15$ from both sides, to get into standard quadratic equation form:

$$x^2 - 2x - 15 = 0$$

Use quadratic formula, or here we can factor:

$$(x+3)(x-5)=0$$

Which gives $x=-3$ and $x=5$ as solutions"
%}

{% include question_rearrange.html
    id="eco5007aw1q14"
    title="14"
    question_text="Make $x$ the subject of the formula $x^2=2-qx$. (Get in the form $ax+by+c=0$ and use the quadratic formula, the $\pm$ is available with the shift key in the inline keyboard.)"
    correct_answer="\\frac{-q \\pm \\sqrt{q^2+8}}{2}"
    solution_text="Add $qx$ and subtract $2$ from both sides:

$$x^2 + qx - 2 = 0$$

Use $a=1, b=q, c=-2$ in:

$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$$

$$x = \frac{-q \pm \sqrt{q^2-4(1)(-2)}}{2(1)} = \frac{-q \pm \sqrt{q^2+8}}{2}$$
"
%}

{% include question_rearrange.html
    id="eco5007aw1q15"
    title="15"
    question_text="Make $x$ the subject of the formula $x^2-8=kx$. (Get in the form $ax+by+c=0$ and use the quadratic formula, the $\pm$ is available with the shift key in the inline keyboard.)"
    correct_answer="\\frac{k \\pm \\sqrt{k^2+32}}{2}"
    solution_text="Subtract $kx$ from both sides:

$$x^2 - kx - 8 = 0$$

Use $a=1, b=-k, c=-8$ in:

$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$$

$$x = \frac{-(-k) \pm \sqrt{(-k)^2-4(1)(-8)}}{2(1)} = \frac{k \pm \sqrt{k^2+32}}{2}$$
"
%}

## Rearranging With Indices

Recall the rules of indices

$$
\begin{align}
x^a \times x^b &= x^{a+b} \\[8pt]
x^a \div x^b &= x^{a-b} \\[8pt]
(x^a)^b & = x^{ab}
\end{align}
$$

It is also useful to note that a number multiplied by its recipricol is equal to 1, e.g.:

$$\frac{3}{4} \times \frac{4}{3} = 1$$

### Examples

Make $x$ the subject of:

$$x^{\frac{4}{9}} = y^{\frac{1}{3}}$$

**Solution:**

Raise both sides to the power of the reciprocal of the power of $x$, so here $\frac{9}{4}$. This will make the power of $x$ equal to 1, because raising one power to another is the same as multiplying the powers.

$$(x^{\frac{4}{9}})^{\frac{9}{4}} = (y^{\frac{1}{3}})^{\frac{9}{4}}$$

$$x^1 = y^{\frac{1}{3} \times \frac{9}{4}}$$

$$x = y^{\frac{3}{4}}$$


Make $x$ the subject of:

$$x^{\frac{2}{3}} - y= 10$$

**Solution:**

Add $y$ to both sides:

$$x^{\frac{2}{3}} = 10 + y$$

Raise both sides to the power of $\frac{3}{2}$:

$$x = (10+y)^{\frac{3}{2}}$$


### Questions

In each of the questions below, make $x$ the subject of the given expression.

{% include question_rearrange.html
    id="eco5007aw1q16"
    title="16"
    question_text="Make $x$ the subject of the formula $x^{\frac{3}{4}} = y^{\frac{1}{2}}$"
    correct_answer="y^{\\frac{2}{3}}"
    solution_text="Raise by sides to the power of $\frac{4}{3}$:

$$x = y^{\frac{1}{2} \times \frac{4}{3}}$$

$$x = y^{\frac{2}{3}}$$
"
%}

{% include question_rearrange.html
    id="eco5007aw1q17"
    title="17"
    question_text="Make $x$ the subject of the formula $x^{\frac{3}{4}} = y^{\frac{1}{2}}-2$"
    correct_answer="(y^{\\frac{1}{2}}-2)^{\\frac{4}{3}}"
    solution_text="Raise by sides to the power of $\frac{4}{3}$:

$$x = (y^{\frac{1}{2}} - 2)^{\frac{4}{3}}$$

"
%}

{% include question_rearrange.html
    id="eco5007aw1q18"
    title="18"
    question_text="Make $x$ the subject of the formula $5x^8-y=0$"
    correct_answer="(\\frac{y}{5})^{\\frac{1}{8}}"
    solution_text="Add $y$ to both sides:

$$5x^8 = y$$

Divide both sides by 5:

$$x^8 = \frac{y}{5}$$

Raise both sides to the power of $\frac{1}{8}$:

$$x = \left ( \frac{y}{5} \right )^{\frac{1}{8}}$$
"
%}

{% include question_rearrange.html
    id="eco5007aw1q19"
    title="19"
    question_text="Make $x$ the subject of the formula $x^{\frac{3}{4}}y = 8my$"
    correct_answer="16m^{\\frac{4}{3}}"
    solution_text="Assuming $y \neq 0$, divide both sides by $y$:

$$x^{\frac{3}{4}} = 8m$$

Rasie both sides to the power of $\frac{4}{3}$

$$x = (8m)^\frac{4}{3} = 8^{\frac{4}{3}}m^{\frac{4}{3}}=16m^{\frac{4}{3}}$$
"
%}

{% include question_rearrange.html
    id="eco5007aw1q20"
    title="20"
    question_text="Make $x$ the subject of the formula $2x^{2.5}=64$"
    correct_answer="4"
    solution_text="Write $2.5$ as $\frac{5}{2}$. Divide both sides by 2:

$$x^{\frac{5}{2}}=32$$

Raise both sides to the power of $\frac{2}{5}$:

$$x = 32^{\frac{2}{5}}=4$$
"
%}

{% include question_rearrange.html
    id="eco5007aw1q21"
    title="21"
    question_text="Make $x$ the subject of $x^2y^3x^5y^2=a$"
    correct_answer="(\\frac{a}{y^5})^{\\frac{1}{7}}"
    solution_text="Group like terms and use the power rule:

$$x^7y^5=a$$

Divide both sides by $y^5$:

$$x^7 = \frac{a}{y^5}$$

Raise both sides to the power of $\frac{1}{7}$:

$$x=\left ( \frac{a}{y^5} \right )^{\frac{1}{7}}$$
"
%}

{% include question_rearrange.html
    id="eco5007aw1q22"
    title="22"
    question_text="Make $x$ the subject of $0.5x^{-0.5}y^{-0.5} \times 0.5x^{-0.5}y^{0.5}=4$"
    correct_answer="\\frac{1}{16}"
    solution_text="Multiply numerical coefficients and group like terms with the power rule:

$$0.25x^{-1}y^0=4$$

Since $y^{0} = 1$:

$$0.25x^{-1}=4$$

Divide both sides by 0.25:

$$x^{-1}=16$$

Raise both sides to the power of $-1$:

$$x = 16^{-1}$$

$$x = \frac{1}{16}$$
"
%}


{% include question_rearrange.html
    id="eco5007aw1q23"
    title="23"
    question_text="Make $x$ the subject of 

$$\frac{ay^{a-1}x^b}{by^ax^{b-1}}=k$$"
    correct_answer="\\frac{bky}{a}"
    solution_text="Seperate coefficients, $x$, and $y$ terms:

$$\frac{a}{b} \times \frac{x^b}{x^{b-1}} \times \frac{y^{a-1}}{y^a} = k$$

Use rules of indices:

$$\frac{a}{b} \times x^{1} \times y^{-1} = k$$

Use $y^{-1} = \frac{1}{y}$:

$$\frac{a}{b} \times x \times \frac{1}{y} = k$$

Multiply both sides by $b$ and by $y$ and divide by $a$:

$$x = \frac{bky}{a}$$
"
%}
