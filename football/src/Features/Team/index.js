import React from 'react';
import styles from "./style.module.css"

export const Team = ({ team, teamIndex, grid}) => {
  const photo = team.response[0].coach.photo;

  return (
    <div>
      {team.response[teamIndex].startXI.map((player) => (
        player.player.grid === grid && (
          <div key={player.player.id} className={styles.player_item}>
            <img src={photo} alt={photo} className={styles.player_photo}/>
            <div style={{ height: 20 }}>{player.player.name}</div>
          </div>
        )
      ))}
    </div>
  );
};
