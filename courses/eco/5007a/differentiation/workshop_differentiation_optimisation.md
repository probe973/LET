---
layout: eco5007a
title: Workshop Optimisation
---

<script src="https://unpkg.com/mathlive"></script>
<script src="https://unpkg.com/@cortex-js/compute-engine"></script>

# One-Variable Optimisation

## Differentiation Practice

For each of the following functions below, find the first and second derivatives.

{% include question_rearrange.html
    id="eco5007aw5q1a"
    title="1a"
    question_text="$$y = 5x^3 + 2x^2 - 8x + 3$$

Find $\frac{\mathrm{d}y}{\mathrm{d}x}$"
    correct_answer="15x^2+4x-8"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="Using the power rule for differentiation:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 3 \times 5x^2 + 2 \times 2x^1 - 8 + 0 = 15x^2+4x-8$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q1b"
    title="1b"
    question_text="$$y = 5x^3 + 2x^2 - 8x + 3$$

Find $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$"
    correct_answer="30x+4"
    var_label="\frac{\mathrm{d}^2y}{\mathrm{d}x^2}="
    solution_text="Using the power rule for differentiation on $\frac{\mathrm{d}y}{\mathrm{d}x}$:

$$\frac{\mathrm{d}y}{\mathrm{d}x}=15x^2+4x-8$$

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 2 \times 15x^1 + 4 - 0 = 30x+4$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q2a"
    title="2a"
    question_text="$$m = 4x - 3 + \frac{2}{x} - \frac{4}{x^2}$$

Find $\frac{\mathrm{d}m}{\mathrm{d}x}$"
    correct_answer="4 - 2x^{-2} + 8x^{-3}"
    var_label="\frac{\mathrm{d}m}{\mathrm{d}x}="
    solution_text="Write in power form:

$$ m = 4x - 3 + 2x^{-1} - 4x^{-2} $$

Using the power rule for differentiation:

$$\frac{\mathrm{d}m}{\mathrm{d}x} = 4 - 0 + (-1) \times 2x^{-2} - (-2) \times 4x^{-3} = 4 - 2x^{-2} + 8x^{-3} = 4 - \frac{2}{x^2} + \frac{8}{x^3}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q2b"
    title="2b"
    question_text="$$m = 4x - 3 + \frac{2}{x} - \frac{4}{x^2}$$

Find $\frac{\mathrm{d}^2m}{\mathrm{d}x^2}$"
    correct_answer="4x^{-3} - 24x^{-4}"
    var_label="\frac{\mathrm{d}^2m}{\mathrm{d}x^2}="
    solution_text="Using the power rule for differentiation on $\frac{\mathrm{d}m}{\mathrm{d}x}$:

$$\frac{\mathrm{d}m}{\mathrm{d}x}=4 - 2x^{-2} + 8x^{-3}$$

$$\frac{\mathrm{d}^2m}{\mathrm{d}x^2} = 0 - (-2) \times 2x^{-3} + (-3) \times 8x^{-4} = 4x^{-3} - 24x^{-4} = \frac{4}{x^3} - \frac{24}{x^4}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q3a"
    title="3a"
    question_text="$$f(t) = 24 + 4\sqrt{t}$$

Find $f'(t)$"
    correct_answer="2t^{-1/2}"
    var_label="f'(t)="
    solution_text="Write in power form:

$$ f(t) = 24 + 4t^{\frac{1}{2}}$$

Using the power rule for differentiation:

$$f'(t) = 0 + \frac{1}{2} \times 4t^{-\frac{1}{2}} = 2t^{-\frac{1}{2}} = \frac{2}{\sqrt{t}}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q3b"
    title="3b"
    question_text="$$f(t) = 24 + 4\sqrt{t}$$

Find $f^{\prime \prime}(t)$"
    correct_answer="-t^{-3/2}"
    var_label="f^{\prime \prime}(t) = "
    solution_text="Using the power rule for differentiation on $f'(t)$:

$$f'(t) = 2t^{-\frac{1}{2}}$$

$$ f^{\prime \prime}(t) = -\frac{1}{2} \times 2t^{-\frac{3}{2}} = -t^{-\frac{3}{2}} = -\frac{1}{t^{\frac{3}{2}}}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q4a"
    title="4a"
    question_text="$$P = t^3(5t^3 - 4t^{-\frac{3}{2}})$$

Find $\frac{\mathrm{d}P}{\mathrm{d}t}$"
    correct_answer="30t^5 - 6t^{1/2}"
    var_label="\frac{\mathrm{d}P}{\mathrm{d}t}="
    solution_text="Expand the brackets:

$$ P = 5t^6 - 4t^{3/2} $$

Using the power rule for differentiation:

$$\frac{\mathrm{d}P}{\mathrm{d}t} = 6 \times 5t^{5} - \frac{3}{2} \times 4t^{\frac{1}{2}} = 30t^5 - 6t^{\frac{1}{2}}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q4b"
    title="4b"
    question_text="$$P = t^3(5t^3 - 4t^{-\frac{3}{2}})$$

Find $\frac{\mathrm{d}^2P}{\mathrm{d}t^2}$"
    correct_answer="150t^4 - 3t^{-1/2}"
    var_label="\frac{\mathrm{d}^2P}{\mathrm{d}t^2}="
    solution_text="Using the power rule for differentiation on $\frac{\mathrm{d}P}{\mathrm{d}t}$:

$$\frac{\mathrm{d}P}{\mathrm{d}t}= 30t^5 - 6t^{\frac{1}{2}}$$

$$\frac{\mathrm{d}^2P}{\mathrm{d}t^2} = 5 \times 30t^4 - \frac{1}{2} \times 6t^{-\frac{1}{2}} = 150t^4 - 3t^{-\frac{1}{2}} = 150t^4 - \frac{3}{t^{\frac{1}{2}}}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q5a"
    title="5a"
    question_text="$$g(x) = 3x^5 - 4x^2 + \frac{7}{x}$$

Find $\frac{\mathrm{d}g}{\mathrm{d}x}$"
    correct_answer="15x^4 - 8x - 7x^{-2}"
    var_label="\frac{\mathrm{d}g}{\mathrm{d}x}="
    solution_text="Write as powers:

$$ g(x) = 3x^5 - 4x^2 + 7x^{-1}$$

Using the power rule for differentiation:

$$\frac{\mathrm{d}g}{\mathrm{d}x} = 15x^4 - 8x - 7x^{-2} = 15x^4 - 8x - \frac{7}{x^2}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q5b"
    title="5b"
    question_text="$$g(x) = 3x^5 - 4x^2 + \frac{7}{x}$$

Find $\frac{\mathrm{d}^2g}{\mathrm{d}x^2}$"
    correct_answer="60x^3 - 8 + 14x^{-3}"
    var_label="\frac{\mathrm{d}^2g}{\mathrm{d}x^2}="
    solution_text="Using the power rule for differentiation on $\frac{\mathrm{d}g}{\mathrm{d}x}$:

$$\frac{\mathrm{d}g}{\mathrm{d}x}= 15x^4 - 8x - 7x^{-2}$$

$$\frac{\mathrm{d}^2g}{\mathrm{d}x^2} = 60x^3 - 8 +14x^{-3} = 60x^3 - 8 + \frac{14}{x^3}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q6a"
    title="6a"
    question_text="$$y = 10x^4 + 6x^{\frac{1}{3}} - \frac{3}{x^2}$$

Find $\frac{\mathrm{d}y}{\mathrm{d}x}$"
    correct_answer="40x^3 + 2x^{-2/3} + 6x^{-3}"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="Write as powers:

$$ y = 10x^3 + 6x^{\frac{1}{3}} - 3x^{-2}$$

Using the power rule for differentiation:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 40x^3+2x^{-\frac{2}{3}} + 6x^{-3} = 40x^3 + 2x^{-\frac{2}{3}} + \frac{6}{x^3}}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q6b"
    title="6b"
    question_text="$$y = 10x^4 + 6x^{1/3} - \frac{3}{x^2}$$

