import React from "react"
import logo from '../assets/WebJump-logo.png'
import { Link } from 'react-router-dom'

export default function () {
    return <Link to='/'>
            <img src={logo} />
        </Link>
}