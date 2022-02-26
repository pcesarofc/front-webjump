import React from "react";
import '../style/Home.css'
import Footer from "./Footer";
import { Link } from "react-router-dom";


export default function () {
    return <div className="Home-page">
        <div className="Home">
            <aside className="Caminho-aside">
                <ul className="Ul-aside">
                    <li className="Li-aside">
                        <Link className="Li-aside" to="/" >
                            Página Inicial
                        </Link>
                    </li>
                    <li className="Li-aside">
                        <Link className="Li-aside" to="/camisetas" >
                            Camisetas
                        </Link>
                    </li>
                    <li className="Li-aside">
                        <Link className="Li-aside" to="/calcas" >
                            Calças
                        </Link>
                    </li>
                    <li className="Li-aside">
                        <Link className="Li-aside" to="/sapatos" >
                            Sapatos
                        </Link>
                    </li>
                    <li className="Li-aside">Contato</li>
                </ul>
            </aside>
            <section className="Home-section">
                <header className="Rectangle-header"/>
                <article>
                    <h2 className="Title">Seja bem-vindo!</h2>
                    <p className="Text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </article>
            </section>
        </div>
        <Footer/>
    </div>
}