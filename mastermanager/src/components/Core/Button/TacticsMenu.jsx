import React from 'react'
import Button from "./buttonA";
import {Link } from "react-router-dom";

export default function TacticsMenu({activedMenu, setActivedMenu}) {
    return (
        <>
        <div className="btn">
           
                <Link to="/tactics">
                    <Button active={activedMenu === "Formation"} setActivedMenu={setActivedMenu}>Formation</Button>
                </Link>  

                <Link to="/tactics/set-team-instructions">
                    <Button active={activedMenu === "Team Instructions"} setActivedMenu={setActivedMenu}>Team Instructions</Button>
                </Link>  

                <Link to="/tactics/set-player-instructions">
                    
                    <Button active={activedMenu === "Player Instructions"} setActivedMenu={setActivedMenu}>Player Instructions</Button>
                </Link>  

                
            
        
        </div>
        <style>
            {`
            .btn{
                padding:0px 30px;
            }
            `}
        </style>
    </>
    )
}
