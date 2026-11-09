---
layout: eco5007a
title: Partial Derivatives
---

# Partial Differentiation

<div class="explanation" markdown="1">

{% include qguides/calculus/partial_differentiation.html %}

</div>

### Question 1

For each of the following, find:

$$\frac{\partial z}{\partial x}, \quad \frac{\partial z}{\partial y}, \quad \frac{\partial^2 z}{\partial x^2}, \quad \frac{\partial^2 z}{\partial y^2}, \quad \frac{\partial^2 z}{\partial x \partial y}, \quad \frac{\partial^2 z}{\partial y \partial x} $$

{% include question_n_algebraic.html 
    id="q1a" 
    title="1a" 
    question_text="
$$z=5x+2y$$" 
    n="5" 
    labels="$ \frac{\partial z}{\partial x}= $, $ \frac{\partial z}{\partial y}=$, $\frac{\partial^2 z}{\partial x^2}=$, $\frac{\partial^2 z}{\partial y^2}=$, $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}=$" 
    answers="5 || 2 || 0 || 0 || 0 " 
    solution_text="$$ \frac{\partial z}{\partial x} = 5, \quad \frac{\partial z}{\partial y} = 2 $$

$$ \frac{\partial^2 z}{\partial x^2} = 0, \quad \frac{\partial^2 z}{\partial y^2} = 0 $$

$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x} = 0 $$" 
%}

{% include question_n_algebraic.html 
    id="q1b" 
    title="1b" 
    question_text="
$$z=5x^3+3y^2+4$$" 
    n="5" 
    labels="$ \frac{\partial z}{\partial x}= $, $ \frac{\partial z}{\partial y}=$, $\frac{\partial^2 z}{\partial x^2}=$, $\frac{\partial^2 z}{\partial y^2}=$, $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}=$" 
    answers="15x^2 || 6y || 30x || 6 || 0 " 
    solution_text="$$ \frac{\partial z}{\partial x} = 15x^2, \quad \frac{\partial z}{\partial y} = 6y $$

$$ \frac{\partial^2 z}{\partial x^2} = 30x, \quad \frac{\partial^2 z}{\partial y^2} = 6 $$

$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x} = 0 $$" 
%}

{% include question_n_algebraic.html 
    id="q1c" 
    title="1c" 
    question_text="
$$z=8xy$$" 
    n="5" 
    labels="$ \frac{\partial z}{\partial x}= $, $ \frac{\partial z}{\partial y}=$, $\frac{\partial^2 z}{\partial x^2}=$, $\frac{\partial^2 z}{\partial y^2}=$, $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}=$" 
    answers="8y || 8x || 0 || 0 || 8 " 
    solution_text="$$ \frac{\partial z}{\partial x} = 8y, \quad \frac{\partial z}{\partial y} = 8x $$

$$ \frac{\partial^2 z}{\partial x^2} = 0, \quad \frac{\partial^2 z}{\partial y^2} = 0 $$

$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x} = 8 $$" 
%}

{% include question_n_algebraic.html 
    id="q1d" 
    title="1d" 
    question_text="
$$z=2xy^{0.5}$$" 
    n="5" 
    labels="$ \frac{\partial z}{\partial x}= $, $ \frac{\partial z}{\partial y}=$, $\frac{\partial^2 z}{\partial x^2}=$, $\frac{\partial^2 z}{\partial y^2}=$, $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}=$" 
    answers="2y^{1/2} || xy^{-1/2} || 0 || -0.5xy^{-3/2} || y^{-1/2} " 
    solution_text="$$ \frac{\partial z}{\partial x} = 2y^{0.5}, \quad \frac{\partial z}{\partial y} = xy^{-0.5} $$

$$ \frac{\partial^2 z}{\partial x^2} = 0, \quad \frac{\partial^2 z}{\partial y^2} = -0.5xy^{-1.5} $$

$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x} = y^{-0.5} $$" 
%}

