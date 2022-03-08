import React from "react"
import '../style/FiltroPreco.css'

export default function () {

    return <div className="price-filter">
        <p className="order">ORDENE POR</p>
        <select className="dropbox" id="language">
            <option>Maior Preço</option>
            <option>Menor Preço</option>
        </select>
    </div>
}