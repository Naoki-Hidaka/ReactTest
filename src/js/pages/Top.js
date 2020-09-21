import React from "react"
import Header from "../component/Header"
import { Link } from "react-router-dom"

const Top = () => {
    return(
        <div>
            <p><Link to="/">Top</Link></p>
            <p><Link to="/add">Add</Link></p>
        </div>
    )
}

export default Top