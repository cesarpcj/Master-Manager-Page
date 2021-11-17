import React from 'react'
import { BLUEBACK, DARKBLUEBACK } from '../../../constants/color'

export default function Header({currentPage}) {
    
    return (
        <>
        <header>
            <div className="currentView">
                <p>{currentPage.toUpperCase()}</p>
            </div>
            <div className="teamInfo">
                <div className="line-1">
                    <p>Nome do Time FC</p>
                </div>
                <div className="line-2">
                    <p>R$1.000.000</p>
                    <p>*10</p>
                </div>
            </div>
        </header>
        <style>
            {`
                header{
                    display:flex;
                    height: 60px;
                    background-color: ${DARKBLUEBACK};
                    color: white;
                    width: 100%;
                    position: fixed;
                }

                p{
                    text-align:initial;
                    margin:0px
                }

                .currentView{
                    background-color: ${BLUEBACK};
                    color: white;
                    font-size: 20px;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    width: 200px;
                    padding: 0px 10px

                }

                
                .teamInfo{
                    display:flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 150px;
                    padding: 7px 20px;

                }

                .line-1{
                    
                }

                .line-2{
                    display:flex;
                    justify-content: space-between;
                }

                
            `}
        </style>
            
        </>
    )
}
