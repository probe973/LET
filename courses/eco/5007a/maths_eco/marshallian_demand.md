---
layout: eco5007a
title: Marshallian Demand
---

# Marshallian Demand Questions

{% include question_dropdown.html 
    id="eco5007amemd01" 
    title="1" 
    question_text="Agent $A$'s preferences over goods $x$ and $y$ can be represented by the utility function $U(x,y) = x^{0.4}y^{0.6}$. Suppose $A$'s income is £300, the price of good $x$ is £10, and the price of good $y$ is £15. Use the Lagrangian method to find $A$'s Marshallian demand for $x$ and $y$ (i.e., calculate the specific quantities consumed)."
    solution_text="The utility maximization problem is:

$$
\begin{align*}
&\max_{x,y} U(x,y) = x^{0.4}y^{0.6} \\
&\text{subject to } 10x + 15y = 300
\end{align*}
$$

The Lagrangian function is:

$L(x, y, \lambda) = x^{0.4}y^{0.6} + \lambda(300 - 10x - 15y)$

First-Order Conditions (FOCs):

$$
\begin{align*}
\frac{\partial L}{\partial x} &= 0.4x^{-0.6}y^{0.6} - 10\lambda = 0 \implies 0.4x^{-0.6}y^{0.6} = 10\lambda \quad (1) \\
\frac{\partial L}{\partial y} &= 0.6x^{0.4}y^{-0.4} - 15\lambda = 0 \implies 0.6x^{0.4}y^{-0.4} = 15\lambda \quad (2) \\
\frac{\partial L}{\partial \lambda} &= 300 - 10x - 15y = 0 \implies 10x + 15y = 300 \quad (3)
\end{align*}
$$

Divide equation (1) by equation (2) to eliminate $\lambda$:

$$ \frac{0.4x^{-0.6}y^{0.6}}{0.6x^{0.4}y^{-0.4}} = \frac{10\lambda}{15\lambda} $$

Simplify the expression:

$$ \frac{2}{3} \frac{y^{0.6}y^{0.4}}{x^{0.6}x^{0.4}} = \frac{2}{3} $$

$$ \frac{2}{3} \frac{y}{x} = \frac{2}{3} $$

Multiply both sides by $\frac{3}{2}$ and $x$:

$$ y = x $$

Substitute $y=x$ into the budget constraint (3):

$$ 10x + 15(x) = 300 $$

$$ 25x = 300 $$

$$ x = \frac{300}{25} $$

$$ x = 12 $$

Since $y=x$, then $y=12$.

Therefore, Agent $A$'s Marshallian demand for $x$ is $12$ units and for $y$ is $12$ units.
"

%}

