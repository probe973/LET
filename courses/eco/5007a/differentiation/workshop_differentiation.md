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
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
%}

{% include question_rearrange.html
    id="eco5007aw2q5"
    title="5"
    question_text="$$y = \frac{10}{x^2}$$"
    correct_answer="-\\frac{20}{x^3}"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
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
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="Using the power rule for differentiation:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{2}{3} \times 2 x^{\frac{2}{3}-1} = \frac{4}{3}x^{-\frac{1}{3}}$$"
%}

{% include question_rearrange.html
    id="eco5007aw2q7"
    title="7"
    question_text="$$y = 4\sqrt{x}$$"
    correct_answer="2x^{-\\frac{1}{2}}"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
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
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
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
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
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
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="Using the power rule on each term for differentiation:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 2 \times 5x^{2-1} + 4 + 0 = 10x + 4$$"
%}

{% include question_rearrange.html
    id="eco5007aw2q11"
    title="11"
    question_text="$$y = x^4-2x^{-5}+\frac{1}{x}$$"
    correct_answer="4x^3-10x^{-6}-x^{-2}"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="Write the function:

$$y = x^4-2x^{-5}+x^{-1}$$

Use the power rule on each term:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 4x^{4-1} + (-5)(-2)x^{-5-1} + (-1)x^{-1-1} = 4x^3 + 10x^{-6} -x^{-2}$$
"
%}

{% include question_rearrange.html
    id="eco5007aw2q12"
    title="12"
    question_text="$$y = 1 + 2 \sqrt{x} +\frac{2}{5x} + \frac{3}{4x^2} + \frac{5}{2x^3} $$"
    correct_answer="x^{-\\frac{1}{2}} - \\frac{2}{5}x^{-2} -\\frac{3}{2}x^{-3}-\\frac{15}{2}x^{-4}"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="Write the function:

$$y = 1+2x^{\frac{1}{2}}+\frac{2}{5}x^{-1} + \frac{3}{4}x^{-2} + \frac{5}{2}x^{-3}$$

Use the power rule on each term:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1}{2} \times 2x^{-\frac{1}{2}} + (-1) \times \frac{2}{5}x^{-2} + (-2) \frac{3}{4}x^{-3} + (-3) \frac{5}{2}x^{-4}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = x^{-\frac{1}{2}} - \frac{2}{5}x^{-2} -\frac{3}{2}x^{-3}-\frac{15}{2}x^{-4}$$
"
%}


---

## Exponentials

Given the function $y=ae^x$, the derivative is:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = ae^x$$

{% include question_rearrange.html
    id="eco5007aw2q13"
    title="13"
    question_text="Differentiate, with respect to $x$: $y=5e^x$"
    correct_answer="5e^x"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="$$\frac{\mathrm{d}y}{\mathrm{d}x} = 5e^x$$"
%}

---

## Logarithms

Given the function $y = a \ln{x}$:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{a}{x}$$


Differentiate:

{% include question_rearrange.html
    id="eco5007aw2q14"
    title="14"
    question_text="$$y = 5 \ln{x} $$"
    correct_answer="\\frac{5}{x}"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{5}{x}$$
"
%}

{% include question_rearrange.html
    id="eco5007aw2q15"
    title="15"
    question_text="$$y = \frac{\ln{x}}{2} - 3e^x $$"
    correct_answer="\\frac{1}{2x} - 3e^x"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="Write the function as:

$$y=\frac{1}{2} \ln{x} - 3e^x$$

$$\frac{\mathrm{d}y}{\mathrm{d}x}= \frac{\frac{1}{2}}{x} - 3e^x = \frac{1}{2x} - 3e^x$$
"
%}

The following log laws will be useful:

$$
\begin{align}
\ln{(AB)} &= \ln{A} + \ln{B} \\[8pt]
\ln{\left ( \frac{A}{B} \right )} &= \ln{A} - \ln{B} \\[8pt]
\ln{(A^n)} &= n \ln{A}
\end{align}
$$

