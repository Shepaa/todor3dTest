import React from 'react'
import "./style.css"

export function Coaches ({
  firstTeamCoachName,
  firstTeamCoachLogo,
  secondTeamCoachName,
  secondTeamCoachLogo,
}) {
  return (
    <div className="coaches-wrapper">
      <div className="coach-wrapper">
        <div className="firstCoach-Name coach">{firstTeamCoachName}</div>
        <div className="firstCoach-logo">
          <img src={firstTeamCoachLogo} alt={firstTeamCoachLogo}/>
        </div>
      </div>
      <div className="coach">Coach</div>
      <div className="second-coach">
        <div className="coach-wrapper">
          <div className="secondCoach-Name coach">{secondTeamCoachName}</div>
          <div className="secondCoach-logo">
            <img src={secondTeamCoachLogo} alt={secondTeamCoachLogo}/>
          </div>
        </div>
      </div>
    </div>
  )
}