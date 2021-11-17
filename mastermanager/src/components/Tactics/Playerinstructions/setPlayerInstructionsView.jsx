import React from 'react'
import Field from '../Formation/field'
import Card from '../../Core/Container/card'
import InstructionCard from './InstructionCard'

export default function SetPlayerInstructionsView({formation, selecionar,selectedIcon, updatePlayerInstruction}) {
    
    return (
        <>
           
            <div className="flex">
                <Card maxH={"540px"}><Field formation={formation} selecionar={selecionar} selected={selectedIcon}></Field> </Card>
                <Card ><InstructionCard title={"Defence"} formation={formation} iconName={selectedIcon} updatePlayerInstruction={updatePlayerInstruction}/></Card>
                <Card ><InstructionCard title={"Attack"} formation={formation} iconName={selectedIcon} updatePlayerInstruction={updatePlayerInstruction}/></Card>
                

            </div>
            
        </>
    )
}
