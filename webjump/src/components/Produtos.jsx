import React from 'react'
import Produto from './Produto'
import '../sass/app.scss'

export default ({produtos}) => (
    <div className="products">
        {produtos.map ((produtos) => (<Produto produtos={produtos}/>)) }
    </div>
)