---
layout: nbs4104b
title: Probability Formula
---

# Probability Formula and Venn Diagrams

<div class="instructions" markdown="1">

### $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

In everyday use language, the $\cup$ symbol can be considered as the word **or** and the $\cap$ symbol can be considered as the word **and**.  So the formula above says, for events A and B:

$$P(A \text{ OR } B) = P(A) + P(B) - P(A \text{ AND } B)$$

So for example, if we know the probability that an event called *A* occurs with probability 0.7, the probability of an event called *B* occurs with probability 0.6, and the probability that they both occur is 0.4, then:

$$P(A \text{ OR } B) = 0.7 + 0.6 - 0.4 = 0.9$$

The probability that A or B occur is 0.9.

### Venn diagram

The information from above can be shown on a **Venn diagram**.  These allow you to see probabilities of different events.  For this example we have:

![A venn diagram that shows two overlapping circles, labelled A and B, inside a rectangle.  The probabilities of the events are in the circles and rectangle.]({{ "images/venn_1.png"  }})

The overlap between the circles shows the probability of both events A and B occurring.  The 0.4 is in there.

We know that the probability of A is 0.7, and with 0.4 of this already in the overlap we need an extra 0.3 to make up to 0.7.  This represents the probability of A occurring and B not occurring.  This could be written $P(A \cap \bar{B}) = P(A \text{ AND NOT B})$

The probability of B is 0.6, and with 0.4 of this already in the overlap we need an extra 0.2 to make up to 0.6.  This is $P(\bar{A} \cap B)$

The A or B comes to 0.9, which means there is $1-0.9=0.1$ remaining.  This is placed outside of the two circles.


**Example**

For a particular group, it is known that the probability that they own a cat is 0.45, the probability that they own a dog is 0.3, and the probability that they own a cat or a dog is 0.63.  What is the probability that a randomly selected person owns a cat and a dog.

Let $C = \text{owns a cat}$ 

Let $D = \text{owns a dog}$

We have: $P(C) = 0.45$, $P(D) = 0.3$, $P(C \text{ OR } D) = 0.63$ and:

$P(C \text{ OR } D) = P(C) + P(D) - P(C \text{ AND } D) \implies 0.63 = 0.45 + 0.3 - P(C \text{ AND } D) \implies P(C \text{ AND } D) = 0.12$

We can show this information in a Venn diagram.  To work out the cats ($C$) and no dogs ($\bar{D}$), you need to take the overlap of 0.12 from the 0.45.  You would do a similar thing for the dogs and no cats.

To work out those with no cats and no dogs $P(\bar{C} \cap \bar{D})$, then subtract the cats or dogs from 1.

![A venn diagram that shows two overlapping circles, labelled C and D, inside a rectangle.  The probabilities of the events are in the circles and rectangle.]({{ "images/venn_2.png" }})

---

### $P(\bar{A})=1-P(A)$

This formula says: $P(A \text{ not occurring}) = 1 - P(A \text{ occurring})$

Note that this can be re-arranged to read $P(A) = 1 - P(\bar{A})$

</div>

### Questions

Given:

$$P(A) = 0.5, P(B) = 0.7, P(A \text{ OR } B) = 0.75$$

{% include question_numerical.html
    id="vennformula_1"
    title="1"
    question_text="What is the probability of both A and B $P(A \text{ AND } B)$?"
    correct_answer="0.45"
    tolerance="0"
    solution_text="Using $P(A \text { OR } B) = P(A) + P(B) - P(A \text{ AND } B)$, gives $P(A \text{ AND } B) = 0.5+0.7-0.75=0.45$"
%}

{% capture q2_solution %}
![A venn diagram with circles A and B with an overlap. Inside the circles are 0.05, 0.45, and 0.25.  Outside the circle is 0.25.]({{ "images/venn_q1.png" }})
{% endcapture %}

{% include question_venn.html
    id="venn_q2"
    title="2"
    question_text="Complete the Venn diagram, showing probabilities as decimal numbers between 0 and 1."
    label_a="A"
    label_b="B"
    val_a="INPUT"
    val_mid="INPUT"
    val_b="INPUT"
    val_out="INPUT"
    answers="0.05 || 0.45 || 0.25 || 0.25"
    tolerance="0.01"
    solution_text="Fill in the intersection of 0.45 first.  The work out the remainder of A ($0.5 - 0.45 = 0.05$) and the remainder of B ($0.7 - 0.45 = 0.25$).  All 4 numbers need to sum to 1."
%}


{% include question_numerical.html
    id="vennformula_3"
    title="3"
    question_text="What is the probability of exactly one of A or B occurring, but not both?"
    correct_answer="0.3"
    tolerance="0"
    solution_text="We want A and not B added to B and not A, so $0.05 + 0.25$."
%}

<div class="instructions" markdown="1">

### $P(A | B)=\frac{P(A \cap B)}{P(B)}$

**Conditional probability** is a probability when additional information is given.  The formula can be given as:

$$P(A \text{ given } B \text{ has occurred })=\frac{P(A \text{ AND } B)}{P(B)}$$

This can be rearranged to:

$$P(A \text{ AND } B) = P(A \text{ given } B) \times P(B)$$

**Example**

Returning to the cat (C) and dog (D) example from above we had:

$P(C) = 0.45$

$P(D) = 0.3$

$P(C \text{ AND } D) = 0.12$

To work out the probability that a person who owns a dog, also owns a cat:

$P(C \text{ given } D) = \frac{C \text{ AND } D}{P(D)} = \frac{0.12}{0.3} = 0.4$

</div>

### Questions

Given:

$$P(A) = 0.2, P(B) = 0.8, P(A | B) = 0.1$$

{% include question_numerical.html
    id="vennformula_4"
    title="4"
    question_text="What is the probability of both A and B $P(A \text{ AND } B) = P(A \cap B)$?"
    correct_answer="0.08"
    tolerance="0"
    solution_text="Using $P(A \cap B) = P(A \vert B) \times P(B) = 0.1 \times 0.8 = 0.08$"
%}

{% include question_numerical.html
    id="vennformula_5"
    title="5"
    question_text="What is the probability of A or B $P(A \text{ OR } B) = P(A \cup B)$?"
    correct_answer="0.92"
    tolerance="0"
    solution_text="Using $P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.2 + 0.8 - 0.08 = 0.92$"
%}

{% include question_numerical.html
    id="vennformula_6"
    title="6"
    question_text="What is the value of $P(B \vert A)$?"
    correct_answer="0.4"
    tolerance="0"
    solution_text="Using $P(B \vert A) = \frac{P(B \cap A)}{P(A)}=\frac{0.08}{0.2}=0.4$"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/nbs/4104b/probability/" | relative_url }}">← Return to Probability Menu</a>
</div>

{% include pagination.html %}
