import React from 'react'

export default function ButtonB({children, active}) {
    const style = active ? "button-b-active" : "button-b";
    return (
        <>
           <button className={style}>{children}</button> 

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
