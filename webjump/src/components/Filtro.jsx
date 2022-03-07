import React from "react";
import '../style/Filtro.css';

export default function () {
    return <aside className="filtros">
        <p className="filter-title">FILTRE POR</p>
        <p className="categorias">CATEGORIAS</p>
        <ul className="categorias-filter">
            <li className="filter-list">Roupas</li>
            <li className="filter-list">Sapatos</li>
            <li className="filter-list">Acessórios</li> 
        </ul>
        <p className="cores-text">CORES</p>
        <div className="cores">
            <div className="red"/>
            <div className="orange"/>
            <div className="aqua"/>
        </div>
        <p className="tipo-text">TIPO</p>
        <ul className="tipo">
            <li className="filter-list">Corrida</li>
            <li className="filter-list">Caminhada</li>
            <li className="filter-list">Casual</li>
            <li className="filter-list">Social</li>
        </ul>
</aside>
}