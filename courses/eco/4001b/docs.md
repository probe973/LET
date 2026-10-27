---
layout: eco4001b
title: ECO Documents
---

# PDF Files for Printing

<ul>
{% assign docs = site.static_files | where_exp: "item", "item.path contains '/courses/eco/4001b/pdf'" %}
{% for file in docs %}
    <li><a href="{{ file.path | relative_url }}" target="_blank">{{ file.name }}</a></li>
{% endfor %}
</ul>
