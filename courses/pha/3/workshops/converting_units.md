---
layout: phaws
title: Workshop Converting Units
---

<script src="https://unpkg.com/mathlive"></script>
<script src="https://unpkg.com/@cortex-js/compute-engine"></script>

# Workshop: Converting Units

## Metric Units

#### Question 1

Convert the following into the given unit.  Only enter the numerical value.

{% include question_numerical.html
    id="pha3001ws1q1a"
    title="1a"
    question_text="1 g into mg"
    correct_answer="1000"
    tolerance="0"
    solution_text="$$ 1 \text{ g} = 1000 \text{ mg}$$"
%}

---

**Note**: If we change g (grams) for l (litres) or m (metres) in question 1.a) - e) the unit conversion relationships still are correct. You can use question 1 to help answer question 2.

#### Question 2

Convert the following into the given unit.  Only enter the numerical value.

{% include question_numerical.html
    id="pha3001ws1q2a"
    title="2a"
    question_text="51 mg into g"
    correct_answer="0.051"
    tolerance="0"
    solution_text="$$ 51 \text{ mg} = 51 \text{ mg} \times \frac{1 \text{ g}}{1000 \text{ mg}} = 0.051 \text{ mg}$$"
%}

---

      
{% capture pha3001ws1q4table %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Ingredient</th>
      <th scope="col">Original Formula</th>
      <th scope="col">50 ml of the formula</th>
      <th scope="col">5 l of the formula</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ingredient A</td>
      <td>45 mg</td>
      <td><input type="number" step="any" aria-label="How much ingredient A, in milligrams, for 50 millilitres"></td>
      <td><input type="number" step="any" aria-label="How much ingredient A, in milligrams, for 5 litres"></td>
    </tr>
    <tr>
     <td>Ingredient B</td>
      <td>100 mg</td>
      <td><input type="number" step="any" aria-label="How much ingredient B, in milligrams, for 50 millilitres"></td>
      <td><input type="number" step="any" aria-label="How much ingredient B, in milligrams, for 5 litres"></td>
    </tr>
    <tr>
     <td>Ingredient C</td>
      <td>10 ml</td>
      <td><input type="number" step="any" aria-label="How much ingredient C, in millilitres, for 50 millilitres"></td>
      <td><input type="number" step="any" aria-label="How much ingredient C, in millilitres, for 5 litres"></td>
    </tr>
    <tr>
     <td>Water to</td>
      <td>250 ml</td>
      <td>50 ml</td>
      <td>5 l</td>
    </tr>
  </tbody>
</table>
{% endcapture %}

#### Question 4

{% include table_fill.html 
   id="pha3001ws1q4" 
   title="4"
   question_text="Complete the table to show the required amounts of ingredient. For the 50 ml, give your answers in mg and ml. For the 5 l, give your answers in g and l. Only enter the numerical value."
   table_content=pha3001ws1q4table
   answers="9 || 0.9 ||20 || 2 || 1 || 0.1"
   tolerance="0.01" 
   solution_text="For the 50 ml:

Ingredient A: $\frac{45 \text{mg}}{250 \text{ ml}} \times 50 \text{ ml} = 9 \text{ mg}$
   "
%}

---

## Imperial and Metric Units

For this section you should use:

$$
\begin{align}
1 \text{ kg} &= 2 \text{ lbs (pounds)} \\[8 pt]
1 \text{ lb} &= 16 \text{ oz (ounces)} \\[8 pt]
1 \text{ stone} &= 14 \text{ lbs} \\[12 pt]
1 \text{ inch} &= 2.5 \text{ cm} \\[8 pt]
1 \text{ foot} &= 12 \text{ inches}
\end{align}
$$

#### Question 5

{% include question_two_answer.html
    id="pha3001w1q5g"
    title="5g"
    question_text="175 cm into feet and inches"
    var1_label="\text{feet}"
    var2_label="\text{inches}"
    ans_var1="5"
    ans_var2="10"
    solution_text="$$ 175 \text{ cm} = 175 \text{ cm} \times \frac{1 \text{ inch}}{2.5 \text{ cm}} = \frac{1750}{25} \text{ in} = 70 \text{ in}$$

$$70 \text{ in} = 70 \text{ in} \times \frac{1 \text{ ft}}{12 \text{ in}} = 5 \text{ ft with remainder 10}$$

$$175 \text{ cm} = 5 \text{ ft and } 10 \text{ in}"
%}
