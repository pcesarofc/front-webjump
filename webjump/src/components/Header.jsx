import React from "react";
import '../style/Header.css'
import Logo from "./Logo";
import { BsQuestionSquare } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { BiCart } from "react-icons/bi"


export default function () {

    const location = useLocation()

    return (location.pathname == '/') ? <header className="header">
        <div className="header-top">
            <div className="header-top-text">
                <a href="" className="acesso">Acesse sua Conta</a>
                <p className="ou">ou</p>
                <a href="" className="cadastro">Cadastre-se</a>
            </div>
        </div>
        <div className="header-bot">
            
            <div className="logo">
                <BsQuestionSquare className="interrogation1"/>
                <Logo />
                <BsQuestionSquare className="interrogation2"/>
            </div>
            
            <input type="text" className="search" />
            <input type="button" value="BUSCAR" className="botao-buscar"/>
        </div>
    </header>
    : <header className="header">
    <div className="header-top">
        <div className="header-top-text">
            <a href="" className="acesso">Acesse sua Conta</a>
            <p className="ou">ou</p>
            <a href="" className="cadastro">Cadastre-se</a>
        </div>
    </div>
    <div className="header-bot">
        <div className="logo">
            <FiMenu className="interrogation1"/>
            <Logo />
            <BiCart className="interrogation2"/>
        </div>
        <input type="text" className="search" />
        <input type="button" value="BUSCAR" className="botao-buscar"/>
    </div>
</header>
}