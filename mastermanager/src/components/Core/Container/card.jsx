import React from 'react'

export default function Card({children, maxH, border}) {
    const style = border ? "card-with-border": "card";
    return (<>
        <div className={style} style={{height:maxH}}>
            {children}
        </div>
        <style>
            {`
                .card{
                    padding:0px;
                    border-radius:15px;
                    background-color:white;
                    margin: 20px 0px 20px 20px;
                    

                }

                .card-with-border{
                    padding:0px;
                    border-radius:15px;
                    background-color:white;
                    margin: 20px 0px 20px 20px;
                    border: 1px solid rgb(0,50,75);

                }
            `}
        </style>
        </>
    )
}