{% include question_dropdown.html 
    id="eco5007amemd02" 
    title="2" 
    question_text="Consumer $B$'s preferences over goods $x$ and $y$ can be represented by the utility function $U(x,y) = x^{0.25}y^{0.75}$. Suppose $B$'s income is £240, the price of good $x$ is £8, and the price of good $y$ is £4. Use the Lagrangian method to find $B$'s Marshallian demand for $x$ and $y$ (i.e., calculate the specific quantities consumed)."
    solution_text="The utility maximization problem is:

$$
\begin{align*}
&\max_{x,y} U(x,y) = x^{0.25}y^{0.75} \\
&\text{subject to } 8x + 4y = 240
\end{align*}
$$

The Lagrangian function is:

$L(x, y, \lambda) = x^{0.25}y^{0.75} + \lambda(240 - 8x - 4y)$

First-Order Conditions (FOCs):

$$
\begin{align*}
\frac{\partial L}{\partial x} &= 0.25x^{-0.75}y^{0.75} - 8\lambda = 0 \implies 0.25x^{-0.75}y^{0.75} = 8\lambda \quad (1) \\
\frac{\partial L}{\partial y} &= 0.75x^{0.25}y^{-0.25} - 4\lambda = 0 \implies 0.75x^{0.25}y^{-0.25} = 4\lambda \quad (2) \\
\frac{\partial L}{\partial \lambda} &= 240 - 8x - 4y = 0 \implies 8x + 4y = 240 \quad (3)
\end{align*}
$$

Divide equation (1) by equation (2) to eliminate $\lambda$:

$$ \frac{0.25x^{-0.75}y^{0.75}}{0.75x^{0.25}y^{-0.25}} = \frac{8\lambda}{4\lambda} $$

Simplify the expression:

$$ \frac{1}{3} \frac{y^{0.75}y^{0.25}}{x^{0.75}x^{0.25}} = 2 $$

$$ \frac{1}{3} \frac{y}{x} = 2 $$

Multiply both sides by $3x$:

$$ y = 6x $$

Substitute $y=6x$ into the budget constraint (3):

$$ 8x + 4(6x) = 240 $$

$$ 8x + 24x = 240 $$

$$ 32x = 240 $$

$$ x = \frac{240}{32} $$

$$ x = 7.5 $$

Since $y=6x$, then $y = 6 \times 7.5 = 45$.

Therefore, Consumer $B$'s Marshallian demand for $x$ is $7.5$ units and for $y$ is $45$ units.
"
%}

{% include question_dropdown.html 
    id="eco5007amemd03" 
    title="3" 
    question_text="Agent $C$'s preferences over goods $x$ and $y$ can be represented by the utility function $U(x,y) = x^{0.9}y^{0.1}$. Let $M$ denote $C$'s income, and $p_x$ and $p_y$ denote the prices of the respective goods. Use the Lagrangian method to find $C$'s Marshallian demand function for $y$."
    solution_text="The utility maximization problem is:

$$
\begin{align*}
&\max_{x,y} U(x,y) = x^{0.9}y^{0.1} \\
&\text{subject to } p_x x + p_y y = M
\end{align*}
$$

The Lagrangian function is:

$L(x, y, \lambda) = x^{0.9}y^{0.1} + \lambda(M - p_x x - p_y y)$

First-Order Conditions (FOCs):

$$
\begin{align*}
\frac{\partial L}{\partial x} &= 0.9x^{-0.1}y^{0.1} - \lambda p_x = 0 \implies 0.9x^{-0.1}y^{0.1} = \lambda p_x \quad (1) \\
\frac{\partial L}{\partial y} &= 0.1x^{0.9}y^{-0.9} - \lambda p_y = 0 \implies 0.1x^{0.9}y^{-0.9} = \lambda p_y \quad (2) \\
\frac{\partial L}{\partial \lambda} &= M - p_x x - p_y y = 0 \implies p_x x + p_y y = M \quad (3)
\end{align*}
$$

Divide equation (1) by equation (2) to eliminate $\lambda$:

$$ \frac{0.9x^{-0.1}y^{0.1}}{0.1x^{0.9}y^{-0.9}} = \frac{\lambda p_x}{\lambda p_y} $$

Simplify the expression:

$$ \frac{0.9}{0.1} \frac{y^{0.1}y^{0.9}}{x^{0.1}x^{0.9}} = \frac{p_x}{p_y} $$

$$ 9 \frac{y}{x} = \frac{p_x}{p_y} $$

Rearrange to express $x$ in terms of $y$ and prices (since we need demand for $y$):

$$ 9y p_y = x p_x $$

$$ x = \frac{9y p_y}{p_x} $$

Substitute this expression for $x$ into the budget constraint (3):

$$ p_x \left(\frac{9y p_y}{p_x}\right) + p_y y = M $$

$$ 9y p_y + p_y y = M $$

$$ 10y p_y = M $$

$$ y = \frac{M}{10p_y} $$

Therefore, Agent $C$'s Marshallian demand function for $y$ is $y = \frac{M}{10p_y}$.
"
%}

