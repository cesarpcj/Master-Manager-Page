import React from 'react'
import AttributesItem from './attributesItem'

export default function Attributes({player}) {

    

    return (
        <>
            <div >
                <div className="card-title-light">
                    <p>Attributes</p>

                </div>
            
                <ul className="formation-attributes-list">
                
                {player && Object.keys(player.attributes).map(key=>{
                    
                    return <AttributesItem key={key} name={key} value={player.attributes[key]}/>
                })}
                
                </ul>
            </div>
            
        </>
    )
}
