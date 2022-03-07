import React from "react";
import '../style/Sapatos.css'
import Catalogo from "./Catalogo";
import Filtro from "./Filtro";
import Indice from "./Indice";
import Footer from './Footer'
import NumeroPagina from "./NumeroPagina";

export default function () {
    return <div className="sapatos">
        <Indice indice={'Calças'}/>
        <div className="corpo">
            <Filtro/>
            <Catalogo/>
        </div>
        <NumeroPagina/>
        <Footer/>
    </div>
}