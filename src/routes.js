import React from "react"
import { Route, IndexRoute } from 'react-router';

/** Page components */
import App from "./App"
import FetchSuccess from "./FetchResponses/FetchSuccess"
import FetchFailure from "./FetchResponses/FetchFailure"


export default (
    <Route path = "/" component = {App} >
    <Route path = "/failedFetch" component = {FetchFailure} />
    <Route path = "/successFetch" component = {FetchSuccess} />
    </Route>

)