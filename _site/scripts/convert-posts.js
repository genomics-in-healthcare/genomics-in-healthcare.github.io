#!/usr/bin/env node

/**
 * Script to convert _posts/*.md files to JSON format for React
 * Run with: node scripts/convert-posts.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

function parseFrontMatter(content) {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontMatterRegex)
  
  if (!match) {
    return { frontMatter: {}, body: content }
  }
  
  const frontMatterText = match[1]
  const body = match[2].trim()
  
  // Simple YAML parser for basic key-value pairs
  const frontMatter = {}
  const lines = frontMatterText.split('\n')
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue
    
    const key = line.substring(0, colonIndex).trim()
    let value = line.substring(colonIndex + 1).trim()
    
    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    
    // Handle array values
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(v => v.trim().replace(/^["']|["']$/g, ''))
    }
    
    frontMatter[key] = value
  }
  
  return { frontMatter, body }
}

function convertPostsToJson() {
  const postsDir = path.join(rootDir, '_posts')
  const outputFile = path.join(rootDir, 'src', 'data', 'posts.json')
  
  if (!fs.existsSync(postsDir)) {
    console.error('_posts directory not found!')
    process.exit(1)
  }
  
  const postFiles = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'))
  const posts = []
  
  for (const file of postFiles) {
    const filePath = path.join(postsDir, file)
    const content = fs.readFileSync(filePath, 'utf-8')
    const { frontMatter, body } = parseFrontMatter(content)
    
    // Extract date from filename (format: YYYY-MM-DD-title.md)
    const dateMatch = file.match(/^(\d{4}-\d{2}-\d{2})-/)
    const date = dateMatch ? dateMatch[1] : frontMatter.date || ''
    
    const post = {
      filename: file,
      date: date,
      title: frontMatter.title || frontMatter.link_title || '',
      link_title: frontMatter.link_title || '',
      published: frontMatter.published !== false,
      layout: frontMatter.layout || 'post',
      group: frontMatter.group || 'news',
      content: body,
      author: frontMatter.author || '',
      tags: Array.isArray(frontMatter.tags) ? frontMatter.tags : 
            (frontMatter.tags ? [frontMatter.tags] : []),
    }
    
    posts.push(post)
  }
  
  // Sort by date (newest first)
  posts.sort((a, b) => {
    if (a.date < b.date) return 1
    if (a.date > b.date) return -1
    return 0
  })
  
  // Ensure output directory exists
  const outputDir = path.dirname(outputFile)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }
  
  // Write JSON file
  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2), 'utf-8')
  console.log(`✅ Converted ${posts.length} posts to ${outputFile}`)
}

convertPostsToJson()









