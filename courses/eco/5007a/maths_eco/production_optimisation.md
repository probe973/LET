---
layout: eco5007a
title: Production Optimisation
interactive: 1
---

# Production Optimisation

### Question 1

A company produces an item that can be manufactured on one of two machines (named A and B). Their primary concern is going to be costs. If $q_A$ are produced on machine A, the cost of production is:

$$TC_A = 10 + 20q_A$$

If $q_B$ are produced on machine B, the cost of production is:

$$TC_B = 2 + q_B^2$$

The company are about to produce 100 of the item.

{% include question_dropdown.html 
    id="q1a" 
    title="1a" 
    question_text="What is the total cost if all are produced on machine A?" 
    solution_text="All A: 

$$TC = 10 + 20 \times 100 = 2010$$" 
%}

{% include question_dropdown.html 
    id="q1b" 
    title="1b" 
    question_text="What is the total cost if all are produced on machine B?" 
    solution_text="All B: 

$$TC = 2 + 100^2 = 10002$$" 
%}

{% include question_dropdown.html 
    id="q1c" 
    title="1c" 
    question_text="What combination of machine A and machine B would minimize the total cost, and what would that total cost be?" 
    solution_text="Minimise costs $TC_A + TC_B$ subject to $q_A + q_B = 100$:

Lagrangian: 

$$L = 10 + 20q_A + 2 + q_B^2 + \lambda(100 - q_A - q_B)$$

FOC:

$$
\begin{align}
L_{q_A} &= 20 - \lambda = 0 \\
L_{q_B} &= 2q_B - \lambda = 0 \\
L_{\lambda} &= 100 - q_A - q_B = 0
\end{align}
$$

From FOC equation (1): 

$$\lambda = 20$$

Putting this into FOC equation (2): 

$$2q_B = 20 \implies q_B = 10$$

Putting this into FOC equation (3): 

$$100 - q_A - 10 = 0 \implies q_A = 90$$

Total cost for minimisation:

$$TC = TC_A + TC_B = 10 + 20 \times 90 + 2 + 10^2 = 1912$$" 
%}

### Question 2

A manufacturing firm has access to two aging factories, G and H, for manufacturing. The firm does $g$ items from G and $h$ items from H. The costs of the factory production are:

$$TC_G = 80 + 10g^{1.5}$$
$$TC_H = 100 + 12h^{1.25}$$

If the firm produces 420 items, what is the cost of manufacturing if:

{% include question_dropdown.html 
    id="q2a" 
    title="2a" 
    question_text="All are at G?" 
    solution_text="All are at G: 

$$TC = 80 + 10 \times 420^{1.5} \approx 86154$$" 
%}

{% include question_dropdown.html 
    id="q2b" 
    title="2b" 
    question_text="All are at H?" 
    solution_text="All are at H: 

$$TC = 100 + 12 \times 420^{1.25} \approx 22916$$" 
%}

{% include question_dropdown.html 
    id="q2c" 
    title="2c" 
    question_text="If they minimise the total cost and use both G and H?" 
    solution_text="Minimise the total cost and use both G and H:

$$TC = 80 + 10g^{1.5} + 100 + 12h^{1.25} \quad \text{subject to } g + h = 420$$

Lagrangian: 

$$L = 80 + 10g^{1.5} + 100 + 12h^{1.25} + \lambda(420 - g - h)$$

FOC:

$$
\begin{align}
L_g &= 15g^{0.5} - \lambda = 0 \\
L_h &= 15h^{0.25} - \lambda = 0 \\
L_{\lambda} &= 420 - g - h = 0
\end{align}
$$

Using first two FOC:

$$
\begin{align}
15g^{0.5} &= \lambda \\
15h^{0.25} &= \lambda
\end{align}
$$

Dividing these equations:

$$
\begin{align}
\frac{15g^{0.5}}{15h^{0.25}} &= 1 \\
g^{0.5} &= h^{0.25}
\end{align}
$$

Raising to power 4: 

$$g^2 = h$$

Substitute for $h$ in the constraint:

$$
\begin{align}
420 - g - g^2 &= 0 \\
\implies g^2 + g - 420 &= 0 \\
\implies (g - 20)(g + 21) &= 0 \\
\implies g &= 20 \quad (\text{since } g = -21 \text{ is not sensible}) \\
\implies h &= 400
\end{align}
$$

Total cost will be:

$$TC = 80 + 10 \times 20^{1.5} + 100 + 12 \times 400^{1.25} \approx 22451$$" 
%}
