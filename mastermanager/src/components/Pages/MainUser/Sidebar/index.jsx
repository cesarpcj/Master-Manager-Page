import React from 'react'
import MenuItem from "./listItem"
import MenuItemInfo from "./menuItemInfo.json"
import { DARKBLUEBACK } from '../../../../constants/color';
import 'semantic-ui-css/semantic.min.css';


export default function SideBar({setCurrentPage}) {
    

    return (<>

        
        <ul className="nav-ul">
            {
                MenuItemInfo.map(item => <MenuItem key={item.name} item={item} setCurrentPage={setCurrentPage}/>)
            }
        </ul>
        <style>
            {`
                .nav-ul{
                    min-height: 100vh;
                    background-color:${DARKBLUEBACK};
                    margin: 0px;
                    padding: 0px;
                    display:flex;
                    flex-direction: column;
                    width: 200px;
                   
                }
            `}
        </style>
        </>
    )
}
