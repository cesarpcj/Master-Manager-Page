import React from 'react'
import "./formation.css";

import PlayerListItem from './playerListItem'

export default function PlayersList({players,selectPlayer}) {
    return (
        <>
        <div>
            <div className="card-title-light">
                <p>Players</p>

            </div>
                <div className="formationPlayerListItemTitle"> 
                    <div className="formation-player-position-title">Pos</div>
                    <div className="formation-player-number-title">N</div>
                    <div className="formation-player-name-title">Name</div>
                </div>
            <ul className="player-list">
                {players && players.map(player => {
                    return <PlayerListItem key={player.id} player={player} selectPlayer={selectPlayer}/>
                })}
               
            </ul>
            </div>
            
            <style>
                {`
                    .player-list{
                        padding:0px 5px;
                        margin: 0px;
                        background-color: #fff;
                        max-height: 450px;
                        overflow-y: scroll;
                    }
                `}
            </style>
        </>
    )
}
