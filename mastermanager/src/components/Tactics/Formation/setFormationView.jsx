import React from 'react'
import Card from '../../Core/Container/card'
import Field from './field'
import PlayersList from './playersList'
import Attributes from './attributes'

export default function SetFormationView({players,selectPlayer,formation, selecionar, selectedIcon, selectedPlayer}) {
    return (
        <>
            <div className="flex">
                <Card maxH={"540px"} ><Field formation={formation} selecionar={selecionar} selected={selectedIcon}></Field> </Card>
                <Card maxH={"540px"} ><PlayersList players={players} selectPlayer={selectPlayer}/></Card>
                <Card ><Attributes player={selectedPlayer}/></Card>

            </div>
            
        </>
    )
}
