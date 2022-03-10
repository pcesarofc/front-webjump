import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/app.scss'

export default () => (
    <>
        <nav className="navigator">
            <ul className="nav-container">
                <li className="product-nav" id="home-nav">
                    <Link className="redirect" to="/" >
                        PÁGINA INICIAL
                    </Link>
                </li>
                <li className="product-nav" id="shirts-nav">
                    <Link className="redirect" to="/camisetas">
                        CAMISETAS
                    </Link>
                </li>
                <li className="product-nav" id="pants-nav">
                    <Link className="redirect" to="/calcas">
                        CALÇAS
                    </Link>
                </li>
                <li className="product-nav" id="shoes-nav">
                    <Link className="redirect" to="/sapatos">
                        SAPATOS
                    </Link>
                </li>
                <li className="product-nav" id="contact-nav">CONTATO</li>
            </ul>
        </nav>
    </>
)