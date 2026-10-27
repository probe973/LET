---
layout: eco4001b
title: Review
---

# ECO-4001B Review Questions


## Formula and tables

Sample mean

$$\bar{x}=\frac{\sum{x}}{n}$$

Sample variance

$$s^2 = \frac{\sum{(x-\bar{x})^2}}{n-1}$$

One-sample t-statistic

$$t = \frac{\bar{x}-\mu}{\frac{s}{\sqrt{n}}}$$

Two-sample t-statistic

$$t = \frac{\bar{x}_1 - \bar{x}_2}{s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}$$

Pooled variance

$$s^2_p = \frac{(n_1 - 1)s^2_1 + (n_2 -1)s^2_2}{n_1 + n_2 - 2}$$

Click <a href="/LET/assets/apps/ttable" target="_blank">here</a> to get a the **one-tailed critical values t table**. 

---

## Questions

Underground Airways is conducting a review of their customers and their own operations.

### Question 1

Data are collected to find annual income of passengers booking a business class ticket. The annual incomes of customers are known to follow a normal distribution. A sample of 16 customers were asked for their annual income:

Annual income (thousands £):
    
60.3, 46.3, 45.7, 45.9, 45.6, 38.6, 63.8, 46.5, 53.6, 37.5, 54.1, 63.9, 49.9, 58.2, 42.9, 63.2

These data can be summarised:

