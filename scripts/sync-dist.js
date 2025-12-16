import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

console.log('🔄 Syncing build artifacts from dist/ to root...');

// 1. Copy index.html
const distIndex = path.join(distDir, 'index.html');
const rootIndex = path.join(rootDir, 'index.html');
if (fs.existsSync(distIndex)) {
  fs.copyFileSync(distIndex, rootIndex);
  console.log('✓ Updated index.html');
} else {
  console.error('❌ dist/index.html not found');
}

// 2. Copy 404.html
const dist404 = path.join(distDir, '404.html');
const root404 = path.join(rootDir, '404.html');
if (fs.existsSync(dist404)) {
  fs.copyFileSync(dist404, root404);
  console.log('✓ Updated 404.html');
}

// 3. Sync assets folder
// We replace the root assets folder with dist/assets to ensure we don't accumulate old hashed files
const distAssets = path.join(distDir, 'assets');
const rootAssets = path.join(rootDir, 'assets');

if (fs.existsSync(distAssets)) {
  // Remove existing root assets folder to clean up old files
  if (fs.existsSync(rootAssets)) {
    fs.rmSync(rootAssets, { recursive: true, force: true });
  }
  
  // Create fresh assets folder
  fs.mkdirSync(rootAssets);
  
  // Copy all files from dist/assets
  const files = fs.readdirSync(distAssets);
  files.forEach(file => {
    const src = path.join(distAssets, file);
    const dest = path.join(rootAssets, file);
    fs.copyFileSync(src, dest);
  });
  console.log(`✓ Synced ${files.length} files to assets/`);
} else {
  console.log('⚠️  No assets folder found in dist/');
}

console.log('✅ Sync complete. Root files are now up to date.');
