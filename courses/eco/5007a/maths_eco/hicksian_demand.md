---
layout: eco5007a
title: Hicksian Demand
---

# Hicksian Demand Questions

{% include question_dropdown.html 
    id="eco5007amehd01" 
    title="1" 
    question_text="Consider a consumer with the utility function $U(x, y) = xy$, where $x$ and $y$ are two goods. Let $p_x$ and $p_y$ denote their respective prices, and let $\bar{U}$ be the target level of utility.
<br>

a) Set up and solve the expenditure minimization problem using a Lagrangian to derive the Hicksian demand functions for $x$ and $y$, $x_H(p_x, p_y, \bar{U})$ and $y_H(p_x, p_y, \bar{U})$.
<br>

b) Use the Hicksian demand functions to derive the general expenditure function, $E(p_x, p_y, \bar{U})$.
<br>

c) Using your solutions from parts (a) and (b) above, find the initial Hicksian demands, initial minimum expenditure, new Hicksian demands, new minimum expenditure, and compensating variation (CV) for the following situations:
<br>

i) Target utility $\bar{U} = 100$. Initial prices $p_x = 1, p_y = 1$. The price of $x$ then increases to $p_x = 4$, with $p_y$ remaining $1$.
<br>

ii) Target utility $\bar{U} = 1000$. Initial prices $p_x = 1, p_y = 1$. The price of $x$ then increases to $p_x = 5$, with $p_y$ remaining $1$.
<br>

iii) Target utility $\bar{U} = 36$. Initial prices $p_x = 1, p_y = 2$. The price of $x$ then increases to $p_x = 3$, with $p_y$ remaining $2$.
<br>

iv) Target utility $\bar{U} = 256$. Initial prices $p_x = 1, p_y = 1$. The price of $y$ then increases to $p_y = 4$, with $p_x$ remaining $1$."
    solution_text="a) Derive the Hicksian demand functions:

The expenditure minimization problem is to minimize $E = p_x x + p_y y$ subject to the utility constraint $U(x,y) = xy = \bar{U}$.

The Lagrangian is:

$$ L(x, y, \lambda) = p_x x + p_y y + \lambda(\bar{U} - xy) $$

The first-order conditions (FOCs) are:

$$
\begin{aligned}
\frac{\partial L}{\partial x} &= p_x - \lambda y = 0 \quad \implies p_x = \lambda y \quad (1) \\
\frac{\partial L}{\partial y} &= p_y - \lambda x = 0 \quad \implies p_y = \lambda x \quad (2) \\
\frac{\partial L}{\partial \lambda} &= \bar{U} - xy = 0 \quad \implies xy = \bar{U} \quad (3)
\end{aligned}
$$

Divide equation (1) by equation (2) to find the optimal ratio of goods:

$$
\begin{aligned}
\frac{p_x}{p_y} &= \frac{\lambda y}{\lambda x} = \frac{y}{x}
\end{aligned}
$$

This implies 

$$ y = \frac{p_x}{p_y} x $$

Substitute this expression for $y$ into the utility constraint (3):

$$
\begin{aligned}
x \left(\frac{p_x}{p_y} x\right) &= \bar{U} \\
\frac{p_x}{p_y} x^2 &= \bar{U}
\end{aligned}
$$

Solving for $x$, we get the Hicksian demand for $x$:

$$ x_H(p_x, p_y, \bar{U}) = \sqrt{\frac{p_y \bar{U}}{p_x}} $$

Substitute $x_H$ back into $y = \frac{p_x}{p_y} x$ to find the Hicksian demand for $y$:

$$
\begin{aligned}
y_H(p_x, p_y, \bar{U}) &= \frac{p_x}{p_y} \sqrt{\frac{p_y \bar{U}}{p_x}} \\
&= \sqrt{\frac{p_x^2 p_y \bar{U}}{p_y^2 p_x}} \\
&= \sqrt{\frac{p_x \bar{U}}{p_y}}
\end{aligned}
$$

b) Derive the general expenditure function:

The expenditure function $E(p_x, p_y, \bar{U})$ is obtained by substituting the Hicksian demand functions ($x_H$ and $y_H$) back into the objective function $E = p_x x + p_y y$:

