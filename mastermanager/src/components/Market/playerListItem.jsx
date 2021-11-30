import React from 'react'

export default function PlayerListItem({player, buy, isBought, sell}) {
    return (
        <li className="item">
            <div className="wrap1">
                <div className="name">{player.nome}</div>
                <div className="position">{player.knownPositions}</div>
            </div>
            <div className="value">$ {player.valor}</div>
            {
                isBought ? <button className="btn-remove" onClick={()=>sell(player)}>Sell</button> :<button className="btn-add" onClick={()=>buy(player)}>Buy</button>
            }
            
           
        </li>
    )
}
