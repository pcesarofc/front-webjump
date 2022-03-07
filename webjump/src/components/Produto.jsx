import React from "react";
import '../style/Produto.css'

export default function ({produtos}) {

    const uri = 'http://localhost:8888/' + produtos.image
    return <div className="produto">
        <div className="foto">
            <img className='imagem-produto' src={uri} alt="" /></div>
        <h2 className="descricao-produto">{produtos.name}</h2>
        <div className="precos">
            <h3 className="preco-especial">{produtos.specialPrice}</h3>
            <h3 className="preco-item">{produtos.price}</h3>
        </div>
        <input className="botao-comprar" type="button" value="COMPRAR" />
    </div>
}