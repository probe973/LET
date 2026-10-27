---
layout: eco4001b
title: Confidence Intervals
---

<div class="explanation" markdown="1">

# Confidence Interval Questions

You may find the following critical value calucaltor useful:

<div class="gigacalculator" data-tool="/calculators/critical-value-calculator.php" data-width="450">
  <div class="gigacalctitle">Critical Value Calculator</div>
  <div class="gigacalcfooter">
    <a href="https://www.gigacalculator.com/calculators/critical-value-calculator.php">Critical Value Calculator</a> by <a class="gigacalclink" href="https://www.gigacalculator.com/">GIGAcalculator.com</a>
  </div>
</div>
<script defer src="https://cdn.gigacalculator.com/embed.min.js"></script>

For calculating standard deviations from samples, you may find the following calculator useful:

<div class="gigacalculator" data-tool="/calculators/standard-deviation-calculator.php" data-width="450">
  <div class="gigacalctitle">Standard Deviation Calculator</div>
  <div class="gigacalcfooter">
    <a href="https://www.gigacalculator.com/calculators/standard-deviation-calculator.php">Standard Deviation Calculator</a> by <a class="gigacalclink" href="https://www.gigacalculator.com/">GIGAcalculator.com</a>
  </div>
</div>
<script defer src="https://cdn.gigacalculator.com/embed.min.js"></script>

</div>

{% capture CI1 %}
<table class="table table-bordered">
  <thead>
    <tr>
    <th scope="col">Sample Size/Level</th>
    <th scope="col">Sample Mean</th>
    <th scope="col">Sample SD</th>
    <th scope="col">95% CI Lower</th>
    <th scope="col">95% CI Upper</th>
    <th scope="col">99% CI Lower</th>
    <th scope="col">99% CI Upper</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>15</td>
    <td>50</td>
    <td>4</td>
    <td><input type="number" step="any" aria-label="Lower bound of the 95 percent confidence interval"></td>
    <td><input type="number" step="any" aria-label="Upper bound of the 95 percent confidence interval"></td>
    <td><input type="number" step="any" aria-label="Lower bound of the 99 percent confidence interval"></td>
    <td><input type="number" step="any" aria-label="Upper bound of the 99 percent confidence interval"></td>
    </tr>
    <tr>
    <td>15</td>
    <td>50</td>
    <td>15</td>
    <td><input type="number" step="any" aria-label="Lower bound of the 95 percent confidence interval"></td>
    <td><input type="number" step="any" aria-label="Upper bound of the 95 percent confidence interval"></td>
    <td><input type="number" step="any" aria-label="Lower bound of the 99 percent confidence interval"></td>
    <td><input type="number" step="any" aria-label="Upper bound of the 99 percent confidence interval"></td>
    </tr>
    <tr>
    <td>10</td>
    <td>50</td>
    <td>15</td>
    <td><input type="number" step="any" aria-label="Lower bound of the 95 percent confidence interval"></td>
    <td><input type="number" step="any" aria-label="Upper bound of the 95 percent confidence interval"></td>
    <td><input type="number" step="any" aria-label="Lower bound of the 99 percent confidence interval"></td>
    <td><input type="number" step="any" aria-label="Upper bound of the 99 percent confidence interval"></td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% include table_fill.html 
   id="CIP1a" 
   title="1b"
   question_text="Complete the table of confidence intervals, correct to 1 decimal place."
   table_content=CI1
   answers="47.8 || 52.2 || 46.9 || 53.1 || 41.7 || 58.3 || 38.5 || 61.5 || 39.3 || 60.7 || 34.6 || 65.4"
   tolerance="0.05" 
   solution_text="Critical t-values are 2.145, 2.977, 2.262, 3.250, "
%}

{% include question_multiple_choice.html
    id="CIP1b"
    title="1b"
    question_text="What do you notice to the width (difference between upper and lower bounds) of the confidence interval as the confidence percent increases?"
    options="wrong1::As the confidence percent increases, the width of the interval decreases||correct::As the confidence percent increases, the width of the interval increases"
    correct_answer="correct"
    solution_text="Higher confidence requires a larger confidence interval width"
%}

