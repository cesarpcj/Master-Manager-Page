import React from 'react'
import {Icon} from "semantic-ui-react";
import { DARKBLUEBACK } from '../../../constants/color'


export default function Logo() {
    return (
        <>
        <div className="logo">
            <Icon circular inverted size="big" name="bug"/>
        </div>
          <style>
              {`
                    .logo{
                        height: 140px;
                        background-color: ${DARKBLUEBACK};
                        padding: 35px;
                    }
              `}</style>  
        </>
    )
}
