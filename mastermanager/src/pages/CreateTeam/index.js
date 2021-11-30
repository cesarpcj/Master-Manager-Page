import React, {useState}from 'react'
import { createTeam } from '../../controller/team-controller'
import "./style.css"

export default function Index() {
    const [name, setName] = useState("");

    const submit =(e)=>{
        e.preventDefault();
        createTeam({name})
        .then(result=>{
            console.dir(result.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <>
        <div className="create-team">
            <form  onSubmit={submit}>
                <div className="x">
                
                    <h1>Please choose the team name</h1>
                    <input value={name} onChange={(e)=>setName(e.target.value)}/>
                    <button type="submit" className="btn-positive">Create</button>
                </div>

            </form>
        </div>
      
        </>
    )
}