{% include question_n_algebraic.html 
    id="q1e" 
    title="1e" 
    question_text="
$$z=e^{2x}+4e^y$$" 
    n="5" 
    labels="$ \frac{\partial z}{\partial x}= $, $ \frac{\partial z}{\partial y}=$, $\frac{\partial^2 z}{\partial x^2}=$, $\frac{\partial^2 z}{\partial y^2}=$, $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}=$" 
    answers="2e^{2x} || 4e^y || 4e^{2x} || 4e^y || 0 " 
    solution_text="$$ \frac{\partial z}{\partial x} = 2e^{2x}, \quad \frac{\partial z}{\partial y} = 4e^y $$

$$ \frac{\partial^2 z}{\partial x^2} = 4e^{2x}, \quad \frac{\partial^2 z}{\partial y^2} = 4e^y $$

$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x} = 0 $$" 
%}

{% include question_n_algebraic.html 
    id="q1f" 
    title="1f" 
    question_text="
$$z=x^2+2xy+y^2$$" 
    n="5" 
    labels="$ \frac{\partial z}{\partial x}= $, $ \frac{\partial z}{\partial y}=$, $\frac{\partial^2 z}{\partial x^2}=$, $\frac{\partial^2 z}{\partial y^2}=$, $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}=$" 
    answers="2x+2y || 2x+2y || 2 || 2 || 2 " 
    solution_text="$$ \frac{\partial z}{\partial x} = 2x+2y, \quad \frac{\partial z}{\partial y} = 2x+2y $$
                                        
$$ \frac{\partial^2 z}{\partial x^2} = 2, \quad \frac{\partial^2 z}{\partial y^2} = 2 $$
                                        
$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x} = 2 $$" 
%}

{% include question_n_algebraic.html 
    id="q1g" 
    title="1g" 
    question_text="
$$z=10x^2y^3-2x-4y$$" 
    n="5" 
    labels="$ \frac{\partial z}{\partial x}= $, $ \frac{\partial z}{\partial y}=$, $\frac{\partial^2 z}{\partial x^2}=$, $\frac{\partial^2 z}{\partial y^2}=$, $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}=$" 
    answers="20xy^3-2 || 30x^2y^2-4 || 20y^3 || 60x^2y || 60xy^2 " 
    solution_text="$$ \frac{\partial z}{\partial x} = 20xy^3-2, \quad \frac{\partial z}{\partial y} = 30x^2y^2-4 $$
                                        
$$ \frac{\partial^2 z}{\partial x^2} = 20y^3, \quad \frac{\partial^2 z}{\partial y^2} = 60x^2y $$
                                        
$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x} = 60xy^2 $$" 
%}

{% include question_n_algebraic.html 
    id="q1h" 
    title="1h" 
    question_text="
$$z=5x^2+2x+5y^3-2y^2$$" 
    n="5" 
    labels="$ \frac{\partial z}{\partial x}= $, $ \frac{\partial z}{\partial y}=$, $\frac{\partial^2 z}{\partial x^2}=$, $\frac{\partial^2 z}{\partial y^2}=$, $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}=$" 
    answers="10x+2 || 15y^2-4y || 10 || 30y-4 || 0 " 
    solution_text="$$ \frac{\partial z}{\partial x} = 10x+2, \quad \frac{\partial z}{\partial y} = 15y^2-4y $$

$$ \frac{\partial^2 z}{\partial x^2} = 10, \quad \frac{\partial^2 z}{\partial y^2} = 30y-4 $$

$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x} = 0 $$" 
%}

{% include question_n_algebraic.html 
    id="q1i" 
    title="1i" 
    question_text="
$$z=10x^4y^3$$" 
    n="5" 
    labels="$ \frac{\partial z}{\partial x}= $, $ \frac{\partial z}{\partial y}=$, $\frac{\partial^2 z}{\partial x^2}=$, $\frac{\partial^2 z}{\partial y^2}=$, $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}=$" 
    answers="40x^3y^3 || 30x^4y^2 || 120x^2y^3 || 60x^4y || 120x^3y^2 " 
    solution_text="$$ \frac{\partial z}{\partial x} = 40x^3y^3, \quad \frac{\partial z}{\partial y} = 30x^4y^2 $$

$$ \frac{\partial^2 z}{\partial x^2} = 120x^2y^3, \quad \frac{\partial^2 z}{\partial y^2} = 60x^4y $$

$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x} = 120x^3y^2 $$" 
%}