Find $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$"
    correct_answer="120x^2 - \\frac{4}{3}x^{-5/3}-18x^{-4}"
    var_label="\frac{\mathrm{d}^2y}{\mathrm{d}x^2}="
    solution_text="Using the power rule for differentiation on $\frac{\mathrm{d}y}{\mathrm{d}x}$:

$$\frac{\mathrm{d}y}{\mathrm{d}x}= 40x^3+2x^{-\frac{2}{3}} + 6x^{-3}$$

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 120x^2 - \frac{4}{3}x^{-\frac{5}{3}} - 18x^{-4} = 120x^2 - \frac{4}{3}x^{-\frac{5}{3}} - \frac{18}{x^4}$$"
%}

## Stationary Points

A point is stationary if its gradient is equal to zero, i.e. $\frac{dy}{dx} = 0$.

Substituting the stationary point into the second derivative of the function determines whether the stationary point is a local minimum, local maximum, or a point of inflection:

- $\frac{d^2y}{dx^2} < 0 \Rightarrow$ **Local Maximum**

- $\frac{d^2y}{dx^2} > 0 \Rightarrow$ **Local Minimum**

- $\frac{d^2y}{dx^2} = 0 \text{ and } \frac{d^3y}{dx^3} \neq 0 \Rightarrow $ **Point of inflection**

