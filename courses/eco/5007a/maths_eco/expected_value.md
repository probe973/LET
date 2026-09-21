---
layout: eco5007a
title: Expected Value
---

# Expected Value and Utility Maximisation Questions

{% include question_numerical.html
    id="eco5007ameev01"
    title="1"
    question_text="Find the expected value given a game pays $75$ with probability $0.4$, $25$ with probability $0.3$, and $10$ with probability $0.3$."
    correct_answer="40.5"
    tolerance="0.05"
    solution_text="The expected value (EV) is calculated as $EV = \sum x_i P(x_i)$.

$$
\begin{aligned}
EV &= (75 \times 0.4) + (25 \times 0.3) + (10 \times 0.3) \\
&= 30 + 7.5 + 3 \\
&= 40.5
\end{aligned}
$$

The expected value is $40.5$."
%}

{% include question_numerical.html
    id="eco5007ameev02"
    title="2"
    question_text="Find the expected value given a variable $X$ takes values $5, 10, 15, 20$ with probabilities $0.1, 0.2, 0.4, 0.3$ respectively."
    correct_answer="14.5"
    tolerance="0.05"
    solution_text="The expected value (EV) is calculated as $EV = \sum x_i P(x_i)$.

$$
\begin{aligned}
EV &= (5 \times 0.1) + (10 \times 0.2) + (15 \times 0.4) + (20 \times 0.3) \\
&= 0.5 + 2 + 6 + 6 \\
&= 14.5
\end{aligned}
$$

The expected value is $14.5$."
%}

{% include question_numerical.html
    id="eco5007ameev03"
    title="3"
    question_text="Find the expected value given a random process yields $100$ with $20\%$ chance, $20$ with $50\%$ chance, and $-10$ with $30\%$ chance."
    correct_answer="27"
    tolerance="0.05"
    solution_text="The expected value (EV) is calculated as $EV = \sum x_i P(x_i)$.

$$
\begin{aligned}
EV &= (100 \times 0.2) + (20 \times 0.5) + (-10 \times 0.3) \\
&= 20 + 10 - 3 \\
&= 27
\end{aligned}
$$

The expected value is $27$."
%}

{% include question_numerical.html
    id="eco5007ameev04"
    title="4"
    question_text="An investor has current wealth of &pound;500 and utility function $U(w) = w^2$. They invest in a venture. Their total wealth will become &pound;600 with $70\%$ probability, or &pound;450 with $30\%$ probability. 

Calculate the expected utility of this investment."
    correct_answer="312750"
    tolerance="0.05"
    solution_text="The investor's utility function is $U(w) = w^2$. Expected utility (EU) is calculated as $EU = \sum U(w_i) P(w_i)$

$$
\begin{aligned}
EU &= U(600) \times 0.7 + U(450) \times 0.3 \\
&= (600^2 \times 0.7) + (450^2 \times 0.3) \\
&= (360000 \times 0.7) + (202500 \times 0.3) \\
&= 252000 + 60750 \\
&= 312750
\end{aligned}
$$

The expected value is $312750$."
%}

{% include question_multiple_choice.html
    id="eco5007ameev05"
    title="5"
    question_text="An individual has current wealth &pound;1,000 and utility function $U(w) = w$. They consider two investment choices:

A secure investment where total wealth becomes &pound;1,100 with $100\%$ certainty.

A risky investment where total wealth becomes &pound;1,300 with $60\%$ probability, or &pound;900 with $40\%$ probability.

Which option yields the greatest expected utility?"
    options="s::Secure||r::Risky"
    correct_answer="r"
    solution_text="Utility function is $U(w) = w$

Secure Investment: Wealth becomes &pound;1,100 with $100\%$ certainty.

$$
\begin{aligned}
EU_i &= U(1100) \times 1 \\
&= 1100 \times 1 \\
&= 1100
\end{aligned}
$$

Risky Investment: Wealth becomes &pound;1,300 with $60\%$ prob, or &pound;900 with $40\%$ prob.

$$
\begin{aligned}
EU_{ii} &= U(1300) \times 0.6 + U(900) \times 0.4 \\
&= 780 + 360 \\
&= 1140
\end{aligned}
$$

Comparing $EU_i = 1100$ and $EU_{ii} = 1140$, the **risky investment** yields the greater expected utility."
%}

