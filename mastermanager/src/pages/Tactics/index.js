import React, {useState, useEffect} from 'react'
import ABCButtons from "../../components/Core/Button/ABCTacticsButton"
import TacticsMenu from '../../components/Core/Button/TacticsMenu'
import {Route, Switch} from "react-router-dom"
import SetFormationView from '../../components/Tactics/Formation/setFormationView'
import SetPlayerInstructionsView from '../../components/Tactics/Playerinstructions/setPlayerInstructionsView'
import SetTeamInstructionsView from "../../components/Tactics/Teaminstruction/SetTeamInstructionsView"
import FormationSelectForm from '../../components/Tactics/formationSelectForm'
import {getMyTeam, updateTactics} from '../../controller/team-controller'
import { getAllFormation } from '../../controller/formation-controller'


export default function Index() {
    const [selectedIcon, setSelectedIcon] = useState("GK");
    const [players, setPlayers] = useState(null);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [formation, setFormation]= useState(null);
    const [tacticName, setTacticName] = useState("a");
    const [formationList,setFormationList] = useState(null);
    const [loaded,setLoaded] = useState(false);

    useEffect(() => {
        console.log("useEffect");
        if(!loaded){
            getMyTeam()
            .then((result) => {
                setPlayers(result.data.players);
                setSelectedPlayer(result.data.players[0]);
                setFormation(result.data.tactics[tacticName]);
                setLoaded(true);
    
                
            }).catch((err) => {
                console.log("errou");
            });
        }
        

        if(!formationList){
            // const list = require("../../utils/formations-db-list.json");
            // setFormationList(list);
            getAllFormation()
            .then((result) => {
                setFormationList(result.data)
            }).catch((err) => {
                console.log(err);
            });
        }


        
    }, [tacticName, players])

    const setNewTacticName = (name)=>{
        setTacticName(name);
        setLoaded(false);
    }

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
                        return {name : key, value}
                    }else{
                        return instruction
                    }
                    });
                
                return {...position, instructions : newInstructions};


            }else{
                return position;
            }
        
        });
        
        setFormation({...formation, positions});
        
    }

    const updateTeamInstruction =(key, value)=>{
        const newInstructions = formation.teamInstruction.map(instruction=> {
            
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

        setFormation({...formation, teamInstruction: newInstructions}); 
    }

    const updateFormation =(givenName)=>{
        
        const newFormation = formationList.find(val => val.givenName === givenName);
        setFormation(newFormation);
        setLoaded(false);
    }

    const save = () =>{
        updateTactics({tacticName, formation})
        .then(result=>{
            console.log(result.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }

   

    return (<>
            <div className="tactics-header">
                <div className="flex">
                    <ABCButtons activedABC={tacticName} setTacticName={setNewTacticName}/>
                    {formation && <FormationSelectForm value={formation.givenName} setValue={updateFormation}/>}
                   
                    <button className="btn-save-positive" onClick={()=>save()}>Save</button>
                </div>
                <TacticsMenu />
                
            </div>
                <div className="tactics-content">
                    <Switch>
                        {
                            formation && <>

                                <Route exact path="/tactics">
                                    <SetFormationView selectedPlayer={selectedPlayer} selectPlayer={selectPlayer} players={players} formation={formation} selecionar={setSelectedIcon} selectedIcon={selectedIcon}/>
                                </Route>
                                <Route path="/tactics/set-player-instructions">
                                    <SetPlayerInstructionsView selectedPlayer={selectedPlayer} selectPlayer={selectPlayer} updatePlayerInstruction={updatePlayerInstruction} formation={formation} selecionar={setSelectedIcon} selectedIcon={selectedIcon}/>
                                </Route>
                                <Route path="/tactics/set-team-instructions">
                                    <SetTeamInstructionsView  updateTeamInstruction={updateTeamInstruction} formation={formation}/>
                                </Route>

                            </>
                        }
                      

                    </Switch>
                </div>
            <style>{`
                .tactics-header{
                    
                    display:flex;
                    flex-direction:column;
                    align-items:start;

                }
                .tactics-header > flex {
                    
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
