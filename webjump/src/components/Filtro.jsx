import React from "react";
import '../style/Filtro.css';

export default function () {
    return <aside className="Filtros">
        <p className="Filter-title">FILTRE POR</p>
        <p className="Categorias">CATEGORIAS</p>
        <ul className="Categorias-filter">
            <li className="Filter-list">Roupas</li>
            <li className="Filter-list">Sapatos</li>
            <li className="Filter-list">Acessórios</li> 
        </ul>
        <p className="Cores-text">CORES</p>
        <div className="Cores">
            <div className="Red"/>
            <div className="Orange"/>
            <div className="Aqua"/>
        </div>
        <p className="Tipo-text">TIPO</p>
        <ul className="Tipo">
            <li className="Filter-list">Corrida</li>
            <li className="Filter-list">Caminhada</li>
            <li className="Filter-list">Casual</li>
            <li className="Filter-list">Social</li>
        </ul>
</aside>
}