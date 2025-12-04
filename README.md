# JC STEM Lab of Genomics and AI in Healthcare

This is the React version of the Official Website of Genomics and AI in Healthcare Lab

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
Please copy all output from `dist` directory to the `root` directory before deployment, as the build outputs to `dist` but GitHub Pages only serves files from `root` directory.
```bash
npm run deploy
```

## Testing

Run tests with:
```bash
npm test              # Playwright E2E tests
npm run test:unit     # Vitest unit tests
```