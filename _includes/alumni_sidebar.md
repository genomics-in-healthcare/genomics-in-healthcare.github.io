{% assign sorted = site.members | sort: "enddate" | reverse %}
{% for member in sorted %}

{% if member.enddate == empty or member.startdate.size != member.enddate.size %}
{% continue %}
{% endif %}

{% assign position = member.position | downcase %}
{% if position contains "srtp" or position contains "intern" or position 
  contains "sep" or position contains "visiting"
  or position contains "high school" %}
{% unless position contains "affiliate" %}
{% continue %}
{% endunless %}
{% endif %}

<div id="{{member.name}}" class="member-item">
    <img class="member-photo" 
         src="{{ member.image }}" 
         {% if member.altimage %} onmouseover="this.src='{{ member.altimage }}';" onmouseout="this.src='{{ member.image }}';" {% endif %}
         alt="{{ member.name }}">
    <div class="member-info">
        <h3 class="member-name">{{member.name}}</h3>
        <p class="member-position">{{member.position | markdownify | remove: '<p>' | remove: '</p>' }}</p>
        
        {% if member.pronouns %}
            <p class="member-position">{{member.pronouns}}</p>
        {% endif %}
        
        {% assign start = member.startdate | first | date:"%Y" %}
        {% assign end = member.enddate | last | date:"%Y" %}
        
        <div class="member-contact">
            {% if start == end %}
                <span>{{ start }}</span>
            {% else %}
                <span>{{ start }} - {{ end }}</span>
            {% endif %}
            
            {% if member.subsequent %}
                <br><span>Subsequently: {{member.subsequent}}</span>
            {% endif %}
        </div>
        
        <div class="member-contact">
            {% if member.email %}
                {% unless member.email contains "ucsf.edu" or "fraserlab" %}
                    <a href="mailto:{{member.email}}">{{member.email}}</a>
                {% endunless %}
            {% endif %}
            
            {% if member.website %}
                <a href="{{member.website}}" target="_blank">Website</a>
            {% endif %}
        </div>
        
        <div class="member-links">
            {% if member.orcid %}
                <a href="http://orcid.org/{{member.orcid}}" class="member-link" target="_blank">
                    <span class="material-icons">fingerprint</span>
                    ORCID
                </a>
            {% endif %}
            
            {% if member.linkedin %}
                <a href="http://www.linkedin.com/in/{{member.linkedin}}" class="member-link" target="_blank">
                    <span class="material-icons">work</span>
                    LinkedIn
                </a>
            {% endif %}
            
            {% if member.scholar %}
                <a href="http://scholar.google.com/citations?user={{member.scholar}}" class="member-link" target="_blank">
                    <span class="material-icons">school</span>
                    Scholar
                </a>
            {% endif %}
            
            {% if member.twitter %}
                <a href="http://twitter.com/{{member.twitter}}" class="member-link" target="_blank">
                    <span class="material-icons">chat</span>
                    Twitter
                </a>
            {% endif %}
            
            {% if member.github %}
                <a href="http://github.com/{{member.github}}" class="member-link" target="_blank">
                    <span class="material-icons">code</span>
                    GitHub
                </a>
            {% endif %}
        </div>

        <div class="member-description">
            {{ member.description | markdownify }}
        </div>
    </div>
</div>
{% endfor %}

<!-- Visitors Section -->
{% for visitor in sorted %}
{% assign position = visitor.position | downcase %}
{% unless position contains "visiting" %}
{% continue %}
{% endunless %}

<div id="{{visitor.name}}" class="member-item">
    <div class="member-info">
        <h3 class="member-name">{{visitor.name}}</h3>
        
        {% if visitor.current %}
            <p class="member-position">{{visitor.position | markdownify | remove: '<p>' | remove: '</p>' }} from {{visitor.current}}</p>
        {% else %}
            <p class="member-position">{{visitor.position | markdownify | remove: '<p>' | remove: '</p>' }}</p>
        {% endif %}
        
        {% if visitor.pronouns %}
            <p class="member-position">{{visitor.pronouns}}</p>
        {% endif %}
        
        {% assign start = visitor.startdate | first | date:"%Y" %}
        {% assign end = visitor.enddate | last | date:"%Y" %}
        
        <div class="member-contact">
            {% if end %}
                {% if start == end %}
                    <span>{{ start }}</span>
                {% else %}
                    <span>{{ start }} - {{ end }}</span>
                {% endif %}
            {% else %}
                <span>{{ start }} - Present</span>
            {% endif %}
        </div>
    </div>
</div>
{% endfor %}