{% include question_n_algebraic.html 
    id="q1j" 
    title="1j" 
    question_text="
$$z=2e^{5x}-4x^2y^2+\ln{(3xy)}$$" 
    n="5" 
    labels="$ \frac{\partial z}{\partial x}= $, $ \frac{\partial z}{\partial y}=$, $\frac{\partial^2 z}{\partial x^2}=$, $\frac{\partial^2 z}{\partial y^2}=$, $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}=$" 
    answers="10e^{5x}-8xy^2+1/x || -8x^2y+1/y || 50e^{5x}-8y^2-1/x^2 || -8x^2-1/y^2 || -16xy " 
    solution_text="$$ \frac{\partial z}{\partial x} = 10e^{5x} - 8xy^2 + \frac{1}{x}, \quad \frac{\partial z}{\partial y} = -8x^2y + \frac{1}{y} $$

$$ \frac{\partial^2 z}{\partial x^2} = 50e^{5x} - 8y^2 - \frac{1}{x^2}, \quad \frac{\partial^2 z}{\partial y^2} = -8x^2 - \frac{1}{y^2} $$

$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x} = -16xy $$" 
%}

{% include question_n_algebraic.html 
    id="q1k" 
    title="1k" 
    question_text="
$$z=x^3 \ln{y}$$" 
    n="5" 
    labels="$ \frac{\partial z}{\partial x}= $, $ \frac{\partial z}{\partial y}=$, $\frac{\partial^2 z}{\partial x^2}=$, $\frac{\partial^2 z}{\partial y^2}=$, $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}=$" 
    answers="3x^2\ln{y} || x^3/y || 6x\ln{y} || -x^3/y^2 || 3x^2/y " 
    solution_text="$$ \frac{\partial z}{\partial x} = 3x^2\ln{y}, \quad \frac{\partial z}{\partial y} = \frac{x^3}{y} $$

$$ \frac{\partial^2 z}{\partial x^2} = 6x\ln{y}, \quad \frac{\partial^2 z}{\partial y^2} = -\frac{x^3}{y^2} $$

$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x} = \frac{3x^2}{y} $$" 
%}

{% include question_n_algebraic.html 
    id="q1l" 
    title="1l" 
    question_text="
$$z=y(5-2x)$$" 
    n="5" 
    labels="$ \frac{\partial z}{\partial x}= $, $ \frac{\partial z}{\partial y}=$, $\frac{\partial^2 z}{\partial x^2}=$, $\frac{\partial^2 z}{\partial y^2}=$, $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}=$" 
    answers="-2y || 5-2x || 0 || 0 || -2 " 
    solution_text="$$ \frac{\partial z}{\partial x} = -2y, \quad \frac{\partial z}{\partial y} = 5-2x $$

$$ \frac{\partial^2 z}{\partial x^2} = 0, \quad \frac{\partial^2 z}{\partial y^2} = 0 $$

$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x} = -2 $$" 
%}

{% include question_n_algebraic.html 
    id="q1m" 
    title="1m" 
    question_text="
$$z=y(5-2x)^2$$" 
    n="5" 
    labels="$ \frac{\partial z}{\partial x}= $, $ \frac{\partial z}{\partial y}=$, $\frac{\partial^2 z}{\partial x^2}=$, $\frac{\partial^2 z}{\partial y^2}=$, $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}=$" 
    answers="-4y(5-2x) || (5-2x)^2 || 8y || 0 || -4(5-2x) " 
    solution_text="$$ \frac{\partial z}{\partial x} = -4y(5-2x), \quad \frac{\partial z}{\partial y} = (5-2x)^2 $$

$$ \frac{\partial^2 z}{\partial x^2} = 8y, \quad \frac{\partial^2 z}{\partial y^2} = 0 $$

$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x} = -4(5-2x) $$" 
%}

### Question 2