So, you can use that $\ln{2x} = \ln{2} + \ln{x}$, noting that $\ln{2}$ is a constant, for example.

Differentiate:

{% include question_rearrange.html
    id="eco5007aw2q16"
    title="16"
    question_text="$$y = \ln{4x} $$"
    correct_answer="\\frac{1}{x}"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="Write as:

$$y = \ln{4} + \ln{x}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 + \frac{1}{x} = \frac{1}{x}$$
"
%}

{% include question_rearrange.html
    id="eco5007aw2q17"
    title="17"
    question_text="$$y = \ln{0.443x} $$"
    correct_answer="\\frac{1}{x}"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="Write as:

$$y = \ln{0.443} + \ln{x}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 + \frac{1}{x} = \frac{1}{x}$$
"
%}

{% include question_rearrange.html
    id="eco5007aw2q18"
    title="18"
    question_text="$$y = \ln{\frac{2}{x}} $$"
    correct_answer="-\\frac{1}{x}"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="Write as:

$$y = \ln{2} - \ln{x}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 - \frac{1}{x} = -\frac{1}{x}$$
"
%}

{% include question_rearrange.html
    id="eco5007aw2q19"
    title="19"
    question_text="$$y = \ln{x^{10}} $$"
    correct_answer="\\frac{10}{x}"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="Write as:

$$y = 10 \ln{x}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{10}{x}$$
"
%}

{% include question_rearrange.html
    id="eco5007aw2q20"
    title="20"
    question_text="$$y = 6\ln{\frac{1}{2}x} $$"
    correct_answer="\\frac{6}{x}"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="Write as:

$$y = 6(\ln{\frac{1}{2}} + \ln{x}) = 6 \ln{\frac{1}{2}} + 6 \ln{x}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 + \frac{6}{x} = \frac{6}{x}$$
"
%}

---

## Mixed Questions

For each question find the requested derivative.

{% include question_rearrange.html
    id="eco5007aw2q21"
    title="21"
    question_text="$$y=5x^3+x^2-4x+1+3e^x+\ln 2x $$"
    correct_answer="15x^2 + 2x - 4 + 3e^x + \\frac{1}{x}"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="Using power, exponential and log rules:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 15x^2 + 2x - 4 + 3e^x + \frac{1}{x}$$"
%}

{% include question_rearrange.html
    id="eco5007aw2q22"
    title="22"
    question_text="$$y=2x+5\sqrt{x}-\frac{4}{x}+\frac{3}{x^2}$$"
    correct_answer="2 + \\frac{5}{2\\sqrt{x}} + \\frac{4}{x^2} - \\frac{6}{x^3}"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="Write the function as:

$$y = 2x + 5x^{\frac{1}{2}} - 4x^{-1}+3x^{-2}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 2 + \frac{1}{2} \times 5x^{-\frac{1}{2}} - (-1) \times 4x^{-2} + (-2) \times 3x^{-3} = 2 + \frac{5}{2\sqrt{x}} + \frac{4}{x^2} - \frac{6}{x^3}$$"
%}

{% include question_rearrange.html
    id="eco5007aw2q23"
    title="23"
    question_text="$$y=5t^2-2t^{\frac{3}{4}}+6\ln 0.1t$$"
    correct_answer="10t - \\frac{3}{2}t^{-\\frac{1}{4}} + \\frac{6}{t}"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}t}="
    solution_text="
$$\frac{\mathrm{d}y}{\mathrm{d}t} =  10t - \frac{3}{2}t^{-\frac{1}{4}} + \frac{6}{t}$$"
%}

