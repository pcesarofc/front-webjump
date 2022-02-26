import React from "react";
import '../style/Produto.css'

export default function ({produtos}) {

    const uri = 'http://localhost:8888/' + produtos.image
    return <div className="Produto">
        <div className="Foto">
            <img className='Imagem-produto' src={uri} alt="" /></div>
        <h2 className="Descricao-produto">{produtos.name}</h2>
        <div className="Precos">
            <h3 className="Preco-especial">{produtos.specialPrice}</h3>
            <h3 className="Preco-item">{produtos.price}</h3>
        </div>
        <input className="Botao-comprar" type="button" value="COMPRAR" />
    </div>
}