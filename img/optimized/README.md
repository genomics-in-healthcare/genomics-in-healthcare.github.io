# genomics-in-healthcare.github.io
====================

Technologies this website uses:  

    Jekyll  
    Github Pages  
    Twitter Bootstrap 4.4.1

Before pushing changes, please check that they will work on your system first with the plugins included in the Gemfile using the bundler tool (results served at [localhost:4000](localhost:4000)):

    sudo gem install bundler
    bundle install
    bundle exec jekyll serve
    
To create a conda environment to locally test and host, the following should suffice:

    conda create -n jekyll -c conda-forge rb-jekyll
    conda activate jekyll
    bundle install
    bundle exec jekyll serve

## Caching Strategy

This site implements a multi-layered caching strategy to improve performance for returning visitors:

1. **HTTP Cache Headers**: The site uses cache control headers to tell browsers how long to cache resources:
   - Static assets (JS, CSS, logos): 1 year cache with `immutable` flag
   - Other images: 30 days cache
   - HTML pages: 1 hour cache

2. **Service Worker**: A service worker (`sw.js`) provides offline capabilities and manages cache:
   - Pre-caches critical resources
   - Uses appropriate cache strategies based on file type
   - Updates when site content changes (via cache versioning)

3. **Deployment Configuration**:
   - `_headers` file for standard HTTP caching headers
   - `netlify.toml` for Netlify-specific configuration

When modifying the site, be aware that changes to cached resources might not be immediately visible to returning users. To force cache invalidation:
- Update the `CACHE_NAME` version in `sw.js` when making significant changes
- Consider using versioned filenames for critical resources (e.g., `style.v2.css`)

For more details, see `OPTIMIZATION.md`.
