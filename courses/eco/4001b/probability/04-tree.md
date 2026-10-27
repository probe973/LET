---
layout: eco4001b
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

![A tree diagram showing branches for weather, rain or no rain, followed by branches for time of bus, late or not late.]({{ "images/tree_eg.png"}})


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


We can also calculate **conditional probabilities**.

For example: given the bus is late, find the probability it was raining.

From above we have that the probability of late being 0.52, so this is our denominator for the probability.  We can also see that the raining part of late gave a probability of 0.28.  So:

$$P(\text{raining given late}) = \frac{0.28}{0.52} = 0.5385 (4 \text{ dp})$$

</div>

### Questions

A company records and finds that 82% of its members make use of the car park when they visit.  Of these 82%, 23% regularly use the café for refreshments during the visit.  For those who do not use the car park 64% obtain refreshments.


{% include question_tree.html
    id="tree_q1"
    title="1"
    question_text="Fill in the missing probabilities as decimals between 0 and 1."
    
    text_a_top="Car"        
    text_a_bot="No Car"
    
    text_b_1="Refreshments"
    text_b_2="No Refreshments"
    text_b_3="Refreshments"
    text_b_4="No Refreshments"

    val_a_top="0.82"
    val_a_bot="INPUT"

    val_b_1="INPUT"
    val_b_2="INPUT"
    val_b_3="INPUT"
    val_b_4="INPUT"

    answers="0.18 || 0.23 || 0.77 || 0.64 || 0.36"
    solution_text="No Car: $1 - 0.82$.  For the car branch we will have $0.23$ and $1 - 0.23$ and for the no car branch we will start with $0.64$."
%}

{% include question_numerical.html
id="tree_q2"
title="2"
question_text="Find the probability that a randomly selected customer drives by car and has refreshments from the café.  Give your answer as a decimal correct to 4 decimal places."
correct_answer="0.1886"
tolerance="0.00005"
solution_text="We multiply along the branches so need $0.82 \times 0.23$"
%}

{% include question_numerical.html
id="tree_q3"
title="3"
question_text="Find the probability that a randomly selected customer has refreshments from the café.  Give your answer as a decimal correct to 4 decimal places."
correct_answer="0.3038"
tolerance="0.00005"
solution_text="Refreshments can either be car and refreshements or they could be no car and refreshments.  We have 0.1886, so need to find the no car and refreshments in a similar way, then add 0.1886 to this answer for no car and refreshments."
%}

{% include question_numerical.html
id="tree_q4"
title="4"
question_text="Given that a customer has had refreshments from the café, what is the probability that they did not use the car?"
correct_answer="0.3792"
tolerance="0.00005"
solution_text="We have the probability of refreshments from question 3, so this will  be our denominator.  The numerator is going to be the no car and refreshments, which was also worked out as part of question 3."
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/eco/4001b/probability/" | relative_url }}">← Return to Probability Menu</a>
</div>

{% include pagination.html %}
