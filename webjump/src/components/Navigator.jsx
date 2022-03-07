import React from "react";
import { Link } from "react-router-dom";
import '../style/Navigator.css'


export default function () {

    return <>
        <nav className="navigator">
            <ul className="nav">
                
                <li className="home-nav">
                    <Link className="redirecionador" to="/" >
                        PÁGINA INICIAL
                    </Link>
                </li>
                <li className="camisetas-nav">
                    <Link className="redirecionador" to="/camisetas">
                        CAMISETAS
                    </Link>
                </li>
                <li className="calcas-nav">
                    <Link className="redirecionador" to="/calcas">
                        CALÇAS
                    </Link>
                </li>
                <li className="sapatos-nav">
                    <Link className="redirecionador" to="/sapatos">
                        SAPATOS
                    </Link>
                </li>
                <li className="contato-nav">CONTATO</li>
            </ul>
        </nav>
    </>
}