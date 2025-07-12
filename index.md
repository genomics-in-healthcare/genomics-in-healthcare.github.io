---
title: STEM Lab
layout: home
group: home
---




<div class="welcomefont" style="font-size: 1.5em; font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;">
  Welcome to the Genomics and Artificial Intelligence in Healthcare Lab! <span style="color: darkred;"> <a href="{{ site.url }}/join" style="text-decoration: underline;"> We are actively recruiting PhD students, research assistants, and postdoctoral fellows. </a> </span>
</div>

<div class="welcomefont" style="font-size: 1.5em; font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;">
  Research in the lab is focused on advancing genomic medicine and developing AI technology for healthcare.  We are interested in interdisciplinary systems biology and genomics.
</div>


<h3> Recent Posts </h3>
<ul>
  {% for post in site.posts limit: 5 %}
    <li><a href="{{ post.url }}">
      <b>
      {% if post.title != "" %}
        {{ post.title }}
      {% elsif post.link_title %}
        {{ post.link_title }}
      {% else %}
        News Link
      {% endif %}
      </b>
    </a></li>
  {% endfor %}
</ul>
