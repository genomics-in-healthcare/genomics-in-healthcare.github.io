import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.join(__dirname, '../src')

const jsFilesToConvert = [
  'src/components/common/index.js',
  'src/components/ui/index.js',
  'src/data/members.js',
  'src/data/navigation.js',
  'src/data/posts.js',
  'src/test/setup.js',
  'src/utils/loadMembers.js'
]

function renameJsToTs(filePath) {
  const newPath = filePath.replace(/\.js$/, '.ts')
  fs.renameSync(filePath, newPath)
  console.log(`✓ Renamed: ${path.relative(srcDir, filePath)} → ${path.basename(newPath)}`)
  return newPath
}

function updateImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8')

  // Update imports from .tsx to .tsx (already done)
  // Update imports from .ts to .ts (already done)
  // Just ensure no .js imports remain
  content = content.replace(/from\s+['"]([^'"]*\.js)['"]/g, (match, importPath) => {
    return `from '${importPath.replace('.js', '.ts')}'`
  })

  fs.writeFileSync(filePath, content, 'utf-8')
}

console.log('🔄 Converting JS files to TS...\n')

for (const file of jsFilesToConvert) {
  const fullPath = path.join(__dirname, '..', file)
  if (fs.existsSync(fullPath)) {
    renameJsToTs(fullPath)
  }
}

console.log('\n✓ All files renamed successfully!')
console.log('🔄 Updating imports...\n')

// Update imports in all TS/TSX files
function getAllTsFiles(dir) {
  const files = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...getAllTsFiles(fullPath))
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
      files.push(fullPath)
    }
  }

  return files
}

const allTsFiles = getAllTsFiles(srcDir)
for (const filePath of allTsFiles) {
  updateImportsInFile(filePath)
}

console.log('✓ All imports updated!')
console.log('\n✅ Conversion complete!')
