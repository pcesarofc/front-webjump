import React from 'react'
import '../sass/app.scss'

export default function () {
    return <div className="price-filter">
        <p className="order">ORDENE POR</p>
        <select className="dropbox">
            <option>Maior Preço</option>
            <option>Menor Preço</option>
        </select>
    </div>
}