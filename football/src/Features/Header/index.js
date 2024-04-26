import LeaguaPhoto from '../../Images/Leagua.png'
import React from 'react'
import "./style.css"

export const Header = () => {
  return (
    <div className="header">
      <img src={LeaguaPhoto} alt="Leagua"/>
    </div>
  )
}