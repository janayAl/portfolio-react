import React from 'react'
import DevIcon from "devicon-react-svg";
import { techs } from '../../helpers/techs'

// use cheatsheet from devicon docs
function Technologies() {
    return (
        <div class="tech_icons">
            <DevIcon icon='react' />
            <DevIcon icon='javascript' />
            <DevIcon icon='css3' />
            <DevIcon icon='html5' />
            <DevIcon icon='mysql' />
            <DevIcon icon='mongodb' />
            <DevIcon icon='bootstrap' />
            <DevIcon icon='github' />
            <DevIcon icon='nodejs' />


        </div>
    )
}

export default Technologies
