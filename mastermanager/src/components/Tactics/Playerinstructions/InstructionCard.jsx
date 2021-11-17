import React from 'react'
import SingleInstruction from './singleInstruction';
export default function PlayerInstruction({formation, iconName, title, updatePlayerInstruction}) {

    const data = formation.positions.find(position => position.name === iconName).instructions;
    const dataFiltered = data.filter(instruction => {
        if(title === "Defence"){
            if(instruction.name === "Pressing" || instruction.name === "Defence Width"|| instruction.name === "Flank") return true;
            return false; 
        }
        if(title === "Attack"){
            if(instruction.name === "Pressing" || instruction.name === "Defence Width"|| instruction.name === "Flank") return false;
            return true; 
        }
        return false;
    });
    
 
    return (
        <div>
            <div className="card-title-light"><p>{title}</p></div>
            
                {data && dataFiltered.map(instruction => <SingleInstruction instruction={instruction} updatePlayerInstruction={updatePlayerInstruction}/>)}
            
            
        </div>
    )
}
