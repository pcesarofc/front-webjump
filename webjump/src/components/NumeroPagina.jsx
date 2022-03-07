import React from "react";
import '../style/NumeroPagina.css'


export default function () {
    return <div className="numero-pagina">
        <a className="voltar"> &lt;</a>
        <div className="numeros">
            <a className="pagina1">1</a>
            <a className="pagina1">2</a>
            <a className="pagina1">3</a>
            <a className="pagina1">4</a>
            <a className="pagina1">5</a>
        </div>
        <a className="avancar"> &gt;</a>
    </div>
}