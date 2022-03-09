import React from "react"
import Indice from "./Indice"
import Filtro from "./Filtro"
import Catalogo from "./Catalogo"
import NumeroPagina from "./NumeroPagina"
import Footer from './Footer'
import '../style/Sapatos.scss'

export default () => (
    <div className="body-products">
        <Indice indice={'Sapatos'}/>
        <div className="container-products">
            <Filtro />
            <Catalogo/>
        </div>
        <NumeroPagina/>
        <Footer/>
    </div>
)