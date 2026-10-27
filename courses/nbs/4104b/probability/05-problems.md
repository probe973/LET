---
layout: nbs4104b
title: Probability Problems
---

# Probability Problems

This workshop will look at some problems that can be solved using probability skills.

You can download a pdf of this resource <a href="{{ "/courses/nbs/4104b/docs/probability_problems.pdf" | relative_url }}" target="_blank">here</a>.

The solutions pdf can be found <a href="{{ "/courses/nbs/4104b/docs/probability_problems_solutions.pdf" | relative_url }}" target="_blank">here</a>.  

Please be mindful of the environment when choosing whether you need to print.


## Questions

### Question 1

Below is an incomplete two-way table showing the preferences of 500 people to two operating systems (Pear and Robot) and their self-declared interest in technology (low, medium, high).

**Part a**

{% capture tech_table %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col" rowspan="2" style="vertical-align: middle;">Operating System</th>
      <th scope="col" colspan="3" style="text-align: center;">Tech Interest</th>
      <th scope="col" rowspan="2" style="vertical-align: middle;">Total</th>
    </tr>
    <tr>
      <th scope="col">Low</th>
      <th scope="col">Medium</th>
      <th scope="col">High</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pear</td>
      <td>95</td>
      <td><input type="number" step="any" aria-label="Pear Medium Interest"></td>
      <td><input type="number" step="any" aria-label="Pear High Interest"></td>
      <td>350</td>
    </tr>
    <tr>
      <td>Robot</td>
      <td><input type="number" step="any" aria-label="Robot Low Interest"></td>
      <td>90</td>
      <td>40</td>
      <td><input type="number" step="any" aria-label="Robot Total"></td>
    </tr>
    <tr>
      <td><strong>Total</strong></td>
      <td><input type="number" step="any" aria-label="Total Low Interest"></td>
      <td>300</td>
      <td><input type="number" step="any" aria-label="Total High Interest"></td>
      <td><input type="number" step="any" aria-label="Grand Total"></td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% include table_fill.html 
   id="prob_prob_12" 
   title="1 a"
   question_text="Complete the two-way table"
   table_content=tech_table
   answers="210 || 45 || 20 || 150 || 115 || 85 || 500"
   tolerance="0" 
   solution_text="1. **Robot Total:** Grand Total (500) - Pear Total (350) = **150**. <br> 2. **Robot Low:** Robot Total (150) - Medium (90) - High (40) = **20**. <br> 3. **Total Low:** Pear (95) + Robot (20) = **115**. <br> 4. **Total High:** Grand Total (500) - Low (115) - Medium (300) = **85**. <br> 5. **Pear High:** Total High (85) - Robot High (40) = **45**. <br> 6. **Pear Medium:** Pear Total (350) - Low (95) - High (45) = **210**."
%}

**Part b**

(Give answers as decimals between 0 and 1, and if required, give answers to 3 decimal places)

What is the probability that a randomly selected person:

{% include question_numerical.html
    id="prob_prob_13"
    title="1b i"
    question_text="uses the Pear operating system?"
    correct_answer="0.7"
    tolerance="0.0005"
    solution_text="$P(\text{Pear})=\frac{350}{500}=\frac{7}{10}=0.7$"
%}

{% include question_numerical.html
    id="prob_prob_14"
    title="1b ii"
    question_text="has a medium interest in technology?"
    correct_answer="0.6"
    tolerance="0.0005"
    solution_text="$P(\text{Medium})=\frac{300}{500}=\frac{3}{5}=0.6$"
%}

{% include question_numerical.html
    id="prob_prob_15"
    title="1b iii"
    question_text="has a medium interest and uses the Robot operating system?"
    correct_answer="0.18"
    tolerance="0.0005"
    solution_text="$P(\text{Medium AND Robot})=\frac{90}{500}=\frac{9}{50}=0.18$"
%}

{% include question_numerical.html
    id="prob_prob_16"
    title="1b iv"
    correct_answer="0.61"
    tolerance="0.0005"
    question_text="has a low or medium interest and uses the Pear operating system?"
    solution_text="$P(\text{Low/medium AND Pear})=\frac{95+210}{500}=\frac{61}{100}=0.61$"
%}

{% include question_numerical.html
    id="prob_prob_17"
    title="1b v"
    correct_answer="0.267"
    tolerance="0.0005"
    question_text="has a high technology interest, given that they use the Robot operating system?"
    solution_text="$P(\text{High GIVEN Robot})=\frac{40}{150}=\frac{4}{15}=0.267$"
%}

{% include question_numerical.html
    id="prob_prob_18"
    title="1b vi"
    correct_answer="0.174"
    tolerance="0.0005"
    question_text="uses the Robot operating system, given they have a low technology interest?"
    solution_text="$P(\text{Robot GIVEN Low})=\frac{20}{115}=\frac{4}{23}=0.174$"
%}


