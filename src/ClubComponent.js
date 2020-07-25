import React from "react"

function ClubComponent(props) {
    return <div>
        <h1> Club name: {props.name} and Club email: {props.clubEmail} and Club
    size: {props.clubSize}</h1>
    <br />
    </div>
}


export default ClubComponent