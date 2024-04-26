import teams1 from '../../JSON/team1.json';
import React from 'react';
import { Team } from '../Team'
import { secondTeamFormat, teamOneFormat } from './teamsFormates'


export function FirstTeams() {

  return (
    <div style={{ position: 'relative' }}>
      {teamOneFormat.map(({ grid, left, top }) => (
        <div key={grid} style={{ left, top, position: 'absolute'}}>
       <Team team={teams1} teamIndex={0} grid={grid}/>
        </div>
      ))}

      {secondTeamFormat.map(({ grid, left, top }) => (
        <div key={grid} style={{ left, top, position: 'absolute' }}>
          <Team team={teams1} teamIndex={1} grid={grid}/>
        </div>
      ))}
    </div>
  )
}
