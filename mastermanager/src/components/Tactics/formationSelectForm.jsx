import React from 'react'

export default function FormationSelectForm({value, setValue}) {
    const formationNameList = ["442", "442 Diamond"];

    return (
        <form className="formation-form">
            
            <div className="formation-select-container">
            <select className="formation-select" value={value} onChange={(e)=> setValue(e.target.value)}>
            {
                formationNameList.map(formationName => {
                    return <option>{formationName}</option>
                })
            }
            </select>
            </div>
            
        </form>
    )
}
