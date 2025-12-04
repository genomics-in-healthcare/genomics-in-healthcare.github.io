#!/usr/bin/env node

/**
 * Extract publications from HTML file and generate structured JSON
 * This script parses publications/index.htm and converts it to structured data
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const publicationsHtmlPath = path.join(__dirname, '..', 'publications', 'index.htm');
const outputPath = path.join(__dirname, '..', 'src', 'data', 'publications.json');

function stripHtmlTags(html) {
  // Remove HTML tags but keep the text content
  return html
    .replace(/<[^>]*>/g, '')
    .trim();
}

function parsePublicationsHTML() {
  try {
    const html = fs.readFileSync(publicationsHtmlPath, 'utf-8');
    
    // Extract pub-list div content
    const pubListMatch = html.match(/<div class="pub-list">([\s\S]*?)<\/div><!-- End of pub-list -->/);
    if (!pubListMatch || !pubListMatch[1]) {
      console.warn('⚠️  .pub-list element not found');
      return null;
    }
    
    const pubListHTML = pubListMatch[1];
    
    // Initialize result structure
    const result = {
      book: [],
      byYear: {},
      lastUpdated: new Date().toISOString(),
    };
    
    // Parse Book section
    const bookMatch = pubListHTML.match(/<font[^>]*>[\s\S]*?<strong>Book<\/strong>([\s\S]*?)<hr>/);
    if (bookMatch) {
      // Extract book items
      const bookContent = bookMatch[1];
      const bookItems = bookContent.match(/<blockquote>([\s\S]*?)<\/blockquote>/g);
      if (bookItems) {
        bookItems.forEach(item => {
          const textMatch = item.match(/<p>([\s\S]*?)<\/p>/);
          if (textMatch) {
            const text = stripHtmlTags(textMatch[1]);
            result.book.push({ html: textMatch[1], text });
          }
        });
      }
    }
    
    // Parse by year - Find all year headers like <b>2025</b>, <b>2024</b>, etc.
    const yearMatches = [...pubListHTML.matchAll(/<p><font[^>]*><b>(\d{4})<a[^>]*><\/a><\/b><\/font><\/p>/g)];
    
    yearMatches.forEach((match, index) => {
      const year = match[1];
      const yearStart = match.index;
      
      // Find the next year start or end of content
      const nextMatch = yearMatches[index + 1];
      const yearEnd = nextMatch ? nextMatch.index : pubListHTML.length;
      
      // Extract content between this year and next year
      let yearContent = pubListHTML.substring(yearStart, yearEnd);
      
      // Extract all <ul> lists in this year section
      const ulMatches = [...yearContent.matchAll(/<ul>([\s\S]*?)<\/ul>/g)];
      
      result.byYear[year] = {
        year,
        items: [],
      };
      
      ulMatches.forEach(ulMatch => {
        const ulContent = ulMatch[1];
        // Extract all <li> items
        const liMatches = [...ulContent.matchAll(/<li>([\s\S]*?)<\/li>/g)];
        
        liMatches.forEach(liMatch => {
          const liContent = liMatch[1];
          const text = stripHtmlTags(liContent);
          result.byYear[year].items.push({
            html: liContent,
            text,
          });
        });
      });
    });
    
    // Write to JSON file
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');
    
    console.log('✓ Publications data extracted successfully');
    console.log(`  Output: ${outputPath}`);
    
    // Print summary
    console.log(`  Book entries: ${result.book.length}`);
    Object.keys(result.byYear).forEach(year => {
      console.log(`  ${year}: ${result.byYear[year].items.length} items`);
    });
    
    return result;
  } catch (error) {
    console.error('✗ Error extracting publications:', error.message);
    return null;
  }
}

parsePublicationsHTML();