{% include question_n_algebraic.html 
    id="q2a" 
    title="2a" 
    question_text="Given the demand function: $$Q=50-2P+0.5I$$ where $Q$ is quantity demanded, $P$ is price, and $I$ is the income level. Find $\frac{\partial Q}{\partial P}$ and $\frac{\partial Q}{\partial I}$." 
    n="2" 
    labels="$ \frac{\partial Q}{\partial P}= $, $ \frac{\partial Q}{\partial I}= $" 
    answers="-2 || 0.5 " 
    solution_text="$$ \frac{\partial Q}{\partial P} = -2, \quad \frac{\partial Q}{\partial I} = 0.5 $$" 
%}

{% include question_dropdown.html 
    id="q2b" 
    title="2b" 
    question_text="Interpret the meanings of these partial derivatives." 
    solution_text="$\frac{\partial Q}{\partial P} = -2$ means that for every 1 unit increase in price $P$, quantity demanded $Q$ decreases by 2 units, holding income constant.

$\frac{\partial Q}{\partial I} = 0.5$ means that for every 1 unit increase in income $I$, quantity demanded $Q$ increases by 0.5 units, holding price constant." 
%}

{% include question_n_algebraic.html 
    id="q2c" 
    title="2c" 
    question_text="Suppose income changes by 100, what is the change in demand?" 
    n="1" 
    labels="$ \Delta Q = $" 
    answers="50" 
    solution_text="The change in demand is: 

$$ \Delta Q = \frac{\partial Q}{\partial I} \times \Delta I = 0.5 \times 100 = 50 $$ 

Demand increases by 50 units." 
%}

### Question 3

{% include question_n_algebraic.html 
    id="q3a" 
    title="3a" 
    question_text="Given $Q(L,K)=AL^{a}K^{1-a}$, where $Q$ is output, $L$ is labour, and $K$ is capital. Find the partial derivatives $\frac{\partial Q}{\partial L}$ and $\frac{\partial Q}{\partial K}$." 
    n="2" 
    labels="$ \frac{\partial Q}{\partial L}= $, $ \frac{\partial Q}{\partial K}= $" 
    answers="Aa L^{a-1}K^{1-a} || A(1-a)L^{a}K^{-a}" 
    solution_text="$$ \frac{\partial Q}{\partial L} = A a L^{a - 1} K^{1 - a}, \quad \frac{\partial Q}{\partial K} = A (1 - a) L^{a} K^{-a} $$" 
%}

{% include question_n_algebraic.html 
    id="q3b" 
    title="3b" 
    question_text="Let $A = 1$ and $\alpha = 0.3$. Evaluate your expressions at $L = 10$, $K = 5$, giving the answer correct to 3 decimal places." 
    n="2" 
    labels="$ \frac{\partial Q}{\partial L} \approx $, $ \frac{\partial Q}{\partial K} \approx $" 
    answers="0.185 || 0.862" 
    solution_text="At $L=10, K=5$:

$$ \frac{\partial Q}{\partial L} = 1 \cdot 0.3 \cdot 10^{-0.7} \cdot 5^{0.7} \approx 0.185 $$

$$ \frac{\partial Q}{\partial K} = 1 \cdot 0.7 \cdot 10^{0.3} \cdot 5^{-0.3} \approx 0.862 $$" 
%}

{% include question_dropdown.html 
    id="q3c" 
    title="3c" 
    question_text="Repeat for $L = 20$, $K = 5$. How does the value of $\frac{\partial Q}{\partial L}$ compare to before? Explain your answer using the formula from part (a)." 
    solution_text="At $L=20, K=5$:

$$ \frac{\partial Q}{\partial L} = 0.3 \cdot 20^{-0.7} \cdot 5^{0.7} \approx 0.113 $$

The value of $\frac{\partial Q}{\partial L}$ (the marginal product of labour) has decreased. This is because the exponent on $L$ in the formula for $\frac{\partial Q}{\partial L}$ is $a - 1 = -0.7$, which is negative. Therefore, as $L$ increases, $L^{a-1}$ decreases, demonstrating the principle of diminishing marginal returns to labour." 
%}

# First Order Conditions

### Question 4

For each of the functions $f(x,y)$ below, find:
(i) $f_x$ and $f_y$
(ii) the values of $x$, $y$, and $f(x,y)$ where both $f_x=0$ and $f_y=0$

