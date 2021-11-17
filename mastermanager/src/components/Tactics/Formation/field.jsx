import React from 'react'
import GetPositionIcon from '../../../libs/GetPositionsIcon';


export default function Field({formation, selecionar, selected}) {
    return (
        <>
        <div className="card-title-light"><p>Formation</p></div>
        <div className="field-container">

            <div className="field">
                {formation && (formation.positions.map(position => GetPositionIcon(position, selecionar, selected)))}
            </div>
        </div>
            
        <style>{`

        .field-container{
            margin-top:20px;
            padding: 0px 15px;
        }
        
            .field{
                position:relative;
                
                background-image: url("/images/Soccer_field2.png");
                background-size: cover;
                height: 470px;
                width: 315px;
                border-radius:15px
            }    
            
            
    
            .formation-label{
                padding:10px 0px;
            }

            
            
        `}</style>
        </>
    )
}
