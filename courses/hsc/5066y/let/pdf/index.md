---
title: PDFs
layout: hsc5066y
interactive: 0
mj: 0
---

# PDF Files for Printing

<ul>
{% assign docs = site.static_files | where_exp: "item", "item.path contains '/courses/hsc/5066y/let/docs'" %}
{% for file in docs %}
    <li><a href="{{ file.path | relative_url }}" target="_blank">{{ file.name }}</a></li>
{% endfor %}
</ul>
