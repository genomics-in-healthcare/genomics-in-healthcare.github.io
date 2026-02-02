import { useState, memo, FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Image, Link, Card } from '../ui'
import { siteConfig } from '../../data/navigation'
import { normalizeEmail, obfuscateEmail } from '../../utils/loadMembers'
import './MemberCard.css'

interface Member {
  name: string
  image: string
  altimage?: string
  email?: string
  pronouns?: string
  website?: string
  orcid?: string
  linkedIn?: string
  UCSF?: string
  scholar?: string
  twitTer?: string
  bsky?: string
  github?: string
  description?: string
}

interface MemberCardProps {
  member: Member
}

const MemberCard: FC<MemberCardProps> = memo(function MemberCard({ member }) {
  const [imageSrc, setImageSrc] = useState(member.image)
  const normalizedEmail = normalizeEmail(member.email)
  const displayEmail = normalizedEmail ? obfuscateEmail(normalizedEmail) : null

  const handleImageHover = () => {
    if (member.altimage) {
      setImageSrc(member.altimage)
    }
  }

  const handleImageLeave = () => {
    setImageSrc(member.image)
  }

  const socialLinks = [
    { key: 'orcid', icon: 'fingerprint', label: 'ORCID', url: `http://orcid.org/${member.orcid}`, isButton: false },
    { key: 'linkedIn', icon: 'work', label: 'LinkedIn', url: `http://www.linkedin.com/in/${member.linkedIn}`, isButton: false },
    { key: 'UCSF', icon: 'account_circle', label: 'UCSF Profile', url: `http://profiles.ucsf.edu/${member.UCSF}`, isButton: false },
    { key: 'scholar', icon: 'school', label: 'Scholar', url: `http://scholar.google.com/citations?user=${member.scholar}`, isButton: true },
    { key: 'twitTer', icon: 'chat', label: 'Twitter', url: `http://twitter.com/${member.twitTer}`, isButton: false },
    { key: 'bsky', icon: 'chat_bubble', label: 'Bluesky', url: `https://bsky.app/profile/${member.bsky}`, isButton: false },
    { key: 'github', icon: 'code', label: 'GitHub', url: `http://github.com/${member.github}`, isButton: false },
  ]

  const activeSocialLinks = socialLinks.filter(link => member[link.key])
  const buttonLinks = activeSocialLinks.filter(link => link.isButton)
  const iconLinks = activeSocialLinks.filter(link => !link.isButton)

  return (
    <Card className="member-card" id={member.name}>
      <div className="member-card__photo-wrapper">
        <Image
          src={imageSrc}
          alt={member.name}
          className="member-card__photo"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        />
      </div>

      <div className="member-card__info">
        <h3 className="member-card__name">{member.name}</h3>

        {member.pronouns && (
          <p className="member-card__position">{member.pronouns}</p>
        )}

        {(normalizedEmail || member.website) && (
          <div className="member-card__contact">
            {displayEmail && (
              <span className="member-card__email">{displayEmail}</span>
            )}
            {member.website && (
              <Link href={member.website} external>
                Website
              </Link>
            )}
          </div>
        )}

        {buttonLinks.length > 0 && (
          <div className="member-card__buttons">
            {buttonLinks.map((link) => (
              <Link
                key={link.key}
                href={link.url}
                external
                variant="button"
                className="member-card__button"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {iconLinks.length > 0 && (
          <div className="member-card__links">
            {iconLinks.map((link) => (
              <Link
                key={link.key}
                href={link.url}
                external
                className="member-card__link"
              >
                <span className="material-icons">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {member.description && (
          <div className="member-card__description">
            <ReactMarkdown>{member.description}</ReactMarkdown>
          </div>
        )}
      </div>
    </Card>
  )
})

MemberCard.displayName = 'MemberCard'

export default MemberCard

