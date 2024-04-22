import './index.css'

const LatestMatch = props => {
  const {details} = props

  return (
    <li className="lastMatch-main-container">
      <div className="details-image-container">
        <div className="lastMatch-container">
          <h1 className="lastMatch-heading">{details.competing_team}</h1>
          <p className="lastMatch-para">{details.date}</p>
          <p className="lastMatch-para">{details.venue}</p>
          <p className="lastMatch-para">{details.result}</p>
        </div>
        <div>
          <img
            className="lastMatch-image"
            alt={details.competing_team}
            src={details.competing_team_logo}
          />
        </div>
      </div>
      <hr className="hr-line" />
      <div className="lastMatch-container">
        <p className="lastMatch-para">First Innnings</p>
        <p className="lastMatch-para">{details.first_innings}</p>
        <p className="lastMatch-para">second Innnings</p>
        <p className="lastMatch-para">{details.second_innings}</p>
        <p className="lastMatch-para">Man of the Match</p>
        <p className="lastMatch-para">{details.man_of_the_match}</p>
        <p className="lastMatch-para">Umpires</p>
        <p className="lastMatch-para">{details.umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
