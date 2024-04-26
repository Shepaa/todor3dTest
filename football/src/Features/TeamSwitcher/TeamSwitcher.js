import "./style.css"
import React from 'react'

export const TeamSwitcher = ({handleTeamChange}) => {

  return (
    <div className="teams-block-wrapper">
      <div>
        <input
          type="radio"
          id="team1"
          name="team"
          value="team1"
          onChange={() => handleTeamChange('firstTeam')}
        />
        <label htmlFor="team1" className="team_label">
          TEAM 1
        </label>
        <div className="btn_underline"/>
      </div>
      <div>
        <input
          type="radio"
          id="team2"
          name="team"
          value="team2"
          onChange={() => handleTeamChange('secondTeam')}
          defaultChecked
        />
        <label htmlFor="team2" className="team_label">
          TEAM 2
        </label>
        <div className="btn_underline"/>
      </div>
      <div>
        <input
          type="radio"
          id="team3"
          name="team"
          value="team3"
          onChange={() => handleTeamChange('thirdTeam')}
        />
        <label htmlFor="team3" className="team_label">
          TEAM 3
        </label>
        <div className="btn_underline"/>
      </div>
    </div>
  )

}