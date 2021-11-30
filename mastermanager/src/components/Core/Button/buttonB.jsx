import React from 'react'

export default function ButtonB({children, active, setTacticName}) {
    
    return (
        <>
           {
               active ? <button className="button-b-active">{children}</button> :
                        <button className="button-b" onClick={()=>setTacticName(children.toLowerCase())}>{children}</button>
           }

           <style>
               {`
                .button-b{
                    background-color:white;
                    padding:10px 15px;
                    margin-right:3px;
                    border:1px solid black;
                    border-radius: 3px;
                }

                .button-b-active{
                    background-color:#333;
                    color: white;
                    padding:10px 15px;
                    margin-right:3px;
                    border:1px solid black;
                    border-radius: 3px;
                }

                .button-b:hover{
                    border:1px solid #777;
                    color:#777;
                    
                }
                `}
           </style>
        </>
    )
}