{% capture review_table_1 %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th>Statistic</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Observations</td>
      <td>16</td>
    </tr>
    <tr>
      <td>Mean</td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>Median</td>
      <td>48.2</td>
    </tr>
    <tr>
      <td>Standard Deviation</td>
      <td>8.8</td>
    </tr>
    <tr>
      <td>Standard Error of the Mean</td>
      <td><input type="number" step="any"></td>
    </tr>
  </tbody>
</table>
{% endcapture %} 

{% include table_fill.html 
   id="review_1a" 
   title="1 a"
   question_text="Calculate the two missing values in the table."
   table_content=review_table_1
   answers="51 || 2.2"
   tolerance="0.05" 
   solution_text="$\text{Mean }=\frac{60.3+46.3+45.7+...+63.2}{16}=\frac{816}{16}=51$ <br> <br> $\text{SEM }=\frac{\text{SD}}{\sqrt{n}}=\frac{8.8}{4}=2.2$"
%}

Historically the mean annual income of business class ticket customers was £47000. Underground Airways want to test, with this sample, whether this has changed.

{% include question_multiple_choice.html
    id="review_1bi"
    title="1 b i"
    question_text="What would the null hypothesis of this test be?"
    options="eq::$H_0: \mu = 47$ || neq::$H_0: \mu \neq 47$ || gt::$H_0: \mu > 47$ || lt::$H_0: \mu < 47$"
    correct_answer="eq"
    solution_text="The null hypothesis is that the mean is not changed from the 47."
%}

{% include question_multiple_choice.html
    id="review_1bii"
    title="1 b ii"
    question_text="What would the alternative hypothesis of this test be?"
    options="eq::$H_1: \mu = 47$ ||neq::$H_1: \mu \neq 47$ ||gt::$H_1: \mu > 47$ ||lt::$H_1: \mu < 47$"
    correct_answer="neq"
    solution_text="Testing for a difference from 47, so not equal."
%}

{% include question_numerical.html
    id="review_1iii"
    title="1 b iii"
    question_text="How many degrees of freedom would you have in carrying out a t-test?"
    correct_answer="15"
    tolerance="0"
    solution_text="$df=16-1=15$"
%}

{% include question_numerical.html
    id="review_1iv"
    title="1 b iv"
    question_text="Calculate the t statistic for this test."
    correct_answer="1.82"
    tolerance="0.005"
    solution_text="$t=\frac{51-57}{2.2}=1.82$"
%}

{% include question_numerical.html
    id="review_1v"
    title="1 b v"
    question_text="From the t distribution table, what would the critical t value be at the 5% level?  Give answer correct to 3 decimal places."
    correct_answer="2.131"
    tolerance="0.005"
    solution_text="$t_{\text{crit}}=2.131$"
%}

{% include question_multiple_choice.html
    id="review_1bvi"
    title="1 b vi"
    question_text="Would you reject the null hypothesis in this test?"
    options="no::The t-statistic is smaller than the critical value, so cannot reject at the 5% level || yes::The t-statistic is smaller than the critical value, so should reject at the 5% level"
    correct_answer="no"
    solution_text="The t-statistic is not beyond the critical value <br> $1.82 \not>2.131$ <br> <br> therefore we cannot reject the null hypothesis."
%}

{% include question_confidence_interval.html
    id="review_1c"
    title="1 c"
    question_text="Construct a 95% confidence interval for the population mean of business class customers income, from this sample.  Give answers to 1 d.p."
    lower_answer="46.3"
    upper_answer="55.7"
    tolerance="0.05"
    solution_text="Using the critical value of 2.131: <br> $51 \pm 2.131 \times 2.2 = (46.3, 55.7)$"
%}

{% include question_confidence_interval.html
    id="review_1d"
    title="1 d"
    question_text="Construct a 99% confidence interval for the population mean of business class customers income, from this sample.  Give answers to 1 d.p."
    lower_answer="44.5"
    upper_answer="57.5"
    tolerance="0.05"
    solution_text="Using the critical value of 2.947, from tables: <br> $51 \pm 2.947 \times 2.2 = (44.5, 57.5)$"
%}

---

### Question 2

Underground Airways also offer a ‘business plus’ ticket. From a sample of customers’ incomes for this ticket:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Statistic</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Observations</td>
      <td>20</td>
    </tr>
    <tr>
      <td>Mean</td>
      <td>57</td>
    </tr>
    <tr>
      <td>Median</td>
      <td>56.5</td>
    </tr>
    <tr>
      <td>Standard Deviation</td>
      <td>8.5</td>
    </tr>
  </tbody>
</table>

{% include question_confidence_interval.html
    id="review_2a"
    title="2 a"
    question_text="Find the 90% confidence interval for the mean.  Give answers to 1 d.p."
    lower_answer="53.7"
    upper_answer="60.3"
    tolerance="0.05"
    solution_text="From tables, the critical t-value is 1.729 <br> $57 \pm 1.729 \times \frac{8.5}{\sqrt{20}}=(53.7, 60.3)$"
%}

A t-test is carried out to determine if the mean is significantly different from £52000.  The results give:

$$t(19) = 2.6307, p = .0165$$

{% include question_dropdown.html
    id="review_2b"
    title="2 b"
    question_text="Interpret this result."
    solution_text="$p<0.05$ and so the null hypothesis would be rejected at the 5% level. <br> At the 5% level there is evidence that the mean salary differs from £52000. <br><br> As $p>0.01$ there is not enough evidence to reject at the 1% level."
%}

---

### Question 3

A sample of the Underground Airways customers were asked to rate their experience of the company through a series of questions. From these questions a satisfaction score can be calculated. A summary of the satisfaction scores by business and business plus passengers:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Statistic</th>
      <th>Business</th>
        <th>Business PLus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Observations</td>
      <td>120</td>
        <td>130</td>
    </tr>
    <tr>
      <td>Mean</td>
      <td>18</td>
        <td>20</td>
    </tr>
    <tr>
      <td>Standard Deviation</td>
      <td>6</td>
        <td>6.8</td>
    </tr>
  </tbody>
</table>

 A t-test will be be performed to test for a significant difference between satisfaction scores for business and business plus customers.

 {% include question_multiple_choice.html
    id="review_3a"
    title="3 a"
    question_text="What are the null and alternative hypotheses of the two sample test?"
    options="eq::$H_0: \mu_B = \mu_P$  $H_1: \mu_B = \mu_P$|| neq::$H_0: \mu_B = \mu_P$  $H_1: \mu_B \neq \mu_P$ || gt::$H_0: \mu_B = \mu_P$  $H_1: \mu_B > \mu_P$ || lt::$H_0: \mu_B = \mu_P$  $H_1: \mu_B < \mu_P$"
    correct_answer="neq"
    solution_text="The null hypothesis is that the mean of the two groups are equal.  Looking for a difference so the alternative hypothesis is that the two means are not equal."
%}

{% include question_numerical.html
    id="review_3b"
    title="3 b"
    question_text="Calculate the pooled standard deviation.  Give answer correct to 2 decimal places."
    correct_answer="6.43"
    tolerance="0.01"
    solution_text="$s^2_P=\frac{(120-1)\times 6^2 + (130-1)\times6.8^2}{120-1+130-1}=41.33$ <br><br>  $s_p=\sqrt{\frac{(120-1)\times 6^2 + (130-1)\times6.8^2}{120-1+130-1}}=6.43$"
%}

{% include question_numerical.html
    id="review_3c"
    title="3 c"
    question_text="Calculate the t-statistic.  Give answer correct to 2 decimal places."
    correct_answer="2.46"
    tolerance="0.01"
    solution_text="$t=\frac{20-18}{6.43 \sqrt{\left( \frac{1}{120} +\frac{1}{130} \right )}}=2.46$"
%}

{% include question_dropdown.html
    id="review_3d"
    title="3 d"
    question_text="At the 5% significance level what conclusion would you draw about the difference in satisfaction rating between the two passenger groups?"
    solution_text="Two-tail test. The critical t value, using tables, is 1.96. <br> Since 2.46 exceeds this critical value, we will reject the null hypothesis. There is evidence of a difference between the mean satisfaction scores of business and business plus customers."
%}

---

### Question 4

Underground Airways record data, over a particular week, for how the tickets are booked. They offer Economy, Business, Business Plus and First Class tickets that can all be booked by visiting a travel agent, over the phone or on the internet. The number of customers for these factors can be summarised in the table:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Passengers</th>
      <th>Economy</th>
      <th>Business</th>
      <th>Bus. Plus</th>
      <th>First Class</th>
      <th>TOTAL</th>
    </tr>
  </thead>
  <tbody>
      <tr>
          <td>Travel Agent</td>
          <td>25</td>
          <td>18</td>
          <td>4</td>
          <td>23</td>
          <td>70</td>
      </tr>
      <tr>
          <td>Phone</td>
          <td>120</td>
          <td>80</td>
          <td>45</td>
          <td>45</td>
          <td>290</td>
      </tr>
      <tr>
          <td>Internet</td>
          <td>140</td>
          <td>90</td>
          <td>65</td>
          <td>25</td>
          <td>320</td>
      </tr>
      <tr>
          <td>TOTAL</td>
          <td>285</td>
          <td>188</td>
          <td>114</td>
          <td>93</td>
          <td>680</td>
      </tr>
  </tbody>
</table>

A customer is selected at random, in a prize draw.

{% include question_numerical.html
    id="review_4a"
    title="4 a"
    question_text="What is the probability that the customer will be from economy?  Give answer as a decimal correct to 2 decimal places."
    correct_answer="0.42"
    tolerance="0.005"
    solution_text="$P(\text{economy})=\frac{285}{680}=\frac{57}{136}=0.42$"
%}

{% include question_numerical.html
    id="review_4b"
    title="4 b"
    question_text="What is the probability that the customer will have booked via the internet?  Give answer as a decimal correct to 2 decimal places."
    correct_answer="0.47"
    tolerance="0.005"
    solution_text="$P(\text{internet})=\frac{320}{680}=\frac{8}{17}=0.47$"
%}

{% include question_numerical.html
    id="review_4c"
    title="4 c"
    question_text="What is the probability that the customer was from economy and booked via the internet?  Give answer as a decimal correct to 2 decimal places."
    correct_answer="0.21"
    tolerance="0.005"
    solution_text="$P(\text{economy AND internet})=\frac{140}{680}=\frac{7}{34}=0.21$"
%}

{% include question_numerical.html
    id="review_4d"
    title="4 d"
    question_text="Given that the customer booked economy, what is the probability that they booked via the internet?  Give answer as a decimal correct to 2 decimal places."
    correct_answer="0.49"
    tolerance="0.005"
    solution_text="$P(\text{internet} \mid \text{economy})=\frac{140}{285}=\frac{28}{57}=0.49$"
%}

{% include question_multiple_choice.html
    id="review_4e"
    title="4 e"
    question_text="Are the events booking economy and booking via the internet independent? Give an explanation for your answer."
    options="a::$P(\text{internet}) = P(\text{internet} \mid \text{economy})$, so not independent||b::$P(\text{internet}) = P(\text{internet} \mid \text{economy})$, so independent||c::$P(\text{internet}) \neq P(\text{internet} \mid \text{economy})$, so not independent||d::$P(\text{internet}) \neq P(\text{internet} \mid \text{economy})$, so independent"
    correct_answer="c"
    solution_text="$P(\text{internet}) \neq P(\text{internet} \mid \text{economy})$ implies not independent, and here we have $P(\text{internet}) = 0.47, P(\text{intenet} \mid \text{economy}) = 0.49$"
%}

{% include question_numerical.html
    id="review_4f"
    title="4 f"
    question_text="What is the probability that the customer booked either business or business plus? Give answer as a decimal correct to 2 decimal places."
    correct_answer="0.44"
    tolerance="0.005"
    solution_text="$P(\text{business OR business plus})=\frac{188+114}{680}=\frac{151}{340}=0.44$"
%}

{% include question_dropdown.html
    id="review_4g"
    title="4 g"
    question_text="Explain why the events booking business and booking business plus are mutually exclusive."
    solution_text="Each customer cannot book both business and business plus for one seat. Therefore the probability of both happening is zero, this defines mutually exclusive events."
%}

{% include question_numerical.html
    id="review_4h"
    title="4 h"
    question_text="What is the probability that the customer booked either business or business plus? Give answer as a decimal correct to 2 decimal places."
    correct_answer="0.75"
    tolerance="0.005"
    solution_text="$P(\text{not travel agent} \mid \text{first class})=\frac{45+25}{93}=\frac{70}{93}=0.75$"
%}

---

### Question 5

Underground Airways services depart late 35% of the time. If the service departs late then they arrive late at the destination 75% of the time. Services that depart on time will arrive late at the destination 20% of the time.

{% include question_tree.html
    id="review_5a"
    title="5 a"
    question_text="Fill in the missing probabilities as decimals between 0 and 1."
    
    text_a_top="departs late"        
    text_a_bot="departs on-time"
    
    text_b_1="arrives late"
    text_b_2="arrives on-time"
    text_b_3="arrives late"
    text_b_4="arrives on-time"

    val_a_top="0.35"
    val_a_bot="INPUT"

    val_b_1="INPUT"
    val_b_2="INPUT"
    val_b_3="INPUT"
    val_b_4="INPUT"

    answers="0.65 || 0.75 || 0.25 || 0.20 || 0.80"
    solution_text="departs late: $1 - 0.35$.  For the departs late branch we will have $0.75$ and $1 - 0.75$ and for the departs on-time branch we will start with $0.2$."
%}

For a randomly selected flight:

{% include question_numerical.html
    id="review_5b"
    title="5 b"
    question_text="What is the probability that the service departs and arrives on time? Give answer as a decimal correct to 4 decimal places."
    correct_answer="0.52"
    tolerance="0.00005"
    solution_text="P(departs on time AND arrives on time) <br> = $P(\text{departs on time}) \times P(\text{arrives on time} \mid \text{departs on time})$ <br> $P(\text{departs on time AND arrives on time}) = 0.65 \times 0.8 = 0.52$"
%}

{% include question_numerical.html
    id="review_5c"
    title="5 c"
    question_text="What is the probability that the service arrives on time? Give answer as a decimal correct to 4 decimal places."
    correct_answer="0.6075"
    tolerance="0.00005"
    solution_text="P(departs late AND arrives on time) = 0.35 × 0.25 = 0.0875 <br> P(arrives on time) = 0.0875 + 0.52 = 0.6075"
%}

{% include question_numerical.html
    id="review_5d"
    title="5 d"
    question_text="Given that the service arrived on time, what is the probability that it departed on time? Give answer as a decimal correct to 4 decimal places."
    correct_answer="0.856"
    tolerance="0.00005"
    solution_text="$P(\text{departed on time} \mid \text{arrived on time}) = \frac{0.52}{0.6075}=0.856$"
%}

---

### Question 6

Customer complaints occur during 1 in 10 services operated by Underground Airways. During a randomly chosen day 12 services are operated by Underground Airways.

{% include question_numerical.html
    id="review_6a"
    title="6 a"
    question_text="What is the probability that none of the 12 services receive a complaint? Give answer as a decimal correct to 3 decimal places."
    correct_answer="0.282"
    tolerance="0.0005"
    solution_text="$C = \text{number of services with a complaint}$ <br> $C \sim B(12,0.1)$ <br> $P(C=0) = {12 \choose 0} \times 0.1^0 \times 0.9^{12}=0.282$"
%}

{% include question_numerical.html
    id="review_6b"
    title="6 b"
    question_text="What is the probability that will be no more than 1 service receiving a complaint? Give answer as a decimal correct to 3 decimal places."
    correct_answer="0.659"
    tolerance="0.0005"
    solution_text="$C = \text{number of services with a complaint}$ <br> $C \sim B(12,0.1)$ <br> $P(C \leq 1) = P(C=0)+P(C=1)$ <br> $P(C \leq 1) = 0.282 + {12 \choose 1} \times 0.1^1 \times 0.9^{11}=0.659$"
%}

{% include question_numerical.html
    id="review_6c"
    title="6 c"
    question_text="What is the probability that at least 2 services will receive a complaint?"
    correct_answer="0.341"
    tolerance="0.0005"
    solution_text="$C = \text{number of services with a complaint}$ <br> $C \sim B(12,0.1)$ <br> $P(C \geq 2) = 1 - P(C \leq 1)=1-0.659 = 0.341$"
%}

---
