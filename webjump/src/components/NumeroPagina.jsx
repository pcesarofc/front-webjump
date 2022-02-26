import React from "react";
import '../style/NumeroPagina.css'


export default function () {
    return <div className="Numero-pagina">
        <a className="Voltar"> &lt;</a>
        <div className="Numeros">
            <a className="Pagina1">1</a>
            <a className="Pagina1">2</a>
            <a className="Pagina1">3</a>
            <a className="Pagina1">4</a>
            <a className="Pagina1">5</a>
        </div>
        <a className="Avancar"> &gt;</a>
    </div>
}