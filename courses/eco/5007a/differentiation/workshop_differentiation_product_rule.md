---
layout: eco5007a
title: Workshop Differentiation Product and Quotient Rules
---

<script src="https://unpkg.com/mathlive"></script>
<script src="https://unpkg.com/@cortex-js/compute-engine"></script>

# Workshop: Product and Quotient Rules for Differentiation

## Product Rule

Functions that are made of other functions multiplied together can be differentiated using the product rule.

$$ y = f(x) \cdot g(x) $$

For example, you may have the function:

$$ y = x^2 e^x $$

Use ‘dummy’ variables to represent the two functions:

$$ u = f(x), \quad v = g(x) $$

Then:

$$ \frac{dy}{dx} = v \cdot \frac{du}{dx} + u \cdot \frac{dv}{dx} $$

So, in the example:

$$ u = x^2, \quad v = e^x, \quad \frac{du}{dx} = 2x, \quad \frac{dv}{dx} = e^x $$ 

$$ \frac{dy}{dx} = 2x e^x + x^2 e^x = x e^x (2 + x) $$

### Questions

Differentiate the following functions:

**Note**

The $\ln$ function can found in the virtual keyboard by going to the $\infty \neq \in $ tab, or the shift part of the $123$ tab. On a physical keyboard you can simply type $\ln$.

{% include question_calculus.html
    id="eco5007aw4q1"
    title="1"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = 5xe^{x}$"
    correct_answer="5e^{x}+5xe^{x}"
    solution_text="Let $u = 5x$ and $v=e^{x}$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 5$$

$$\frac{\mathrm{d}v}{\mathrm{d}x} = e^{x}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 5e^{x}+5xe^{x} = 5e^{x}(1+x) $$ "
%}

{% include question_calculus.html
    id="eco5007aw4q2"
    title="2"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = x^3 \ln x$"
    correct_answer="3x^2 \\ln x + x^2"
    solution_text="Let $u = x^3$ and $v = \ln x$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 3x^2$$

$$\frac{\mathrm{d}v}{\mathrm{d}x} = \frac{1}{x}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 3x^2 \ln x + x^3 \cdot \frac{1}{x} = 3x^2 \ln x + x^2$$"
%}

{% include question_calculus.html
    id="eco5007aw4q3"
    title="3"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = 4e^x \ln 4x$"
    correct_answer="4e^x \\ln 4x + \\frac{4e^x}{x}"
    solution_text="Let $u = 4e^x$ and $v = \ln 4x$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 4e^x$$

$$\frac{\mathrm{d}v}{\mathrm{d}x} = \frac{1}{4x} \cdot 4 = \frac{1}{x} \quad \text{(using chain rule for $\ln 4x$)}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 4e^x \ln 4x + 4e^x \cdot \frac{1}{x} = 4e^x \ln 4x + \frac{4e^x}{x}$$"
%}

{% include question_calculus.html
    id="eco5007aw4q4"
    title="4"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = (6x^2 + 4x + 1) \ln x^2$"
    correct_answer="24x\\ln{x}+8\\ln{x}+12x+8+2/x"
    solution_text="Let $u = 6x^2 + 4x + 1$ and $v = \ln x^2 = 2\ln x$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 12x + 4$$

$$\frac{\mathrm{d}v}{\mathrm{d}x} = \frac{2}{x}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = (12x + 4)(2\ln x) + (6x^2 + 4x + 1)\cdot\frac{2}{x}$$"
%}

{% include question_calculus.html
    id="eco5007aw4q5"
    title="5"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = (5x - \frac{3}{x^2}) e^x$"
    correct_answer="(5 + \\frac{6}{x^3})e^x + (5x - \\frac{3}{x^2})e^x"
    solution_text="Let $u = 5x - 3x^{-2}$ and $v = e^x$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 5 + 6x^{-3} = 5 + \frac{6}{x^3}$$

$$\frac{\mathrm{d}v}{\mathrm{d}x} = e^x$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \left(5 + \frac{6}{x^3}\right)e^x + \left(5x - \frac{3}{x^2}\right)e^x = e^x\left(5 + \frac{6}{x^3} + 5x - \frac{3}{x^2}\right)$$"
%}

## Quotient Rule

When a function is produced by a function divided by another function, it can be differentiated with the quotient rule.

$$ y = \frac{u}{v}, \quad \frac{dy}{dx} = \frac{v \cdot \frac{du}{dx} - u \cdot \frac{dv}{dx}}{v^2} $$

For example:

$$ y = \frac{x^2 + 5}{2x - 1} $$

$$ u = x^2 + 5, \quad v = 2x - 1 $$

$$ \frac{du}{dx} = 2x, \quad \frac{dv}{dx} = 2 $$

$$ \frac{dy}{dx} = \frac{(2x - 1)(2x) - (x^2 + 5)(2)}{(2x - 1)^2} = \frac{4x^2 - 2x - 2x^2 - 10}{(2x - 1)^2} $$

