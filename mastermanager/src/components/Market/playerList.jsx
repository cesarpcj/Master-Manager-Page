import React from 'react'
import PlayerListItem from './playerListItem'

export default function PlayerList({choosenPlayers, players, buy, sell}) {
    console.dir(choosenPlayers);
    return (
        <>
            <div className="card-title-light">
                <p>Mercado</p>

            </div>
            <ul className="player-list">
                {players && players.map(player =>{
                    let isBought = false;
                    choosenPlayers && choosenPlayers.forEach(choosen => {
                        console.log("choosen= "+choosen + "player: "+player);
                        if(choosen._id === player._id){
                            isBought = true;
                            return;
                        }
                    });
                    
                    return <PlayerListItem key={player._id} player={player} buy={buy} sell={sell} isBought={isBought}/>
                })}
            </ul>

        </>
    )
}