### Question 2

At the bar of the company ‘The Pecs Bar & Gym’, customers can pay for items via different means.  30% of customers now use NFC on their smartphone to pay at the bar.  The company also has an app that gives news, information and offers to customers, 70% of customers have installed this app.  20% of customers use their smartphones to pay and have the company app.


{% include question_venn.html
    id="venn_q3a"
    title="2a"
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
id="venn_q3bi"
title="2b i"
question_text="does not use the NFC function and does not use the app"
correct_answer="0.2"
tolerance="0.005"
solution_text="This is the area outside of the circles."
%}

{% include question_numerical.html
id="venn_q3bii"
title="2b ii"
question_text="uses their phone for at least one of the NFC or app means"
correct_answer="0.8"
tolerance="0.005"
solution_text="This is the total area inside of the circles."
%}

{% include question_numerical.html
id="venn_q3biii"
title="2b iii"
question_text="uses their NFC but does not have the app"
correct_answer="0.1"
tolerance="0.005"
solution_text="This is the NFC circle outside of the app circle."
%}

{% include question_numerical.html
id="venn_q3biv"
title="2b iv"
question_text="uses their NFC given that they have the app installed"
correct_answer="0.286"
tolerance="0.0005"
solution_text="We know here that we are in the app circle, which is 0.7, and 0.2 of this 0.7 is inside the NFC circle."
%}

{% include question_numerical.html
id="venn_q3bv"
title="2b v"
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
    id="venn_q3c"
    title="2c"
    question_text="Are the events using NFC and using the phone app independent of one another?"
    options="yes::Yes, independent events||no::No, events are not independent"
    correct_answer="no"
    solution_text="Probability of NFC is 0.3 and the probability of NFC given they use the app is 0.286.  Not equal, so not independent."
%}


### Question 3

A company records and finds that 82% of its members make use of the car park when they visit.  Of these 82%, 23% regularly use the café for refreshments during the visit.  For those who do not use the car park 64% obtain refreshments.


{% include question_tree.html
    id="tree_q4"
    title="3a"
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
id="tree_q4b"
title="3b"
question_text="Find the probability that a randomly selected customer drives by car and has refreshments from the café.  Give your answer as a decimal correct to 4 decimal places."
correct_answer="0.1886"
tolerance="0.00005"
solution_text="We multiply along the branches so need $0.82 \times 0.23$"
%}

{% include question_numerical.html
id="tree_q4c"
title="3c"
question_text="Find the probability that a randomly selected customer has refreshments from the café.  Give your answer as a decimal correct to 4 decimal places."
correct_answer="0.3038"
tolerance="0.00005"
solution_text="Refreshments can either be car and refreshements or they could be no car and refreshments.  We have 0.1886, so need to find the no car and refreshments in a similar way, then add 0.1886 to this answer for no car and refreshments."
%}

{% include question_numerical.html
id="tree_q4d"
title="3d"
question_text="Given that a customer has had refreshments from the café, what is the probability that they did not use the car?"
correct_answer="0.3792"
tolerance="0.00005"
solution_text="We have the probability of refreshments from question 4c, so this will  be our denominator.  The numerator is going to be the no car and refreshments, which was also worked out as part of question 4c."
%}


### Question 4

A small company of 20 people runs a weekly raffle where there are always 2 prizes.  Each employee gets 1 raffle entry for every year they have worked there, so during your first year you don't have a ticket in the draw.  Before the draw today the combined total years people have worked there is 80 years.

A ticket is drawn, the winner picks their prize, the winning ticket is returned to the draw and a second winner is drawn.

**Note that** parts a to c are all related to calculating a probability for an individual employee.


**Part a**

In a weekly draw, what is the probability that **you** will win the first prize if **you are**... (Give answers as decimals between 0 and 1, and if required, give answers to 3 decimal places):

{% include question_numerical.html
    id="prob_prob_1"
    title="4a i"
    question_text="an employee that’s been there for 2 years?"
    correct_answer="0.025"
    tolerance="0.0005"
    solution_text="$P(\text{2yr 1st prize})=\frac{2}{80}=\frac{1}{40}=0.025$"
%}

{% include question_numerical.html
    id="prob_prob_2"
    title="4a ii"
    question_text="an employee that's been there for 9 months?"
    correct_answer="0"
    tolerance="0.00005"
    solution_text="$P(\text{0yr 1st prize})=\frac{0}{80}=0$"
%}


**Part b**

A particular employee has been working there for 8 years.  What is the probability that in a weekly draw that: (Give answers as decimals between 0 and 1, and if required, give answers to 3 decimal places)

{% include question_numerical.html
    id="prob_prob_3"
    title="4b i"
    question_text="they win the first prize?"
    correct_answer="0.1"
    tolerance="0.05"
    solution_text="$P(\text{8yr 1st prize})=\frac{8}{80}=\frac{1}{10}=0.1$"
%}