{% include question_dropdown.html 
    id="q4a" 
    title="4a" 
    question_text="
$$f(x,y)=x^2+y^2$$" 
    solution_text="(i) $f_x = 2x, \quad f_y = 2y$

(ii) Setting $f_x = 0 \Rightarrow x=0$. Setting $f_y = 0 \Rightarrow y=0$.

The point is $(0,0)$, and $f(0,0) = 0^2+0^2=0$." 
%}

{% include question_dropdown.html 
    id="q4b" 
    title="4b" 
    question_text="
$$f(x,y)=x^2-2x-y^2-4y-3$$" 
    solution_text="(i) $f_x = 2x - 2, \quad f_y = -2y - 4$

(ii) Setting $2x-2=0 \Rightarrow x=1$. Setting $-2y-4=0 \Rightarrow y=-2$.

The point is $(1, -2)$, and $f(1,-2) = 1^2 - 2(1) - (-2)^2 - 4(-2) - 3 = 1 - 2 - 4 + 8 - 3 = 0$." 
%}

{% include question_dropdown.html 
    id="q4c" 
    title="4c" 
    question_text="
$$f(x,y)=x^2y-2xy^2+3xy+4$$" 
    solution_text="**Step 1: Compute the partial derivatives**

$$ f_x = 2xy - 2y^2 + 3y $$

$$ f_y = x^2 - 4xy + 3x $$

**Step 2: Set derivatives to zero and factor**

$$ y(2x - 2y + 3) = 0 \quad (1) $$

$$ x(x - 4y + 3) = 0 \quad (2) $$

**Step 3: Solve the system by cases**

#### Case 1: $y = 0$

If $y=0$, equation (1) is satisfied. Substitute $y=0$ into equation (2):

$$ x(x - 4(0) + 3) = 0 \implies x(x+3) = 0 $$

This gives two solutions: $x=0$ or $x=-3$. This leads to two critical points: $(0, 0)$ and $(-3, 0)$.

#### Case 2: $x = 0$

If $x=0$, equation (2) is satisfied. Substitute $x=0$ into equation (1):

$$ y(2(0) - 2y + 3) = 0 \implies y(-2y+3) = 0 $$

This gives two solutions: $y=0$ or $y=\frac{3}{2}$. This leads to two critical points: $(0, 0)$ and $(0, \frac{3}{2})$.

#### Case 3: $2x - 2y + 3 = 0$ and $x - 4y + 3 = 0$

Here we solve the system of linear equations. From the second equation, we can express $x$:

$$ x = 4y - 3 $$

Substitute this into the first equation:

$$ 2(4y - 3) - 2y + 3 = 0 $$

$$ 8y - 6 - 2y + 3 = 0 $$

$$ 6y - 3 = 0 \implies y = \frac{1}{2} $$

Now find the corresponding value for $x$:

$$ x = 4\left(\frac{1}{2}\right) - 3 = 2 - 3 = -1 $$

This gives the critical point $(-1, \frac{1}{2})$.

**Step 4: List points and evaluate the function**

Combining all cases, we have four unique critical points. Now we evaluate $f(x,y)$ at each:

* At $(0, 0)$: $f(0, 0) = 4$
* At $(-3, 0)$: $f(-3, 0) = (-3)^2(0) - 2(-3)(0)^2 + 3(-3)(0) + 4 = 4$
* At $(0, \frac{3}{2})$: $f(0, \frac{3}{2}) = (0)^2(\frac{3}{2}) - 2(0)(\frac{3}{2})^2 + 3(0)(\frac{3}{2}) + 4 = 4$
* At $(-1, \frac{1}{2})$: 

$$ f\left(-1, \frac{1}{2}\right) = (-1)^2\left(\frac{1}{2}\right) - 2(-1)\left(\frac{1}{2}\right)^2 + 3(-1)\left(\frac{1}{2}\right) + 4 $$

$$ = \frac{1}{2} - 2(-1)\left(\frac{1}{4}\right) - \frac{3}{2} + 4 $$

$$ = \frac{1}{2} + \frac{2}{4} - \frac{3}{2} + 4 = \frac{1}{2} + \frac{1}{2} - \frac{3}{2} + 4 = 1 - \frac{3}{2} + 4 = 3.5 $$" 
%}
