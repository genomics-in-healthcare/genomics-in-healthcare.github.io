import publicationsJSON from './publications.json'

interface PublicationItem {
  html: string
  text: string
}

interface YearData {
  year: string
  items: PublicationItem[]
}

interface PublicationsData {
  book: PublicationItem[]
  byYear: Record<string, YearData>
  lastUpdated: string
}

export const publicationsData: PublicationsData = publicationsJSON
