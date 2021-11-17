import React from 'react'
import Button from './buttonB';

export default function ABCTacticsButton({activedABC}) {
    return (
        <>
            <div className="btn-abc">
           
                <Button active={activedABC === "A"}>A</Button>
                <Button active={activedABC === "B"}>B</Button>
                <Button active={activedABC === "C"}>C</Button>
            
            </div>
            <style>
                {`
                .btn-abc{
                    padding:20px 30px;
                }
                `}
            </style>
        </>
    )
}
