import React from "react";
import { Link } from "react-router-dom";
import '../style/Navigator.css'


export default function () {

    return <>
        <nav className="Navigator">
            <ul className="Nav">
                
                <li className="Home-nav">
                    <Link className="Redirecionador" to="/" >
                        PÁGINA INICIAL
                    </Link>
                </li>
                <li className="Camisetas-nav">
                    <Link className="Redirecionador" to="/camisetas">
                        CAMISETAS
                    </Link>
                </li>
                <li className="Calcas-nav">
                    <Link className="Redirecionador" to="/calcas">
                        CALÇAS
                    </Link>
                </li>
                <li className="Sapatos-nav">
                    <Link className="Redirecionador" to="/sapatos">
                        SAPATOS
                    </Link>
                </li>
                <li className="Contato-nav">CONTATO</li>
            </ul>
        </nav>
    </>
}