export default function GetTeamInstructionItem(name){
    const mentality = ["Very Defensive", "Very Ofensive", "Defensive", "Ofensive", "Normal"];
    const tempo = ["Lower", "Higher", "Normal"];
    const line = ["Lower", "Higher","Low","High", "Normal"];
    const pressing = ["Half", "full"];
    const distribuition = ["Out of Defense", "Middle", "Left","Right"];
    const finalThirdFocus = ["Left", "Right", "Center"];
    const earlyCrosses = ["Never", "Sometimes", "Often"];
    const longShoot = ["Never", "Sometimes", "Often"];
    

    const getData = () =>{
        switch(name){
            case "Mentality":
                return mentality;
            case "Tempo":
                return tempo;
            case "Line":
                return line;
            case "Pressing":
                return pressing;
            case "Distribuition":
                return distribuition;
            case "Early Crosses":
                return earlyCrosses;
            case "Final Third":
                return finalThirdFocus;
            case "Long Shoot":
                return longShoot;
            default:
                return line;
            
        }
    }

    return getData();
}