import React,{useEffect, useState} from 'react'
import {getAllPlayers} from '../../controller/player-controller'
import {getMyTeam, updateTeamPlayers} from '../../controller/team-controller'
import PlayerList from '../../components/Market/playerList';
import TeamList from '../../components/Market/teamList';
import Card from '../../components/Core/Container/card'
import Finance from '../../components/Market/finance';
import "../../components/Market/market.css"

export default function Index() {
    const [myTeam, setMyTeam] =useState(null);
    const [players, setPlayers] = useState(null);
    const [teamPrice, setTeamPrice] =useState(null);
    const [choosenPlayers, setChoosenPlayers] = useState([]);
    
    const getTeamPrice = (team)=>{
        const price = team.reduce((acc, player)=>{
            console.log(typeof player.valor);
            return parseInt(acc) + player.valor;
        }, [0]);

        return price;
    }

    useEffect(() => {
        if(!players){
            getAllPlayers()
            .then(result =>{
                setPlayers(result.data);
            })
            .catch(err=>{
                console.log("problem fetching players")
            });
        }

        if(!myTeam){
            getMyTeam()
            .then(result=>{
                console.log(result.data)
                setChoosenPlayers(result.data.players)
                setMyTeam(result.data.players)
                setTeamPrice(getTeamPrice(result.data.players))
                
            })
            .catch(err=>{
                console.log(err)
            }) 
        }else{
            setTeamPrice(getTeamPrice(choosenPlayers));
            const marketHasChanged = () =>{
                if( myTeam.length !== choosenPlayers.length) return true;
    
                for(let i =0 ; i < myTeam.length; i++){
                    
                    if(myTeam[i]._id !== choosenPlayers[i]._id) return true;
                    
                }
    
                return false;
            }
    
            if(marketHasChanged()){
                console.log("ta diferent");
            }else{
                console.log("ta igual");
            }
        }

    }, [choosenPlayers, myTeam, players])

    const sellPlayer = (soldPlayer)=>{
        const newChoosenPlayers = choosenPlayers.filter(player => player._id !== soldPlayer._id);
        
        setChoosenPlayers(newChoosenPlayers) ;
    }
    const buyPlayer = (boughtPlayer)=>{
        const newChoosenPlayers = [...choosenPlayers, boughtPlayer];
        
        setChoosenPlayers(newChoosenPlayers) ;

    }

    const save = () =>{
        const playersIds = choosenPlayers.map(player =>player._id)
        updateTeamPlayers({playersIds})
        .then(result=>{
            console.log("save certo")
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className="market">
            <div className="flex header">

                <Finance teamPrice={teamPrice}/>
                <div>
                    <button  onClick={()=>save()} className="btn-save-positive">SAVE</button>
                </div>
            </div>
            <div className="next">
                {choosenPlayers && <Card><TeamList choosenPlayers={choosenPlayers} sell={sellPlayer}/></Card>}
                {
                    players && <Card><PlayerList players={players} buy={buyPlayer} sell={sellPlayer} choosenPlayers={choosenPlayers}/></Card>
                }
            </div>
        </div>
    )
}