{% include question_multiple_choice.html
    id="eco5007ameev06"
    title="6"
    question_text="A decision-maker has &pound;500 in current capital and utility function $U(c) = c^2$. They evaluate two project proposals:

Project Alpha: Capital remains &pound;500 with $100\%$ certainty.

Project Beta: Capital becomes &pound;700 with $25\%$ probability, or &pound;400 with $75\%$ probability.

Which project yields the greatest expected utility?"
    options="a::Alpha||b::Beta"
    correct_answer="a"
    solution_text="Utility function is $U(w) = w$

Project Alpha: Capital remains &pound;500 with $100\%$ certainty.

$$
\begin{aligned}
EU_i &= U(500) \times 1 \\
&= 500^2 \times 1 \\
&= 250000
\end{aligned}
$$

Project Beta: Capital becomes &pound;700 with $25\%$ prob, or &pound;400 with $75\%$ prob.

$$
\begin{aligned}
EU_{ii} &= U(700) \times 0.25 + U(400) \times 0.75 \\
&= (700^2 \times 0.25) + (400^2 \times 0.75) \\
&= 122500 + 120000 \\
&= 242500
\end{aligned}
$$

Comparing $EU_i = 250000$ and $EU_{ii} = 242500$, <strong>Project Alpha </strong> yields the greater expected utility."
%}

{% include question_multiple_choice.html
    id="eco5007ameev07"
    title="7"
    question_text="A firm with &pound;10,000 in assets has utility function $U(a) = \sqrt{a}$. They face a $10\%$ chance of a &pound;2,000 loss due to an event. They can either:

Accept the risk without protection.

Purchase a protection plan for a premium of &pound;150 that fully covers the &pound;2,000 loss if the event occurs.

Which one yields the greatest expected utility?"
    options="a::Accept the risk||p::Purchase protection"
    correct_answer="p"
    solution_text="Utility function is $U(a) = \sqrt{a}$. Probability of &pound;2,000 loss is $10\%$.

Accept the risk without protection.

$$
\begin{aligned}
EU_i &= U(10000) \times 0.9 + U(10000-2000) \times 0.1 \\
&= (10000)^{0.5} \times 0.9 + (8000)^{0.5} \times 0.1 \\
&\approx (100 \times 0.9) + (89.4427 \times 0.1) \\
&= 90 + 8.94427 \\
&= 98.94427
\end{aligned}
$$

Purchase protection plan for &pound;150: Loss is fully covered.

$$
\begin{aligned}
EU_{ii} &= U(10000-150) \times 1 \\
&= (9850)^{0.5} \\
&= 99.24716
\end{aligned}
$$

Comparing $EU_i = 98.94427$ and $EU_{ii} = 99.24716$, purchasing the <strong>protection plan </strong> yields the greater expected utility."
%}

{% include question_multiple_choice.html
    id="eco5007ameev08"
    title="8"
    question_text="A policy maker with initial support score of $100$ has utility function $U(s) = \ln(s)$. They are choosing between two policies:

Policy X: Guarantees a support score of $110$.

Policy Y: Results in a support score of $130$ with $50\%$ probability, or $95$ with $50\%$ probability.

Which policy yields the greatest expected utility?"
    options="x::Policy X||y::Policy Y"
    correct_answer="y"
    solution_text="Utility function is $U(s) = \ln(s)$.

Policy X: Guarantees a support score of $110$.

$$
\begin{aligned}
EU_i &= U(110) \times 1 \\
&= \ln(110) \\
&= 4.70048
\end{aligned}
$$

Policy Y: Results in $130$ with $50\%$ prob, or $95$ with $50\%$ prob.

$$
\begin{aligned}
EU_{ii} &= U(130) \times 0.5 + U(95) \times 0.5 \\
&= (\ln(130) \times 0.5) + (\ln(95) \times 0.5) \\
&\approx 2.433765 + 2.27694 \\
&= 4.710705
$$

Comparing $EU_i = 4.70048$ and $EU_{ii} = 4.710705$, <strong>Policy Y</strong> yields the greater expected utility."
%}


