import React from 'react'
import TeamListItem from './teamListItem'

export default function TeamList({choosenPlayers, sell}) {
    let rows = [], i = -1, len = 10;
    while (++i <= len) rows.push(i);
    console.dir(rows);
    return (
        <>
            <div className="card-title-light">
                <p>Team</p>
            </div>
            
            <ul className="player-list">
                
                        {choosenPlayers ? rows.map((row, index) =>{
                            const player = row < choosenPlayers.length ? choosenPlayers[row] : null;
                            return <TeamListItem key={Math.floor(Math.random()*100000)} player={player} index={index+1} sell={sell}/>
                        }):

                        rows.map((row, index) =>{
                            return <TeamListItem player={null} index={index+1}/>
                        })
                    }
                  
                
            </ul>
        </>
    )
}
