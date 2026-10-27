---
layout: nbs4104b
title: Two-way Tables
---

# Two-way (Contingency) Frequency Tables

<div class="instructions" markdown="1">

A two-way frequency table (or contingency table) shows data for two categorical variables, using rows for one variable and columns for the other, showing the frequency of observations in each combination.

For example, let's say you look at a company that offers working from home and working from the office.  On a particular day you record how many people work from home and how many work from the office and within these categories you record whether they had a lunch made at their own home.

| Place of work/Homemade Lunch | Homemade lunch | Lunch from external source | TOTAL |
|:----|:----|:----|:----|
| Work from home | 24 | 6 | 30 |
| Work from office | 12 | 28 | 40 |
| TOTAL | 36 | 34 | 70 |

This shows you information such as:
* There were 70 people working that day
* 30 people worked from home
* Of the 30 people working from home, 6 had an external sourced lunch
* and so on

From the frequencies we can work out probabilities.

</div>

{% capture contingency1 %}
<table class="table table-bordered">
  <thead>
    <tr>
    <th scope="col">Division/Level</th>
    <th scope="col">Junior</th>
    <th scope="col">Senior</th>
    <th scope="col">Manager</th>
    <th scope="col">TOTAL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Manufacturing</td>
      <td>15</td>
      <td>8</td>
      <td><input type="number" step="any" aria-label="Frequency of manufacturing and manager"></td>
      <td>30</td>
    </tr>
    <tr>
      <td>Marketing</td>
      <td>20</td>
      <td><input type="number" step="any" aria-label="Frequency of marketing and senior"></td>
      <td>4</td>
      <td>32</td>
    </tr>
    <tr>
      <td>Sales</td>
      <td><input type="number" step="any" aria-label="Frequency of sales and junior"></td>
      <td><input type="number" step="any" aria-label="Frequency of sales and senior"></td>
      <td><input type="number" step="any" aria-label="Frequency of sales and manager"></td>
      <td>28</td>
    </tr>
    <tr>
      <td>TOTAL</td>
      <td>50</td>
      <td>25</td>
      <td>15</td>
      <td>90</td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% include table_fill.html 
   id="contingency1" 
   title="1"
   question_text="Use the information given in the table to complete the remaining frequencies of a company's profile of division and level of employment."
   table_content=contingency1
   answers="7 || 8 || 15 || 9 || 4"
   tolerance="0.01" 
   solution_text="Use the row totals to calculate the missing manufacturing and marketing frequencies.  Then use the column totals to work out the missing sales frequencies."
%}

For the next questions, make use of the completed two-way table.

{% include question_multiple_choice.html
    id="contingency2"
    title="2"
    question_text="What is the probability that a randomly selected person works in manufacturing?"
    options="wrong1::1/5||correct::1/3||wrong2::1/2||wrong3::1"
    correct_answer="correct"
    solution_text="30 out of 90 people work in manufacturing.  This is one-third."
%}

{% include question_multiple_choice.html
    id="contingency3"
    title="3"
    question_text="What is the probability that a randomly selected person is senior and in sales?"
    options="correct::1/10||wrong1::14/45||wrong2::5/18||wrong3::4/45"
    correct_answer="correct"
    solution_text="Senior and sales contains 9 people out of 90.  This is one-tenth."
%}

{% include question_multiple_choice.html
    id="contingency4"
    title="4"
    question_text="What is the probability that a randomly selected person is not a manager"
    options="wrong1::3/18||wrong2::5/18||wrong3::1/2||correct::15/18"
    correct_answer="correct"
    solution_text="75 people are not managers, 75 out of 90 is 15/18."
%}

{% include question_multiple_choice.html
    id="contingency5"
    title="5"
    question_text="Given that a person is a junior member, what is the probability that they work in marketing?"
    options="wrong1::16/45||wrong2::5/9||wrong3::3/18||correct::2/5"
    correct_answer="correct"
    solution_text="Only looking at the 50 people who are junior.  Out of these 50 people, 20 work in marketing, so 20/50."
%}

{% include question_numerical.html
id="contingency6"
title="6"
question_text="Given a person is a senior member, what is the probability that they work in sales?  Give your answer as a decimal number between 0 and 1."
correct_answer="0.36"
tolerance="0"
solution_text="Only looking at the 25 people who are senior, 9 of these work in sales, so 9/25."
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/nbs/4104b/probability/" | relative_url }}">← Return to Probability Menu</a>
</div>

{% include pagination.html %}
