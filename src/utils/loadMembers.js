// Function to load and parse member markdown files
// In a real implementation, you would fetch these from an API or load them at build time
// For now, we'll create a helper that can be extended to load from a JSON file or API

export const positionsOrder = [
  'Principal Investigator',
  'Principal Research Fellow',
  'Research Assistant Professor',
  'Postdoctoral Scholar',
  'Ph.D. Student',
  'MPhil Student',
  'Research Assistant',
];

// This function would ideally load members from a JSON file or API
// For now, we'll return an empty array and you can populate it with actual member data
export async function loadMembers() {
  try {
    // In production, you would fetch from a JSON file or API endpoint
    // For example: const response = await fetch('/data/members.json');
    // const members = await response.json();
    
    // For now, return empty array - members should be loaded from a JSON file
    // You can convert _members/*.md files to JSON using a build script
    return [];
  } catch (error) {
    console.error('Error loading members:', error);
    return [];
  }
}

// Helper function to normalize email
export function normalizeEmail(email) {
  if (!email) return null;
  return email
    .replace(/ DOT /gi, '.')
    .replace(/ dot /gi, '.')
    .replace(/ Dot /gi, '.')
    .replace(/ AT /gi, '@')
    .replace(/ at /gi, '@')
    .replace(/ At /gi, '@');
}

// Helper function to obfuscate email for display
export function obfuscateEmail(email) {
  if (!email) return '';
  return email.replace('@', ' at ').replace(/\./g, ' dot ');
}

// Helper to check if member is active (no enddate or enddate is empty or enddate length != startdate length)
export function isActiveMember(member) {
  // If no enddate, member is active
  if (!member.enddate || member.enddate.length === 0) {
    return true;
  }
  
  // If startdate length != enddate length, member is active
  if (member.startdate && member.startdate.length !== member.enddate.length) {
    return true;
  }
  
  // If enddate has values but they are all empty strings, member is active
  const hasValidEnddate = member.enddate.some(date => date && date.trim() !== '');
  if (!hasValidEnddate) {
    return true;
  }
  
  // Otherwise, member is not active (is an alumni)
  return false;
}

// Group members by position
export function groupMembersByPosition(members) {
  const grouped = {};
  
  positionsOrder.forEach(position => {
    grouped[position] = members
      .filter(member => member.position === position && isActiveMember(member))
      .sort((a, b) => a.name.localeCompare(b.name));
  });
  
  return grouped;
}

// Helper to check if member is an alumni
export function isAlumniMember(member) {
  // Must have enddate and it should not be empty
  if (!member.enddate || member.enddate.length === 0) {
    return false;
  }
  
  // enddate should have the same length as startdate (complete date range)
  if (member.startdate && member.startdate.length !== member.enddate.length) {
    return false;
  }
  
  // Check if enddate actually has a value (not just empty strings)
  const hasValidEnddate = member.enddate.some(date => date && date.trim() !== '');
  if (!hasValidEnddate) {
    return false;
  }
  
  // Exclude certain positions unless they contain "affiliate"
  const position = (member.position || '').toLowerCase();
  if (position.includes('srtp') || position.includes('intern') || 
      position.includes('sep') || position.includes('visiting') || 
      position.includes('high school')) {
    if (!position.includes('affiliate')) {
      return false;
    }
  }
  
  return true;
}

// Get alumni members sorted by enddate (most recent first)
export function getAlumniMembers(members) {
  return members
    .filter(isAlumniMember)
    .sort((a, b) => {
      // Sort by enddate (most recent first)
      const aEnddate = a.enddate && a.enddate.length > 0 ? a.enddate[a.enddate.length - 1] : '';
      const bEnddate = b.enddate && b.enddate.length > 0 ? b.enddate[b.enddate.length - 1] : '';
      return bEnddate.localeCompare(aEnddate);
    });
}





