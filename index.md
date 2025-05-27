---
title: STEM Lab
layout: home
group: home
---

<h3>
    Welcome to the Genomics and Artificial Intelligence in Healthcare Lab! 
    <span style="color: darkred;">We are actively recruiting PhD students, research assistants, and postdoctoral fellows.</span>
</h3>




Research in the lab is focused on advancing genomic medicine and developing AI technology for healthcare.  We are interested in interdisciplinary systems biology and genomics.
{: .welcomefont}

We are located in Lee Shau Kee Building of The Hong Kong Polytechnic University.
{: .welcomefont}

<h3> Recent Posts </h3>
<ul>
  {% for post in site.posts limit: 5 %}
    <li><a href="{{ post.url }}"><b>{{ post.title }}</b></a></li>
  {% endfor %}
</ul>
