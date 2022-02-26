import React from "react";
import '../style/FiltroPreco.css'

export default function () {
    return <div className="Filtro-preco">
        <p className="Ordenar">ORDENE POR</p>
        <select className="Dropbox">
            <option>Maior Preço</option>
            <option>Menor Preço</option>
        </select>
    </div>
}