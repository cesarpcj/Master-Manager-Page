import React from 'react';

export default function ButtonA({children, active, setActivedMenu}){
    //const [actived,setActived] = useState(active || false);
    const style =  active ? "button-a-active" : "button-a" ;
    return(<>
        <button className={style} onClick={()=>setActivedMenu(children)}>{children}</button>
        <style>
            {`
                .button-a{
                    background-color:white;
                    padding:5px;
                    margin-right:15px;
                    border: 0px;
                    

                }

               

                .button-a-active{
                    background-color:white;
                    padding:5px;
                    margin-right:15px;
                    border-top: 0px;
                    border-left: 0px;
                    border-right: 0px;
                    border-bottom: 3px solid green;
                }

                .button-a:hover{
                    border-bottom: 3px solid green;
                    cursor:pointer;
                    
                }
            `}
        </style>
    
    </>)
}