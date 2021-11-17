import React from 'react'
import getTeamInstructionItems from '../../../libs/GetTeamInstructionItem';

export default function TeamSingleInstruction({instruction, updateTeamInstruction}) {
    console.log(instruction.name);
    const items = getTeamInstructionItems(instruction.name);

    const getStyle = (value) =>{

        if(typeof instruction.value === 'object' ){
           
            return  Array.from(instruction.value).some(val => val === value) ? "instruction-value-active":"instruction-value"
        }else{
            return value === instruction.value ? "instruction-value-active":"instruction-value"
        }
    }
    return (
        <div className="instruction-container">
            <div className="instruction-name">{instruction.name}</div>
            <div className="instruction-values">
                {items && items.map(value => {
                    return  <div onClick={()=>updateTeamInstruction(instruction.name, value)} className={getStyle(value)}>{value}</div>;
                }      
                )}
            </div>
        </div>
    )
}