{% include question_dropdown.html 
    id="eco5007ameev09" 
    title="9" 
    question_text="An individual has just purchased an asset worth &pound;100,000. If a specific adverse event occurs, the asset's value would drop to &pound;20,000. The probability of this event is $5\%$. 

An insurance company offers to pay &pound;x in the event of the adverse event, if the individual pays an insurance premium of &pound;0.08x. The premium must be paid regardless of whether the event occurs. 

The individual's utility function is 

$$U(\text{wealth}) = (\text{wealth})^{0.5}$$

(i) Write down the individual's expected utility if they buy insurance coverage of &pound;x.

(ii) How much insurance (value of x) will the individual buy to maximize their expected utility, and what will their insurance premium be?"

    solution_text="Initial asset value: &pound;100,000. Loss: &pound;80,000 (to &pound;20,000).

Probability of adverse event: $p_L = 0.05$. Coverage: &pound;x. Premium: &pound;0.08x.

Utility function: $U(\text{wealth}) = (\text{wealth})^{0.5}$.

<br>
(i) Expected utility if they buy insurance coverage of &pound;x:

If no adverse event (prob $0.95$):<br>Wealth $= 100,000 - 0.08x$

If adverse event (prob $0.05$):<br>Wealth $= 100,000 - 80,000 - 0.08x + x = 20,000 + 0.92x$

So, the expected utility $EU(x)$ is:

$$ EU(x) = 0.95 (100,000 - 0.08x)^{0.5} + 0.05 (20,000 + 0.92x)^{0.5} $$

<br>
(ii) To maximize expected utility, we take the derivative of $EU(x)$ with respect to $x$ and set it to zero.

$$
\begin{aligned}
\frac{dEU}{dx} &= 0.95 \times 0.5 (100,000 - 0.08x)^{-0.5} (-0.08) \\
&\quad + 0.05 \times 0.5 (20,000 + 0.92x)^{-0.5} (0.92) = 0 \\[1em]
\frac{-0.038}{ (100,000 - 0.08x)^{0.5}} &+ \frac{0.023}{ (20,000 + 0.92x)^{0.5}} = 0 \\
\frac{0.023}{ (20,000 + 0.92x)^{0.5}} &= \frac{0.038}{ (100,000 - 0.08x)^{0.5}}
\end{aligned}
$$

Cross-multiply and square both sides:

$$
\begin{aligned}
0.023 (100,000 - 0.08x)^{0.5} &= 0.038 (20,000 + 0.92x)^{0.5} \\
(0.023)^2 (100,000 - 0.08x) &= (0.038)^2 (20,000 + 0.92x) \\
0.000529 (100,000 - 0.08x) &= 0.001444 (20,000 + 0.92x) \\
52.9 - 0.00004232x &= 28.88 + 0.00132848x \\
52.9 - 28.88 &= 0.00132848x + 0.00004232x \\
24.02 &= 0.0013708x \\
x &= \frac{24.02}{0.0013708} \approx 17522.61
\end{aligned}
$$

The optimal insurance coverage is &pound;17,522.61.

The insurance premium will be $0.08x$:

$$ \text{Premium} = 0.08 \times 17522.61 \approx 1,401.81 $$"
%}

