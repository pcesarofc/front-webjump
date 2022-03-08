import React from "react";
import '../style/Indice.css';
import { Link } from "react-router-dom";


export default function ({indice}) {
    return <div className="index-indicator">
        <Link className="index-home" to="/" >
            Página Inicial
        </Link>
        <a className="bigger"> &gt;</a>
        <a href="" className="index-second"> {indice}</a>
    </div>
}