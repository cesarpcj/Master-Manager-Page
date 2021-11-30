import React from 'react'

export default function Finance({teamPrice}) {
    return (
        <div className="flex">
            <div className="market-money-box">
                <p>Team Price</p>
                <p className="market-money-unit">${ teamPrice}</p>
            </div>
            <div className="market-money-box">
                <p>Available Funds</p>
                <p className="market-money-unit">${ 100 - teamPrice}</p>
            </div>
        </div>
    )
}
