import { secondTeamFormat, teamOneFormat } from './teamsFormates'
import { Team } from '../Team'
import teams3 from '../../JSON/team3.json'
import React from 'react'

export function ThirdTeams(){

  return (
    <div style={{ position: 'relative' }}>
      {teamOneFormat.map(({ grid, left, top }) => (
        <div key={grid} style={{ left, top, position: 'absolute'}}>
          <Team team={teams3} teamIndex={0} grid={grid}/>
        </div>
      ))}

      {secondTeamFormat.map(({ grid, left, top }) => (
        <div key={grid} style={{ left, top, position: 'absolute' }}>
          <Team team={teams3} teamIndex={1} grid={grid}/>
        </div>
      ))}
    </div>
  )

}