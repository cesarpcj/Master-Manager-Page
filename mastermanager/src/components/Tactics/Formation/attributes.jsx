import React from 'react'
import AttributesItem from './attributesItem'

export default function Attributes({player}) {

    console.dir(Array.from(player.attributes));

    return (
        <>
            <div >
                <div className="card-title-light">
                    <p>Attributes</p>

                </div>
            
                <ul className="formation-attributes-list">
                
                {Object.keys(player.attributes).map(key=>{
                    
                    return <AttributesItem name={key} value={player.attributes[key]}/>
                })}
                
                </ul>
            </div>
            
        </>
    )
}
