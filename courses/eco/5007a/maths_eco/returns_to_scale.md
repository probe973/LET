---
layout: eco5007a
title: Returns to Scale
interactive: 1
---

# Returns to Scale

For each of the following production functions, identify the returns to scale.

{% include question_multiple_choice.html
    id="q1"
    title="1"
    question_text="$Q(K,L)=3K+2L$"
    options="c::Constant||d::Decreasing||i::Increasing"
    correct_answer="c"
    solution_text="$Q(2K,2L)=6K+4L=2(3K+2L)=2Q(K,L)$

Doubling input doubles output, so constant returns to scale."
%}

{% include question_multiple_choice.html
    id="q2"
    title="2"
    question_text="$Q(K,L)=0.2KL$"
    options="c::Constant||d::Decreasing||i::Increasing"
    correct_answer="i"
    solution_text="$Q(2K,2L)=0.2(2K)(2L)=0.2 \times 2 \times 2 KL=0.8KL=4Q(K,L)$

Doubling input more than doubles output, so increasing returns to scale."
%}

{% include question_multiple_choice.html
    id="q3"
    title="3"
    question_text="$Q(K,L)=\frac{KL}{2}$"
    options="c::Constant||d::Decreasing||i::Increasing"
    correct_answer="i"
    solution_text="$Q(2K,2L)=\frac{(2K)(2L)}{2}=2KL=4Q(K,L)$

Doubling input more than doubles output, so increasing returns to scale."
%}

{% include question_multiple_choice.html
    id="q4"
    title="4"
    question_text="$Q(K,L)=K^2L^2$"
    options="c::Constant||d::Decreasing||i::Increasing"
    correct_answer="i"
    solution_text="$Q(2K,2L)=(2K)^2(2L)^2=(4K^2)(4L^2)=16K^2L^2=16Q(K,L)$

Doubling input more than doubles output, so increasing returns to scale."
%}

{% include question_multiple_choice.html
    id="q5"
    title="5"
    question_text="$Q(K,L)=K^{0.5}L^{0.5}$"
    options="c::Constant||d::Decreasing||i::Increasing"
    correct_answer="c"
    solution_text="$Q(2K,2L)=2^{0.5}K^{0.5}2^{0.5}L^{0.5}=2^{0.5}2^{0.5}K^{0.5}L^{0.5}=2Q(K,L)$

Doubling input doubles output, so constant returns to scale."
%}

{% include question_multiple_choice.html
    id="q6"
    title="6"
    question_text="$Q(K,L)=K^{0.9}L^{0.1}$"
    options="c::Constant||d::Decreasing||i::Increasing"
    correct_answer="c"
    solution_text="$Q(2K,2L)=2^{0.9}K^{0.9}2^{0.1}L^{0.1}=2Q(K,L)$

Doubling input doubles output, so constant returns to scale."
%}

{% include question_multiple_choice.html
    id="q7"
    title="7"
    question_text="$Q(K,L)=K^{0.2}L^{0.6}$"
    options="c::Constant||d::Decreasing||i::Increasing"
    correct_answer="d"
    solution_text="$Q(2K,2L)=2^{0.2}K^{0.2}2^{0.6}K^{0.6}=2^{0.8}Q(K,L) \approx 1.74Q(K,L)$

Doubling input leads to a less than doubling of output, therefore decreasing returns to scale."
%}

{% include question_multiple_choice.html
    id="q8"
    title="8"
    question_text="$Q(K,L)=K^{0.8}L^{0.3}$"
    options="c::Constant||d::Decreasing||i::Increasing"
    correct_answer="i"
    solution_text="$Q(2K,2L)=2^{0.8}2^{0.3}K^{0.8}L^{0.3}=2^{1.1}Q(K,L) \approx 2.14Q(K,L)$

Doubling input more than doubles output, so increasing returns to scale."
%}

{% include question_dropdown.html
    id="q9"
    title="9"
    question_text="$Q(K,L)=K^{\alpha}L^{\beta}$ where

a. $\alpha + \beta=1$

b. $\alpha + \beta<1$

c. $\alpha + \beta>1$"
    solution_text="a. $\alpha+\beta=1 \implies Q(2K,2L)=2Q(K,L)$ constant

b. $\alpha+\beta<1 \implies 2^{\alpha+\beta}<2 \implies Q(2K,2L)<2Q(K,L)$ decreasing

c. $\alpha+\beta>1 \implies 2^{\alpha+\beta}>2 \implies Q(2K,2L)>2Q(K,L)$ increasing"
%}
