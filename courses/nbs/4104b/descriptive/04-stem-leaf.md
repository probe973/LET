---
layout: nbs4104b
title: Stem and Leaf Diagrams
---

<div class="explanation" markdown="1">

# Stem and Leaf Diagrams

A **stem and leaf plot** is a a type of table, where data are shown by splitting each value into a **stem** and a **leaf**.  Usually the **stem** part is the first digit, or digits, and the **leaf** part is the last digit.  The data are arranged in numerical order.  The **stem and leaf** plot resembles a bar chart, where the bars are made up of **leaves** that are the data.

### Example

Place the following data into a stem and leaf plot:

$$25, 37, 24, 23, 41, 42, 25, 35, 50, 43, 25, 22$$

If we use the tens part of the number as the stem and the units part of the number as the leaf, you can build an *unordered* plot:

<p><strong>Key:</strong> 4 | 1 = 41 </p>
<pre style="font-family: monospace; font-size: 1.2em; line-height: 1.2;">
 2 | 5 4 3 5 5 2
 3 | 7 5
 4 | 1 2 3
 5 | 0
</pre>

You can now rewrite this into numerical order:

<p><strong>Key:</strong> 4 | 1 = 41 </p>
<pre style="font-family: monospace; font-size: 1.2em; line-height: 1.2;">
 2 | 2 3 4 5 5 5
 3 | 5 7
 4 | 1 2 3
 5 | 0
</pre>

Note, the **key** part tells the reader that a 4 in the stem and a 1 in the leaf would represent the number 41 in this case.  Other values can be inferred from this.

</div>

### Question

Given the following data:

$$11, 18, 22, 40, 21, 26, 35, 32, 25, 24, 22, 33, 52, 20, 23$$

{% capture stem_eg %}
<p><strong>Key:</strong> 2 | 1 = 21 </p>
<pre style="font-family: monospace; font-size: 1.2em; line-height: 1.2;">
 1 | 1 8
 2 | 0 1 2 2 3 4 5 6
 3 | 2 3 5
 4 | 0
 5 | 2
</pre>
{% endcapture %}

{% include question_dropdown.html
    id="ds_q1a"
    title="1a"
    question_text="Display these data as a stem and leaf diagram."
    solution_text=stem_eg
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/courses/nbs/4104b/descriptive/" | relative_url }}">← Return to Descriptive Statistics Menu</a>
</div>

{% include pagination.html %}
