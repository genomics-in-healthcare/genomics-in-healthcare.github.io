# Genomics in Healthcare Lab - React Version

This is the React refactored version of the Genomics and AI in Healthcare Lab website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

5. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```
src/
├── components/     # Reusable React components (Header, Footer, Layout)
├── pages/         # Page components (Home, News, Research, etc.)
├── data/          # Data files (navigation, config)
├── App.jsx        # Main app component with routing
├── main.jsx       # Entry point
└── index.css      # Global styles
```

## Migration Notes

- The original Jekyll site has been converted to React with React Router
- Static assets are served from the `/static` directory
- The base URL is configured for GitHub Pages deployment
- All original styling has been preserved

## Development

The development server runs on `http://localhost:5173` by default (Vite default port).

## Deployment

The build output goes to the `dist` directory. For GitHub Pages, make sure to update the `base` path in `vite.config.js` if your repository name changes.









