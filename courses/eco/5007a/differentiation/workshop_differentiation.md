---
layout: eco5007a
title: Workshop Differentiation Rules
---

<script src="https://unpkg.com/mathlive"></script>
<script src="https://unpkg.com/@cortex-js/compute-engine"></script>

# Workshop: Differentiation Rules

## Power Rule

Given the function $y = ax^n$, the derivative is:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = nax^{n-1}$$

Use this rule to differentiate:

{% include question_indices.html
    id="eco5007aw2q1"
    title="1"
    question_text="$y = 5x^4$"
    correct_answer="20x^{3}"
    solution_text="Using the power rule for differentiation:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 4 \times 5x^{4-1} = 20x^3$$"
%}

{% include question_indices.html
    id="eco5007aw2q2"
    title="2"
    question_text="$y = 7x^2$"
    correct_answer="14x"
    solution_text="Using the power rule for differentiation:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 2 \times 7x^{2-1} = 14x$$"
%}

{% include question_indices.html
    id="eco5007aw2q3"
    title="3"
    question_text="$y = \frac{2}{3}x^6$"
    correct_answer="4x^{5}"
    solution_text="Using the power rule for differentiation:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 6 \times \frac{2}{3}x^{6-1} = 4x^5$$"
%}

For the next group of questions it will be useful to recall:

$$
\begin{align}
x^a \times x^b &= x^{a+b} \\[8pt]
x^a \div x^b &= x^{a-b} \\[8pt]
(x^a)^b &= x^{ab} \\[8pt]
x^{-n} &= \frac{1}{x^n} \\[8pt]
x^{\frac{1}{n}} &= \sqrt[n]{x}
\end{align}
$$

Use the power rule to differentiate:

{% include question_rearrange.html
    id="eco5007aw2q4"
    title="4"
    question_text="$$y = \frac{3x^3}{x^5}$$"
    correct_answer="-\\frac{6}{x^3}"
    solution_text="First simplify the expression:

$$y=3x^{-2}$$

Using the power rule for differentiation:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = (-2) \times 3 x^{-2-1} = -6x^{-3} = -\frac{6}{x^{3}}$$"
%}

{% include question_rearrange.html
    id="eco5007aw2q5"
    title="5"
    question_text="$$y = \frac{10}{x^2}$$"
    correct_answer="-\\frac{20}{x^3}"
    solution_text="Write in the form $y=ax^n$:

$$y=10x^{-2}$$

Using the power rule for differentiation:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = (-2) \times 10 x^{-2-1} = -20x^{-3} = -\frac{20}{x^{3}}$$"
%}

{% include question_rearrange.html
    id="eco5007aw2q6"
    title="6"
    question_text="$$y = 2x^{\frac{2}{3}}$$"
    correct_answer="\\frac{4}{3}x^{-\\frac{1}{3}}"
    solution_text="Using the power rule for differentiation:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{2}{3} \times 2 x^{\frac{2}{3}-1} = \frac{4}{3}x^{-\frac{1}{3}}$$"
%}

{% include question_rearrange.html
    id="eco5007aw2q7"
    title="7"
    question_text="$$y = 4\sqrt{x}$$"
    correct_answer="2x^{-\\frac{1}{2}}"
    solution_text="Write the function:

$$y=4x^{\frac{1}{2}}$$

Using the power rule for differentiation:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1}{2} \times 4 x^{\frac{1}{2}-1} = 2x^{-\frac{1}{2}}$$"
%}

{% include question_rearrange.html
    id="eco5007aw2q8"
    title="8"
    question_text="$$y = \frac{2}{3x^2}$$"
    correct_answer="-\\frac{4}{3}x^{-3}"
    solution_text="Write the function:

$$y=\frac{2}{3}x^{-2}$$

Using the power rule for differentiation:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = (-2) \times \frac{2}{3} x^{-2-1} = -\frac{4}{3}x^{-3}$$"
%}

{% include question_rearrange.html
    id="eco5007aw2q9"
    title="9"
    question_text="$$y = \frac{10}{x}$$"
    correct_answer="-\\frac{10}{x^2}"
    solution_text="Write the function:

$$y=10x^{-1}$$

Using the power rule for differentiation:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = (-1) \times 10 x^{-1-1} = -10x^{-2} = -\frac{10}{x^2}$$"
%}

The power rule can be used to show:

$$y = ax \implies \frac{\mathrm{d}y}{\mathrm{d}x} = a$$

$$y = a \implies \frac{\mathrm{d}y}{\mathrm{d}x} = 0$$

Put this altogether and differentiate:

{% include question_rearrange.html
    id="eco5007aw2q10"
    title="10"
    question_text="$$y = 5x^2+4x+3$$"
    correct_answer="10x+4"
    solution_text="Using the power rule on each term for differentiation:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 2 \times 5x^{2-1} + 4 + 0 = 10x + 4$$"
%}

{% include question_rearrange.html
    id="eco5007aw2q11"
    title="11"
    question_text="$$y = x^4-2x^{-5}+\frac{1}{x}$$"
    correct_answer="4x^3-10x^{-6}-x^{-2}"
    solution_text="Write the function:

$$y = x^4-2x^{-5}+x^{-1}$$

Use the power rule on each term:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 4x^{4-1} + (-5)(-2)x^{-5-1} + (-1)x^{-1-1} = 4x^3 + 10x^{-6} -x^{-2}$$
"
%}
