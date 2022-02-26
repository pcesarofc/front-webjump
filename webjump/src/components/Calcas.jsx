import React from "react";
import '../style/Sapatos.css'
import Catalogo from "./Catalogo";
import Filtro from "./Filtro";
import Indice from "./Indice";
import Footer from './Footer'
import NumeroPagina from "./NumeroPagina";

export default function () {
    return <div className="Sapatos">
        <Indice indice={'Calças'}/>
        <div className="Corpo">
            <Filtro/>
            <Catalogo/>
        </div>
        <NumeroPagina/>
        <Footer/>
    </div>
}