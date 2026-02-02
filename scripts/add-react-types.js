import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.join(__dirname, '../src')

function getAllTsxFiles(dir) {
  const files = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath))
    } else if (entry.name.endsWith('.tsx') && !entry.name.includes('.stories') && !entry.name.includes('.test')) {
      files.push(fullPath)
    }
  }

  return files
}

function addReactTypes(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8')
  const fileName = path.basename(filePath)
  
  // Skip if already has FC or React.FC
  if (content.includes(': FC') || content.includes('React.FC')) {
    console.log(`⏭️  Skipped (already typed): ${fileName}`)
    return
  }

  // Skip if it's a page component with props (we'll handle these separately)
  if (content.includes('interface') && content.includes('Props')) {
    console.log(`⏭️  Skipped (has interface): ${fileName}`)
    return
  }

  // Check if it has a function declaration
  const functionMatch = content.match(/function\s+(\w+)\s*\(\s*\)\s*{/)
  
  if (functionMatch) {
    const componentName = functionMatch[1]
    
    // Check if FC is already imported
    if (!content.includes('FC')) {
      // Add FC to React import
      content = content.replace(
        /import\s*{\s*([^}]*)\s*}\s*from\s*['"]react['"]/,
        (match, imports) => {
          const importList = imports.split(',').map(i => i.trim()).filter(i => i)
          if (!importList.includes('FC')) {
            importList.push('FC')
          }
          return `import { ${importList.join(', ')} } from 'react'`
        }
      )
    }
    
    // Convert function to const with FC type
    content = content.replace(
      /function\s+(\w+)\s*\(\s*\)\s*{/,
      `const $1: FC = () => {`
    )
    
    console.log(`✓ Added FC type: ${fileName}`)
  } else {
    console.log(`⏭️  Skipped (no matching function): ${fileName}`)
  }

  fs.writeFileSync(filePath, content, 'utf-8')
}

console.log('🔄 Adding React FC types to components...\n')

const tsxFiles = getAllTsxFiles(srcDir)
console.log(`Found ${tsxFiles.length} TSX component files\n`)

for (const filePath of tsxFiles) {
  addReactTypes(filePath)
}

console.log('\n✅ Type annotation complete!')
