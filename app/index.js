import "./index.scss"

import * as React from "react"
import ReactDOM from "react-dom"

import HomeScene from "./scenes/home"

function App() {
    return (
        <HomeScene />
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