<br>

For each function below:
           
- Find the first derivative

- Solve where the first derivative equals zero, and find the coordinates of the stationary point(s)

- Find the second derivative

- Substitute result(s) into the second derivative to determine the nature of the stationary point(s)

- Plot the functions using an online graphing tool (e.g. Desmos)


<a href="https://www.desmos.com/calculator" target="_blank" rel="noopener noreferrer" >
Open Desmos Calculator
</a>

<a href="https://www.geogebra.org/calculator" target="_blank" rel="noopener noreferrer">
Open Geogebra Calculator
</a>


{% include question_dropdown.html 
    id="eco5007aw5q7" 
    title="7" 
    question_text="$$y = x^2 + 8x - 9$$

"
    solution_text="**First derivative:**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 2x + 8$$

**Stationary point(s):** 

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 \Rightarrow 2x+8 = 0$$

$$\Rightarrow x = -4$$

**Substitute to find $y$:**

$$y = (-4)^2+8(-4) - 9 = -25$$

**Stationary point $(-4,-25)$**

**Second derivative:**

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 2$$

**Nature of stationary point:**

At $x = -4$, $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 2 > 0 \Rightarrow (-4, -25) \textbf{ is a local minimum}$"
%}

{% include question_dropdown.html 
    id="eco5007aw5q8" 
    title="8" 
    question_text="$$y = 2x^3 + 6x^2 - 90x - 2$$

"
    solution_text="**First derivative:**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 6x^2 + 12x - 90$$

**Stationary point(s):** 

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 \Rightarrow 6x^2 + 12x - 90 = 0$$

$$\Rightarrow x^2 + 2x - 15 = 0$$

$$\Rightarrow (x+5)(x-3) = 0$$

$$\Rightarrow x = -5 \text{ or } x = 3$$

**Substitute to find $y$:**

For $x = -5$:

$$y = 2(-5)^3 + 6(-5)^2 - 90(-5) - 2 = 348$$

**Stationary point $(-5, 348)$**

For $x = 3$:

$$y = 2(3)^3 + 6(3)^2 - 90(3) - 2 = -164$$

**Stationary point $(3, -164)$**

**Second derivative:**

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 12x + 12$$

**Nature of stationary point:**

At $x = -5$, $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 12(-5) + 12 = -48 < 0 \Rightarrow (-5, 348) \textbf{ is a local maximum}$

At $x = 3$, $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 12(3) + 12 = 48 > 0 \Rightarrow (3, -164) \textbf{ is a local minimum}$"
%}

{% include question_dropdown.html 
    id="eco5007aw5q9" 
    title="9" 
    question_text="$$y = 4x^{3/2} - x^2 \quad \text{(domain: } x > 0\text{)}$$

"
    solution_text="**First derivative:**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 6x^{1/2} - 2x = 6\sqrt{x} - 2x$$

**Stationary point(s):** 

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 \Rightarrow 6\sqrt{x} - 2x = 0$$

$$\Rightarrow 2\sqrt{x}(3 - \sqrt{x}) = 0$$

Since $x > 0$:

$$3 - \sqrt{x} = 0 \Rightarrow \sqrt{x} = 3 \Rightarrow x = 9$$

**Substitute to find $y$:**

$$y = 4(9)^{3/2} - (9)^2 = 108 - 81 = 27$$

**Stationary point $(9, 27)$**

**Second derivative:**

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 3x^{-1/2} - 2 = \frac{3}{\sqrt{x}} - 2$$

**Nature of stationary point:**

At $x = 9$, $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = \frac{3}{\sqrt{9}} - 2 = -1 < 0 \Rightarrow (9, 27) \textbf{ is a local maximum}$"
%}

