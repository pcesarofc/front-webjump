import React from "react";
import '../style/FiltroPreco.css'

export default function () {
    return <div className="filtro-preco">
        <p className="ordenar">ORDENE POR</p>
        <select className="dropbox">
            <option>Maior Preço</option>
            <option>Menor Preço</option>
        </select>
    </div>
}