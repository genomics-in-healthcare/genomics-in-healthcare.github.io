export const navigation = [
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
const getBaseUrl = () => {
  // In development, use empty string. In production, use the base path from vite config
  if (import.meta.env.DEV) {
    return ''
  }
  return import.meta.env.BASE_URL || '/genomics-in-healthcare.github.io'
}

export const siteConfig = {
  name: 'Genomics and Artificial Intelligence in Healthcare Lab',
  description: 'This is the official web page for the Genomics and Artificial Intelligence in Healthcare Lab at Hong Kong PolyU.',
  url: 'https://genomics-in-healthcare.github.io/',
  baseurl: getBaseUrl(),
};

