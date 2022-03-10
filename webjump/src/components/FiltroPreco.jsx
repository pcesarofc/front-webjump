import React from 'react'
import '../sass/app.scss'

export default function ({orderProducts}) {

    return <div className="price-filter">
        <p className="order">ORDENE POR</p>
        <select className="dropbox" id="dropbox" onChange={orderProducts}>
            <option value="0"></option>
            <option value="1">Maior Preço</option>
            <option value="2">Menor Preço</option>
        </select>
    </div>
}