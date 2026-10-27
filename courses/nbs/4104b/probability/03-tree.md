---
layout: nbs4104b
title: Tree Diagrams
---

# Tree Diagrams

<div class="instructions" markdown="1">

### Tree Diagrams

Tree diagrams are a useful tool to calculate probabilities where there are more than one event.  It is also useful when events are dependendent on other events.

They are called tree diagrams because the different outcomes within an event are shown by branches.

**Example**

It is known that the probability that during a particular month the probability of rain is 0.4.  It is also observed that the probability that wheher the bus you catch to work is late is different dependent on whether it rains or not.  If it is raining then the bus has a probability of being late of 0.7 and if it is not raining the bus has a probability of being late of 0.4.

There are two events, whether it rains and timing of the bus.  The timing of the bus is dependent on the rain.  So we will create a diagram where the first event is the weather (rain or not rain) with two branches.  At the end of these two branches we will have the second event, timing of the bus, which also has two branches, on-time or late.

For the first event, the probability of rain is 0.4.  Therefore the probability of not rain is 0.6, since the probabilities need to sum to 1.

For the second event, if it is raining then we have late of 0.7, so not late will be 0.3.  If it is not raining then we have late of 0.4 and not late of 0.6.

![A tree diagram showing branches for weather, rain or no rain, followed by branches for time of bus, late or not late.]({{ "images/tree_eg.png" }})


### Calculating probabilities from the tree diagram

To work out probabilities of the combined events you can multiply the probabilities along the branches.  So, the following probabilities can be calculated:

$P(\text{raining and late}) = 0.4 \times 0.7 = 0.28$

$P(\text{raining and on time}) = 0.4 \times 0.3 = 0.12$

$P(\text{not raining and late}) = 0.6 \times 0.4 = 0.24$

$P(\text{not raining and on time}) = 0.6 \times 0.6 = 0.36$

As a sanity check, these probabilities should add up to 1:

$0.28 + 0.12 + 0.24 + 0.36 = 1$


You can also now work out things like, what is the probability that a bus will be late?

A bus can be late if it's raining and a bus can be late if it's not raining.  Adding these two probabilities will give us the answer we require.

$P(\text{late}) = P(\text{raining and late}) + P(\text{not raining and late}) = 0.28 + 0.24 = 0.52$

</div>

### Questions

An archer is competing in a competition that requires two shots.  From experience they know that the probability that they will hit the *bullseye* is 0.8.  If they hit on the first attempt, the probability of hitting on the second attempt remains at 0.8.  However if they miss on the first attempt, the probability of hitting on the second attempt drops to 0.52.

{% capture q1_solution %}
![A tree diagram showing branches for first attempt, hit or miss, followed by branches for the second attempt, hit or miss.]({{ "images/tree_q1.png" }})
{% endcapture %}

{% include question_tree.html
    id="tree_q1"
    title="1"
    question_text="Fill in the missing probabilities as decimals between 0 and 1."
    
    text_a_top="Hit"        
    text_a_bot="Miss"
    
    text_b_1="Hit"
    text_b_2="Miss"
    text_b_3="Hit"
    text_b_4="Miss"

    val_a_top="0.8"
    val_a_bot="INPUT"

    val_b_1="INPUT"
    val_b_2="INPUT"
    val_b_3="INPUT"
    val_b_4="INPUT"

    answers="0.2 || 0.8 || 0.2 || 0.52 || 0.48"
    solution_text="No Car: $1 - 0.8$.  For the hit branch we will still have $0.8$ for hit and $1 - 0.2$ for miss. For the no car branch we will hit with $0.52$, so miss $1-0.52$."
%}

{% include question_numerical.html
    id="tree_2"
    title="2"
    question_text="What is the probability that they hit on both attempts"
    correct_answer="0.64"
    tolerance="0"
    solution_text="$0.8 \times 0.8 = 0.64$"
%}

{% include question_numerical.html
    id="tree_3"
    title="3"
    question_text="What is the probability that they miss on both attempts"
    correct_answer="0.096"
    tolerance="0"
    solution_text="$0.2 \times 0.48 = 0.096$"
%}

{% include question_numerical.html
    id="tree_4"
    title="4"
    question_text="What is the probability that they hit on exactly one attempt"
    correct_answer="0.304"
    tolerance="0"
    solution_text="Hit then miss: $0.8 \times 0.2 = 0.16$ -- Miss then hit: $0.2 \times 0.52 = 0.104$ -- Add together: $0.264$"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/nbs/4104b/probability/" | relative_url }}">← Return to Probability Menu</a>
</div>

{% include pagination.html %}
