---
layout: eco4001b
title: Defintion of a discrete random variable
---

<div class="instructions" markdown="1">
  
# A Discrete Random Variable

For a random variable to be discrete it must be:

* a variable, that is it can take different values
* random, that is the outcome is random with a given probability
* discrete, that is it can only take on a countable number of distinct values

</div>

### Questions

Determine if the following are **discrete random variables** or not.

{% include question_multiple_choice.html
    id="drv_def1"
    title="1"
    question_text="The lifetime of a light bulb in hours"
    options="yes::Discrete Random Variable||no::Not a Discrete Random Variable"
    correct_answer="no"
    solution_text="The lifetime in hours does not take a countable number of distinct values, it is a continous variable, not discrete."
%}

{% include question_multiple_choice.html
    id="drv_def2"
    title="2"
    question_text="The number of siblings a school child has"
    options="yes::Discrete Random Variable||no::Not a Discrete Random Variable"
    correct_answer="yes"
    solution_text="This is a discrete variable and it varies."
%}

{% include question_multiple_choice.html
    id="drv_def3"
    title="3"
    question_text="The score on a six-sided die when rolled"
    options="yes::Discrete Random Variable||no::Not a Discrete Random Variable"
    correct_answer="yes"
    solution_text="This is a discrete variable (1,2,3,4,5,6) and it varies."
%}

{% include question_multiple_choice.html
    id="drv_def4"
    title="4"
    question_text="The number of days in one week"
    options="yes::Discrete Random Variable||no::Not a Discrete Random Variable"
    correct_answer="no"
    solution_text="This is not a variable, it is a constant, 7."
%}

{% include question_multiple_choice.html
    id="drv_def5"
    title="5"
    question_text="The length of a millipede’s leg in millimetres"
    options="yes::Discrete Random Variable||no::Not a Discrete Random Variable"
    correct_answer="no"
    solution_text="This is a continuous variable."
%}


<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/eco/4001b/drv/" | relative_url }}">← Return to Discrete Random Variables Menu</a>
</div>

{% include pagination.html %}
