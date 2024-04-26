import { secondTeamFormat, teamOneFormat } from './teamsFormated'
import { Team } from '../Team'
import teams2 from '../../JSON/team2.json'
import React from 'react'

export function SecondTeams(){
  return (
    <div style={{ position: 'relative' }}>
      {teamOneFormat.map(({ grid, left, top }) => (
        <div key={grid} style={{ left, top, position: 'absolute'}}>
          <Team team={teams2} teamIndex={0} grid={grid}/>
        </div>
      ))}

      {secondTeamFormat.map(({ grid, left, top }) => (
        <div key={grid} style={{ left, top, position: 'absolute' }}>
          <Team team={teams2} teamIndex={1} grid={grid}/>
        </div>
      ))}
    </div>
  )
}