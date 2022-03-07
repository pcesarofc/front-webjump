import React from "react";
import '../style/Indice.css';
import { Link } from "react-router-dom";


export default function ({indice}) {
    return <div className="indice">
        <Link className="indice-home" to="/" >
            Página Inicial
        </Link>
        <a className="maior"> &gt;</a>
        <a href="" className="indice-second"> {indice}</a>
    </div>
}