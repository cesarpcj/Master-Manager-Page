import React from 'react'
import Card from '../../Core/Container/card'
import TeamInstructionCard from './teamInstructionCard'

export default function SetTeamInstructionsView({formation, updateTeamInstruction}) {
    const general = Array.from(formation.teamInstructions[0]);
    const defence = Array.from(formation.teamInstructions[1]);
    const attack = Array.from(formation.teamInstructions[2]);
    return (
        <div className="flex">
            <Card><TeamInstructionCard title={"General"} data={general} updateTeamInstruction={updateTeamInstruction}></TeamInstructionCard></Card>
            <Card><TeamInstructionCard title={"Defence"} data={defence} updateTeamInstruction={updateTeamInstruction}></TeamInstructionCard></Card>
            <Card><TeamInstructionCard title={"Attack"} data={attack} updateTeamInstruction={updateTeamInstruction}></TeamInstructionCard></Card>
            
        </div>
    )
}