$$
\begin{aligned}
E(p_x, p_y, \bar{U}) &= p_x \left(\sqrt{\frac{p_y \bar{U}}{p_x}}\right) + p_y \left(\sqrt{\frac{p_x \bar{U}}{p_y}}\right) \\
&= \sqrt{p_x^2 \frac{p_y \bar{U}}{p_x}} + \sqrt{p_y^2 \frac{p_x \bar{U}}{p_y}} \\
&= \sqrt{p_x p_y \bar{U}} + \sqrt{p_x p_y \bar{U}} \\
&= 2\sqrt{p_x p_y \bar{U}}
\end{aligned}
$$

c) Numerical Applications (using solutions from parts (a) and (b)):

i) Scenario: $\bar{U} = 100$. Initial $p_x = 1, p_y = 1$; New $p_x = 4$:

Initial Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H &= \sqrt{\frac{1 \cdot 100}{1}} = 10 \\
y_H &= \sqrt{\frac{1 \cdot 100}{1}} = 10 \\
E_0 &= 2 \sqrt{1 \cdot 1 \cdot 100} = 20
\end{aligned}
$$

New Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H' &= \sqrt{\frac{1 \cdot 100}{4}} = 5 \\
y_H' &= \sqrt{\frac{4 \cdot 100}{1}} = 20 \\
E_1 &= 2 \sqrt{4 \cdot 1 \cdot 100} = 40
\end{aligned}
$$

Compensating Variation (CV):

$$
CV = E_1 - E_0 = 40 - 20 = 20
$$

ii) Scenario: $\bar{U} = 1000$. Initial $p_x = 1, p_y = 1$; New $p_x = 5$:

Initial Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H &= 10\sqrt{10} \approx 31.62 \\
y_H &= 10\sqrt{10} \approx 31.62 \\
E_0 &= 20\sqrt{10} \approx 63.25
\end{aligned}
$$

New Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H' &= 10\sqrt{2} \approx 14.14 \\
y_H' &= 50\sqrt{2} \approx 70.71 \\
E_1 &= 100\sqrt{2} \approx 141.42
\end{aligned}
$$

Compensating Variation (CV):

$$
CV = 100\sqrt{2} - 20\sqrt{10} \approx 78.17
$$

iii) Scenario: $\bar{U} = 36$. Initial $p_x = 1, p_y = 2$; New $p_x = 3$:

Initial Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H &= 6\sqrt{2} \approx 8.49 \\
y_H &= 3\sqrt{2} \approx 4.24 \\
E_0 &= 12\sqrt{2} \approx 16.97
\end{aligned}
$$

New Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H' &= 2\sqrt{6} \approx 4.90 \\
y_H' &= 3\sqrt{6} \approx 7.35 \\
E_1 &= 12\sqrt{6} \approx 29.39
\end{aligned}
$$

Compensating Variation (CV):

$$
CV = 12(\sqrt{6} - \sqrt{2}) \approx 12.42
$$

iv) Scenario: $\bar{U} = 256$. Initial $p_x = 1, p_y = 1$; New $p_y = 4$:

Initial Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H &= 16 \\
y_H &= 16 \\
E_0 &= 32
\end{aligned}
$$

New Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H' &= 32 \\
y_H' &= 8 \\
E_1 &= 64
\end{aligned}
$$

Compensating Variation (CV):

$$
CV = 32
$$
"
%}

{% include question_dropdown.html 
    id="eco5007amehd02" 
    title="2" 
    question_text="Consider a consumer with the utility function $U(x,y)=x^{1/2}y^{1/2}$. Let $p_{x}$ and $p_{y}$ denote the prices of $x$ and $y$, and let $\bar{U}$ be the target level of utility.
<br>

a) Set up and solve the expenditure minimization problem using a Lagrangian to derive the Hicksian demand functions for $x$ and $y$, $x_H(p_x, p_y, \bar{U})$ and $y_H(p_x, p_y, \bar{U})$.
<br>

b) Use the Hicksian demand functions to derive the general expenditure function, $E(p_x, p_y, \bar{U})$.
<br>

c) Using your solutions from parts (a) and (b) above, find the initial Hicksian demands, initial minimum expenditure, new Hicksian demands, new minimum expenditure, and compensating variation (CV) for the following situations:
<br>

i) Target utility $\bar{U} = 16$. Initial prices $p_x = 1, p_y = 1$. The price of $x$ then increases to $p_x = 4$, with $p_y$ remaining $1$.
<br>

ii) Target utility $\bar{U} = 25$. Initial prices $p_x = 2, p_y = 2$. The price of $y$ then increases to $p_y = 8$, with $p_x$ remaining $2$.
<br>

