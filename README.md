# JC STEM Lab of Genomics and AI in Healthcare

This repository hosts the Jekyll version of the lab website.

## Local development

1. Install Bundler (only needed once):
   ```bash
   gem install bundler
   ```
2. Install Ruby dependencies:
   ```bash
   bundle install
   ```
3. Start the local server:
   ```bash
   bundle exec jekyll serve --livereload
   ```
4. Visit the site at [http://localhost:4000](http://localhost:4000).

If you prefer to work inside a Conda environment:
```bash
conda create -n jekyll -c conda-forge rb-jekyll
conda activate jekyll
bundle install
bundle exec jekyll serve
```

## Deployment

Push changes to `main` and let GitHub Pages rebuild automatically, or run a local build and deploy the `_site` directory to your hosting target.

## React branch

The previous React experiment now lives exclusively in the `react` branch. Switch to that branch if you need to review or restore any of the React implementation files.
