#!/usr/bin/env node

/**
 * Script to convert _members/*.md files to JSON format for React
 * Run with: node scripts/convert-members.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

function parseFrontMatter(content) {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*(\n([\s\S]*))?$/
  const match = content.match(frontMatterRegex)
  
  if (!match) {
    return { frontMatter: {}, body: content }
  }
  
  const frontMatterText = match[1]
  const body = match[3] ? match[3].trim() : ''
  
  // Simple YAML parser for basic key-value pairs
  const frontMatter = {}
  const lines = frontMatterText.split('\n')
  
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const colonIndex = line.indexOf(':')
    
    if (colonIndex === -1) {
      i++
      continue
    }
    
    const key = line.substring(0, colonIndex).trim()
    let value = line.substring(colonIndex + 1).trim()
    
    // Handle multi-line values (YAML | syntax)
    if (value === '|' || value === '|-') {
      // Multi-line value starts on next line
      const multiLineValue = []
      i++
      let baseIndent = -1
      
      while (i < lines.length) {
        const nextLine = lines[i]
        const trimmed = nextLine.trim()
        
        // Stop if we hit the end of front matter
        if (trimmed === '---') {
          break
        }
        
        // Track base indentation from first non-empty line after the |
        if (trimmed && baseIndent === -1) {
          baseIndent = nextLine.length - trimmed.length
        }
        
        // Check if this is a new key-value pair (has colon at start of line, not indented)
        // Only break if it's at the same or less indentation than the base indent
        if (trimmed.includes(':')) {
          const nextColonIndex = nextLine.indexOf(':')
          const nextKey = nextLine.substring(0, nextColonIndex).trim()
          // If it's a valid key (not empty, not a comment, not a list item)
          if (nextKey && !nextKey.startsWith('#') && !trimmed.startsWith('-')) {
            const keyIndent = nextLine.length - trimmed.length
            // Only break if this key is at the same or less indentation than base
            // AND it's not part of the multi-line content (must be less than base)
            if (baseIndent >= 0 && keyIndent < baseIndent) {
              break
            }
            // If baseIndent is -1 (haven't found it yet), this might be the first content line
            // so don't break yet
          }
        }
        
        // Add line content (remove base indentation)
        if (baseIndent >= 0 && nextLine.length > baseIndent) {
          const lineContent = nextLine.substring(baseIndent)
          multiLineValue.push(lineContent)
        } else if (trimmed) {
          // If we haven't found base indent yet, just add trimmed content
          multiLineValue.push(trimmed)
        } else if (multiLineValue.length > 0) {
          // Preserve empty lines within multi-line content
          multiLineValue.push('')
        }
        
        i++
      }
      
      value = multiLineValue.join('\n').trim()
      i-- // Adjust for the loop increment
    } else {
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      
      // Handle array values
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(v => v.trim().replace(/^["']|["']$/g, ''))
      }
    }
    
    frontMatter[key] = value
    i++
  }
  
  return { frontMatter, body }
}

function convertMembersToJson() {
  const membersDir = path.join(rootDir, '_members')
  const outputFile = path.join(rootDir, 'src', 'data', 'members.json')
  
  if (!fs.existsSync(membersDir)) {
    console.log('⚠️  _members directory not found, skipping conversion. Using existing JSON file if available.')
    return
  }
  
  const memberFiles = fs.readdirSync(membersDir).filter(file => file.endsWith('.md'))
  const members = []
  
  for (const file of memberFiles) {
    const filePath = path.join(membersDir, file)
    const content = fs.readFileSync(filePath, 'utf-8')
    const { frontMatter, body } = parseFrontMatter(content)
    
    // Only include active members (no enddate or enddate is empty)
    const enddate = frontMatter.enddate || []
    const startdate = frontMatter.startdate || []
    
    if (enddate.length === 0 || startdate.length === enddate.length) {
      // Clean image path (remove comments and fix path)
      let cleanImage = frontMatter.image ? frontMatter.image.split('#')[0].trim() : ''
      // Fix image path: remove /static/ prefix if present
      if (cleanImage.startsWith('/static/')) {
        cleanImage = cleanImage.replace('/static/', '/')
      }
      
      // Handle description - could be in frontMatter or body
      // For multi-line YAML (| syntax), the description is already in frontMatter
      // If not in frontMatter, use body as fallback
      let description = frontMatter.description || ''
      
      // If description is empty and body exists, use body
      if (!description && body.trim()) {
        description = body.trim()
      }
      
      // Clean up description - remove extra whitespace
      if (description) {
        description = description.trim()
      }
    
    const member = {
        name: frontMatter.name || '',
        startdate: Array.isArray(frontMatter.startdate) ? frontMatter.startdate : [frontMatter.startdate],
        enddate: Array.isArray(frontMatter.enddate) ? frontMatter.enddate : [frontMatter.enddate],
        image: cleanImage,
        position: frontMatter.position || '',
        description: description,
        ...(frontMatter.pronouns && { pronouns: frontMatter.pronouns }),
        ...(frontMatter.email && { email: frontMatter.email }),
        ...(frontMatter.website && { website: frontMatter.website }),
        ...(frontMatter.orcid && { orcid: frontMatter.orcid }),
        ...(frontMatter.linkedIn && { linkedIn: frontMatter.linkedIn }),
        ...(frontMatter.UCSF && { UCSF: frontMatter.UCSF }),
        ...(frontMatter.scholar && { scholar: frontMatter.scholar }),
        ...(frontMatter.twitTer && { twitTer: frontMatter.twitTer }),
        ...(frontMatter.bsky && { bsky: frontMatter.bsky }),
        ...(frontMatter.github && { github: frontMatter.github }),
        ...(frontMatter.altimage && { altimage: frontMatter.altimage }),
      }
      
      members.push(member)
    }
  }
  
  // Ensure output directory exists
  const outputDir = path.dirname(outputFile)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }
  
  // Write JSON file
  fs.writeFileSync(outputFile, JSON.stringify(members, null, 2), 'utf-8')
  console.log(`✅ Converted ${members.length} members to ${outputFile}`)
}

convertMembersToJson()

