import React from "react";
import '../style/Header.css'
import Logo from "./Logo";
import { BsQuestionSquare } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { BiCart } from "react-icons/bi"


export default function () {

    const location = useLocation()

    return (location.pathname == '/') ? <header className="Header">
        <div className="Header-top">
            <div className="Header-top-text">
                <a href="" className="Acesso">Acesse sua Conta</a>
                <p className="Ou">ou</p>
                <a href="" className="Cadastro">Cadastre-se</a>
            </div>
        </div>
        <div className="Header-bot">
            
            <div className="Logo">
                <BsQuestionSquare className="Interrogation1"/>
                <Logo />
                <BsQuestionSquare className="Interrogation2"/>
            </div>
            
            <input type="text" className="Search" />
            <input type="button" value="BUSCAR" className="Botao-buscar"/>
        </div>
    </header>
    : <header className="Header">
    <div className="Header-top">
        <div className="Header-top-text">
            <a href="" className="Acesso">Acesse sua Conta</a>
            <p className="Ou">ou</p>
            <a href="" className="Cadastro">Cadastre-se</a>
        </div>
    </div>
    <div className="Header-bot">
        <div className="Logo">
            <FiMenu className="Interrogation1"/>
            <Logo />
            <BiCart className="Interrogation2"/>
        </div>
        <input type="text" className="Search" />
        <input type="button" value="BUSCAR" className="Botao-buscar"/>
    </div>
</header>
}