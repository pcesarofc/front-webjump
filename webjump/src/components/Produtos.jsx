import React from "react";
import Produto from "./Produto";
import '../style/Produtos.css'


export default function({produtos}) {
    return <div className="products">
        {produtos.map ((produtos) => (<Produto produtos={produtos}/>)) }
    </div>
}