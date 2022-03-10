import React from 'react'
import logo from '../assets/WebJump-logo.png'
import { Link } from 'react-router-dom'

export default () => (
    <Link to="/">
        <img src={logo} />
    </Link>
)