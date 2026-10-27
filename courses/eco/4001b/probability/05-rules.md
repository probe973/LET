---
layout: eco4001b
title: Probability rules
---

<div class="explanation" markdown="1">

## Probability Rules

### Notation

You will see the following notation:

$\cup$ - **union**, which in non-maths language is considered to mean **or**

$\cap$ - **intersection**, which in non-maths language is considered to mean **and**

$A' \text{ or } \bar{A}$ - **complement of A**, this means **A didn't occur**

$\vert$ - **given** - so $P(A \vert B)$ means **probability of A given B has occurred**


### Some probability rules

Using events $A$ and $B$

$P(A')=1-P(A)$

$P(A \cup B) = P(A) + P(B) - P(A \cap B)$

$P(A' \cap B') = 1 - P(A \cup B)$

$P(A \vert B) = \frac{P(A \cap B)}{P(B)} \implies P(A \cap B) = P(A \vert B) \times P(B)$

### Mutually exclusive events

Events $A$ and $B$ are considered **mutually exclusive** if they both can't happen.  So this means:

$P(A \cap B) = 0$

This further implies:

$P(A \cup B) = P(A) + P(B)$

### Independent events

Events $A$ and $B$ are **independent** if one event occurring makes no difference to the probability of the other event occurring, so:

$P(A \vert B) = P(A)$

This further implies:

$P(A \cap B) = P(A) \times P(B)$

</div>

### Questions

Given the following information:

$$P(A) = \frac{2}{5} \hspace{1cm} P(B) = \frac{1}{4} \hspace{1cm} P(A \cap B) = \frac{1}{10}$$

{% include question_multiple_choice.html
    id="rules_q1"
    title="1"
    question_text="What is $P(A \cup B)$?"
    options="wrong1::13/20||correct::11/20||wrong2::3/7||wrong3::1/10"
    correct_answer="correct"
    solution_text="$\frac{2}{5} + \frac{1}{4} - \frac{1}{10}$.  Make sure to use a common denominator when adding and subtracting fractions, or use a calculator."
%}

{% include question_multiple_choice.html
    id="rules_q2"
    title="2"
    question_text="What is $P(A' \cap B')$?"
    options="wrong1::11/20||wrong2::9/10||correct::9/20||wrong3::1/2"
    correct_answer="correct"
    solution_text="$1 - P(A \cup B)$.  Make sure to use a common denominator when adding and subtracting fractions, or use a calculator."
%}

{% include question_multiple_choice.html
    id="rules_q3"
    title="3"
    question_text="Are the events A and B independent?"
    options="wrong1::no||correct::yes"
    correct_answer="correct"
    solution_text="Work out $P(A) \times P(B)$ and compare to $P(A \cap B)$."
%}

There are two events A and B such that:

$$P(M) = \frac{1}{2} \hspace{1cm} P(N) = \frac{1}{3} \hspace{1cm} P(M | N) = \frac{1}{4}$$

Calculate the following:

{% include question_multiple_choice.html
    id="rules_q4"
    title="4"
    question_text="$P(M \text{ AND } N)$"
    options="correct::1/12||wrong1::1/6||wrong2::1/8||wrong3::1/4"
    correct_answer="correct"
    solution_text="Use $P(M \cap N) = P(M \vert N) \times P(N)$"
%}

{% include question_multiple_choice.html
    id="rules_q5"
    title="5"
    question_text="$P(M \text{ OR } N)$"
    options="correct::3/4||wrong1::2/5||wrong2::5/6||wrong3::1/4"
    correct_answer="correct"
    solution_text="Use $P(M \cup N) = P(M) + P(N) - P(M \cap N)$ and previous answer."
%}

You have another event R, such that M and R are independent. It is also given that:

$$P(M \text{ AND } R) = \frac{1}{12} \hspace{1cm} P(N \text{ or } R) = \frac{1}{2}$$

{% include question_multiple_choice.html
    id="rules_q6"
    title="6"
    question_text="Are the events N and R mutually exclusive?"
    options="wrong1::no||correct::yes||wrong2::not enough information"
    correct_answer="correct"
    solution_text="Independent M and R gives $P(M \cap R) = P(M) \times P(R) \implies \frac{1}{12}=\frac{1}{2} \times P(R) \implies P(R) = \frac{1}{6}$ <br>
    $P(N \cup R) = P(N) + P(R) - P(N \cap R) \implies \frac{1}{2} = \frac{1}{3} + \frac{1}{6} - P(N \cap R)$ <br>
    $\implies P(N \cap R) = 0$ <br>
    Mutually Exclusive"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/eco/4001b/probability/" | relative_url }}">← Return to Probability Menu</a>
</div>

{% include pagination.html %}
