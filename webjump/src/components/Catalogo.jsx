import React from "react"
import '../style/Catalogo.css'
import Produtos from './Produtos'
import axios from 'axios'
import { useEffect } from "react"
import FiltroPreco from "./FiltroPreco"
import { useLocation } from "react-router-dom"
import { FaList } from "react-icons/fa"
import { BsFillGrid3X3GapFill } from 'react-icons/bs'


export default function () {

    const location = useLocation()
    const url = 'http://localhost:8888/api/V1/categories/'
    const [produtos, setprodutos] = React.useState([])
    let pather = 0
    const [descricao, setDescricao] = React.useState('')
    
    useEffect( function Carregar () {
        if(location.pathname == '/camisetas'){
            pather = 1
            setDescricao('Camisetas')
        }else if(location.pathname == '/calcas') {
            pather = 2
            setDescricao('Calças')
        }else {
            pather = 3
            setDescricao('Sapatos')
        }
        const finalurl = url + pather
        let novosProdutos = []
        let i
        axios.get(finalurl).then(response => {
            
            for (i in response.data.items) {
                let price = response.data.items[i].price
                let name = response.data.items[i].name.toUpperCase()
                let preconovo = response.data.items[i].specialPrice
                let specialPrice
                if(typeof(preconovo) == 'number'){
                    specialPrice = 'R$' + preconovo.toFixed(2).replace(".", ',')
                    price = specialPrice
                    specialPrice = 'R$' + response.data.items[i].price.toFixed(2).replace(".", ",")
                }else{ 
                    price = 'R$' + price.toFixed(2).replace(".", ',')
                }
                
                novosProdutos = [...novosProdutos, {
                    name: name,
                    image: response.data.items[i].image,
                    price: price,
                    specialPrice: specialPrice
                }]
            }
            setprodutos(novosProdutos)
        })
    }, [])

    return <section  className="products-catalog">
        <h1 className="title-product" >{descricao}</h1>
        <div className="border"/>
        <div className="filters">
            <BsFillGrid3X3GapFill className="grid"/>
            <FaList className="list"/>
            <FiltroPreco />
        </div>
        <div className="container-catalog">
            <Produtos produtos={produtos}/>
        </div>
    </section>
}