import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.join(__dirname, '../src')

function getAllJsxFiles(dir) {
  const files = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...getAllJsxFiles(fullPath))
    } else if (entry.name.endsWith('.jsx')) {
      files.push(fullPath)
    }
  }

  return files
}

function renameJsxToTsx(filePath) {
  const newPath = filePath.replace(/\.jsx$/, '.tsx')
  fs.renameSync(filePath, newPath)
  console.log(`✓ Renamed: ${path.relative(srcDir, filePath)} → ${path.basename(newPath)}`)
  return newPath
}

function updateImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8')
  let modified = false

  // Update imports from .jsx to .tsx
  const importRegex = /from\s+['"]([^'"]*\.jsx)['"]/g
  if (importRegex.test(content)) {
    content = content.replace(importRegex, "from '$1'.replace('.jsx', '.tsx')")
    modified = true
  }

  // More reliable way to update imports
  content = content.replace(/from\s+['"]([^'"]*\.jsx)['"]/g, (match, importPath) => {
    return `from '${importPath.replace('.jsx', '.tsx')}'`
  })

  if (modified || content.includes('.jsx')) {
    fs.writeFileSync(filePath, content, 'utf-8')
  }
}

function updateAllImports() {
  const allFiles = getAllJsxFiles(srcDir)
  const allTsxFiles = allFiles.map(f => f.replace(/\.jsx$/, '.tsx'))

  for (const filePath of allTsxFiles) {
    if (fs.existsSync(filePath)) {
      updateImportsInFile(filePath)
    }
  }
}

console.log('🔄 Converting JSX files to TSX...\n')

const jsxFiles = getAllJsxFiles(srcDir)
console.log(`Found ${jsxFiles.length} JSX files\n`)

for (const filePath of jsxFiles) {
  renameJsxToTsx(filePath)
}

console.log('\n✓ All files renamed successfully!')
console.log('🔄 Updating imports...\n')

updateAllImports()

console.log('✓ All imports updated!')
console.log('\n✅ Conversion complete!')
