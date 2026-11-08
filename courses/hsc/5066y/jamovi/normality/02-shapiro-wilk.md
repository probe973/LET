---
layout: hsc5066y
title: Shapiro-Wilk test
interactive: 0
mj: 0
---

<div class="explanation" markdown="1">
## Testing for Normality with the Shapiro-Wilk Test

**Shapiro-Wilk** is a test that helps the user determine whether their data are normally distributed.

### A quick note on statistical tests

A statistical test will usually follow a pattern of starting with an assumption, **a null hypothesis**, and testing whether there is evidence against this for an **alternative hypothesis**. You will explore this further 
when you start looking at the statistical tests section.

The test generates a **test statistic** and a **p-value**.  The **p-value** is a probability, so between 0 and 1, and tells us how likely this data would occur if the null hypothesis were true.  If this is too small, 
and so unlikely, then we have evidence to **reject the null hypothesis**.  What do we mean by *too small*?  A regularly used definition of *too small* is for the **p-value to be smaller than 0.05 (5%)**

### Shapiro-Wilk test

The **Shapiro-Wilk** test has the **null hypothesis** of "These data **are normally distributed**".  It produces a test statistic, called *W*, and a *p*-value.  If this *p*-value is under a threshold, say 0.05, we reject 
the idea that the data are normal.

It is worth noting that the Shapiro-Wilk test is very sensitive to small deviations from normality for large samples.  If you have a large sample, then it is worth looking at statistics for the mean and the median, and the 
shape of the histogram, and not solely rely on the result of the Shapiro-Wilk test.

</div>

{% include pagination.html %}
