import React from "react";
import '../style/Sapatos.css'
import Catalogo from "./Catalogo";
import Filtro from "./Filtro";
import Indice from "./Indice";
import Footer from './Footer'
import NumeroPagina from "./NumeroPagina";

export default function () {
    return <div className="body-products">
        <Indice indice={'Sapatos'}/>
        <div className="container-catalog">
            <Filtro />
            <Catalogo/>
        </div>
        <NumeroPagina/>
        <Footer/>
    </div>
}