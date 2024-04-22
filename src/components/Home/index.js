import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const upDatedData = data.teams.map(eacOne => ({
      name: eacOne.name,
      id: eacOne.id,
      teamImgUrl: eacOne.team_image_url,
    }))
    this.setState({teams: upDatedData, isLoading: false})
  }

  render() {
    const {teams, isLoading} = this.state

    return (
      <div data-testid="loader">
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00BFF" height={50} width={50} />
          </div>
        ) : (
          <div className="home-page-container">
            <div className="logo-heading-container">
              <img
                className="ipl-logo"
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1 className="Ipl-heading">IPL Dashboard</h1>
            </div>
            <ul className="card-ul-container">
              {teams.map(eachTeam => (
                <TeamCard teamsDetails={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
