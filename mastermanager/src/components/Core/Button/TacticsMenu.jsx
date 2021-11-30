import React from 'react'
import Button from "./buttonA";
import {Link } from "react-router-dom";

export default function TacticsMenu() {
    const arr = window.location.pathname.split("/");
    return (
        <>
        <div className="btn">
           
                <Link to="/tactics">
                    <Button active={arr[arr.length - 1] === "tactics"} >Formation</Button>
                </Link>  

                <Link to="/tactics/set-team-instructions">
                    <Button active={arr[arr.length - 1] === "set-team-instructions"} >Team Instructions</Button>
                </Link>  

                <Link to="/tactics/set-player-instructions">
                    
                    <Button active={arr[arr.length - 1] === "set-player-instructions"} >Player Instructions</Button>
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
