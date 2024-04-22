import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const matchStatus = matchDetails.match_status

  const result = matchStatus === 'Lost' ? 'match-card-lost' : 'match-card-win'
  return (
    <li className="MatchCard-list-container">
      <img
        className="match-card-image"
        alt="competing_team_logo"
        src={matchDetails.competing_team_logo}
      />
      <p className="MatchCard-name-para">{matchDetails.competing_team}</p>
      <p className="MatchCard-result-para">{matchDetails.result}</p>
      <p className={`${result}`}>{matchDetails.match_status}</p>
    </li>
  )
}

export default MatchCard