{% include question_dropdown.html 
    id="eco5007aw5q10" 
    title="10" 
    question_text="$$y = x \ln x \quad \text{(use the product rule)}$$

"
    solution_text="**First derivative:**

Using the product rule ($u=x, v=\ln x$):

$$\frac{\mathrm{d}y}{\mathrm{d}x} = (1)(\ln x) + (x)\left(\frac{1}{x}\right) = \ln x + 1$$

**Stationary point(s):** 

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 \Rightarrow \ln x + 1 = 0$$

$$\Rightarrow \ln x = -1 \Rightarrow x = e^{-1} = \frac{1}{e}$$

**Substitute to find $y$:**

$$y = \frac{1}{e}\ln\left(\frac{1}{e}\right) = -\frac{1}{e}$$

**Stationary point $\left(\frac{1}{e}, -\frac{1}{e}\right)$**

**Second derivative:**

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = \frac{1}{x}$$

**Nature of stationary point:**

At $x = \frac{1}{e}$, $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = \frac{1}{1/e} = e > 0 \Rightarrow \left(\frac{1}{e}, -\frac{1}{e}\right) \textbf{ is a local minimum}$"
%}

{% include question_dropdown.html 
    id="eco5007aw5q11" 
    title="11" 
    question_text="$$y = 6x^{2/3} - 4x \quad \text{(domain: } x > 0\text{)}$$

"
    solution_text="**First derivative:**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 4x^{-1/3} - 4 = \frac{4}{\sqrt[3]{x}} - 4$$

**Stationary point(s):** 

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 \Rightarrow \frac{4}{\sqrt[3]{x}} - 4 = 0$$

$$\Rightarrow \sqrt[3]{x} = 1 \Rightarrow x = 1$$

**Substitute to find $y$:**

$$y = 6(1)^{2/3} - 4(1) = 2$$

**Stationary point $(1, 2)$**

**Second derivative:**

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = -\frac{4}{3}x^{-4/3} = -\frac{4}{3x^{4/3}}$$

**Nature of stationary point:**

At $x = 1$, $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = -\frac{4}{3(1)^{4/3}} = -\frac{4}{3} < 0 \Rightarrow (1, 2) \textbf{ is a local maximum}$"
%}

{% include question_dropdown.html 
    id="eco5007aw5q12" 
    title="12" 
    question_text="$$y = x^3 - 3x$$

"
    solution_text="**First derivative:**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 3x^2 - 3$$

**Stationary point(s):** 

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 \Rightarrow 3x^2 - 3 = 0$$

$$\Rightarrow x^2 = 1 \Rightarrow x = \pm 1$$

**Substitute to find $y$:**

For $x = 1$:

$$y = (1)^3 - 3(1) = -2$$

**Stationary point $(1, -2)$**

For $x = -1$:

$$y = (-1)^3 - 3(-1) = 2$$

**Stationary point $(-1, 2)$**

**Second derivative:**

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 6x$$

**Nature of stationary point:**

At $x = 1$, $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 6(1) = 6 > 0 \Rightarrow (1, -2) \textbf{ is a local minimum}$

At $x = -1$, $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 6(-1) = -6 < 0 \Rightarrow (-1, 2) \textbf{ is a local maximum}$"
%}

{% include question_dropdown.html 
    id="eco5007aw5q13" 
    title="13" 
    question_text="$$y = x + \frac{3}{x} + 2$$

"
    solution_text="**First derivative:**

$$y = x + 3x^{-1} + 2 \Rightarrow \frac{\mathrm{d}y}{\mathrm{d}x} = 1 - 3x^{-2} = 1 - \frac{3}{x^2}$$

**Stationary point(s):** 

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 \Rightarrow 1 - \frac{3}{x^2} = 0$$

$$\Rightarrow x^2 = 3 \Rightarrow x = \pm\sqrt{3}$$

**Substitute to find $y$:**

For $x = \sqrt{3}$:

$$y = \sqrt{3} + \frac{3}{\sqrt{3}} + 2 = 2\sqrt{3} + 2$$

**Stationary point $(\sqrt{3}, 2\sqrt{3} + 2)$**

For $x = -\sqrt{3}$:

$$y = -\sqrt{3} + \frac{3}{-\sqrt{3}} + 2 = -2\sqrt{3} + 2$$

**Stationary point $(-\sqrt{3}, -2\sqrt{3} + 2)$**

**Second derivative:**

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 6x^{-3} = \frac{6}{x^3}$$

**Nature of stationary point:**

At $x = \sqrt{3}$, $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = \frac{6}{(\sqrt{3})^3} = \frac{2}{\sqrt{3}} > 0 \Rightarrow (\sqrt{3}, 2\sqrt{3} + 2) \textbf{ is a local minimum}$

At $x = -\sqrt{3}$, $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = \frac{6}{(-\sqrt{3})^3} = -\frac{2}{\sqrt{3}} < 0 \Rightarrow (-\sqrt{3}, -2\sqrt{3} + 2) \textbf{ is a local maximum}$"
%}

