---
layout: eco5007a
title: Profit and Profit Maximisation for Monopolies
interactive: 1
---

# Profit and Profit Maximisation for Monopolies

### Question 1

You are given the demand function and the total cost function for a monopolist. Use this information to calculate the profit function, $\pi$, and the price, quantity, and profit that maximises the profit.

{% include question_dropdown.html 
    id="q1ai" 
    title="1a(i)" 
    question_text="Market demand: $Q=100-P$  
$TC=250+20Q$" 
    solution_text="Re-arrange demand: $P=100-Q$

$$TR=PQ=(100-Q)Q=100Q-Q^2$$

$$\pi=TR-TC=100Q-Q^2-250-20Q$$

$$=80Q-Q^2-250$$

$$\frac{d\pi}{dQ}=80-2Q$$

For max profit, set $\frac{d\pi}{dQ}=0$:

$$80-2Q=0 \implies 2Q=80 \implies Q=40$$

$$\implies P=100-Q=60$$

$$\implies \pi=80(40)-40^2-250=1350$$" 
%}

{% include question_dropdown.html 
    id="q1aii" 
    title="1a(ii)" 
    question_text="Market demand: $Q=100-P$  
$TC=Q^2-4Q+200$" 
    solution_text="Re-arrange demand: $P=100-Q$

$$TR=PQ=100Q-Q^2$$

$$\pi=100Q-Q^2-Q^2+4Q-200$$

$$=-2Q^2+104Q-200$$

Set $\frac{d\pi}{dQ}=0$:

$$\implies -4Q+104=0$$

$$\implies 4Q=104$$

$$\implies Q=26$$

$$\implies P=74$$

$$\implies \pi=-2(26)^2+104(26)-200=1152$$" 
%}

{% include question_dropdown.html 
    id="q1aiii" 
    title="1a(iii)" 
    question_text="Market demand: $Q=100-P$  
$TC=100+2\ln(Q+1)$" 
    solution_text="Re-arrange demand: $P=100-Q$

$$\pi=100Q-Q^2-100-2\ln(Q+1)$$

$$\frac{d\pi}{dQ}=100-2Q-\frac{2}{Q+1}=0$$

$$100(Q+1)-2Q(Q+1)-2=0$$

$$100Q+100-2Q^2-2Q-2=0$$

$$-2Q^2+98Q+98=0$$

$$Q^2-49Q-49=0$$

$$Q=\frac{49 \pm \sqrt{49^2-4(1)(-49)}}{2(1)}$$

Use the answer $Q \approx 50$, $P \approx 50$:

$$\pi=100(50)-50^2-100-2\ln(51)=2392$$" 
%}

{% include question_dropdown.html 
    id="q1bi" 
    title="1b(i)" 
    question_text="Market Demand: $Q=500e^{-0.2P}$  
$TC=100$" 
    solution_text="Re-arrange demand:

$$\frac{Q}{500}=e^{-0.2P}$$

$$\ln \left(\frac{Q}{500}\right)=-0.2P$$

$$-5 \ln \left(\frac{Q}{500}\right)=P$$

$$TR=-5Q\ln \left(\frac{Q}{500}\right)$$

$$\pi = -5Q\ln\left(\frac{Q}{500}\right)-100$$

$$\frac{d\pi}{dQ} = -5\ln\left(\frac{Q}{500}\right)-5Q\frac{1}{Q} \quad \text{(product rule)}$$

$$=-5\ln\left(\frac{Q}{500}\right)-5$$

Set $\frac{d\pi}{dQ} = 0$:

$$5\ln\left(\frac{Q}{500}\right)=-5$$

$$\ln\left(\frac{Q}{500}\right)=-1$$

$$\frac{Q}{500}=e^{-1}$$

$$Q = 500e^{-1} \approx 184$$

Find $P$:

$$Q=500e^{-0.2P}$$
$$500e^{-1}=500e^{-0.2P}$$
$$-1=-0.2P \implies P=5$$

$$\pi \approx -5(184)\ln \left(\frac{184}{500}\right) -100 \approx 820$$" 
%}

