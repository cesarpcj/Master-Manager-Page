import PositionIcon from "../components/Tactics/positionIcon";

export default function GetPositionIcon(position, select, selected){
    switch(position.name){
        case "GK":
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="45%" y="85%" selecionar={select} selected={selected}/>;
        case "LB":
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="13%" y="71%" selecionar={select} selected={selected}/>;
        case "DCL": 
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="31%" y="71%" selecionar={select} selected={selected}/>;
        case "DC":
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="45%" y="71%" selecionar={select} selected={selected}/>;
        case "DCR": 
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="59%" y="71%" selecionar={select} selected={selected}/>;
        case "RB":
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="76%" y="71%" selecionar={select} selected={selected}/>;
        case "MDL": 
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="31%" y="57%" selecionar={select} selected={selected}/>;
        case "MD":
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="45%" y="57%" selecionar={select} selected={selected}/>;
        case "MDR": 
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="59%" y="57%" selecionar={select} selected={selected}/>;
        case "LM":
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="13%" y="46%" selecionar={select} selected={selected}/>;
        case "MCL": 
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="31%" y="46%" selecionar={select} selected={selected}/>;
        case "MC":
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="45%" y="46%" selecionar={select} selected={selected}/>;
        case "MCR": 
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="59%" y="46%" selecionar={select} selected={selected}/>;
        case "RM":
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="76%" y="46%" selecionar={select} selected={selected}/>;
        case "AML": 
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="31%" y="33%" selecionar={select} selected={selected}/>;
        case "AM":
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="45%" y="33%" selecionar={select} selected={selected}/>;
        case "AMR": 
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="59%" y="33%" selecionar={select} selected={selected}/>;
        case "CFL": 
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="31%" y="20%" selecionar={select} selected={selected}/>;
        case "CF":
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="45%" y="20%" selecionar={select} selected={selected}/>;
        case "CFR": 
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="59%" y="20%" selecionar={select} selected={selected}/>;
        case "LW":
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="13%" y="20%" selecionar={select} selected={selected}/>;
        case "RW":
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="76%" y="20%" selecionar={select} selected={selected}/>;
        default:
            return <PositionIcon key={position.name} positionName={position.name} name={position.player || position.name} x="76%" y="20%" selecionar={select} selected={selected}/>;
    }

    
}