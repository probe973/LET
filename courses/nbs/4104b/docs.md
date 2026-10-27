---
layout: nbs4104b
title: NBS Documents
---

# PDF Files for Printing

<ul>
{% assign docs = site.static_files | where_exp: "item", "item.path contains '/courses/nbs/4104b/docs'" %}
{% for file in docs %}
    <li><a href="{{ file.path | relative_url }}" target="_blank">{{ file.name }}</a></li>
{% endfor %}
</ul>