{% include question_dropdown.html 
    id="q1bii" 
    title="1b(ii)" 
    question_text="Market Demand: $Q=500e^{-0.2P}$  
$TC=10+15Q$" 
    solution_text="Re-arrange demand: $P=-5 \ln \left(\frac{Q}{500}\right)$

$$\pi = -5Q\ln\left(\frac{Q}{500}\right)-10-15Q$$

$$\frac{d\pi}{dQ} = -5\ln\left(\frac{Q}{500}\right)-5Q\frac{1}{Q} -15$$

$$=-5\ln\left(\frac{Q}{500}\right)-20$$

Set $\frac{d\pi}{dQ} = 0$:

$$5\ln\left(\frac{Q}{500}\right)=-20$$

$$\ln\left(\frac{Q}{500}\right)=-4$$

$$\frac{Q}{500}=e^{-4}$$

$$Q = 500e^{-4} \approx 9$$

Find $P$:

$$Q=500e^{-0.2P}$$

$$500e^{-4}=500e^{-0.2P}$$

$$-4=-0.2P \implies P=20$$

$$\pi \approx -5(9)\ln \left(\frac{9}{500}\right) -10 - 15(9) \approx 36$$" 
%}

### Question 2

A fish and chip shop knows demand for cod and chips is different for pensioners compared to those who are not pensioners.

Demand for pensioners: $Q_P=200-4P_P$ where $P_P$ is the price charged to pensioners.  
Demand for others: $Q_N=160-2P_N$ where $P_N$ is the price charged to non-pensioners.  
The shop has fixed costs of 100 and variable costs of $0.5Q$.

Find the maximum profits if:

{% include question_dropdown.html 
    id="q2a" 
    title="2a" 
    question_text="The shop charges the same price to both groups, $P_P=P_N$" 
    solution_text="$$P=P_P=P_N$$

$$Q=Q_P+Q_N=200-4P+160-2P=360-6P$$

$$TR = PQ = 360P-6P^2$$

$$TC = 100+0.5Q = 280-3P$$

$$\pi=TR-TC=-6P^2+363P-280$$

$$\frac{d\pi}{dP} = -12P+363$$

Set $\frac{d\pi}{dP} = 0 \implies P=\frac{363}{12}=30.25$

$$Q = 360 - 6(30.25) = 178.5 \approx 179$$

$$\pi = -6(30.25)^2+363(30.25)-280 \approx 5210$$" 
%}

{% include question_dropdown.html 
    id="q2b" 
    title="2b" 
    question_text="The shop charges different prices to both groups." 
    solution_text="$$TR_P=P_PQ_P= P_P(200-4P_P)=200P_P-4P_P^2$$

$$TR_N=P_NQ_N=P_N(160-2P_N)=160P_N-2P_N^2$$

$$TR=200P_P-4P_P^2+160P_N-2P_N^2$$

$$TC=100+0.5(Q_P+Q_N)=100+100-2P_P+80-P_N=280-2P_P-P_N$$

$$\pi = 200P_P-4P_P^2+160P_N-2P_N^2 - 280 + 2P_P+P_N$$

$$=202P_P-4P_P^2+161P_N-2P_N^2-280$$

Solve $\frac{\partial\pi}{\partial P_P}=0$ and $\frac{\partial\pi}{\partial P_N}=0$:

$$(1) \quad \frac{\partial\pi}{\partial P_P} = 202-8P_P=0$$

$$(2) \quad \frac{\partial\pi}{\partial P_N} = 161-4P_N=0$$

$$(1) \implies P_P=\frac{202}{8}=25.25$$

$$(2) \implies P_N=\frac{161}{4}=40.25$$

$$Q_P =200-4(25.25)=99$$

$$Q_N =160-2(40.25)=79.5 \approx 80$$

$$\pi = 202(25.25)-4(25.25)^2+161(40.25)-2(40.25)^2-280 \approx 5510$$

There is more maximum profit to be had by having different prices. If they charge 30.25 to both groups, they will sell 179 at a profit of 5210. If they charge 25.25 to pensioners and 40.25 to non-pensioners, they will sell 99 to pensioners and 80 to non-pensioners (a total of 179) at a profit of 5510." 
%}
