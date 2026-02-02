# React Migration Guide

This document describes the migration from Jekyll to React for the Genomics in Healthcare Lab website.

## What Has Been Migrated

### ✅ Completed
- Project structure setup with Vite
- React Router configuration
- Header component with navigation drawer
- Footer component
- Layout component
- Home page with hero section and lab descriptions
- Navigation data structure
- Basic routing for all pages
- CSS styling preserved

### 🔄 In Progress / To Do
- Members page (needs data conversion from markdown files)
- News page (needs blog post conversion)
- Publications page (needs data conversion)
- Research page (needs content migration)
- Software page (needs content migration)
- Join page (needs content migration)
- Contact page (needs content migration)

## File Structure

```
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Footer.jsx     # Footer
│   │   └── Layout.jsx     # Main layout wrapper
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Homepage
│   │   ├── News.jsx       # News/blog page
│   │   ├── Research.jsx   # Research page
│   │   ├── Publications.jsx
│   │   ├── Software.jsx
│   │   ├── Members.jsx
│   │   ├── Join.jsx
│   │   └── Contact.jsx
│   ├── data/              # Data files
│   │   └── navigation.js  # Navigation configuration
│   ├── App.jsx            # Main app component
│   └── main.jsx          # Entry point
├── static/                # Static assets (images, CSS, JS)
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
└── package-react.json    # Dependencies (rename to package.json)
```

## Next Steps

1. **Convert Member Data**: Convert `_members/*.md` files to JSON or load them dynamically
2. **Convert Blog Posts**: Convert `_posts/*.md` files to a format that can be loaded in React
3. **Migrate Remaining Pages**: Complete the content migration for all pages
4. **Add Markdown Support**: Install and configure a markdown parser for blog posts
5. **Testing**: Test all routes and functionality
6. **Deployment**: Configure GitHub Pages deployment

## Development

```bash
# Install dependencies (after renaming package-react.json to package.json)
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Notes

- The `static` directory is used as the `publicDir` in Vite, so all static assets are accessible at `/static/...`
- Base URL is configured for GitHub Pages: `/genomics-in-healthcare.github.io/`
- All original CSS files are preserved and loaded
- The site maintains the same visual design as the Jekyll version