{% include question_numerical.html
    id="prob_prob_4"
    title="4b ii"
    question_text="given they win the first prize they then win the second prize?"
    correct_answer="0.1"
    tolerance="0.05"
    solution_text="$P(\text{8yr 2nd prize given 1st prize})=\frac{8}{80}=\frac{1}{10}=0.1$ <br> since return of ticket means 2nd prize is independent of first prize$"
%}

{% include question_numerical.html
    id="prob_prob_5"
    title="4b iii"
    question_text="they win both the first and second prizes?"
    correct_answer="0.01"
    tolerance="0.005"
    solution_text="$P(\text{1st and 2nd prize})=P(\text{1st prize}) \times P(\text{2nd prize given 1st prize})=\frac{1}{10} \times \frac{1}{10}=\frac{1}{100}=0.01$"
%}

**Part c**

The company decides to change the nature of the draw, and the first prize winning ticket is no longer returned to the draw.  Work out the probability, for the individuals given, of winning. (Give answers as decimals between 0 and 1, and if required, give answers to 3 decimal places)

{% include question_numerical.html
    id="prob_prob_6"
    title="4c i"
    question_text="Employee has worked there for 4 years, probability of them winning first prize."
    correct_answer="0.05"
    tolerance="0.005"
    solution_text="$P(\text{1st prize})=\frac{4}{80}=\frac{1}{20}=0.05$"
%}

{% include question_numerical.html
    id="prob_prob_7"
    title="4c ii"
    question_text="Given an employee of 4 years has just won first prize, the probability of them also winning second prize."
    correct_answer="0.038"
    tolerance="0.0005"
    solution_text="$P(\text{2nd prize given 1st prize})=\frac{3}{79}=0.038$ <br> Due to 1 ticket being removed and 1 less ticket chance of winning"
%}

{% include question_numerical.html
    id="prob_prob_8"
    title="4c iii"
    question_text="An employee of 8 years, probability of them winning both first and second prizes."
    correct_answer="0.009"
    tolerance="0.0005"
    solution_text="$P(\text{1st prize and 2nd prize})=\frac{8}{80} \times \frac{7}{79}=\frac{7}{790}=0.0089$"
%}

{% include question_numerical.html
    id="prob_prob_9"
    title="4c iv"
    question_text="An employee of 1 year, probability of them winning the second prize."
    correct_answer="0.013"
    tolerance="0.0005"
    solution_text="Since only 1 ticket, needs to not win the first prize. <br> $P(\text{Not win 1st prize and win 2nd prize})=\frac{79}{80}\times \frac{1}{79}=\frac{1}{80}=0.0125$"
%}

{% include question_numerical.html
    id="prob_prob_10"
    title="4c v"
    question_text="An employee of 5 years, probability of them winning one of the prizes but not both."
    correct_answer="0.119"
    tolerance="0.0005"
    solution_text="$P(\text{1st AND not 2nd})=\frac{5}{80} \times \frac{75}{79}=\frac{75}{1264}$ <br> $P(\text{not 1st AND 2nd})=\frac{75}{80} \times \frac{5}{79} = \frac{75}{1264}$ <br> $P(\text{One not both})=\frac{75}{1264}+\frac{75}{1264}=\frac{75}{632}=0.119$"
%}

**Part d**

The number of employees based on the number of complete years they've worked there is shown in the table.  (Give answers as decimals between 0 and 1, and if required, give answers to 3 decimal places)

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Years</th>
      <th scope="col">Employees</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>0</td>
    <td>4</td>
    </tr>
    <tr>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>3</td>
      <td>1</td>
    </tr>
    <tr>
      <td>4</td>
      <td>4</td>
    </tr>
    <tr>
      <td>5</td>
      <td>3</td>
    </tr>
    <tr>
      <td>6</td>
      <td>2</td>
    </tr>
    <tr>
      <td>7</td>
      <td>1</td>
    </tr>
    <tr>
      <td>8</td>
      <td>3</td>
    </tr>
  </tbody>
</table>

{% include question_numerical.html
    id="prob_prob_11"
    title="4d"
    question_text="What is the probability that in a weekly draw there are no prizes to employees who have been there more then 5 years?"
    correct_answer="0.211"
    tolerance="0.0005"
    solution_text="At the first draw there are $2 \times 6 + 1 \times 7 + 3\times 8 = 43$ tickets for those who've been there more than 5 years, so $80-43=37$ tickets are non-winners. <br> $P(\text{no prize any over 5 yr})=\frac{37}{80} \times \frac{36}{79}=\frac{333}{1580}=0.211$"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/nbs/4104b/probability/" | relative_url }}">← Return to Probability Menu</a>
</div>

{% include pagination.html %}
