# JC STEM Lab of Genomics and AI in Healthcare - React Version

This is the React version of the Genomics and AI in Healthcare Lab website.

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

## Development

The development server runs on `http://localhost:5173` by default (Vite default port).

## Testing

Run tests with:
```bash
npm test              # Playwright E2E tests
npm run test:unit     # Vitest unit tests
```

## Deployment

The build output goes to the `dist` directory. For GitHub Pages, make sure to update the `base` path in `vite.config.js` if your repository name changes.

## Branch Information

- **main branch**: Contains the full project (Jekyll + React)
- **react branch**: Contains only React code (this branch)

See [BRANCH_WORKFLOW.md](BRANCH_WORKFLOW.md) for information on working with multiple branches.