{% include question_multiple_choice.html
    id="CIP1c"
    title="1c"
    question_text="What do you notice to the width (difference between upper and lower bounds) of the confidence interval as the sample size increases?"
    options="correct::As the sample size increases, the width of the interval decreases||wrong::As the sample size increases, the width of the interval increases"
    correct_answer="correct"
    solution_text="Bigger sample sizes reduce the size of the confidence interval width"
%}


A class from the Environmental Science School collects **20** samples of water from a lake. The **mean** pH value of the 20 samples is **8.2**

The local council collects **100** samples from the lake and gets a **mean** pH of **8**.

It is **known that the standard deviation of the pH values for the lake is 0.6**.

{% include question_multiple_choice.html
    id="CIP2a"
    title="2a"
    question_text="Calculate 95% confidence intervals for the mean pH from the samples from the environmental science class"
    options="wrong1::(7.92, 8.48)||correct::(7.94, 8.46)"
    correct_answer="correct"
    solution_text="Use normal tables, due to known standard deviation, with z = 1.96"
%}

{% include question_multiple_choice.html
    id="CIP2b"
    title="2b"
    question_text="Will the local council have a wider 95% confidence interval than the science class?"
    options="wrong1::yes||correct::no"
    correct_answer="correct"
    solution_text="The local council will have a smaller gap between the lower and upper bound, due to a larger sample size."
%}


A random sample of 15 callers to the “Pecs Bar & Gym” support line showed that they were on hold for the following number of minutes:

19, 28, 34, 10, 27, 31, 25, 37, 54, 27, 54, 8, 17, 24, 25

{% include question_numerical.html
id="CIP3a"
title="3a"
question_text="What is the mean waiting time for the sample?"
correct_answer="28"
tolerance="0.5"
solution_text="$\bar{x}=\frac{420}{15}$"
%}

{% include question_numerical.html
id="CIP3b"
title="3b"
question_text="What is the standard deviation of waiting time for the sample, correct to 2 d.p.?"
correct_answer="13.20"
tolerance="0.05"
solution_text="Use the online calculator or the formula $s=\frac{\sum (x-\bar{x})^2}{n-1}$"
%}

{% include question_numerical.html
id="CIP3c"
title="3c"
question_text="Given that the confidence interval is written as $\text{Mean } \pm \text{Error}$, what is the value of the Error, to 2 d.p.?"
correct_answer="7.31"
tolerance="0.05"
solution_text="The critical t-value is 2.145, so $\text{Error} = 2.145 \times \frac{13.2}{\sqrt{15}}$"
%}

A random sample of measurements is taken from a normal distribution with an unknown mean and a known population standard deviation of 15.

{% include question_numerical.html
id="CIP4a"
title="4a"
question_text="What is the smallest sample size so that the width of a 95% confidence interval is smaller than 6 units?"
correct_answer="97"
tolerance="0"
solution_text="Margin of error needs to be 3 <br> $1.96 \times \frac{15}{\sqrt{n}} = 3$ <br> $\sqrt{n}=\frac{1.96 \times 15}{3}$ <br> $n=96.04$ <br> Needs to be over 96.04"
%}

{% include question_numerical.html
id="CIP4b"
title="4b"
question_text="What is the smallest sample size so that the width of a 95% confidence interval is smaller than 3 units?"
correct_answer="385"
tolerance="0"
solution_text="Margin of error needs to be 1.5 <br> $1.96 \times \frac{15}{\sqrt{n}} = 1.5$ <br> $\sqrt{n}=\frac{1.96 \times 15}{1.5}$ <br> $n=384.16$ <br> Needs to be over 384.16"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/eco/4001b/confidence/" | relative_url }}">← Return to Confidence Intervals Menu</a>
</div>

{% include pagination.html %}
