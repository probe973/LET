---
layout: eco5007a
title: Workshop Differentiation Chain Rule
---

<script src="https://unpkg.com/mathlive"></script>
<script src="https://unpkg.com/@cortex-js/compute-engine"></script>

# Workshop: Chain Rule for Differentiation

## Power-type Compositions


These are expressions that look like:

$$ y = (3x^2 + 5)^4 $$

The function $3x^2 + 5$ is inside a ‘to the power 4’ function

Define a ‘dummy’ variable (say $u$) to represent the ‘inside’ function:
            
$$ u = 3x^2 + 5 $$

The chain rule can be applied
            
$$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

So:
            
$$ \frac{dy}{dx} = 4(3x^2 + 5)^3 \cdot 6x = 24x(3x^2 + 5)^3 $$

For the example above:

Inner: $u = 3x^2 + 5 \quad \Rightarrow \quad \frac{du}{dx} = 6x$

Outer: $y = u^4 \quad \Rightarrow \quad \frac{dy}{du} = 4u^3$

$\Rightarrow \frac{dy}{dx} = 4u^3 \cdot 6x = 24x(3x^2 + 5)^3$


### Questions

Find the derivative of:

{% include question_rearrange.html
    id="eco5007aw3q1"
    title="1"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = (4x^2 + 3)^5$"
    correct_answer="40x(4x^2+3)^{4}"
    solution_text="Let $u = 4x^2+3$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 8x$$

$$y = u^5 \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = 5u^4$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 5(4x^2+3)^4 \cdot 8x = 40x(4x^2+3)^4$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q2"
    title="2"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = (7x^3 + 2)^4$"
    correct_answer="84x^2(7x^3+2)^{3}"
    solution_text="Let $u = 7x^3+2$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 21x^2$$

$$y = u^4 \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = 4u^3$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 4(7x^3+2)^3 \cdot 21x^2 = 84x^2(7x^3+2)^3$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q3"
    title="3"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = (5x^2 + x)^3$"
    correct_answer="3(5x^2+x)^{2}(10x+1)"
    solution_text="Let $u = 5x^2+x$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 10x+1$$

$$y = u^3 \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = 3u^2$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 3(5x^2+x)^2 (10x+1)$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q4"
    title="4"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = (1 - 2x)^6$"
    correct_answer="-12(1-2x)^{5}"
    solution_text="Let $u = 1-2x$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = -2$$

$$y = u^6 \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = 6u^5$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 6(1-2x)^5 \cdot (-2) = -12(1-2x)^5$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q5"
    title="5"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = (2x - 3)^7$"
    correct_answer="14(2x-3)^{6}"
    solution_text="Let $u = 2x-3$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 2$$

$$y = u^7 \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = 7u^6$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 7(2x-3)^6 \cdot 2 = 14(2x-3)^6$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q6"
    title="6"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = (x^2 + 5x - 3)^8$"
    correct_answer="8(x^2+5x-3)^{7}(2x+5)"
    solution_text="Let $u = x^2+5x-3$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 2x+5$$

$$y = u^8 \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = 8u^7$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 8(x^2+5x-3)^7 (2x+5)$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q7"
    title="7"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = (4x^3 - x^2 + 2)^5$"
    correct_answer="5(4x^3-x^2+2)^{4}(12x^2-2x)"
    solution_text="Let $u = 4x^3-x^2+2$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 12x^2-2x = 2x(6x-1)$$

$$y = u^5 \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = 5u^4$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 5(4x^3-x^2+2)^4 \cdot (12x^2-2x) = 5(4x^3-x^2+2)^4 \cdot 2x(6x-1) = 10x(6x-1)(4x^3-x^2+2)^4$$"
%}

## Exponentials with Composed Arguments

These are expressions that look like $y = e^{2x^2 + 1}$. Here the $2x^2 + 1$ is inside the exponential function.
            
Use the dummy variable $u$, so that:
            
$$ u = 2x^2 + 1 $$

The chain rule can be applied:
            
$$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$
            
So:
            
$$ \frac{dy}{dx} = e^{2x^2 + 1} \cdot 4x=4x e^{2x^2 + 1} $$
            
For the example above:
            
Inner: $u = 2x^2 + 1 \quad \Rightarrow \quad \frac{du}{dx} = 4x$

Outer: $y = e^u \quad \Rightarrow \quad \frac{dy}{du} = e^u$
            
$$\Rightarrow \frac{dy}{dx} = e^{2x^2 + 1} \cdot 4x$$

### Questions

Find the derivative of:

