import React from 'react'
import Indice from './Indice'
import Filtro from './Filtro'
import Catalogo from './Catalogo'
import NumeroPagina from './NumeroPagina'
import Footer from './Footer'
import '../sass/app.scss'

export default () => (
    <div className="body-products">
        <Indice indice={"Camisetas"}/>
        <div className="container-products">
            <Filtro/>
            <Catalogo/>
        </div>
        <NumeroPagina/>
        <Footer/>
    </div>
) 

