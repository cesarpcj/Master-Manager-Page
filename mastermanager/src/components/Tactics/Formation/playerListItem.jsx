import React from 'react'


export default function playerListItem({player, selectPlayer}) {
    return (
        <>
        <li  className="formationPlayerListItem" onClick={()=>selectPlayer(player.number)}>
            <div className="formation-player-position">{player.knownPositions}</div>
            <div className="formation-player-number">{player.number}</div>
            <div className="formation-player-name">{player.nome}</div>
        </li>
       
        </>
    )
}
