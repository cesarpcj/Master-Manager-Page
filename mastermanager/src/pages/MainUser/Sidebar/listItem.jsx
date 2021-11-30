import React from 'react';
import {Icon} from "semantic-ui-react";
import { DARKBLUEBACK } from '../../../constants/color';
import {Link} from "react-router-dom" 

export default function ListItem({item, setCurrentPage}){
    
    return(<>
        <Link to={"/"+item.name}>
        <li className="nav-li" onClick={()=>setCurrentPage(item.name)}>
            <Icon name={item.icon}/> 
            <span>{item.name}</span>
        </li>
        </Link>
        <style>{`
            .nav-li{
                display: flex;
                color: #ccc;
                height: 35px;
                padding: 5px 15px;
                align-items: bottom;
                background-color:${DARKBLUEBACK};
                font-weight: 300;
                
            }
            
            .nav-li:hover{
                color: white;
                font-weight: 500;
                font-size:16px
                
            }
            span{
                padding-left:5px
            }
        `}
        </style>
        </>
    )
}