iii) Target utility $\bar{U} = 81$. Initial prices $p_x = 3, p_y = 1$. The price of $y$ then increases to $p_y = 3$, with $p_x$ remaining $3$."
    solution_text="a) Derive the Hicksian demand functions:

The expenditure minimization problem is to minimize $E = p_x x + p_y y$ subject to $x^{1/2}y^{1/2} = \bar{U}$.

The Lagrangian is:

$$ L(x, y, \lambda) = p_x x + p_y y + \lambda(\bar{U} - x^{1/2}y^{1/2}) $$

The first-order conditions (FOCs) are:

$$
\begin{aligned}
\frac{\partial L}{\partial x} &= p_x - \lambda \cdot \frac{1}{2}x^{-1/2}y^{1/2} = 0 \quad \implies p_x = \lambda \frac{1}{2}\sqrt{\frac{y}{x}} \quad (1) \\
\frac{\partial L}{\partial y} &= p_y - \lambda \cdot \frac{1}{2}x^{1/2}y^{-1/2} = 0 \quad \implies p_y = \lambda \frac{1}{2}\sqrt{\frac{x}{y}} \quad (2) \\
\frac{\partial L}{\partial \lambda} &= \bar{U} - x^{1/2}y^{1/2} = 0 \quad \implies x^{1/2}y^{1/2} = \bar{U} \quad (3)
\end{aligned}
$$

Divide equation (1) by equation (2):

$$
\begin{aligned}
\frac{p_x}{p_y} &= \frac{\lambda \frac{1}{2} \sqrt{y/x}}{\lambda \frac{1}{2} \sqrt{x/y}} \\
&= \frac{\sqrt{y/x}}{\sqrt{x/y}} \\
&= \sqrt{\frac{y}{x} \cdot \frac{y}{x}} = \sqrt{\left(\frac{y}{x}\right)^2} = \frac{y}{x}
\end{aligned}
$$

This implies 

$$ y = \frac{p_x}{p_y} x $$

Substitute this relationship into the utility constraint (3):

$$
\begin{aligned}
x^{1/2} \left(\frac{p_x}{p_y} x\right)^{1/2} &= \bar{U} \\
x^{1/2} \left(\frac{p_x}{p_y}\right)^{1/2} x^{1/2} &= \bar{U} \\
x^{(1/2+1/2)} \left(\frac{p_x}{p_y}\right)^{1/2} &= \bar{U} \\
x \left(\frac{p_x}{p_y}\right)^{1/2} &= \bar{U}
\end{aligned}
$$

Solving for $x$, we get the Hicksian demand for $x$:

$$ x_H(p_x, p_y, \bar{U}) = \bar{U}\left(\frac{p_y}{p_x}\right)^{1/2} = \bar{U}\sqrt{\frac{p_y}{p_x}} $$

Substitute $x_H$ back into $y = \frac{p_x}{p_y} x$ to find the Hicksian demand for $y$:

$$
\begin{aligned}
y_H(p_x, p_y, \bar{U}) &= \frac{p_x}{p_y} \left(\bar{U}\sqrt{\frac{p_y}{p_x}}\right) \\
&= \bar{U}\sqrt{\frac{p_x^2 p_y}{p_y^2 p_x}} \\
&= \bar{U}\sqrt{\frac{p_x}{p_y}}
\end{aligned}
$$

b) Derive the general expenditure function: The expenditure function $E(p_x, p_y, \bar{U})$ is obtained by substituting the Hicksian demand functions into $E = p_x x_H + p_y y_H$:

$$
\begin{aligned}
E(p_x, p_y, \bar{U}) &= p_x \left(\bar{U}\sqrt{\frac{p_y}{p_x}}\right) + p_y \left(\bar{U}\sqrt{\frac{p_x}{p_y}}\right) \\
&= \bar{U}\sqrt{p_x^2 \frac{p_y}{p_x}} + \bar{U}\sqrt{p_y^2 \frac{p_x}{p_y}} \\
&= \bar{U}\sqrt{p_x p_y} + \bar{U}\sqrt{p_x p_y} \\
&= 2\bar{U}\sqrt{p_x p_y}
\end{aligned}
$$

c) Numerical Applications (using solutions from parts (a) and (b)):

i) Scenario: $\bar{U} = 16$ Initial $p_x = 1$ $p_y = 1$; New $p_x = 4$:

