import React from "react"

function FetchSuccess(props) {
    const results = props.searchResponses
    console.log("Success component here")
    return (
        <h1>Success! Was able to fetch data from search backend API.</h1>
    )
}

export default FetchSuccess