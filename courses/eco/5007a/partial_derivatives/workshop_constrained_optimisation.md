---
layout: eco5007a
title: Constrained Optimisation
interactive: 1
---

# Constrained Optimisation

{% include question_dropdown.html 
    id="q1" 
    title="1" 
    question_text="
Given the function:

$$z=x^2+2xy+4y+10$$
    
with constraint:
    
$$x+y=100$$
    
Optimise the function $z$ subject to the constraint by:
    
- Writing down the Langrangian function
- Writing down the three first order conditions
- Solving the first order condictions to find the optimal $x$, $y$, and the value of $z$" 
    
    solution_text="Given the function:
    
$$z=x^2+2xy+4y+10$$
    
with constraint:
    
$$x+y=100$$
    
Lagrangian:
    
$$L(x,y,\lambda)=x^2+2xy+4y+10+\lambda(100-x-y)$$

FOC:
    
$$
\begin{align*}
L_x&=2x+2y-\lambda=0\\
L_y&=2x+4-\lambda=0\\
L_{\lambda}&=100-x-y=0
\end{align*}
$$
    
Make $\lambda$ the subject of $L_x$ and $L_y$ and divide:
    
$$
\begin{align*}
2x+2y&=\lambda\\
2x+4&=\lambda\\
\frac{2x+2y}{2x+4}&=\frac{\lambda}{\lambda}
\end{align*}
$$
    
Rearranging gives:
    
$$2x+2y=2x+4 \implies 2y=4 \implies y=2$$
    
Substitute into constraint:
    
$$x+2=100 \implies x=98$$
    
Substitute into $z$:
    
$$z=98^2+2\times98+4\times2+10=9818$$
    
Optimal solution $x=98$, $y=2$, $z=9818$" 
%}

{% include question_dropdown.html 
    id="q2" 
    title="2" 
    question_text="
Given the function:

$$z=12x+4y$$
    
with constraint:
    
$$x^{0.3}y^{0.7}=1000$$
    
Optimise the function $z$ subject to the constraint." 
    
    solution_text="
$$L=12x+4y+\lambda(1000-x^{0.3}y^{0.7})$$

$$
\begin{align*}
L_x&=12-0.3\lambda x^{-0.7}y^{0.7}=0\\
L_y&=4-0.7\lambda x^{0.3}y^{-0.3}=0\\
L_{\lambda}&=1000-x^{0.3}y^{0.7}=0
\end{align*}
$$

$$
\begin{align*}
12&=0.3\lambda x^{-0.7}y^{0.7}\\
4&=0.7\lambda x^{0.3}y^{-0.3}
\end{align*}
$$

$$
\begin{align*}
    \frac{12}{4}&=\frac{3y}{7x}\\
    y&=7x
\end{align*}
$$

Substitute $y=7x$ into constraint and solve:

$$
\begin{align*}
    x^{0.3}(7x)^{0.7}&=1000\\
    7^{0.7}x&=1000\\
    x&=\frac{1000}{7^{0.7}}=256.1\\
    y&=7x=1792.8\\
    z&=12x+4y=10244
\end{align*}
$$

Optimal solution $x=256.1$, $y=1792.8$, $z=10244$" 
%}

{% include question_dropdown.html 
    id="q3" 
    title="3" 
    question_text="
Given the function:

$$z=x^{0.6}y^{0.4}$$
    
with constraint:
    
$$5x+8y=120$$
    
Optimise the function $z$ subject to the constraint." 
    
    solution_text="
$$L=x^{0.6}y^{0.4}+\lambda(120-5x-8y)$$

$$
\begin{align*}
    L_x&=0.6x^{-0.4}y^{0.4}-5\lambda=0\\
    L_y&=0.4x^{0.6}y^{-0.6}-8\lambda=0\\
    L_{\lambda}&=120-5x-8y=0
\end{align*}
$$

$$
\begin{align*}
0.6x^{-0.4}y^{0.4}&=5\lambda\\
0.4x^{0.6}y^{-0.6}&=8\lambda
\end{align*}
$$

$$
\begin{align*}
    \frac{3y}{2x}&=\frac{5}{8}\\
    y&=\frac{5}{12}x
\end{align*}
$$
    
Substitute into constraint:

$$
\begin{align*}
    5x+8 \left(\frac{5}{12}x \right)&=120\\
    5x+\frac{10}{3}x&=120\\
    \frac{25}{3}x&=120\\
    x&=14.4\\
    y&=6\\
    z&=10.1
\end{align*}
$$
" 
%}

