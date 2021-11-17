import React, {useState} from 'react'
import ABCButtons from "../../Core/Button/ABCTacticsButton"
import TacticsMenu from '../../Core/Button/TacticsMenu'
import {Route, Switch} from "react-router-dom"
import SetFormationView from '../../Tactics/Formation/setFormationView'
import data from "../../../utils/formations-A-data.json"
import SetPlayerInstructionsView from '../../Tactics/Playerinstructions/setPlayerInstructionsView'
import SetTeamInstructionsView from "../../Tactics/Teaminstruction/SetTeamInstructionsView"
import FormationSelectForm from '../../Tactics/formationSelectForm'


export default function Index() {
    const [selectedIcon, setSelectedIcon] = useState("GK");
    const players = require("../../../utils/players-data.json");
    const [selectedPlayer, setSelectedPlayer] = useState(players[0]);
    const [formation, setFormation]= useState(data.formation);
    const [activedMenu, setActivedMenu] = useState("Formation");

    const selectPlayer = (number) =>{
        
        const p = players.find(player => player.number === number);
        setSelectedPlayer(p);

        const newPositions = formation.positions.map(position =>{
            if(position.name === selectedIcon){
                let newPos = {...position, player : number};
                return  newPos;
            }else{
                return position.player === number ? {...position, player : null} : position;
            }
        })
        

        setFormation({...formation, positions : newPositions})
    }

    const updatePlayerInstruction =(key,value) =>{
        
        const positions = formation.positions.map(position => {
            
            if(position.name === selectedIcon){
                const newInstructions = position.instructions.map(instruction => {
                    if(instruction.name === key){
                        console.log("key"+key+" value: "+value);
                        return {name : key, value}
                    }else{
                        return instruction
                    }
                    });
                console.dir(newInstructions[0]);
                return {...position, instructions : newInstructions};


            }else{
                return position;
            }
        
        });
        
        setFormation({...formation, positions});
        
    }

    const updateTeamInstruction =(key, value)=>{
        const newInstructions = formation.teamInstructions.map(instructionGroup => {
            const newInstructionGroup = instructionGroup.map(instruction =>{
                if(instruction.name === key){
                    if(typeof instruction.value === 'object'){
                        const newArrValue = instruction.value.includes(value) ? instruction.value.filter(val => val !== value) : [...instruction.value, value];
                        return {name: key, value : newArrValue};
                    }
                    return {name: key, value}
                }else{
                    return instruction;
                }
            })

            return newInstructionGroup;
        })

        setFormation({...formation, teamInstructions: newInstructions});
        console.log("updateTeamInstruction worked")
        
    }

   

    return (<>
            <div className="header">
                <div className="flex">
                    <ABCButtons activedABC="A"/>
                    <FormationSelectForm/>
                </div>
                <TacticsMenu activedMenu={activedMenu} setActivedMenu={setActivedMenu}/>
                
            </div>
                <div className="tactics-content">
                    <Switch>
                        <Route exact path="/tactics">
                            <SetFormationView selectedPlayer={selectedPlayer} selectPlayer={selectPlayer} players={players} formation={formation} selecionar={setSelectedIcon} selectedIcon={selectedIcon}/>
                        </Route>
                        <Route path="/tactics/set-player-instructions">
                            <SetPlayerInstructionsView selectedPlayer={selectedPlayer} selectPlayer={selectPlayer} updatePlayerInstruction={updatePlayerInstruction} formation={formation} selecionar={setSelectedIcon} selectedIcon={selectedIcon}/>
                        </Route>
                        <Route path="/tactics/set-team-instructions">
                            <SetTeamInstructionsView  updateTeamInstruction={updateTeamInstruction} formation={formation}/>
                        </Route>
                      

                    </Switch>
                </div>
            <style jsx>{`
                .header{
                    
                    display:flex;
                    flex-direction:column;
                    align-items:start;

                }

                .tactics-content{
                    background-color: #ddd;
                    min-height: 100vh;
                    min-width: 100vw
                }
            `}</style>
        </>
    )
}
