import { FC } from 'react'
import {
  SNAPSHOT_NOTE,
  bioinformaticsConferences,
  csVenues,
  nearTermActions,
  type ConferenceEntry,
} from '../data/conferences'
import './Conferences.css'

const ConferenceTable: FC<{ rows: ConferenceEntry[] }> = ({ rows }) => (
  <div className="conference-table-wrap">
    <table className="conference-table">
      <thead>
        <tr>
          <th scope="col">Conference</th>
          <th scope="col">Focus</th>
          <th scope="col">Status</th>
          <th scope="col">Deadline</th>
          <th scope="col">Link</th>
          <th scope="col">Notes</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td className="conference-name">{row.name}</td>
            <td>{row.focus}</td>
            <td>
              <span className={`conference-status status-${row.status.toLowerCase()}`}>{row.status}</span>
            </td>
            <td className="conference-deadline">{row.deadline}</td>
            <td>
              <a href={row.url} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </td>
            <td>{row.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const Conferences: FC = () => {
  return (
    <div className="conferences-container">
      <p className="intro-text">
        Living list of venues for bioinformatics, computational biology, and genomics + AI submissions.
        Deadlines change often — verify the official URLs before submitting. Workshop acceptances are not
        the same as main-conference publications.
      </p>
      <p className="intro-text snapshot-note">{SNAPSHOT_NOTE}</p>

      <h2 className="section-header">Bioinformatics / computational biology</h2>
      <ConferenceTable rows={bioinformaticsConferences} />

      <h2 className="section-header">CS venues that accept bio / biomedical AI work</h2>
      <p className="intro-text">
        These computer-science venues regularly publish bioinformatics, biomedical AI, or health-ML papers.
        Prefer main tracks when listing lab achievements; mark workshops separately.
      </p>
      <ConferenceTable rows={csVenues} />

      <h2 className="section-header">Near-term actions</h2>
      <div className="conference-table-wrap">
        <table className="conference-table near-term-table">
          <thead>
            <tr>
              <th scope="col">Conference</th>
              <th scope="col">Deadline</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            {nearTermActions.map((row) => (
              <tr key={row.name}>
                <td className="conference-name">{row.name}</td>
                <td className="conference-deadline">{row.milestone}</td>
                <td>
                  <a href={row.url} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Conferences