{% include question_dropdown.html 
    id="eco5007amemd04" 
    title="4" 
    question_text="Consumer $D$'s preferences over goods $x$ and $y$ can be represented by the utility function $U(x,y) = x^{a}y^{b}$, where $a$ and $b$ are positive constants. Let $M$ denote $D$'s income, and $p_x$ and $p_y$ denote the prices of the respective goods. Use the Lagrangian method to find $D$'s Marshallian demand function for $x$."
    solution_text="The utility maximization problem is:

$$
\begin{align*}
&\max_{x,y} U(x,y) = x^{a}y^{b} \\
&\text{subject to } p_x x + p_y y = M
\end{align*}
$$

The Lagrangian function is:

$L(x, y, \lambda) = x^{a}y^{b} + \lambda(M - p_x x - p_y y)$

First-Order Conditions (FOCs):

$$
\begin{align*}
\frac{\partial L}{\partial x} &= ax^{a-1}y^{b} - \lambda p_x = 0 \implies ax^{a-1}y^{b} = \lambda p_x \quad (1) \\
\frac{\partial L}{\partial y} &= bx^{a}y^{b-1} - \lambda p_y = 0 \implies bx^{a}y^{b-1} = \lambda p_y \quad (2) \\
\frac{\partial L}{\partial \lambda} &= M - p_x x - p_y y = 0 \implies p_x x + p_y y = M \quad (3)
\end{align*}
$$

Divide equation (1) by equation (2) to eliminate $\lambda$:

$$ \frac{ax^{a-1}y^{b}}{bx^{a}y^{b-1}} = \frac{\lambda p_x}{\lambda p_y} $$

Simplify the expression:

$$ \frac{a}{b} \frac{y^{b}y^{1}}{x^{a}x^{1-a}} = \frac{p_x}{p_y} $$

$$ \frac{a}{b} \frac{y}{x} = \frac{p_x}{p_y} $$

Rearrange to express $y$ in terms of $x$ and prices:

$$ ay p_y = bx p_x $$

$$ y = \frac{b p_x x}{a p_y} $$

Substitute this expression for $y$ into the budget constraint (3):

$$ p_x x + p_y \left(\frac{b p_x x}{a p_y}\right) = M $$

$$ p_x x + \frac{b p_x x}{a} = M $$

Factor out $p_x x$:

$$ p_x x \left(1 + \frac{b}{a}\right) = M $$

$$ p_x x \left(\frac{a+b}{a}\right) = M $$

Solve for $x$:

$$ x = \frac{M a}{p_x (a+b)} $$

Therefore, Consumer $D$'s Marshallian demand function for $x$ is $x = \frac{aM}{(a+b)p_x}$.
"
%}

{% include question_dropdown.html 
    id="eco5007amemd05" 
    title="5" 
    question_text="Agent $E$'s preferences over goods $x$ and $y$ can be represented by the utility function $U(x,y) = x + \ln(y)$. Let $M$ denote $E$'s income, and $p_x$ and $p_y$ denote the prices of the respective goods. Use the Lagrangian method to find $E$'s Marshallian demand functions for $x$ and $y$. Assume the consumer consumes positive amounts of both $x$ and $y$."
    solution_text="The utility maximization problem is:

$$
\begin{align*}
&\max_{x,y} U(x,y) = x + \ln(y) \\
&\text{subject to } p_x x + p_y y = M
\end{align*}
$$

The Lagrangian function is:

$L(x, y, \lambda) = x + \ln(y) + \lambda(M - p_x x - p_y y)$

First-Order Conditions (FOCs):

$$
\begin{align*}
\frac{\partial L}{\partial x} &= 1 - \lambda p_x = 0 \implies 1 = \lambda p_x \quad (1) \\
\frac{\partial L}{\partial y} &= \frac{1}{y} - \lambda p_y = 0 \implies \frac{1}{y} = \lambda p_y \quad (2) \\
\frac{\partial L}{\partial \lambda} &= M - p_x x - p_y y = 0 \implies p_x x + p_y y = M \quad (3)
\end{align*}
$$

From equation (1), solve for $\lambda$:

$$ \lambda = \frac{1}{p_x} $$

Substitute this expression for $\lambda$ into equation (2):

$$ \frac{1}{y} = \left(\frac{1}{p_x}\right) p_y $$

$$ \frac{1}{y} = \frac{p_y}{p_x} $$

Solve for $y$:

$$ y = \frac{p_x}{p_y} $$

Substitute this expression for $y$ into the budget constraint (3):

$$ p_x x + p_y \left(\frac{p_x}{p_y}\right) = M $$

$$ p_x x + p_x = M $$

Solve for $x$:

$$ p_x x = M - p_x $$

$$ x = \frac{M - p_x}{p_x} $$

Therefore, Agent $E$'s Marshallian demand functions are:

$$ x = \frac{M - p_x}{p_x} $$

$$ y = \frac{p_x}{p_y} $$

(Note: For $x > 0$, it must be that $M > p_x$.)
"
%}