{% include question_dropdown.html 
    id="eco5007aw5q14" 
    title="14" 
    question_text="$$y = x^3 - 6x^2 + 9x + 5$$

"
    solution_text="**First derivative:**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 3x^2 - 12x + 9$$

**Stationary point(s):** 

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 \Rightarrow 3x^2 - 12x + 9 = 0$$

$$\Rightarrow x^2 - 4x + 3 = 0$$

$$\Rightarrow (x-1)(x-3) = 0$$

$$\Rightarrow x = 1 \text{ or } x = 3$$

**Substitute to find $y$:**

For $x = 1$:

$$y = (1)^3 - 6(1)^2 + 9(1) + 5 = 9$$

**Stationary point $(1, 9)$**

For $x = 3$:

$$y = (3)^3 - 6(3)^2 + 9(3) + 5 = 5$$

**Stationary point $(3, 5)$**

**Second derivative:**

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 6x - 12$$

**Nature of stationary point:**

At $x = 1$, $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 6(1) - 12 = -6 < 0 \Rightarrow (1, 9) \textbf{ is a local maximum}$

At $x = 3$, $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 6(3) - 12 = 6 > 0 \Rightarrow (3, 5) \textbf{ is a local minimum}$"
%}

{% include question_dropdown.html 
    id="eco5007aw5q15" 
    title="15" 
    question_text="$$y = x^4 - 8x^2 + 5$$

"
    solution_text="**First derivative:**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 4x^3 - 16x$$

**Stationary point(s):** 

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 \Rightarrow 4x^3 - 16x = 0$$

$$\Rightarrow 4x(x^2 - 4) = 0$$

$$\Rightarrow 4x(x-2)(x+2) = 0$$

$$\Rightarrow x = 0, x = 2, \text{ or } x = -2$$

**Substitute to find $y$:**

For $x = 0$:

$$y = (0)^4 - 8(0)^2 + 5 = 5$$

**Stationary point $(0, 5)$**

For $x = 2$:

$$y = (2)^4 - 8(2)^2 + 5 = -11$$

**Stationary point $(2, -11)$**

For $x = -2$:

$$y = (-2)^4 - 8(-2)^2 + 5 = -11$$

**Stationary point $(-2, -11)$**

**Second derivative:**

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 12x^2 - 16$$

**Nature of stationary point:**

At $x = 0$, $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 12(0)^2 - 16 = -16 < 0 \Rightarrow (0, 5) \textbf{ is a local maximum}$

At $x = 2$, $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 12(2)^2 - 16 = 32 > 0 \Rightarrow (2, -11) \textbf{ is a local minimum}$

At $x = -2$, $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 12(-2)^2 - 16 = 32 > 0 \Rightarrow (-2, -11) \textbf{ is a local minimum}$"
%}

## Optimisation: Open top box problem

A box has a square base of dimensions $x \times x$ and height $y$. The box is open at the top.

{% include question_rearrange.html
    id="eco5007aw5q16a"
    title="16a"
    question_text="Write a formula for the surface area of the open-top box."
    correct_answer="x^2 + 4xy"
    var_label="A="
    solution_text="
$$ A = (\text{Area of base}) + (\text{Area of 4 sides}) $$

$$ A = (x \cdot x) + 4(x \cdot y) $$
                                
$$ A = x^2 + 4xy $$"
%}