$$ \frac{dy}{dx} = \frac{2x^2 - 2x - 10}{(2x - 1)^2} $$

### Questions

Differentiate the following:

{% include question_calculus.html
    id="eco5007aw4q6"
    title="6"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = \frac{5x + 2}{x - 4}$"
    correct_answer="\\frac{-22}{(x - 4)^2}"
    solution_text="Let $u = 5x + 2$ and $v = x - 4$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 5$$

$$\frac{\mathrm{d}v}{\mathrm{d}x} = 1$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{(x - 4)(5) - (5x + 2)(1)}{(x - 4)^2} = \frac{5x - 20 - 5x - 2}{(x - 4)^2} = \frac{-22}{(x - 4)^2}$$"
%}

{% include question_calculus.html
    id="eco5007aw4q7"
    title="7"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = \frac{e^x}{x^2 + 2x}$"
    correct_answer="\\frac{e^x(x^2 - 2)}{(x^2 + 2x)^2}"
    solution_text="Let $u = e^x$ and $v = x^2 + 2x$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = e^x$$

$$\frac{\mathrm{d}v}{\mathrm{d}x} = 2x + 2$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{(x^2 + 2x)e^x - e^x(2x + 2)}{(x^2 + 2x)^2} = \frac{e^x(x^2 + 2x - 2x - 2)}{(x^2 + 2x)^2} = \frac{e^x(x^2 - 2)}{(x^2 + 2x)^2}$$"
%}

{% include question_calculus.html
    id="eco5007aw4q8"
    title="8"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = \frac{\ln 4x}{x^2 + 5}$"
    correct_answer="\\frac{(x^2 + 5)\\frac{1}{x} - 2x\\ln {4x}}{(x^2 + 5)^2}"
    solution_text="Let $u = \ln 4x = \ln 4 + \ln x$ and $v = x^2 + 5$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = \frac{1}{x}$$

$$\frac{\mathrm{d}v}{\mathrm{d}x} = 2x$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{(x^2 + 5)\cdot\frac{1}{x} - \ln 4x\cdot 2x}{(x^2 + 5)^2}$$"
%}

{% include question_calculus.html
    id="eco5007aw4q9"
    title="9"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = \frac{\sqrt{x}}{e^x}$"
    correct_answer="\\frac{\\frac{1}{2\\sqrt{x}} - \\sqrt{x}}{e^x}"
    solution_text="Let $u = x^{1/2}$ and $v = e^x$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = \frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}$$

$$\frac{\mathrm{d}v}{\mathrm{d}x} = e^x$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{e^x\cdot\frac{1}{2\sqrt{x}} - x^{1/2}e^x}{(e^x)^2} = \frac{\frac{e^x}{2\sqrt{x}} - \sqrt{x}e^x}{e^{2x}} = \frac{e^x(\frac{1}{2\sqrt{x}} - \sqrt{x})}{e^{2x}} = \frac{\frac{1}{2\sqrt{x}} - \sqrt{x}}{e^x}$$"
%}

### Mixed Questions

The following questions use product and quotient rule. They also make use of the chain rule. Find the derivative:

{% include question_calculus.html
    id="eco5007aw4q10"
    title="10"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = e^{4x}(5x + 2)$"
    correct_answer="e^{4x}(20x + 13)"
    solution_text="Let $u = e^{4x}$ and $v = 5x + 2$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 4e^{4x} \quad \text{(using chain rule)}$$

$$\frac{\mathrm{d}v}{\mathrm{d}x} = 5$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 4e^{4x}(5x + 2) + 5e^{4x} = e^{4x}(20x + 8 + 5) = e^{4x}(20x + 13)$$"
%}

{% include question_calculus.html
    id="eco5007aw4q11"
    title="11"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = (5x - 1)^4 \ln x$"
    correct_answer="20(5x - 1)^3 \ln x + \frac{(5x - 1)^4}{x}"
    solution_text="Let $u = (5x - 1)^4$ and $v = \ln x$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 4(5x - 1)^3 \cdot 5 = 20(5x - 1)^3 \quad \text{(using chain rule)}$$

$$\frac{\mathrm{d}v}{\mathrm{d}x} = \frac{1}{x}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 20(5x - 1)^3 \ln x + \frac{(5x - 1)^4}{x}$$"
%}

{% include question_calculus.html
    id="eco5007aw4q12"
    title="12"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = \frac{2x + 5}{e^{9x}}$"
    correct_answer="\frac{-18x - 43}{e^{9x}}"
    solution_text="Let $u = 2x + 5$ and $v = e^{9x}$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 2$$

$$\frac{\mathrm{d}v}{\mathrm{d}x} = 9e^{9x} \quad \text{(using chain rule)}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{e^{9x}(2) - (2x + 5)(9e^{9x})}{(e^{9x})^2} = \frac{2e^{9x} - 18x e^{9x} - 45e^{9x}}{e^{18x}} = \frac{e^{9x}(2 - 18x - 45)}{e^{18x}} = \frac{2 - 18x - 45}{e^{9x}} = \frac{-18x - 43}{e^{9x}}$$"
%}

