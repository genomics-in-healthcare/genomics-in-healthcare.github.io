import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Use fileURLToPath for proper cross-platform path handling
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const devIndex = path.join(root, 'index.dev.html');
const rootIndex = path.join(root, 'index.html');

if (!fs.existsSync(devIndex)) {
  console.error('index.dev.html not found.');
  process.exit(1);
}

fs.copyFileSync(devIndex, rootIndex);
console.log('✓ Copied index.dev.html to index.html (dev mode)');
