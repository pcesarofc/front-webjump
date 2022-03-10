import React from 'react'
import Home from './Home'
import Camisetas from './Camisetas'
import Calcas from './Calcas'
import Sapatos from './Sapatos'
import { Routes, Route } from 'react-router-dom';


export default () => (
    <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path ="/sapatos" element = {<Sapatos/>}/>
        <Route path ="/calcas" element = {<Calcas/>}/>
        <Route path ="/camisetas" element = {<Camisetas/>}/>
    </Routes>
)