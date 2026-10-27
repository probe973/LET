---
layout: eco4001b
title: Standardising
---

<div class="explanation" markdown="1">

# Standardising Values

Standardising a score means finding the number of **standard deviations** a value is from the **mean**, and is referred to as a **$z$ score**.  It can therefore be calculated with the formula:

$$z = \frac{x - \mu}{\sigma}$$

Where $z$ is the standardised score, $x$ is the unstandardised *raw* score, $\mu$ is the mean, and $\sigma$ is the standard deviation.

### Example

Given a mean of 100 and a standard deviation of 16, standardise the following scores:

a. 100

b. 116

c. 70

$\mu = 100$, $\sigma = 16$

a. $z = \frac{100-100}{16} = 0$

b. $z = \frac{116-100}{16} = 1$

c. $z = \frac{70 - 100}{16} = -1.875$

</div>


For each of the situations below, enter the standardised score, $z$.

{% include question_numerical.html
id="normstand_1"
title="1"
question_text="Given $\mu = 40$, $\sigma = 12$, find the standardised score of a raw score of 64."
correct_answer="2"
tolerance="0"
solution_text="$z=\frac{54-40}{12}=2$"
%}

{% include question_numerical.html
id="normstand_2"
title="2"
question_text="Given $\mu = 120$, $\sigma = 5$, find the standardised score of a raw score of 92."
correct_answer="-5.6"
tolerance="0.05"
solution_text="$z=\frac{92-120}{5}=-5.6$"
%}

<div class="explanation" markdown="1">

# De-standardising

Raw scores can be calcuated for z-scores by rearranging the formula to make $x$ the subject:

$$x=\mu + z \sigma$$

</div>

For each of the situations below, enter the raw score, $x$.

{% include question_numerical.html
id="normstand_3"
title="3"
question_text="Given $\mu = 120$, $\sigma = 5$, find the raw score if $z=1.2$"
correct_answer="126"
tolerance="0.05"
solution_text="$x=120 + 1.2 \times 5 = 120 + 6 = 126$"
%}

{% include question_numerical.html
id="normstand_4"
title="4"
question_text="Given $\mu = 60$, $\sigma = 2.5$, find the raw score if $z=-3$"
correct_answer="52.5"
tolerance="0.05"
solution_text="$x=60 + -3 \times 2.5 = 60 - 7.5 = 52.5$"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/eco/4001b/normal/" | relative_url }}">← Return to Normal Distribution Menu</a>
</div>

{% include pagination.html %}
