---
layout: pha
title: Year 1 Documents
---

# PDF/Word Files for Printing

<ul>
{% assign docs = site.static_files | where_exp: "item", "item.path contains '/courses/pha/4/docs'" %}
{% for file in docs %}
    <li><a href="{{ file.path | relative_url }}" target="_blank">{{ file.name }}</a></li>
{% endfor %}
</ul>
