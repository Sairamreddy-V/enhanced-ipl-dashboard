import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {PieChart, Pie, Sector, Cell, ResponsiveContainer} from 'recharts'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesDetails: [], isLoading: true,wonCount:0,lossCount:0,drawCount:0}

  componentDidMount() {
    this.gettingTeamMatches()
  }

  gettingTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const lostMatches=updatedData.recentMatches.filter(eachOne=>(eachOne.match_status==="Lost"))
    const wonMatches=updatedData.recentMatches.filter(eachOne=>(eachOne.match_status==="Won"))
    const drawMatches=updatedData.recentMatches.filter(eachOne=>(eachOne.match_status==="Draw"))
    this.setState({teamMatchesDetails: updatedData, isLoading: false,wonCount:wonMatches.length,lossCount:lostMatches.length,drawCount:drawMatches.length})
  }

  onBackButton = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {teamMatchesDetails, isLoading,lossCount,wonCount,drawCount} = this.state
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params

    const data = [
      {name: 'WIN', value: wonCount},
      {name: 'LOSS', value: lossCount},
      {name: 'DRAW', value: drawCount},
    ]

    const COLORS = ['#0088FE', '#00C49F', '#FF8042']

    return (
      <div className="TeamMatches-page-container" data-testid="loader">
        {isLoading ? (
          <div>
            <Loader type="TailSpin" width={50} height={50} color="#00BFF" />
          </div>
        ) : (
          <div>
            <img
              className="team-banner-image"
              alt="team banner"
              src={teamMatchesDetails.teamBannerUrl}
            />
            <p>Latest Matches</p>
            <ul className="latestMatch-ul-container">
              <LatestMatch
                details={teamMatchesDetails.latestMatchDetails}
                key={teamMatchesDetails.latestMatchDetails.id}
              />
            </ul>
            <ul className="MatchCard-ul-container">
              {teamMatchesDetails.recentMatches.map(eachGame => (
                <MatchCard matchDetails={eachGame} key={eachGame.id} />
              ))}
            </ul>
            <div className="pie-Container">
              <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                <Pie
                  data={data}
                  cx={120}
                  cy={200}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <button className="back-button" onClick={this.onBackButton}>
              BACK
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
