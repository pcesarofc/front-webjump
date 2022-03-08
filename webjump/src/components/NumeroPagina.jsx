import React from "react"
import '../style/NumeroPagina.css'

export default () => (
    <div className="numbers-page">
        <a className="back-button"> &lt;</a>
        <div className="number">
            <a className="page-1">1</a>
            <a className="page-1">2</a>
            <a className="page-1">3</a>
            <a className="page-1">4</a>
            <a className="page-1">5</a>
        </div>
        <a className="forward-button"> &gt;</a>
    </div>
)