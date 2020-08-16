import React from "react";
import './Assets/css/layout.css';


function ClubComponent(props) {
    return (

        <div className="vs--cards">
            {props.clubArray}
        </div>
    )
}


export default ClubComponent
