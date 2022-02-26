import React from "react";
import '../style/Indice.css';
import { Link, useLocation } from "react-router-dom";


export default function ({indice}) {
    return <div className="Indice">
        <Link className="Indice-home" to="/" >
            Página Inicial
        </Link>
        <a className="Maior"> &gt;</a>
        <a href="" className="Indice-second"> {indice}</a>
    </div>
}