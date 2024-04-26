import React, { useState } from 'react'
import './global.css'
import './App.css'
import { Header } from './Features/Header '
import teams1 from '../src/JSON/team1.json'
import teams2 from '../src/JSON/team2.json'
import teams3 from '../src/JSON/team3.json'
import { FirstTeams } from './Features/FirstTeams/FirstTeams'
import { InfoBanner } from './Features/InfoBanner'
import { SecondTeams } from './Features/SecondTeams/SecondTeams'
import { ThirdTeams } from './Features/ThirdTeams/ThirdTeams'
import { Coaches } from './Features/Coaches/Coaches'
import { TeamSwitcher } from './Features/TeamSwitcher/TeamSwitcher'

function App () {
  const [switchedTeam, setSwitchedTeam] = useState('secondTeam')
  const [teams, setTeams] = useState(teams2)
  const firstTeamCoachName = teams.response[0].coach.name
  const firstTeamCoachLogo = teams.response[0].coach.photo
  const secondTeamCoachName = teams.response[1].coach.name
  const secondTeamCoachLogo = teams.response[1].coach.photo

  let teamComponent
  switch (switchedTeam) {
    case 'firstTeam':
      teamComponent = <FirstTeams/>
      break
    case 'secondTeam':
      teamComponent = <SecondTeams/>
      break
    case 'thirdTeam':
      teamComponent = <ThirdTeams/>
      break
    default:
      teamComponent = <SecondTeams/>
  }

  const handleTeamChange = (team) => {
    setSwitchedTeam(team)
    switch (team) {
      case 'firstTeam':
        setTeams(teams1)
        break
      case 'secondTeam':
        setTeams(teams2)
        break
      case 'thirdTeam':
        setTeams(teams3)
        break
      default:
        setTeams(teams2)
    }
  }

  return (
    <div className="App">
      <Header/>
      <InfoBanner/>
      <TeamSwitcher handleTeamChange={handleTeamChange}/>
      <div className="pitch-wrapper">
        <div className="pitch-photo">{teamComponent}</div>
      </div>
      <Coaches firstTeamCoachLogo={firstTeamCoachLogo}
               firstTeamCoachName={firstTeamCoachName}
               secondTeamCoachLogo={secondTeamCoachLogo}
               secondTeamCoachName={secondTeamCoachName}/>
    </div>
  )
}

export default App