{% include question_dropdown.html 
    id="eco5007ameev10" 
    title="10" 
    question_text="An investor has &pound;10,000. They can invest an amount &pound;x in a new project. 

With $60\%$ probability, the project pays back $2.5x$ (a gain of $1.5x$). 

With $40\%$ probability, the project results in a loss of $0.5x$ (meaning $0.5x$ is returned, $0.5x$ is lost). 

The money not invested remains unchanged. 

The investor's utility function is $U(\text{wealth}) = (\text{wealth})^{0.75}$.

(i) Express the investor's expected utility as a function of the amount &pound;x invested.

(ii) Determine the optimal amount &pound;x that maximizes their expected utility."

    solution_text="Initial capital: &pound;10,000. Investment amount: &pound;x.<br>Utility function: $U(\text{capital}) = (\text{capital})^{0.75}$.

<br>
(i) Express expected utility as a function of $x$:

Success (prob $0.6$): Capital $= (10,000 - x) + 2.5x = 10,000 + 1.5x$

Failure (prob $0.4$): Capital $= (10,000 - x) + 0.5x = 10,000 - 0.5x$

So, the expected utility $EU(x)$ is:

$$ EU(x) = 0.6 (10,000 + 1.5x)^{0.75} + 0.4 (10,000 - 0.5x)^{0.75} $$

<br>
(ii) To find the optimal $x$, take the derivative of $EU(x)$ with respect to $x$ and set to zero.

$$
\begin{aligned}
\frac{dEU}{dx} &= 0.6 \times 0.75 (10,000 + 1.5x)^{-0.25} (1.5) \\
&\quad + 0.4 \times 0.75 (10,000 - 0.5x)^{-0.25} (-0.5) = 0 \\[1em]
0.675 (10,000 + 1.5x)^{-0.25} &- 0.15 (10,000 - 0.5x)^{-0.25} = 0 \\
0.675 (10,000 + 1.5x)^{-0.25} &= 0.15 (10,000 - 0.5x)^{-0.25} \\
\frac{0.675}{0.15} &= \frac{(10,000 + 1.5x)^{0.25}}{(10,000 - 0.5x)^{0.25}} \\
4.5 &= \left( \frac{10,000 + 1.5x}{10,000 - 0.5x} \right)^{0.25}
\end{aligned}
$$

Raise both sides to the power of $4$:

 $$
\begin{aligned}
4.5^4 &= \frac{10,000 + 1.5x}{10,000 - 0.5x} \\
410.0625 &= \frac{10,000 + 1.5x}{10,000 - 0.5x} \\
410.0625 (10,000 - 0.5x) &= 10,000 + 1.5x \\
4,100,625 - 205.03125x &= 10,000 + 1.5x \\
4,090,625 &= 1.5x + 205.03125x \\
4,090,625 &= 206.53125x \\
x &= \frac{4,090,625}{206.53125} \approx 19806.31
\end{aligned}
$$

The optimal investment amount is approximately &pound;19,806.31."
%}

{% include question_dropdown.html 
    id="eco5007ameev11" 
    title="11" 
    question_text="A retired individual has &pound;50,000 in savings. Their utility for total savings is $U(\text{savings}) = \ln(\text{savings})$. 

They are considering investing an amount &pound;x into a particular stock. 

If the stock performs well (with $70\%$ probability), the invested amount yields a $60\%$ return (i.e., $1.6x$). 

If it performs poorly (with $30\%$ probability), they lose $40\%$ of the invested amount (i.e., $0.6x$ remains). 

The rest of their savings are held securely and do not change.

(i) Formulate the individual's expected utility as a function of the investment amount &pound;x.

(ii) Calculate the amount &pound;x that the individual should invest to maximize their expected utility."

    solution_text="Initial savings: &pound;50,000. Investment amount: &pound;x.<br>Utility function: $U(\text{savings}) = \ln(\text{savings})$.

<br>
(i) Formulate expected utility as a function of $x$:

Stock performs well (prob $0.7$): Savings $= (50,000 - x) + 1.6x = 50,000 + 0.6x$

Stock performs poorly (prob $0.3$): Savings $= (50,000 - x) + 0.6x = 50,000 - 0.4x$

So, the expected utility $EU(x)$ is:

$$ EU(x) = 0.7 \ln(50,000 + 0.6x) + 0.3 \ln(50,000 - 0.4x) $$

<br>
(ii) To find the optimal $x$, take the derivative of $EU(x)$ with respect to $x$ and set to zero.

$$
\begin{aligned}
\frac{dEU}{dx} &= 0.7 \times \frac{0.6}{50,000 + 0.6x} + 0.3 \times \frac{-0.4}{50,000 - 0.4x} = 0 \\[1em]
\frac{0.42}{50,000 + 0.6x} - \frac{0.12}{50,000 - 0.4x} &= 0 \\
\frac{0.42}{50,000 + 0.6x} &= \frac{0.12}{50,000 - 0.4x}
\end{aligned}
$$

Cross-multiply:

$$
\begin{aligned}
0.42 (50,000 - 0.4x) &= 0.12 (50,000 + 0.6x) \\
21,000 - 0.168x &= 6,000 + 0.072x \\
15,000 &= 0.24x \\
x &= \frac{15,000}{0.24} = 62,500
\end{aligned}
$$

Since the initial savings are &pound;50,000, and we cannot invest more than we have, the optimal investment amount is limited by the budget. Therefore, the optimal investment amount is &pound;50,000.
"
%}

