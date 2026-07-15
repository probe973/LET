---
layout: default
title: Confidence Intervals
---

# Confidence Intervals

A confidence interval is a range that estimates the true value of an unknown population parameter (such as the mean) based on sample data.

## Population Parameters and Sample Statistics

A **population parameter** is a value that represents the measure for an entire population. For example, the population mean would be the average value for all items of interest.

Often it is not possible to calculate a population parameter due to constraints like logistics, time, and costs. Therefore, population parameters are estimated using data from a sample. 

* **Example:** To find the mean IQ of undergraduates on a campus, a random sample of 50 undergraduates take an IQ test. 
* The mean score of these 50 undergraduates is called the **sample mean**. 
* This sample mean is used as an estimate for the entire undergraduate population's mean IQ. This is known as a **point estimate**.

### Unbiased Estimators

The sample mean is an **unbiased estimator** of the population mean.

If you take a second random sample of 50 undergraduates, the new sample mean will likely differ from the first. The term **unbiased estimator** means that if you were to take all possible samples of size 50 from this population, the average of all those different sample means would equal the exact, true population mean. On average, the estimating method is correct.

## Standard Error

If one random sample gives a mean of 104, another might give 106, and a third might give 99. There will always be a range of estimates depending on the sample collected. 

In descriptive statistics, we measure the dispersion of individual data points using **standard deviation**. To measure the dispersion of the *sample estimates* themselves, we use **standard error**. 

Rather than wasting time and money collecting every possible sample, mathematical formulas and software can calculate the **standard error of the mean (SEM)** from just a single collected sample.

* The larger the standard error, the more dispersed (less precise) the estimates are.
* Larger sample standard deviations lead to a **larger** standard error.
* Larger overall sample sizes ($n$) lead to a **smaller** standard error.

## Interval Estimates

Rather than giving a single point estimate for the undergraduate IQ, you can provide a range of values where the true population mean is likely to sit:

$$\text{Estimate} \pm \text{Margin of Error}$$

This can be broken down into upper and lower bounds:

$$\text{Lower Bound} = \text{Estimate} - \text{Margin of Error}$$

$$\text{Upper Bound} = \text{Estimate} + \text{Margin of Error}$$

The margin of error is determined by two things: how confident you want to be, and the standard error of the estimate.

* **Larger standard error** $\rightarrow$ higher margin of error (wider interval).
* **Higher confidence level** $\rightarrow$ higher margin of error (wider interval).

The second point can be confusing because we usually associate "confidence" with less error. However, it helps to look at how confidence levels work.

## Confidence Intervals (C.I.)

Confidence is expressed as a percentage. The most common confidence intervals are 90%, 95%, and 99% (with 95% being the industry standard).

If you calculated a 95% confidence interval for all possible samples of 50 undergraduates, **95 out of 100 of those calculated intervals would successfully capture the true population mean**. When you calculate one interval from your single sample, you are confident that your interval comes from the 95% successful group.

Think of it like a net. To be more confident that you will catch a fish (the true population mean) on any given throw, you need a **larger net**. Therefore, a 99% confidence interval will always be wider than a 95% confidence interval.

### Final Look
In a research paper, you might see the final result reported like this: 
> "The estimated mean IQ for undergraduates at the university is 104 (95% C.I. 101 – 107)."

