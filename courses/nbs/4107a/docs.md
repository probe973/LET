---
layout: nbs4107a
title: NBS Documents
---

# PDF Files for Printing

<ul>
{% assign docs = site.static_files | where_exp: "item", "item.path contains '/courses/nbs/4107a/docs'" %}
{% for file in docs %}
    <li><a href="{{ file.path | relative_url }}" target="_blank">{{ file.name }}</a></li>
{% endfor %}
</ul>
