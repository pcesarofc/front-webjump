import React from 'react'
import '../sass/app.scss'

export default function ({produtos}) {

    const uri = "http://localhost:8888/" + produtos.image
    return <div className="product">
        <div className="photo">
            <img className="image-product" src={uri} />
        </div>
        <h2 className="description-product">{produtos.name}</h2>
        <div className="prices">
            <h3 className="special-price">{produtos.specialPrice}</h3>
            <h3 className="item-price">{produtos.price}</h3>
        </div>
        <input className="button-buy" type="button" value="COMPRAR" />
    </div>
}