Initial Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H &= 16\sqrt{\frac{1}{1}} = 16 \\
y_H &= 16\sqrt{\frac{1}{1}} = 16 \\
E_0 &= 2 \cdot 16\sqrt{1 \cdot 1} = 32 \cdot 1 = 32
\end{aligned}
$$

New Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H' &= 16\sqrt{\frac{1}{4}} = 16 \cdot \frac{1}{2} = 8 \\
y_H' &= 16\sqrt{\frac{4}{1}} = 16 \cdot 2 = 32 \\
E_1 &= 2 \cdot 16\sqrt{4 \cdot 1} = 32\sqrt{4} = 32 \cdot 2 = 64
\end{aligned}
$$

Compensating Variation (CV):

$$
CV = E_1 - E_0 = 64 - 32 = 32
$$

ii) Scenario: $\bar{U} = 25$. Initial $p_x = 2$, $p_y = 2$; New $p_y = 8$:

Initial Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H &= 25\sqrt{\frac{2}{2}} = 25 \\
y_H &= 25\sqrt{\frac{2}{2}} = 25 \\
E_0 &= 2 \cdot 25\sqrt{2 \cdot 2} = 50\sqrt{4} = 50 \cdot 2 = 100
\end{aligned}
$$

New Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H' &= 25\sqrt{\frac{8}{2}} = 25\sqrt{4} = 25 \cdot 2 = 50 \\
y_H' &= 25\sqrt{\frac{2}{8}} = 25\sqrt{\frac{1}{4}} = 25 \cdot \frac{1}{2} = 12.5 \\
E_1 &= 2 \cdot 25\sqrt{2 \cdot 8} = 50\sqrt{16} = 50 \cdot 4 = 200
\end{aligned}
$$

Compensating Variation (CV):

$$
CV = E_1 - E_0 = 200 - 100 = 100
$$

iii) Scenario: $\bar{U} = 81$ Initial $p_x = 3$, $p_y = 1$; New $p_y = 3$:

Initial Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H &= 81\sqrt{\frac{1}{3}} = \frac{81}{\sqrt{3}} = 27\sqrt{3} \approx 46.77 \\
y_H &= 81\sqrt{\frac{3}{1}} = 81\sqrt{3} \approx 140.29 \\
E_0 &= 2 \cdot 81\sqrt{3 \cdot 1} = 162\sqrt{3} \approx 281.04
\end{aligned}
$$

New Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H' &= 81\sqrt{\frac{3}{3}} = 81 \\
y_H' &= 81\sqrt{\frac{3}{3}} = 81 \\
E_1 &= 2 \cdot 81\sqrt{3 \cdot 3} = 162\sqrt{9} = 162 \cdot 3 = 486
\end{aligned}
$$

Compensating Variation (CV):

$$
CV = E_1 - E_0 = 486 - 162\sqrt{3} \approx 486 - 281.04 = 204.96
$$
"
%}

{% include question_dropdown.html 
    id="eco5007amehd03" 
    title="3" 
    question_text="Consider a consumer with the utility function $U(x,y)=x^{0.4}y^{0.6}$. Let $p_{x}$ and $p_{y}$ denote the prices of $x$ and $y$, and let $\bar{U}$ be the target level of utility.
<br>

a) Set up and solve the expenditure minimization problem using a Lagrangian to derive the Hicksian demand functions for $x$ and $y$, $x_H(p_x, p_y, \bar{U})$ and $y_H(p_x, p_y, \bar{U})$.
<br>

b) Use the Hicksian demand functions to derive the general expenditure function, $E(p_x, p_y, \bar{U})$.
<br>

c) Using your solutions from parts (a) and (b) above, find the initial Hicksian demands, initial minimum expenditure, new Hicksian demands, new minimum expenditure, and compensating variation (CV) for the following situations:
<br>

i) Target utility $\bar{U} = 20$. Initial prices $p_x = 1, p_y = 2$. The price of $x$ then increases to $p_x = 2$, with $p_y$ remaining $2$.
<br>

ii) Target utility $\bar{U} = 50$. Initial prices $p_x = 4, p_y = 2$. The price of $x$ then decreases to $p_x = 1$, with $p_y$ remaining $2$.
<br>

iii) Target utility $\bar{U} = 100$. Initial prices $p_x = 2, p_y = 1$. The price of $y$ then increases to $p_y = 3$, with $p_x$ remaining $2$."
    solution_text="a) Derive the Hicksian demand functions:

The expenditure minimization problem is to minimize $E = p_x x + p_y y$ subject to the utility constraint $U(x,y) = x^{0.4}y^{0.6} = \bar{U}$.