{% include question_calculus.html
    id="eco5007aw4q13"
    title="13"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = (x^2 + 3x + 1)e^x \ln x$"
    correct_answer="e^x((2x + 3)\ln x + (x^2 + 3x + 1)(\ln x + \frac{1}{x}))"
    solution_text="This is a product of three functions. We can treat it as $y = f(x) \cdot g(x)$ where $f(x) = (x^2 + 3x + 1)$ and $g(x) = e^x \ln x$.

First product: $u = (x^2 + 3x + 1)$, $\frac{\mathrm{d}u}{\mathrm{d}x} = 2x + 3$

Second product (for $g(x)$): $a = e^x$, $b = \ln x$

$\frac{\mathrm{d}a}{\mathrm{d}x} = e^x$, $\frac{\mathrm{d}b}{\mathrm{d}x} = \frac{1}{x}$

So, $\frac{\mathrm{d}g}{\mathrm{d}x} = e^x \ln x + e^x \cdot \frac{1}{x} = e^x(\ln x + \frac{1}{x})$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = (2x + 3)(e^x \ln x) + (x^2 + 3x + 1)e^x(\ln x + \frac{1}{x}) = e^x \left[ (2x + 3)\ln x + (x^2 + 3x + 1)(\ln x + \frac{1}{x}) \right]$$"
%}

{% include question_calculus.html
    id="eco5007aw4q14"
    title="14"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = \frac{5x e^x}{x + 2}$"
    correct_answer="\frac{5e^x(x^2 + 2x + 2)}{(x + 2)^2}"
    solution_text="This is a quotient where the numerator is a product.

Numerator $u = 5x e^x$. Using product rule for $u$: $u_1 = 5x$, $u_2 = e^x$. $\frac{\mathrm{d}u_1}{\mathrm{d}x} = 5$, $\frac{\mathrm{d}u_2}{\mathrm{d}x} = e^x$.

So, $\frac{\mathrm{d}u}{\mathrm{d}x} = 5e^x + 5x e^x = 5e^x(1 + x)$

Denominator $v = x + 2$. $\frac{\mathrm{d}v}{\mathrm{d}x} = 1$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{(x + 2)(5e^x(1 + x)) - (5x e^x)(1)}{(x + 2)^2} = \frac{5e^x(x+2)(1+x) - 5xe^x}{(x+2)^2} = \frac{5e^x[x + x^2 + 2 + 2x - x]}{(x+2)^2} = \frac{5e^x[x^2 + 2x + 2]}{(x+2)^2}$$"
%}

{% include question_calculus.html
    id="eco5007aw4q15"
    title="15"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = \frac{6x - 7}{x^2 + 1} - 5x \ln(2x - 5)$"
    correct_answer="\frac{-6x^2 + 14x + 6}{(x^2 + 1)^2} - (5\ln(2x - 5) + \frac{10x}{2x - 5})"
    solution_text="This involves differentiating two separate terms and subtracting them.

First term: $y_1 = \frac{6x - 7}{x^2 + 1}$ (Quotient Rule)

$u_1 = 6x - 7$, $v_1 = x^2 + 1$

$\frac{\mathrm{d}u_1}{\mathrm{d}x} = 6$, $\frac{\mathrm{d}v_1}{\mathrm{d}x} = 2x$

$$\frac{\mathrm{d}y_1}{\mathrm{d}x} = \frac{(x^2 + 1)(6) - (6x - 7)(2x)}{(x^2 + 1)^2} = \frac{6x^2 + 6 - 12x^2 + 14x}{(x^2 + 1)^2} = \frac{-6x^2 + 14x + 6}{(x^2 + 1)^2}$$

Second term: $y_2 = 5x \ln(2x - 5)$ (Product Rule and Chain Rule)

$u_2 = 5x$, $v_2 = \ln(2x - 5)$

$\frac{\mathrm{d}u_2}{\mathrm{d}x} = 5$, $\frac{\mathrm{d}v_2}{\mathrm{d}x} = \frac{1}{2x - 5} \cdot 2 = \frac{2}{2x - 5} \quad \text{(chain rule)}$

$$\frac{\mathrm{d}y_2}{\mathrm{d}x} = 5 \ln(2x - 5) + 5x \left(\frac{2}{2x - 5}\right) = 5 \ln(2x - 5) + \frac{10x}{2x - 5}$$

Final derivative $\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{\mathrm{d}y_1}{\mathrm{d}x} - \frac{\mathrm{d}y_2}{\mathrm{d}x}$:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{-6x^2 + 14x + 6}{(x^2 + 1)^2} - \left(5 \ln(2x - 5) + \frac{10x}{2x - 5}\right)$$"
%}