{% include question_dropdown.html 
    id="eco5007amemd06" 
    title="6" 
    question_text="Consumer $F$'s preferences over goods $x$ and $y$ can be represented by the utility function $U(x,y) = xy + x$. Let $M$ denote $F$'s income, and $p_x$ and $p_y$ denote the prices of the respective goods. Use the Lagrangian method to find $F$'s Marshallian demand functions for $x$ and $y$. Assume the consumer consumes positive amounts of both $x$ and $y$."
    solution_text="The utility maximization problem is:

$$
\begin{align*}
&\max_{x,y} U(x,y) = xy + x = x(y+1) \\
&\text{subject to } p_x x + p_y y = M
\end{align*}
$$

The Lagrangian function is:

$L(x, y, \lambda) = xy + x + \lambda(M - p_x x - p_y y)$

First-Order Conditions (FOCs):

$$
\begin{align*}
\frac{\partial L}{\partial x} &= y + 1 - \lambda p_x = 0 \implies y + 1 = \lambda p_x \quad (1) \\
\frac{\partial L}{\partial y} &= x - \lambda p_y = 0 \implies x = \lambda p_y \quad (2) \\
\frac{\partial L}{\partial \lambda} &= M - p_x x - p_y y = 0 \implies p_x x + p_y y = M \quad (3)
\end{align*}
$$

From equation (2), solve for $\lambda$:

$$ \lambda = \frac{x}{p_y} $$

Substitute this expression for $\lambda$ into equation (1):

$$ y + 1 = \left(\frac{x}{p_y}\right) p_x $$

$$ y + 1 = \frac{p_x x}{p_y} $$

Rearrange to express $p_x x$:

$$ p_x x = p_y (y+1) $$

$$ p_x x = p_y y + p_y $$

Substitute this expression for $p_x x$ into the budget constraint (3):

$$ (p_y y + p_y) + p_y y = M $$

$$ 2p_y y + p_y = M $$

Solve for $y$:

$$ 2p_y y = M - p_y $$

$$ y = \frac{M - p_y}{2p_y} $$

Now, substitute this expression for $y$ back into the equation for $p_x x$:

$$ p_x x = p_y \left(\frac{M - p_y}{2p_y} + 1\right) $$

$$ p_x x = p_y \left(\frac{M - p_y + 2p_y}{2p_y}\right) $$

$$ p_x x = \frac{M + p_y}{2} $$

Solve for $x$:

$$ x = \frac{M + p_y}{2p_x} $$

Therefore, Consumer $F$'s Marshallian demand functions are:

$$ x = \frac{M + p_y}{2p_x} $$

$$ y = \frac{M - p_y}{2p_y} $$

(Note: For $y > 0$, it must be that $M > p_y$.)
"
%}
