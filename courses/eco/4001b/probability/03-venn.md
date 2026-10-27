---
layout: eco4001b
title: Venn diagrams
---

<div class="explanation" markdown="1">

## Venn Diagrams

A **Venn diagram** is a graphical display of frequencies or probabilities of multiple events.  Each event is represented by a cirlce and all the circles are placed within a rectangle.  The rectangle represents the **sample space**, which represents everything that can happen.  The total of the frequencies or probabilities in the rectangle add up to the total frequency or 1 respectively.  Overlaps in the circles represent frequencies or probabilities of all the overlapping events occurring. 

</div>

## Questions

At the bar of the company ‘The Pecs Bar & Gym’, customers can pay for items via different means.  30% of customers now use NFC on their smartphone to pay at the bar.  The company also has an app that gives news, information and offers to customers, 70% of customers have installed this app.  20% of customers use their smartphones to pay and have the company app.


{% include question_venn.html
    id="venn_q1"
    title="1"
    question_text="Complete the Venn diagram, showing probabilities as decimal numbers between 0 and 1."
    label_a="NFC payment"
    label_b="Phone App"
    val_a="INPUT"
    val_mid="INPUT"
    val_b="INPUT"
    val_out="INPUT"
    answers="0.1 || 0.2 || 0.5 || 0.2"
    tolerance="0.01"
    solution_text="Fill in the intersection of 0.2 first.  The work out the remainder of NFC ($0.3 - 0.2 = 0.1$) and the remainder of app ($0.7 - 0.2 = 0.5$).  All 4 numbers need to sum to 1."
%}

Using the Venn diagram, or otherwise, calculate the following probability (as a decimal number to no more than 3 decimal places) that a customer:

{% include question_numerical.html
id="venn_q2"
title="2"
question_text="does not use the NFC function and does not use the app"
correct_answer="0.2"
tolerance="0.005"
solution_text="This is the area outside of the circles."
%}

{% include question_numerical.html
id="venn_q3"
title="3"
question_text="uses their phone for at least one of the NFC or app means"
correct_answer="0.8"
tolerance="0.005"
solution_text="This is the total area inside of the circles."
%}

{% include question_numerical.html
id="venn_q4"
title="4"
question_text="uses their NFC but does not have the app"
correct_answer="0.1"
tolerance="0.005"
solution_text="This is the NFC circle outside of the app circle."
%}

{% include question_numerical.html
id="venn_q5"
title="5"
question_text="uses their NFC given that they have the app installed"
correct_answer="0.286"
tolerance="0.0005"
solution_text="We know here that we are in the app circle, which is 0.7, and 0.2 of this 0.7 is inside the NFC circle."
%}

{% include question_numerical.html
id="venn_q6"
title="6"
question_text="uses the app given that they use NFC to pay"
correct_answer="0.667"
tolerance="0.0005"
solution_text="It is now out of 0.3 (the NFC circle), and 0.2 of this is the app too."
%}

<div class="explanation" markdown="1">

## Independent Events

If there are two events $A$ and $B$ and we find that $P(A \text{ given } B) = P(A)$, then the event B occurring did not effect the probability of A.  In this case we say that events $A$ and $B$ are **independent events**.

</div>

{% include question_multiple_choice.html
    id="venn_q7"
    title="7"
    question_text="Are the events using NFC and using the phone app independent of one another?"
    options="yes::Yes, independent events||no::No, events are not independent"
    correct_answer="no"
    solution_text="Probability of NFC is 0.3 and the probability of NFC given they use the app is 0.286.  Not equal, so not independent."
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/eco/4001b/probability/" | relative_url }}">← Return to Probability Menu</a>
</div>

{% include pagination.html %}