The Lagrangian is:

$$ L(x, y, \lambda) = p_x x + p_y y + \lambda(\bar{U} - x^{0.4}y^{0.6}) $$

The first-order conditions (FOCs) are:

$$
\begin{aligned}
\frac{\partial L}{\partial x} &= p_x - \lambda(0.4)x^{-0.6}y^{0.6} = 0 \quad \implies p_x = \lambda(0.4)\left(\frac{y}{x}\right)^{0.6} \quad (1) \\
\frac{\partial L}{\partial y} &= p_y - \lambda(0.6)x^{0.4}y^{-0.4} = 0 \quad \implies p_y = \lambda(0.6)\left(\frac{x}{y}\right)^{0.4} \quad (2) \\
\frac{\partial L}{\partial \lambda} &= \bar{U} - x^{0.4}y^{0.6} = 0 \quad \implies x^{0.4}y^{0.6} = \bar{U} \quad (3)
\end{aligned}
$$

Divide equation (1) by equation (2) to find the optimal ratio of goods:

$$
\begin{aligned}
\frac{p_x}{p_y} &= \frac{0.4 y^{0.6} x^{-0.6}}{0.6 x^{0.4} y^{-0.4}} \\
&= \frac{0.4}{0.6} \left(\frac{y^{0.6} y^{0.4}}{x^{0.6} x^{0.4}}\right) \\
&= \frac{2}{3} \frac{y}{x}
\end{aligned}
$$

This implies 

$$ y = \frac{3p_x}{2p_y} x $$

Substitute this expression for $y$ into the utility constraint (3):

$$
\begin{aligned}
x^{0.4} \left(\frac{3p_x}{2p_y} x\right)^{0.6} &= \bar{U} \\
x^{0.4} x^{0.6} \left(\frac{3p_x}{2p_y}\right)^{0.6} &= \bar{U} \\
x \left(\frac{3p_x}{2p_y}\right)^{0.6} &= \bar{U}
\end{aligned}
$$

Solving for $x$, we get the Hicksian demand for $x$:

$$ x_H(p_x, p_y, \bar{U}) = \bar{U} \left(\frac{2p_y}{3p_x}\right)^{0.6} $$

Substitute $x = \frac{2p_y}{3p_x} y$ (derived from $y = \frac{3p_x}{2p_y} x$) into the utility constraint:

$$
\begin{aligned}
\left(\frac{2p_y}{3p_x} y\right)^{0.4} y^{0.6} &= \bar{U} \\
y^{0.4} y^{0.6} \left(\frac{2p_y}{3p_x}\right)^{0.4} &= \bar{U} \\
y \left(\frac{2p_y}{3p_x}\right)^{0.4} &= \bar{U}
\end{aligned}
$$

Solving for $y$, we get the Hicksian demand for $y$:

$$ y_H(p_x, p_y, \bar{U}) = \bar{U} \left(\frac{3p_x}{2p_y}\right)^{0.4} $$

b) Derive the general expenditure function:

The expenditure function $E(p_x, p_y, \bar{U})$ is found by substituting these Hicksian demand functions into $E = p_x x_H + p_y y_H$:

$$
\begin{aligned}
E(p_x, p_y, \bar{U}) &= p_x \left(\bar{U} \left(\frac{2p_y}{3p_x}\right)^{0.6}\right) + p_y \left(\bar{U} \left(\frac{3p_x}{2p_y}\right)^{0.4}\right) \\
&= \bar{U} \left[ p_x \frac{2^{0.6} p_y^{0.6}}{3^{0.6} p_x^{0.6}} + p_y \frac{3^{0.4} p_x^{0.4}}{2^{0.4} p_y^{0.4}} \right] \\
&= \bar{U} \left[ p_x^{0.4} p_y^{0.6} \left(\frac{2}{3}\right)^{0.6} + p_x^{0.4} p_y^{0.6} \left(\frac{3}{2}\right)^{0.4} \right] \\
&= \bar{U} p_x^{0.4} p_y^{0.6} \left[ \left(\frac{2}{3}\right)^{0.6} + \left(\frac{3}{2}\right)^{0.4} \right]
\end{aligned}
$$

c) Numerical Applications (using solutions from parts (a) and (b)):

i) Scenario: $\bar{U} = 20$. Initial $p_x = 1, p_y = 2$; New $p_x = 2$:

