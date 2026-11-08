---
layout: hsc5066y
title: Overview of Hypothesis Testing
interactive: 0
mj: 1
---

<div class="explanation" markdown="1">
## The Logic of Hypothesis Testing

Hypothesis testing is a formal, structured process used by researchers to test a claim or theory about a population. It allows us to use data from a small sample to make a reasonable inference about the much larger population from which the sample was drawn.

The entire process revolves around testing one thing: the **Null Hypothesis**.
</div>

<div class="instructions" markdown="1">
### The Steps of Hypothesis Testing

Nearly every statistical test you perform follows these fundamental steps:

1.  **Formulate a Research Question**
    This is the initial question you want to answer. It should be specific and testable.
    *   *Example:* "Is there a difference in psychological well-being between a group that received an intervention and a control group?"

2.  **State the Hypotheses**
    We create two competing, mutually exclusive statements:
    *   **The Null Hypothesis ($H_0$):** This is the default assumption of "no effect." It states that there is no difference, no relationship, or no change in the population. The statistical test is designed to challenge this hypothesis.
        *   *Example:* "There is **no difference** in mean well-being scores between the intervention and control groups."
    *   **The Alternative Hypothesis ($H_1$):** This is what you, the researcher, typically believe to be true. It states that there *is* an effect, a difference, or a relationship.
        *   *Example:* "There **is a difference** in mean well-being scores between the intervention and control groups."

3.  **Choose and Perform a Statistical Test**
    Based on your research question, the number of groups, and the level of measurement of your data, you select the appropriate test (e.g., a t-test, ANOVA, Chi-Square). You will then use software, like SPSS, to run this test on your sample data.

4.  **Calculate the Test Statistic and the p-value**
    When SPSS runs the test, it will produce two crucial numbers:
    *   **The Test Statistic:** A single number (e.g., a *t*-value or a *χ²*-value) that summarizes how far your sample data deviates from what you would expect if the null hypothesis were true. A larger test statistic generally suggests a greater effect.
    *   **The p-value:** This is the most important output. The p-value is the probability of observing your sample's results (or results even more extreme) **if the null hypothesis were actually true.**

5.  **Make a Decision**
    We compare our p-value to a pre-determined level of significance (called alpha, α), which is almost always set at **0.05**.
    *   If **$p \le 0.05$**: The result is **statistically significant**. This means our observed data is very unlikely to have occurred by random chance if the null hypothesis were true. We therefore **reject the null hypothesis** and conclude that there is evidence for the alternative hypothesis.
    *   If **$p > 0.05$**: The result is **not statistically significant**. This means our observed data is reasonably likely to have occurred by random chance, even if the null hypothesis were true. We therefore **fail to reject the null hypothesis**. We cannot conclude that there is evidence for an effect.
</div>

<div class="explanation" markdown="1">
**In summary:** We start by assuming there is no effect (the null hypothesis). We then collect data and use a statistical test to see how surprising our data is. If it is very surprising (a small p-value), we reject our initial assumption and conclude there probably is an effect.
</div>

<!-- This automatically adds the "Previous" and "Next" navigation buttons -->
{% include pagination.html %}