{% include question_rearrange.html
    id="eco5007aw3q8"
    title="8"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = e^{3x^2 + 4}$"
    correct_answer="6xe^{3x^2+4}"
    solution_text="Let $u = 3x^2+4$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 6x$$

$$y = e^u \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = e^u$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = e^{3x^2+4} \cdot 6x = 6xe^{3x^2+4}$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q9"
    title="9"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = e^{x^3 + 1}$"
    correct_answer="3x^2e^{x^3+1}"
    solution_text="Let $u = x^3+1$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 3x^2$$

$$y = e^u \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = e^u$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = e^{x^3+1} \cdot 3x^2 = 3x^2e^{x^3+1}$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q10"
    title="10"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = e^{5x^4 + 2x}$"
    correct_answer="(20x^3+2)e^{5x^4+2x}"
    solution_text="Let $u = 5x^4+2x$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 20x^3+2 = 2(10x^3+1)$$

$$y = e^u \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = e^u$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = e^{5x^4+2x} \cdot (20x^3+2) = e^{5x^4+2x} \cdot 2(10x^3+1) = 2(10x^3+1)e^{5x^4+2x}$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q11"
    title="11"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = e^{7x - 3}$"
    correct_answer="7e^{7x-3}"
    solution_text="Let $u = 7x-3$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 7$$

$$y = e^u \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = e^u$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = e^{7x-3} \cdot 7 = 7e^{7x-3}$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q12"
    title="12"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = e^{x^2 - 4x + 1}$"
    correct_answer="(2x-4)e^{x^2-4x+1}"
    solution_text="Let $u = x^2-4x+1$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 2x-4 = 2(x-2)$$

$$y = e^u \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = e^u$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = e^{x^2-4x+1} \cdot (2x-4) = e^{x^2-4x+1} \cdot 2(x-2) = 2(x-2)e^{x^2-4x+1}$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q13"
    title="13"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = e^{x^5 - x^2 + 3}$"
    correct_answer="(5x^4-2x)e^{x^5-x^2+3}"
    solution_text="Let $u = x^5-x^2+3$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 5x^4-2x = x(5x^3-2)$$

$$y = e^u \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = e^u$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = e^{x^5-x^2+3} \cdot (5x^4-2x) = e^{x^5-x^2+3} \cdot x(5x^3-2) = x(5x^3-2)e^{x^5-x^2+3}$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q14"
    title="14"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = e^{2x^3 - x + 4}$"
    correct_answer="(6x^2-1)e^{2x^3-x+4}"
    solution_text="Let $u = 2x^3-x+4$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 6x^2-1$$

$$y = e^u \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = e^u$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = e^{2x^3-x+4} \cdot (6x^2-1) = (6x^2-1)e^{2x^3-x+4}$$"
%}

## Mixed Practice

Find the derivatives:

{% include question_rearrange.html
    id="eco5007aw3q15"
    title="15"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = (5x^2 + 4)^3$"
    correct_answer="30x(5x^2+4)^{2}"
    solution_text="Let $u = 5x^2+4$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 10x$$

$$y = u^3 \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = 3u^2$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 3(5x^2+4)^2 \cdot 10x = 30x(5x^2+4)^2$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q16"
    title="16"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = e^{x^2 + 4x + 2}$"
    correct_answer="(2x+4)e^{x^2+4x+2}"
    solution_text="Let $u = x^2+4x+2$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 2x+4 = 2(x+2)$$

$$y = e^u \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = e^u$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = e^{x^2+4x+2} \cdot (2x+4) = e^{x^2+4x+2} \cdot 2(x+2) = 2(x+2)e^{x^2+4x+2}$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q17"
    title="17"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = (2x^3 - x^2 + x)^6$"
    correct_answer="6(2x^3-x^2+x)^{5}(6x^2-2x+1)"
    solution_text="Let $u = 2x^3-x^2+x$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 6x^2-2x+1$$

$$y = u^6 \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = 6u^5$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 6(2x^3-x^2+x)^5 \cdot (6x^2-2x+1)$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q18"
    title="18"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = e^{4x^3 - x^2 + x}$"
    correct_answer="(12x^2-2x+1)e^{4x^3-x^2+x}"
    solution_text="Let $u = 4x^3-x^2+x$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 12x^2-2x+1$$

$$y = e^u \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = e^u$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = e^{4x^3-x^2+x} \cdot (12x^2-2x+1) = (12x^2-2x+1)e^{4x^3-x^2+x}$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q19"
    title="19"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = (3x^2 + 1)^5$"
    correct_answer="30x(3x^2+1)^{4}"
    solution_text="Let $u = 3x^2+1$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 6x$$

$$y = u^5 \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = 5u^4$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 5(3x^2+1)^4 \cdot 6x = 30x(3x^2+1)^4$$"
%}

{% include question_rearrange.html
    id="eco5007aw3q20"
    title="20"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    question_text="$y = e^{x^4 + 5x}$"
    correct_answer="(4x^3+5)e^{x^4+5x}"
    solution_text="Let $u = x^4+5x$ then:

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 4x^3+5$$

$$y = e^u \quad \Rightarrow \quad \frac{\mathrm{d}y}{\mathrm{d}u} = e^u$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = e^{x^4+5x} \cdot (4x^3+5) = (4x^3+5)e^{x^4+5x}$$"
%}
