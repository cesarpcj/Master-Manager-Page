export default function GetInstructionItem(name){
    const pressing = ["None", "Tight", "Tighter"];
    const width = ["Stay Wider", "Sit Narrower"];
    const attackWidth = ["Stay Wider", "Sit Narrower"];
    const flank = ["Cover Flank", "Keep Position"];
    const passingDirectness = ["Short", "Balanced", "Long"];
    const movement = ["Stay Back", "Go Forward"];
    const shooting = ["Less", "More"];
    const dribbling = ["Less", "More"];
    const channels = ["Go to", "Keep Position"];
    

    const getData = () =>{
        switch(name){
            case "Pressing":
                return pressing;
            case "Defence Width":
                return width;
            case "Flank":
                return flank;
            case "Passing Directness":
                return passingDirectness;
            case "Movement":
                return movement;
            case "Dribbling":
                return dribbling;
            case "Shooting":
                return shooting;
            case "Attack Width":
                return attackWidth;
            case "Channels":
                return channels;
            default:
                return flank;
            
        }
    }

    return getData();
}