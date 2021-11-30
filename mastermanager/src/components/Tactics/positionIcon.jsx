import React from 'react';

export default function PositionIcon({positionName,name, x, y, selecionar, selected}){

    const style =  positionName === selected ? "icon-container selected" : "icon-container";

    return (
        <div onClick={()=>selecionar(positionName)}>
            <div className={style} style={{left:x, top:y }} >
                <div className="icon-name">{name}</div>
            </div>
            <style>{`
                
                .icon-container{
                    position: absolute;
                    background-color: aqua;
                    height: 35px;
                    width:35px;
                    border-radius: 50%;
                    box-shadow: 2px 2px ;  
                    cursor: pointer;  
                }
                .icon-name{   
                    width:30px;
                    color: black;
                    margin: 8px auto;
                    font-size: 12px;
                    text-align: center;
                    font-weight: bold;
                }

                .icon-container:hover{
                    margin-top:-3px;
                    margin-left:-3px;
                    opacity:0.8;
                    box-sizing: content-box;
                    color:white;
                    border: 3px solid white; 
                    box-shadow: 0px 0px;
                    cursor:poiter;
                }

                .selected{
                    margin-top:-3px;
                    margin-left:-3px;
                    opacity:0.8;
                    box-sizing: content-box;
                    color:white;
                    border: 3px solid white; 
                    box-shadow: 0px 0px;
                }
            `}</style>
    </div>
    )
}