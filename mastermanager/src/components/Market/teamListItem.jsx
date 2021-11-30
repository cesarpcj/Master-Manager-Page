import React from 'react'

export default function TeamListItem({player, index, sell}) {
    return (
        <>
            {
                player ? 
                    <li className="item">
                        <div className="number">{index}</div>
                        <div className="wrap1">
                            <div className="name">{player.nome}</div>
                            <div className="position">{player.knownPositions}</div>
                        </div>
                        <div className="value">$ {player.valor}</div>
                        <button className="btn-remove" onClick={()=>sell(player)}>Sell</button>
           
                    </li>
                 : 

                <>
                    <li className="item">
                        <div className="number-inactive">{index}</div>
                        <div className="wrap1">
                            <div className="name-inactive">Name</div>
                            <div className="position-inactive">Pos</div>
                        </div>
                        <div className="value-inactive">$</div>
                        <button className="btn-remove-inactive">Sell</button>
           
                    </li>
                
                </>
            }
            </>
       
    )
}
