import React from "react"
import { Link } from "react-router-dom"
import '../style/Navigator.css'


export default function () {

    return <>
        <nav className="navigator">
            <ul className="nav-container">
                <li className="home-nav">
                    <Link className="redirect" to="/" >
                        PÁGINA INICIAL
                    </Link>
                </li>
                <li className="shirts-nav">
                    <Link className="redirect" to="/camisetas">
                        CAMISETAS
                    </Link>
                </li>
                <li className="pants-nav">
                    <Link className="redirect" to="/calcas">
                        CALÇAS
                    </Link>
                </li>
                <li className="shoes-nav">
                    <Link className="redirect" to="/sapatos">
                        SAPATOS
                    </Link>
                </li>
                <li className="contact-nav">CONTATO</li>
            </ul>
        </nav>
    </>
}