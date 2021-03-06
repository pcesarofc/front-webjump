import React from 'react'
import FiltroPreco from './FiltroPreco'
import Produtos from './Produtos'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FaList } from 'react-icons/fa'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import axios from 'axios'
import $ from 'jquery'
import '../sass/app.scss'


export default function () {

    const location = useLocation()
    const url = "http://localhost:8888/api/V1/categories/"
    const [produtos, setprodutos] = React.useState([])
    let pather = 0
    const [descricao, setDescricao] = React.useState("")
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
//------------------------------------------------------------------------//
    
//-------------------CARREGAMENTO INICIAL DOS PRODUTOS--------------------//
    useEffect( function Carregar () {
        if(location.pathname == "/camisetas"){
            pather = 1
            setDescricao("Camisetas")
        }else if(location.pathname == "/calcas") {
            pather = 2
            setDescricao("Calças")
        }else {
            pather = 3
            setDescricao("Sapatos")
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
                if(typeof(preconovo) == "number"){
                    specialPrice = "R$" + preconovo.toFixed(2).replace(".", ",")
                    price = specialPrice
                    specialPrice = "R$" + response.data.items[i].price.toFixed(2).replace(".", ",")
                }else{ 
                    price = "R$" + price.toFixed(2).replace(".", ",")
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
//------------------------------------------------------------------------//

//---------FUNÇÃO PARA ORDENAÇÃO DOS PRODUTOS DE ACORDO COM TEXTO---------//
    function orderProducts(){

        var select = document.querySelector('select');
        let newProducts = produtos
        let i
        let newprice
        let newprice2

        for (i in newProducts){
            newprice = newProducts[i].price.replace(",", ".").replace("R$", "")
            newprice = parseFloat(newprice)
            newProducts[i].price = newprice
        }
        if(select.value == 2){
            newProducts.sort(function(a, b) {
                if(a.price < b.price) {
                    return -1;
                } else {
                    return true;
                }
              });
        }else if(select.value ==1) {
            newProducts.sort(function(a, b) {
                if(a.price > b.price) {
                    return -1;
                } else {
                    return true;
                }
              });
        }
        for (i in newProducts){
            newprice2 = "R$" + newProducts[i].price.toFixed(2).replace(".", ",")
            newProducts[i].price = newprice2
        }
        
        setprodutos(newProducts)
        forceUpdate()
    }
//------------------------------------------------------------------------//

//-------------------COLORAÇÃO DOS ICONES GRID E LIST---------------------//
    function viewGrid(){
        $(".products").css("display", "flex")
        $(".product").css("flex-direction", "column")
        $(".grid").css("color", "#ED1A39")
        $(".list").css("color", "#00A8A9")
    }

    function viewList(){
        $(".products").css("display", "block")
        $(".list").css("color", "#ED1A39")
        $(".grid").css("color", "#00A8A9")

    }
//------------------------------------------------------------------------//

    return <section  className="products-catalog">
        <h1 className="title-product" >{descricao}</h1>
        <div className="border"/>
        <div className="filters">
            <BsFillGrid3X3GapFill className="grid" onClick={viewGrid}/>
            <FaList className="list" onClick={viewList}/>
            <FiltroPreco orderProducts={orderProducts}/>
        </div>
        <div className="container-catalog">
            <Produtos produtos={produtos}/>
        </div>
    </section>
}