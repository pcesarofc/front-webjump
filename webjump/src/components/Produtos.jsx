import React from "react";
import Produto from "./Produto";
import '../style/Produtos.css'


export default ({produtos}) => (
    <div className="products">
        {produtos.map ((produtos) => (<Produto produtos={produtos}/>)) }
    </div>
)