{% include question_dropdown.html 
    id="eco5007aw5q16b" 
    title="16b" 
    question_text="Suppose the surface area is fixed at 300 cm$^2$. Show that this constraint implies:

$$ y = \frac{300}{4x} - \frac{x}{4} $$"
    solution_text="Given $A = 300$

$$
\begin{aligned}
300 &= x^2 + 4xy \\
300 - x^2 &= 4xy \\
\frac{300 - x^2}{4x} &= y \\
y &= \frac{300}{4x} - \frac{x^2}{4x} \\
y &= \frac{300}{4x} - \frac{x}{4}
\end{aligned}
$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q16c"
    title="16c"
    question_text="Write a formula for the volume of the box in terms of $x$ and $y$."
    correct_answer="x^2y"
    var_label="V="
    solution_text="
$$ V = \text{length} \times \text{width} \times \text{height} $$

$$ V = x \cdot x \cdot y $$

$$ V = x^2y $$"
%}

{% include question_rearrange.html
    id="eco5007aw5q16d"
    title="16d"
    question_text="Substitute the expression for $y$, from 16b, into the volume formula, 16c, so the volume is a function of $x$ only."
    correct_answer="75x - \\frac{1}{4}x^3"
    var_label="V="
    solution_text="
Substitute $y = \frac{300}{4x} - \frac{x}{4}$ into $V = x^2y$:

$$
\begin{aligned}
V &= x^2 \left( \frac{300}{4x} - \frac{x}{4} \right) \\
V &= \frac{300x^2}{4x} - \frac{x^3}{4} \\
V &= 75x - \frac{1}{4}x^3
\end{aligned}
$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q16e"
    title="16e"
    question_text="Find the value of $x$ that maximises the volume. Just enter the numerical value."
    correct_answer="10"
    var_label="x_{\text{max}}="
    solution_text="
<p>To maximise volume, find $\frac{dV}{dx}$ and set it to zero.</p>
                                
$$
\begin{aligned}
\frac{dV}{dx} &= \frac{d}{dx}\left(75x - \frac{1}{4}x^3\right) \\
&= 75 - \frac{3}{4}x^2
\end{aligned}
$$

Set $\frac{dV}{dx} = 0$:

$$
\begin{aligned}
75 - \frac{3}{4}x^2 &= 0 \\
75 &= \frac{3}{4}x^2 \\
300 &= 3x^2 \\
100 &= x^2 \\
x &= \pm 10
\end{aligned}
$$

Since $x$ is a dimension, $x > 0$, so $x = 10 \text{ cm}$
                                
To confirm this is a maximum, find the second derivative $\frac{d^2V}{dx^2}$.
                                
$$
\begin{aligned}
\frac{d^2V}{dx^2} &= \frac{d}{dx}\left(75 - \frac{3}{4}x^2\right) \\
&= -\frac{3}{2}x
\end{aligned}
$$

At $x=10$:
                                
$$
\begin{aligned}
\frac{d^2V}{dx^2}\Big|_{x=10} &= -\frac{3}{2}(10) \\
&= -15
\end{aligned}
$$
                                
Since $\frac{d^2V}{dx^2} = -15 < 0$, the volume is maximised at $x = 10 \text{ cm}$."
%}

{% include question_rearrange.html
    id="eco5007aw5q16f"
    title="16f"
    question_text="Calculate the corresponding height $y$. Just enter the numerical value."
    correct_answer="5"
    var_label="y_{\text{max}}="
    solution_text="
Using $x=10 \text{ cm}$ and $y = \frac{300}{4x} - \frac{x}{4}$:

$$
\begin{aligned}
y &= \frac{300}{4(10)} - \frac{10}{4} \\
&= \frac{300}{40} - 2.5 \\
&= 7.5 - 2.5 \\
&= 5 \text{ cm}
\end{aligned}
$$
                                
The corresponding height is $\mathbf{5 \text{ cm}}$."
%}

{% include question_rearrange.html
    id="eco5007aw5q16g"
    title="16g"
    question_text="Calculate the maximum volume $V$. Just enter the numerical value."
    correct_answer="500"
    var_label="V_{\text{max}}="
    solution_text="
Calculate the maximum volume using $V = x^2y$:
                                
$$
\begin{aligned}
V_{\text{max}} &= (10 \text{ cm})^2 \cdot (5 \text{ cm}) \\
&= 100 \text{ cm}^2 \cdot 5 \text{ cm} \\
&= 500 \text{ cm}^3
\end{aligned}
$$

The maximum volume is $\mathbf{500 \text{ cm}^3}$."
%}

