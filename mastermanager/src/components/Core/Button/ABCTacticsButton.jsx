import React from 'react'
import Button from './buttonB';

export default function ABCTacticsButton({activedABC, setTacticName}) {
    return (
        <>
            <div className="btn-abc">
           
                <Button active={activedABC === "a"} setTacticName={setTacticName}>A</Button>
                <Button active={activedABC === "b"} setTacticName={setTacticName}>B</Button>
                <Button active={activedABC === "c"} setTacticName={setTacticName}>C</Button>
            
            </div>
            <style>
                {`
                .btn-abc{
                    display: flex;
                    flex-direction: row;
                    
                    margin: 30px 5px 30px 20px
                }
                `}
            </style>
        </>
    )
}
