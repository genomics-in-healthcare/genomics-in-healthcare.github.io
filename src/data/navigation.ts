interface NavItem {
  name: string
  link: string
  group: string
}

export const navigation: NavItem[] = [
  { name: 'Home', link: '/', group: 'home' },
  { name: 'News', link: '/news', group: 'news' },
  { name: 'Research', link: '/research', group: 'research' },
  { name: 'Publications', link: '/publications', group: 'publications' },
  { name: 'Software', link: '/software', group: 'software' },
  { name: 'Members', link: '/members', group: 'members' },
  { name: 'Join', link: '/join', group: 'join' },
  { name: 'Contact', link: '/contact', group: 'contact' },
];

// Get base URL from Vite's environment
const getBaseUrl = (): string => {
  // In development, use empty string. In production, use the base path from vite config
  if (import.meta.env.DEV) {
    return ''
  }
  return import.meta.env.BASE_URL || ''
}

// Get static assets path
// In Vite, when publicDir is set to 'static', files are served from root in both dev and prod
// So static/img/logo.png should be accessed as /img/logo.png (or /base/img/logo.png in prod)
const getStaticPath = (path: string): string => {
  // Remove leading slash if present, and remove 'static/' prefix if it exists
  let cleanPath = path.startsWith('/') ? path.slice(1) : path
  cleanPath = cleanPath.startsWith('static/') ? cleanPath.slice(7) : cleanPath
  
  const baseUrl = getBaseUrl()
  // Ensure cleanPath starts with / for proper URL construction
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`
  
  // If baseUrl is '/' or empty, just return the normalized path
  if (!baseUrl || baseUrl === '/') {
    return normalizedPath
  }
  
  // Otherwise, combine baseUrl and path, avoiding double slashes
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  return `${cleanBaseUrl}${normalizedPath}`
}

interface SiteConfig {
  name: string
  description: string
  url: string
  baseurl: string
  static: (path: string) => string
}

export const siteConfig: SiteConfig = {
  name: 'Genomics and Artificial Intelligence in Healthcare Lab',
  description: 'This is the official web page for the Genomics and Artificial Intelligence in Healthcare Lab at Hong Kong PolyU.',
  url: 'https://genomics-in-healthcare.github.io/',
  baseurl: getBaseUrl(),
  // Helper function to get static asset paths
  static: getStaticPath,
};

