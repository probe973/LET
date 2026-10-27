---
layout: nbs4104b
title: Confidence Intervals Questions
---

# Confidence Intervals

<div class="explanation" markdown="1">
    
## Known Population Variance

A confidence interval for the population mean when the population variance, $\sigma^2$, is known can be calculated using the sample mean ($\bar{x}$), known population standard deviation ($\sigma$), sample size ($n$), and a $z$-value corresponding to the desired confidence level. The formula is: 

$$\bar{x} \pm z \frac{\sigma}{\sqrt{n}}$$

| Confidence Interval | 90% | 95% | 99% |
|:---|:---|:---|:---|
| z | 1.645 | 1.96 | 2.576 |

</div>

### Questions

A company has a hot drinks machine in the staff room.  The machine produces hot drinks whose volume is known to be normally distributed.  The manufacturer has found that the mean volume is 300 ml with a standard deviation of 5 ml.

Those working for the company are concerned that the machine has started to give the wrong volume.  A sample of 20 drinks is taken and a sample mean of 298 ml is found.

$$\text{SEM} = \frac{\text{Standard Deviation}}{\sqrt{\text{Sample size}}} = \frac{\sigma}{\sqrt{n}} $$

{% include question_numerical.html
    id="cip"
    title="1 a"
    question_text="Calculate the standard error of the mean, correct to 2 d.p."
    correct_answer="1.12"
    tolerance="0.005"
    solution_text="$\text{SE}=\frac{5}{\sqrt{20}}=1.12$"
%}


{% include question_confidence_interval.html
    id="cip2"
    title="1 b i"
    question_text="Calculate the 90% confidence interval for the mean, correct to 2 d.p."
    lower_answer="296.16"
    upper_answer="299.84"
    tolerance="0.005"
    solution_text="
The interval is given by  
$298 \pm 1.645 \times 1.12 = 298 \pm 1.84 = (296.16, 299.84)$  
"
%}


{% include question_confidence_interval.html
    id="cip3"
    title="1 b ii"
    question_text="Calculate the 95% confidence interval for the mean, correct to 2 d.p."
    lower_answer="295.80"
    upper_answer="300.20"
    tolerance="0.005"
    solution_text="
The interval is given by  
$298 \pm 1.96 \times 1.12 = 298 \pm 2.20 = (295.80, 300.20)$  
"
%}


{% include question_confidence_interval.html
    id="cip4"
    title="1 b iii"
    question_text="Calculate the 99% confidence interval for the mean, correct to 2 d.p."
    lower_answer="295.11"
    upper_answer="300.89"
    tolerance="0.005"
    solution_text="
The interval is given by  
$298 \pm 2.576 \times 1.12 = 298 \pm 2.89 = (295.11, 300.89)$  
"
%}

{% include question_dropdown.html
    id="cip5"
    title="1 c"
    question_text="Is there evidence that the machine is producing a different amount to 300 ml?  Give reasons for your answer."
    solution_text="At the 95% and 99% confidence levels, the 300 ml is within the bounds, suggesting not enough evidence that the machine is producing different to 300 ml.  There would be evidence if we used the 90% confidence level."
%}


<div class="explanation" markdown="1">
    
## Unknown Population Variance

To calculate a confidence interval for the mean when the population variance is unknown, you use the t-distribution and the sample standard deviation, $s$, as an estimate for the population standard deviation. The formula is:

$$\bar{x} \pm t \frac{s}{\sqrt{n}}$$

The t-score is determined by the desired confidence level and the degrees of freedom (df).

<figure>
  <table aria-describedby="t-critical-notes">
    <caption>
      Critical values of the t-distribution for common confidence levels
    </caption>

    <thead>
      <tr>
        <th scope="col">
          <abbr title="Degrees of freedom">df</abbr>
        </th>
        <th scope="col">
          90% critical <span aria-hidden="true">t</span>
          <span class="visually-hidden">t value</span>
        </th>
        <th scope="col">
          95% critical <span aria-hidden="true">t</span>
          <span class="visually-hidden">t value</span>
        </th>
        <th scope="col">
          99% critical <span aria-hidden="true">t</span>
          <span class="visually-hidden">t value</span>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>6.314</td>
        <td>12.706</td>
        <td>63.657</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>2.920</td>
        <td>4.303</td>
        <td>9.925</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>2.353</td>
        <td>3.182</td>
        <td>5.841</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>2.132</td>
        <td>2.776</td>
        <td>4.604</td>
      </tr>
      <tr>
        <th scope="row">5</th>
        <td>2.015</td>
        <td>2.571</td>
        <td>4.032</td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>1.943</td>
        <td>2.447</td>
        <td>3.707</td>
      </tr>
      <tr>
        <th scope="row">7</th>
        <td>1.895</td>
        <td>2.365</td>
        <td>3.499</td>
      </tr>
      <tr>
        <th scope="row">8</th>
        <td>1.860</td>
        <td>2.306</td>
        <td>3.355</td>
      </tr>
      <tr>
        <th scope="row">9</th>
        <td>1.833</td>
        <td>2.262</td>
        <td>3.250</td>
      </tr>
      <tr>
        <th scope="row">10</th>
        <td>1.812</td>
        <td>2.228</td>
        <td>3.169</td>
      </tr>
    </tbody>
  </table>

  <figcaption id="t-critical-notes">
    Degrees of freedom are calculated as <strong>df = n − 1</strong>.
    Use this table when constructing confidence intervals for a mean
    when the population standard deviation is unknown.
  </figcaption>
</figure>

</div>

### Questions

A call centre claims that patients wait on hold for an average of 40 seconds.  A random sample of 8 callers gave the following hold times (in seconds).

$$x \text{: } 45, 39, 42, 48, 38, 40, 41, 51$$

$$\sum x = 344 \text{, } \sum(x-\bar{x})^2=148 \text{, } s = \sqrt{\frac{\sum(x-\bar{x})^2}{n-1}}$$

{% capture ci_solution_cip6 %}
$\bar{x}=\frac{344}{8}=43$

$s=\sqrt{\frac{148}{8-1}}=4.60$

$\text{SEM}=\frac{4.60}{\sqrt{8}}=1.63$

$df=7$

$t_{7,95}=2.365$

$43 \pm 2.365 \times 1.63
= 43 \pm 3.85
= (39.15,\;46.85)$
{% endcapture %}

{% include question_confidence_interval.html
    id="cip6"
    title="2 a"
    question_text="Calculate the 95% confidence interval for the mean call time, correct to 2 d.p."
    lower_answer="39.15"
    upper_answer="46.85"
    tolerance="0.005"
    solution_text=ci_solution_cip6

%}

{% include question_dropdown.html
    id="cip7"
    title="2 b"
    question_text="Determine if there is evidence that the 40 seconds claim is incorrect."
    solution_text="As 40 seconds is within the 95% confidence interval, there isn’t enough evidence of a difference in time from 40 seconds."
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/nbs/4104b/confidence/" | relative_url }}">← Return to Confidence Intervals Menu</a>
</div>

{% include pagination.html %}
