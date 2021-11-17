import React from 'react'

export default function AttributesItem({name, value}) {
    return (
        <li>
            <div className="fommation-attributes-list-item-name">{name}</div>
            <div className="fommation-attributes-list-item-value">
                <div className="fommation-attributes-list-item-value-bar">
                    <div style={{width:value +"%"}}></div>
                </div>
                <div className="fommation-attributes-list-item-value-number">
                    
                    {value}
                </div>
            </div>
        </li>
    )
}