Initial Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H &= 20 \left(\frac{2 \cdot 2}{3 \cdot 1}\right)^{0.6} = 20 \left(\frac{4}{3}\right)^{0.6} \approx 23.156 \\
y_H &= 20 \left(\frac{3 \cdot 1}{2 \cdot 2}\right)^{0.4} = 20 \left(\frac{3}{4}\right)^{0.4} \approx 17.758 \\
E_0 &= 20 \cdot (1)^{0.4}(2)^{0.6} \left[ \left(\frac{2}{3}\right)^{0.6} + \left(\frac{3}{2}\right)^{0.4} \right] \approx 65.885
\end{aligned}
$$

New Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H' &= 20 \left(\frac{2 \cdot 2}{3 \cdot 2}\right)^{0.6} = 20 \left(\frac{2}{3}\right)^{0.6} \approx 15.202 \\
y_H' &= 20 \left(\frac{3 \cdot 2}{2 \cdot 2}\right)^{0.4} = 20 \left(\frac{3}{2}\right)^{0.4} \approx 23.036 \\
E_1 &= 20 \cdot (2)^{0.4}(2)^{0.6} \left[ \left(\frac{2}{3}\right)^{0.6} + \left(\frac{3}{2}\right)^{0.4} \right] \approx 131.77
\end{aligned}
$$

Compensating Variation (CV):

$$
CV = E_1 - E_0 \approx 131.77 - 65.885 = 65.885
$$

ii) Scenario: $\bar{U} = 50$. Initial $p_x = 4, p_y = 2$; New $p_x = 1$:

Initial Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H &= 50 \left(\frac{2 \cdot 2}{3 \cdot 4}\right)^{0.6} = 50 \left(\frac{1}{3}\right)^{0.6} \approx 24.035 \\
y_H &= 50 \left(\frac{3 \cdot 4}{2 \cdot 2}\right)^{0.4} = 50 (3)^{0.4} \approx 77.59 \\
E_0 &= 50 \cdot (4)^{0.4}(2)^{0.6} \left[ \left(\frac{2}{3}\right)^{0.6} + \left(\frac{3}{2}\right)^{0.4} \right] \approx 286.79
\end{aligned}
$$

New Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H' &= 50 \left(\frac{2 \cdot 2}{3 \cdot 1}\right)^{0.6} = 50 \left(\frac{4}{3}\right)^{0.6} \approx 57.89 \\
y_H' &= 50 \left(\frac{3 \cdot 1}{2 \cdot 2}\right)^{0.4} = 50 \left(\frac{3}{4}\right)^{0.4} \approx 44.395 \\
E_1 &= 50 \cdot (1)^{0.4}(2)^{0.6} \left[ \left(\frac{2}{3}\right)^{0.6} + \left(\frac{3}{2}\right)^{0.4} \right] \approx 164.71
\end{aligned}
$$

Compensating Variation (CV):

$$
CV = E_1 - E_0 \approx 164.71 - 286.79 = -122.08
$$

iii) Scenario: $\bar{U} = 100$. Initial $p_x = 2, p_y = 1$; New $p_y = 3$:

Initial Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H &= 100 \left(\frac{2 \cdot 1}{3 \cdot 2}\right)^{0.6} = 100 \left(\frac{1}{3}\right)^{0.6} \approx 48.07 \\
y_H &= 100 \left(\frac{3 \cdot 2}{2 \cdot 1}\right)^{0.4} = 100 (3)^{0.4} \approx 155.18 \\
E_0 &= 100 \cdot (2)^{0.4}(1)^{0.6} \left[ \left(\frac{2}{3}\right)^{0.6} + \left(\frac{3}{2}\right)^{0.4} \right] \approx 286.79
\end{aligned}
$$

New Hicksian demands and minimum expenditure:

$$
\begin{aligned}
x_H' &= 100 \left(\frac{2 \cdot 3}{3 \cdot 2}\right)^{0.6} = 100 (1)^{0.6} = 100 \\
y_H' &= 100 \left(\frac{3 \cdot 2}{2 \cdot 3}\right)^{0.4} = 100 (1)^{0.4} = 100 \\
E_1 &= 100 \cdot (2)^{0.4}(3)^{0.6} \left[ \left(\frac{2}{3}\right)^{0.6} + \left(\frac{3}{2}\right)^{0.4} \right] \approx 500
\end{aligned}
$$

Compensating Variation (CV):

$$
CV = E_1 - E_0 \approx 500 - 286.79 = 213.21
$$
"
%}
