import React from "react"
import { Link } from "react-router-dom"
import '../style/Indice.css'


export default ({indice}) => (
    <div className="index-indicator">
        <Link className="index-home" to="/" >
            Página Inicial
        </Link>
        <a className="bigger"> &gt;</a>
        <a href="" className="index-second"> {indice}</a>
    </div>
)