{% include question_dropdown.html 
    id="q4" 
    title="4" 
    question_text="
A consumer has the following utility function for two goods $x$ and $y$:
    
$$U(x,y)=x^{0.5}y^{0.5}$$
    
The consumer has an income of 100.  The price of good $x$ is $p_x=2$ and the price of good $y$ is $p_y=4$.

a. Write down the budget constraint for the consumer.

b. Maximise the customer's utility, subject to their budget constraint." 
    
    solution_text="
Constraint: $2x+4y=100$
    
$$L=x^{0.5}y^{0.5}+\lambda(100-2x-4y)$$

$$
\begin{align*}
    L_x&=0.5x^{-0.5}y^{0.5}-2\lambda=0\\
    L_y&=0.5x^{0.5}y^{-0.5}-4\lambda=0\\
    L_{\lambda}&=100-2x-4y=0
\end{align*}
$$

$$
\begin{align*}
    \frac{0.5x^{-0.5}y^{0.5}}{0.5x^{0.5}y^{-0.5}}&=\frac{2\lambda}{4\lambda}\\
    \frac{y}{x}&=\frac{1}{2}\\
    x&=2y
\end{align*}
$$

Substitute into constraint and solve:

$$
\begin{align*}
    2(2y)+4y&=100\\
    8y&=100\\
    y&=12.5\\
    x&=25\\
    U&=17.7
\end{align*}
$$
" 
%}


