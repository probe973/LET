---
layout: eco5007a
title: Partial Derivatives
---

# Partial Differentiation

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
    answers="2y^{1/2} || xy^{-\\frac{1}{2}} || 0 || -0.5xy^{-3/2} || y^{-1/2} " 
    solution_text="$$ \frac{\partial z}{\partial x} = 2y^{0.5}, \quad \frac{\partial z}{\partial y} = xy^{-0.5} $$

$$ \frac{\partial^2 z}{\partial x^2} = 0, \quad \frac{\partial^2 z}{\partial y^2} = -0.5xy^{-1.5} $$

$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x} = y^{-0.5} $$" 
%}




<script src="https://unpkg.com/mathlive"></script>
<script src="https://unpkg.com/@cortex-js/compute-engine"></script>
