import React from 'react'
import Card from '../../Core/Container/card'
import TeamInstructionCard from './teamInstructionCard'

export default function SetTeamInstructionsView({formation, updateTeamInstruction}) {
    const general = Array.from(formation.teamInstruction).slice(0,2);
    const defence = Array.from(formation.teamInstruction).slice(2,4);
    const attack = Array.from(formation.teamInstruction).slice(4,8);
    return (
        <div className="flex">
            <Card><TeamInstructionCard title={"General"} data={general} updateTeamInstruction={updateTeamInstruction}></TeamInstructionCard></Card>
            <Card><TeamInstructionCard title={"Defence"} data={defence} updateTeamInstruction={updateTeamInstruction}></TeamInstructionCard></Card>
            <Card><TeamInstructionCard title={"Attack"} data={attack} updateTeamInstruction={updateTeamInstruction}></TeamInstructionCard></Card>
            
        </div>
    )
}