{% include question_dropdown.html 
    id="q5" 
    title="5" 
    question_text="
The production function for output ($Q$), for two inputs of labour ($L$) and capital ($K$) is given by:

$$Q=L^{\alpha}K^{\beta}$$

The cost of labour is 10 and the cost of capital is 20.

a. Given a production constraint of an output of 100 units, use the Langrangian method to show that minimum cost occurs when:

$$L=\frac{2\alpha K}{\beta}$$

to give:

$$K^*=\left( 100 \left(\frac{2\alpha}{\beta} \right)^{-\alpha} \right)^{\frac{1}{\alpha+\beta}}$$

$$L^*=\left( 100 \left(\frac{2\alpha}{\beta} \right)^{\beta} \right)^{\frac{1}{\alpha+\beta}}$$
        
b. Find the optimal values and the minimum cost when:

> i. $\alpha=\beta=0.5$

> ii. $\alpha=0.3$, $\beta=0.7$" 
    
    solution_text="
    
Through this solution, some rules of indices will be used:

$$
\begin{align*}
    a^m \times a^n &= a^{m+n} \\
    a^m \div a^n &= a^{m-n} \\
    (a^m)^n &= a^{mn} \\
    a^1 &= a \\
    a^mb^m &= (ab)^m
\end{align*}
$$
    
Production constraint of an output of 100 units
        
Minimize $C=10L+20K$ subject to $L^{\alpha}K^{\beta}=100$
        
$$\mathcal{L}=10L+20K+\lambda(100-L^{\alpha}K^{\beta})$$
        
$$
\begin{align*}
    \mathcal{L}_L&=10-\lambda \alpha L^{\alpha -1}K^{\beta}=0\\
    \mathcal{L}_K&=20-\lambda \beta L^{\alpha}K^{\beta -1}=0\\
    \mathcal{L}_{\lambda}&=100-L^{\alpha}K^{\beta}=0
\end{align*}
$$

$$
\begin{align*}
    \frac{10}{20}&=\frac{\lambda \alpha L^{\alpha -1}K^{\beta}}{\lambda \beta L^{\alpha}K^{\beta -1}}\\
    \frac{1}{2}&=\frac{\alpha K}{\beta L}\\
    L&=\frac{2\alpha K}{\beta}
\end{align*}
$$

Substitute into constraint and solve:

$$
\begin{align*}
    \left( \frac{2 \alpha K}{\beta} \right )^{\alpha}K^{\beta} &= 100\\
    \left( \frac{2 \alpha}{\beta} \right )^{\alpha}K^{\alpha + \beta}&=100\\
    K^{\alpha +\beta}&=100 \left (\frac{2 \alpha}{\beta} \right )^{-\alpha}\\
    K=K^*&=\left( 100 \left(\frac{2\alpha}{\beta} \right)^{-\alpha} \right)^{\frac{1}{\alpha+\beta}}
\end{align*}
$$

$$
\begin{align*}
    L&=\frac{2\alpha K}{\beta}\\
    L&=\frac{2\alpha}{\beta} \left( 100 \left(\frac{2\alpha}{\beta} \right)^{-\alpha} \right)^{\frac{1}{\alpha+\beta}}\\
    L&=\left (\frac{2\alpha}{\beta} \right )^\frac{\alpha + \beta}{\alpha + \beta} \left( 100 \left(\frac{2\alpha}{\beta} \right)^{-\alpha} \right)^{\frac{1}{\alpha+\beta}}\\
    L&=\left (100 \left (\frac{2 \alpha}{\beta} \right )^{\alpha + \beta} \left(\frac{2 \alpha}{\beta} \right )^{-\alpha} \right )^\frac{1}{\alpha + \beta}  \\
    L=L^*&=\left( 100 \left(\frac{2\alpha}{\beta} \right)^{\beta} \right)^{\frac{1}{\alpha+\beta}}
\end{align*}
$$

$\alpha=\beta=0.5$

$$
\begin{align*}
    K^*=\left ( 100 \left (\frac{2 \times 0.5}{0.5} \right )^{-0.5} \right )^\frac{1}{0.5+0.5}&=70.7\\
    L^*=\left ( 100 \left (\frac{2 \times 0.5}{0.5} \right )^{0.5} \right )^\frac{1}{0.5+0.5}&=141.4\\
    C^*=10 \times 141.4 + 20 \times 70.7 &=2828
\end{align*}
$$

$\alpha=0.3$, $\beta=0.7$

$$
\begin{align*}
    K^*&=104.7\\
    L^*&=89.8\\
    C^*&=2992
\end{align*}
$$
" 
%}


{% include question_dropdown.html 
    id="q6" 
    title="6" 
    question_text="
A single good is produced by a monopoly.  The demand function for price ($P$) from quantity ($Q$) for this good is given by:

$$P=50-Q$$

The cost function for the company producing the good is given by:

$$C=10+2Q$$

Find the maximum profit, $\Pi$, and the values of $P$ and $Q$ that give this profit, subject to the constraint of the demand function." 
    
    solution_text="
    
Maximise $\Pi=PQ-C$ subject to $P=50-Q$

$$\Pi=PQ-(10+2Q)=PQ-10-2Q$$

$$L=PQ-10-2Q+\lambda (50-Q-P)$$

$$
\begin{align*}
    L_P&=Q-\lambda=0\\
    L_Q&=P-2-\lambda=0\\
    L_{\lambda}&=50-Q-P=0
\end{align*}
$$

$$
\begin{align*}
    Q&=\lambda\\
    P-2&=\lambda\\
    Q&=P-2
\end{align*}
$$

Substitute into constraint and solve:

$$
\begin{align*}
    P=&=50-(P-2)\\
    2P&=52\\
    P&=26\\
    Q&=24\\
    \Pi&=566
\end{align*}
$$
" 
%}
