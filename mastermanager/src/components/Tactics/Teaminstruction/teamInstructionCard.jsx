import React from 'react'
import TeamSingleInstruction from "./teamSingleInstruction"

export default function TeamInstructionCard({title,data, updateTeamInstruction}) {

    
    
    return (
        <>
        <div className="card-title-light"><p>{title}</p></div>
        {
            data && data.map(instruction => <TeamSingleInstruction instruction={instruction} updateTeamInstruction={updateTeamInstruction}></TeamSingleInstruction>)
        }
        </>
       
    )
}
