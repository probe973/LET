---
layout: nbs4107a
title: Probability
---

{% capture nbsw05q1table %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Session/Journey</th>
      <th scope="col">Car</th>
      <th scope="col">No Car</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Free Weights</td>
      <td>3</td>
      <td><input type="number" step="any" aria-label="Frequency of free weights and no car"></td>
      <td>4</td>
    </tr>
    <tr>
     <td>Cardio Machine</td>
      <td>4</td>
      <td><input type="number" step="any" aria-label="Frequency of cardio machine and no car"></td>
      <td>5</td>
    </tr>
    <tr>
     <td>Fitness Class</td>
      <td><input type="number" step="any" aria-label="Frequency of fitness class and car"></td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
     <td>Bar</td>
      <td><input type="number" step="any" aria-label="Frequency of bar and car"></td>
      <td><input type="number" step="any" aria-label="Frequency of bar and no car"></td>
      <td>3</td>
    </tr>
    <tr>
      <td>TOTAL</td>
     <td>10</td>
      <td>6</td>
      <td>16</td>
    </tr>
  </tbody>
</table>
{% endcapture %}


# Probability

## Two-way Tables

### Question 1

This question relates to a survey of people at the Pecs Bar and Gym on the last thing they used at the gym and whether they travelled by car.

{% include table_fill.html 
   id="nbsrjw05q1a" 
   title="1a"
   question_text="Complete the cross-table (contingency table) for the frequencies of customers, with session in the rows and journey in the columns, using the information already in the table."
   table_content=nbsw05q1table
   answers=" 1 || 1 || 2 || 1 || 2 "
   tolerance="0.01" 
   solution_text="Use the row and column totals to find the missing values.

Free Weights (No Car): 4 - 3 = 1

Cardio (No Car): 5 - 4 = 1

Fitness Class (Car): 4 - 2 = 2

Bar (Car): Total Car (10) - 3 - 4 - 2 = 1

Bar (No Car): 3 - 1 = 2"
%}

A person is selected at random.

{% include question_solve.html
    id="nbsrjw05q1bi"
    title="1b i"
    question_text="Find the probability that they went to the fitness class"
    correct_answer="1/4"
    solution_text="There were 4 in the fitness class out of a total of 16, so $\frac{4}{16} = \frac{1}{4}$"
%}

{% include question_solve.html
    id="nbsrjw05q1bii"
    title="1b ii"
    question_text="Find the probability that they came by car"
    correct_answer="5/8"
    solution_text="10 came by car out of a total of 16, so $\frac{10}{16} = \frac{5}{8}$"
%}


{% include question_solve.html
    id="nbsrjw05q1biii"
    title="1b iii"
    question_text="Find the probability that they used the cardio machines and came by car"
    correct_answer="1/4"
    solution_text="4 used the cardio machines and came by car out of a total of 16, so $\frac{4}{16} = \frac{1}{4}$"
%}

{% include question_solve.html
    id="nbsrjw05q1biv"
    title="1b iv"
    question_text="Find the probability that they did not use free weights and did not come by car"
    correct_answer="5/16"
    solution_text="The number of people in this group is (Cardio, No Car) + (Fitness, No Car) + (Bar, No Car) = 1 + 2 + 2 = 5. So $p = \frac{5}{16}$"
%}

{% include question_solve.html
    id="nbsrjw05q1c"
    title="1c"
    question_text="Given that a randomly selected person came by car, what is the probability they went to the fitness class?"
    correct_answer="1/5"
    solution_text="This is a conditional probability. The total is now only the people who came by car (10). Of those 10, 2 went to the fitness class. $p = \frac{2}{10} = \frac{1}{5}$"
%}

## Venn Diagrams

### Question 2

The Pecs Bar and Gym carry out a larger-scale study of its facility usage. The information below summarises some of the findings.

In the time period studied:

- 166 used the bar area
- 80 people used the pool
- 50 people did not use either area
- 46 used both areas

{% include question_venn.html
    id="nbsrjw05q2a"
    title="2a"
    question_text="Complete the Venn diagram to show the information for the frequencies above"
    label_a="Bar"
    label_b="Pool"
    val_a="INPUT"
    val_mid="INPUT"
    val_b="INPUT"
    val_out="INPUT"
    answers="120 || 46 || 34 || 50"
    tolerance="0.01"
    solution_text="Fill in the intersection of 46 first.  The work out the remainder of the bar ($166 - 46 = 120$) and the remainder of the pool ($80 - 46 = 34$).  There are 50 people outside of the circles."
%}

{% include question_numerical.html
    id="nbsrjw05q2b"
    title="2b"
    question_text="How many people were included in the study?"
    correct_answer="250"
    tolerance="0.05"
    solution_text="Add the frequencies in the venn diagram to get 250"
%}

{% include question_solve.html
    id="nbsrjw05q2c"
    title="2c"
    question_text="What is the probability that a randomly selected person used the pool?"
    correct_answer="8/25"
    solution_text="80 people used the pool out of the total of 250, therefore the probability is $\frac{80}{250} = \frac{8}{25}$"
%}

{% include question_solve.html
    id="nbsrjw05q2d"
    title="2d"
    question_text="What is the probability that a randomly selected person used both the pool and the bar?"
    correct_answer="23/125"
    solution_text="46 people used the pool and the bar out of the total of 250, therefore the probability is $\frac{46}{250} = \frac{23}{125}$"
%}

{% include question_solve.html
    id="nbsrjw05q2e"
    title="2e"
    question_text="What is the probability that a randomly selected person did not use the bar?"
    correct_answer="42/125"
    solution_text="166 used the bar, so $250 - 166 = 84$ did not use the bar, therefore the probability is $\frac{84}{250} = \frac{42}{125}$"
%}

{% include question_solve.html
    id="nbsrjw05q2f"
    title="2f"
    question_text="What is the probability that a randomly selected person used the pool or the bar?"
    correct_answer="4/5"
    solution_text="Counting inside the circles $120 + 46 + 34 = 200$, therefore the probability is $\frac{200}{250} = \frac{4}{5}$"
%}

{% include question_solve.html
    id="nbsrjw05q2g"
    title="2g"
    question_text="Given that a person used the bar, what is the probability that they used the pool?"
    correct_answer="23/83"
    solution_text="This is a conditional probability. The total is now only the people who used the bar (120 + 46 = 166).

Of these 166 people, 46 also used the pool.

$P(\text{Pool GIVEN Bar}) = \frac{46}{166} = \frac{23}{83}$."
%}

{% include question_multiple_choice.html
    id="nbsrjw05q2h"
    title="2h"
    question_text="Are the events of attending the pool and using the bar independent?"
    options="n::Not Independent||y::Independent"
    correct_answer="n"
    solution_text="For events to be independent, $P(\text{Pool GIVEN Bar})$ must equal $P(\text{Pool})$.

From part (g), $P(\text{Pool GIVEN Bar}) = \frac{23}{83}$

From part (c), $P(\text{Pool}) = \frac{8}{25}$.

Since these are not equal, the events are not independent."
%}

2i. Two people are randomly selected from the group. What is the probability that:

{% include question_numerical.html
    id="nbsrjw05q2ii"
    title="2i i"
    question_text="they are two people who both used the pool? Give your answer as a decimal to 3 decimal places."
    correct_answer="0.101"
    tolerance="0.0005"
    solution_text="$P(\text{1st used Pool}) = \frac{80}{250}$.

$P(\text{2nd used Pool, given 1st did}) = \frac{79}{249}$.

$\text{Total Probability} = \frac{80}{250} \times \frac{79}{249} \approx 0.101$"
%}

{% include question_numerical.html
    id="nbsrjw05q2iii"
    title="2i ii"
    question_text="at least one of the two people used the pool? Give your answer as a decimal to 3 decimal places."
    correct_answer="0.539"
    tolerance="0.0005"
    solution_text="This is equal to $1 - P(\text{neither used Pool})$.

$P(\text{1st did not use Pool}) = \frac{250-80}{250} = \frac{170}{250}$.

$P(\text{2nd did not use Pool, given 1st did not}) = \frac{169}{249}$.

$P(\text{at least one}) = 1 - \left( \frac{170}{250} \times \frac{169}{249} \right) \approx 0.539$."
%}

## More than One Event

### Question 3

Customers can use lockers while enjoying the facilities of the Pecs Bar and Gym. The management of the locker keys is quite messy; all the keys are just randomly left in a drawer.

There are 90 green tagged keys, numbered 1 to 90. There are 60 red tagged keys, numbered 1 to 60.

The first customer of the day appears and then they ask for a locker. The receptionist reaches into the drawer and pulls out a key.

{% include question_solve.html
    id="nbsrjw05q3a"
    title="3a"
    question_text="What is the probability that they get a green tagged key?"
    correct_answer="3/5"
    solution_text="First, find the total number of keys:

$\text{Total Keys} = 90 (\text{Green}) + 60 (\text{Red}) = 150$

The number of green keys is 90.

$P(\text{Green}) = \frac{90}{150} = \frac{3}{5}$"
%}

{% include question_solve.html
    id="nbsrjw05q3b"
    title="3b"
    question_text="What is the probability that they get a key numbered over 50?"
    correct_answer="1/3"
    solution_text="First, find how many keys of each colour are numbered over 50:

$\text{Green keys over 50} = 90 - 50 = 40$

$\text{Red keys over 50} = 60 - 50 = 10$

$\text{Total keys over 50} = 40 + 10 = 50$

The probability is this number divided by the total: 

$P(>50) = \frac{50}{150} = \frac{1}{3}$"
%}


It’s a slow day. The customer does their thing and returns the key to reception. No other customers have entered during this time. Just as the reception thinks about closing early for lunch, a group of three people make their way into the building. They all want lockers.

{% include question_numerical.html
    id="nbsrjw05q3c"
    title="3c"
    question_text="What is the probability that all three get green tags? Give your answer as a decimal to 3 decimal places."
    correct_answer="0.213"
    tolerance="0.0005"
    solution_text="This is sampling without replacement. We multiply the probabilities for each successive event:

$P(\text{1st is Green}) = \frac{90}{150}$

$P(\text{2nd is Green}) = \frac{89}{149}$

$P(\text{3rd is Green}) = \frac{88}{148}$

$\text{Total } P = \frac{90}{150} \times \frac{89}{149} \times \frac{88}{148} = 0.213$

"
%}

{% include question_numerical.html
    id="nbsrjw05q3d"
    title="3d"
    question_text="What is the probability that all three get tags of the same colour? Give your answer as a decimal to 3 decimal places."
    correct_answer="0.275"
    tolerance="0.001"
    solution_text="This is sampling without replacement. We multiply the probabilities for each successive event:

We need to find the probability of all three getting green OR all three getting red.

$P(\text{All Green}) = \frac{90}{150} \times \frac{89}{149} \times \frac{88}{148} = 0.213$

$P(\text{All Red}) = \frac{60}{150} \times \frac{59}{149} \times \frac{58}{148} = 0.062$

The total probability is the sum of these two probabilities:

$P(\text{Same Colour}) = P(\text{All Green}) + P(\text{All Red}) = 0.213 + 0.062 = 0.275$

"
%}

## Tree Diagrams

### Question 4

The company gets its equipment from two suppliers, supplier X and supplier Y, with 70% of the equipment coming from supplier X. Evidence suggests that supplier's X equipment has a 5% chance of failing in the first year. The figure for supplier Y is 8%.

{% include question_tree.html
    id="nbsrjw05q4a"
    title="4a"
    question_text="Fill in the missing probabilities as decimals between 0 and 1."
    
    text_a_top="Supplier X"
    text_a_bot="Supplier Y"
    
    text_b_1="Fails"
    text_b_2="Does not Fail"
    text_b_3="Fails"
    text_b_4="Does not Fail"

    val_a_top="0.7"
    val_a_bot="INPUT"

    val_b_1="INPUT"
    val_b_2="INPUT"
    val_b_3="INPUT"
    val_b_4="INPUT"

    answers="0.3 || 0.05 || 0.95 || 0.08 || 0.92"
    solution_text="Y: $1 - 0.7 = 0.3$.  For the X branch we will have $0.05$ and $1 - 0.05 = 0.95$, for fail and not fail; and for the Y branch we will start with $0.08$."
%}

By making use of the tree diagram, or otherwise:

{% include question_numerical.html
    id="nbsrjw05q4bi"
    title="4b i"
    question_text="Find the probability that a randomly selected piece of equipment is from supplier X and fails in the first year. Give your answer as a decimal to 3 decimal places."
    correct_answer="0.035"
    tolerance="0.0005"
    solution_text="Multiply the probability of being from Supplier X by the probability of it failing, given it's from X.

$P(\text{X and Fails}) = P(\text{X}) \times P(\text{Fails given X}) = 0.70 × 0.05 = 0.035$

"
%}

{% include question_numerical.html
    id="nbsrjw05q4bii"
    title="4b ii"
    question_text="Find the probability that a randomly selected piece of equipment fails in the first year. Give your answer as a decimal to 3 decimal places."
    correct_answer="0.059"
    tolerance="0.0005"
    solution_text="First, find the probability of being from Y and failing: 

$P(\text{Y and Fails}) = P(Y) \times P(\text{Fails given Y}) = 0.30 \times 0.08 = 0.024$

Then, add the two failure probabilities together: 

$P(\text{Fails}) = P(\text{X and Fails}) + P(\text{Y and Fails}) = 0.035 + 0.024 = 0.059$
"
%}

Given that a piece of equipment fails during the first year, find the probability:

{% include question_numerical.html
    id="nbsrjw05q4ci"
    title="4c i"
    question_text="it was from supplier X. Give your answer as a decimal to 3 decimal places."
    correct_answer="0.593"
    tolerance="0.001"
    solution_text="$$P(\text{X} \mid \text{Fails}) = \frac{P(\text{X and Fails})}{P(\text{Fails})} = 0.035 \div 0.059 = 0.593$$

$\mid$ means given"
%}

{% include question_numerical.html
    id="nbsrjw05q4cii"
    title="4c ii"
    question_text="it was from supplier Y. Give your answer as a decimal to 3 decimal places."
    correct_answer="0.407"
    tolerance="0.001"
    solution_text="$$P(\text{Y} \mid \text{Fails}) = \frac{P(\text{Y and Fails})}{P(\text{Fails})} = 0.024 \div 0.059 = 0.407$$

$\mid$ means given"
%}

## Challenge

### Question 5

The bar staff at the Pecs Bar and Gym have a game they play with customers. The bar staff member picks a card at random from a particular deck and will offer a free drink if the customer can guess what it is.

The deck is 20 cards and looks like:

- 10 cards numbered 1 to 10 in red
- 10 cards numbered 1 to 10 in blue

Guesses will be number and colour, for example **5 blue**.

{% include question_solve.html
    id="nbsrjw05q5a"
    title="5a"
    question_text="What is the probability that the customer guesses the correct card?"
    correct_answer="1/20"
    solution_text="There is one correct card out of 20, so

$$P(\text{correct}) = \frac{1}{20}$$"
%}

The customer is unlikely to win. To help the customer, they are allowed to ask a single ‘yes/no’ question, from the list below, which the bar member will answer honestly, before they guess. The choices of questions are:

- is the card a red card?
- is the card a 5 card?
- is the card the 5 blue?

For each of the possible questions, consider the probability that the bar member will say yes, then consider the probability of winning if they say yes and the probability of winning if they say no. Adding these probabilities will give the chance of winning by using this question.

{% include question_multiple_choice.html
    id="nbsrjw05q5b"
    title="5b"
    question_text="Which of the questions would lead the the best probability of a free drink?"
    options="a::Is the card a red card?||b::Is the card a 5 card?||c::Is the card the 5 blue card?||d::All questions result in the same probability of a free drink"
    correct_answer="d"
    solution_text="We calculate the total probability of winning for each scenario:

$$P(\text{Win}) = P(\text{Yes}) \times P(\text{Win} \mid \text{Yes}) + P(\text{No}) \times P(\text{Win} \mid \text{No})$$

Is it red?:

$$P(\text{Win}) = \frac{1}{2} \times \frac{1}{10} + \frac{1}{2} \times \frac{1}{10} = \frac{1}{10}$$

Is it a 5 card?:

$$P(\text{Win}) = \frac{1}{10} \times \frac{1}{2} + \frac{9}{10} \times \frac{1}{18} = \frac{1}{10}$$

Is it the 5 blue:

$$P(\text{Win}) = \frac{1}{20} \times \frac{1}{1} + \frac{19}{20} \times \frac{1}{19} = \frac{1}{10}$$"
%}


<script src="https://unpkg.com/mathlive"></script>
<script src="https://unpkg.com/@cortex-js/compute-engine"></script>
