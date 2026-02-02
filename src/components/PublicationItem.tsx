import { FC } from 'react'

interface PublicationItemProps {
  html: string
}

const PublicationItem: FC<PublicationItemProps> = ({ html }) => {
  return (
    <li dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default PublicationItem
