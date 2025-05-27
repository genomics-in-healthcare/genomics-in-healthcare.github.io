---
title: STEM Lab
layout: home
group: home
---


# Welcome to the Genomics and Artificial Intelligence in Healthcare Lab! 
<span style="color: darkred;">
    We are actively recruiting PhD students, research assistants, and postdoctoral fellows. 
    <a href="{{ site.url }}/join" style="color: darkred; text-decoration: underline;">Join</a>
</span>


Research in the lab is focused on advancing genomic medicine and developing AI technology for healthcare.  We are interested in interdisciplinary systems biology and genomics.
{: .welcomefont}


<h3> Recent Posts </h3>
<ul>
  {% for post in site.posts limit: 5 %}
    <li><a href="{{ post.url }}"><b>{{ post.title }}</b></a></li>
  {% endfor %}
</ul>