{% include question_dropdown.html 
    id="eco5007ameev12" 
    title="12" 
    question_text="A fund manager has a current wealth of &pound;2,000,000. Their utility for wealth is $U(W) = -e^{-0.0000005W}$. 

They can invest an amount &pound;x (where $x \ge 0$) into a highly volatile asset. This asset yields a return such that the invested $x$ becomes $1.8x$ with $50\%$ probability, or $0.5x$ with $50\%$ probability. 

The rest of their wealth (&pound;2,000,000 - x) is kept in a risk-free account. 

(i) Write down the fund manager's expected utility as a function of the investment amount &pound;x.

(ii) Determine the optimal investment amount &pound;x that maximizes their expected utility."

    solution_text="Initial wealth: &pound;2,000,000. Investment amount: &pound;x.<br>Utility function: $U(W) = -e^{-0.0000005W}$.

<br>
(i) Write down expected utility as a function of $x$:

Asset performs well (prob $0.5$): Wealth $= (2,000,000 - x) + 1.8x = 2,000,000 + 0.8x$

Asset performs poorly (prob $0.5$): Wealth $= (2,000,000 - x) + 0.5x = 2,000,000 - 0.5x$

$$
\begin{aligned}
EU(x) &= 0.5 (-e^{-0.0000005(2,000,000 + 0.8x)}) \\
&\quad + 0.5 (-e^{-0.0000005(2,000,000 - 0.5x)}) \\
EU(x) &= -0.5 e^{-1 - 0.0000004x} - 0.5 e^{-1 + 0.00000025x}
\end{aligned}
$$

<br>
(ii) To find the optimal $x$, take the derivative of $EU(x)$ with respect to $x$ and set to zero.

$$
\begin{aligned}
\frac{dEU}{dx} &= -0.5 e^{-1 - 0.0000004x} (-0.0000004) \\
&\quad - 0.5 e^{-1 + 0.00000025x} (0.00000025) = 0 \\[1em]
0.0000002 e^{-1 - 0.0000004x} &= 0.000000125 e^{-1 + 0.00000025x} \\
\frac{e^{-1 - 0.0000004x}}{e^{-1 + 0.00000025x}} &= \frac{0.000000125}{0.0000002} \\
e^{(-1 - 0.0000004x) - (-1 + 0.00000025x)} &= 0.625 \\
e^{-0.00000065x} &= 0.625
\end{aligned}
$$

Take the natural logarithm of both sides:

$$
\begin{aligned}
-0.00000065x &= \ln(0.625) \\
-0.00000065x &= -0.4700036 \\
x &= \frac{-0.4700036}{-0.00000065} \approx 723082.46
\end{aligned}
$$

The optimal investment amount is approximately &pound;723,082.46.
"
%}
