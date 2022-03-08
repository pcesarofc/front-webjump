import React from "react"
import '../style/Filtro.css'

export default () => ( 
    <aside className="aside-filter">
        <p className="filter-title">FILTRE POR</p>
        <p className="categories">CATEGORIAS</p>
        <ul className="categories-filter">
            <li className="filter-list">Roupas</li>
            <li className="filter-list">Sapatos</li>
            <li className="filter-list">Acessórios</li> 
        </ul>
        <p className="colors-text">CORES</p>
        <div className="colors">
            <div className="red"/>
            <div className="orange"/>
            <div className="aqua"/>
        </div>
        <p className="type-text">TIPO</p>
        <ul className="type">
            <li className="filter-list">Corrida</li>
            <li className="filter-list">Caminhada</li>
            <li className="filter-list">Casual</li>
            <li className="filter-list">Social</li>
        </ul>
    </aside>
)