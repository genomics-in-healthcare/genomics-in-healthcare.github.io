import { useState, useEffect, FC } from 'react'
import { MemberCard } from '../components/common'
import { membersData } from '../data/members'
import { positionsOrder, groupMembersByPosition, getAlumniMembers, Member } from '../utils/loadMembers'
import './Members.css'

const Members: FC = () => {
  const [groupedMembers, setGroupedMembers] = useState<Record<string, Member[]>>({})
  const [alumniMembers, setAlumniMembers] = useState<Member[]>([])

  useEffect(() => {
    // Group members by position
    const grouped = groupMembersByPosition(membersData)
    setGroupedMembers(grouped)
    
    // Get alumni members
    const alumni = getAlumniMembers(membersData)
    setAlumniMembers(alumni)
  }, [])

  return (
    <div className="members-container">
      {positionsOrder.map((position) => {
        const members = groupedMembers[position] || []
        if (members.length === 0) return null

        return (
          <div key={position} className="position-group">
            <h2 className="position-title">
              {position}
              {position !== 'Principal Investigator' && 's'}
            </h2>
            {members.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        )
      })}

      {/* Alumni Section */}
      {alumniMembers.length > 0 && (
        <div className="position-group">
          <h2 className="position-title">
            <span className="material-icons position-title__icon">
              school
            </span>
            Alumni
          </h2>
          {alumniMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Members
