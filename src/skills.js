import React from 'react';
import FullDetails from './FullDetails';
function Skills(props) {
    return (
        <div>
            <h1 style={{color:"red"}}>My Skill: {props.empskill}</h1>
            <FullDetails location="Mumbai"></FullDetails>
        </div>
    )
}export default Skills