{% include question_rearrange.html
    id="eco5007aw2q24"
    title="24"
    question_text="$$P=6e^n-4+\frac{5}{2}n-\frac{6}{\sqrt{n}}$$"
    correct_answer="6e^n + \\frac{5}{2} + 3n^{-\\frac{3}{2}}"
    var_label="\frac{\mathrm{d}P}{\mathrm{d}n}="
    solution_text="Write as:

$$P = 6e^n-4+\frac{5}{2}n-6n^{-\frac{1}{2}}$$

$$\frac{\mathrm{d}P}{\mathrm{d}n} = 6e^n - 0 + \frac{5}{2} - (-\frac{1}{2}) \times 6n^{-\frac{3}{2}} = 6e^n + \frac{5}{2} + 3n^{-\frac{3}{2}} $$"
%}

{% include question_rearrange.html
    id="eco5007aw2q25"
    title="25"
    question_text="$$G=5s^2(3s-4)$$"
    correct_answer="45s^2 - 40s"
    var_label="\frac{\mathrm{d}G}{\mathrm{d}s}="
    solution_text="Expand the brackets:

$$G = 15s^3 - 20s^2$$

$$\frac{\mathrm{d}G}{\mathrm{d}s} = 45s^2 - 40s $$"
%}

By substituting into the function and into the derived function, find the value of the function and the value of the gradient at the given $x$ value:

{% include question_simultaneous.html
    id="eco5007aw2q26"
    title="26"
    question_text="$$y=5x^2-12x+2$$ 

at $x=2$"
    var1_label="y"
    var2_label="\frac{\mathrm{d}y}{\mathrm{d}x}"
    ans_var1="-2"
    ans_var2="8"
    solution_text="$$y=5 \times 2^2 - 12 \times 2 + 2 = -2$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 10x - 12$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 10 \times 2 - 12 = 8$$"
%}

{% include question_simultaneous.html
    id="eco5007aw2q27"
    title="27"
    question_text="$$y=4x^3+x+10$$ 

at $x=-1$"
    var1_label="y"
    var2_label="\frac{\mathrm{d}y}{\mathrm{d}x}"
    ans_var1="5"
    ans_var2="13"
    solution_text="$$y= 4(-1)^3+(-1)+10 = 5$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 12x^2 +1$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 12(-1)^2 + 1 = 13$$"
%}

{% include question_simultaneous.html
    id="eco5007aw2q28"
    title="28"
    question_text="$$y=x^2+5x-1$$ 

at $x=-2.5$"
    var1_label="y"
    var2_label="\frac{\mathrm{d}y}{\mathrm{d}x}"
    ans_var1="-7.25"
    ans_var2="0"
    solution_text="$$y= (-2.5)^2+5(-2.5)-1 = -7.25$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 2x+5$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 2(-2.5) + 5 = 0$$"
%}

{% include question_simultaneous.html
    id="eco5007aw2q29"
    title="29"
    question_text="$$4e^x-10\sqrt{x}$$ 

at $x=2$, giving answers correct to 2 decimal places"
    var1_label="y"
    var2_label="\frac{\mathrm{d}y}{\mathrm{d}x}"
    ans_var1="15.41"
    ans_var2="26.02"
    solution_text="$$y= 4e^2-10\sqrt{2} \approx 15.41$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 4e^x-5x^{-\frac{1}{2}} = 4e^x - \frac{5}{\sqrt{x}}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 4e^2-\frac{5}{\sqrt{2}} \approx 26.02$$"
%}

{% include question_simultaneous.html
    id="eco5007aw2q30"
    title="30"
    question_text="$$5-\frac{5}{x}+\frac{5}{x^2}$$ 

at $x=1$"
    var1_label="y"
    var2_label="\frac{\mathrm{d}y}{\mathrm{d}x}"
    ans_var1="5"
    ans_var2="-5"
    solution_text="$$y= 5-\frac{5}{1}+\frac{5}{1^2}=5$$

$$y = 5 - 5x^{-1}+5x^{-2}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 - (-1)5x^{-2}+(-2)5x^{-3} = \frac{5}{x^2} - \frac{10}{x^3}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{5}{1^2} - \frac{10}{1^3} = -5$$"
%}
