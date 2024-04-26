import React from 'react'
import "./style.css"

export const InfoBanner = () => {
  return (
    <div className="banner-wrapper">
      <div className="team_item">
        <div className="manchester-city_item__photo team-border"></div>
        <div className="team_item__title">MANCHESTER CITY</div>
      </div>
      <div className="vs-wrapper">VS</div>
      <div className="team_item">
        <div className="liverpool_item__photo team-border"></div>
        <div className="team_item__title">LIVERPOOL</div>
      </div>
    </div>
  )
}