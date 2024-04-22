// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamsDetails} = props
  const {id, name, teamImgUrl} = teamsDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="card-list-container">
        <img className="team-logo" alt={name} src={teamImgUrl} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
