import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/app.scss'

export default ({indice}) => (
    <div className="index-indicator">
        <Link className="index-home" to="/" >
            Página Inicial
        </Link>
        <a className="bigger"> &gt;</a>
        <a className="index-second"> {indice}</a>
    </div>
)