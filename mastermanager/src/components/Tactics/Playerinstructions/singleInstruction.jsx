import React from 'react';
import GetInstructionItem from '../../../libs/GetInstructionItem';

export default function SingleInstruction({instruction, updatePlayerInstruction}) {

    const data = GetInstructionItem(instruction.name);

    return (
       <>
        <div className="instruction-container">
            <div className="instruction-name">{instruction.name}</div>
            <div className="instruction-values">
                {data && data.map(value => {
                    return  <div onClick={()=>updatePlayerInstruction(instruction.name, value)} className={value === instruction.value ? "instruction-value-active":"instruction-value"}>{value}</div>;
                }      
                )}
            </div>
        </div>
        
        </>
    )
}
