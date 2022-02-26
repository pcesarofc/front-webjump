import React from "react";
import { Routes, Route } from 'react-router-dom';
import Calcas from "./Calcas";
import Camisetas from "./Camisetas";
import Home from './Home'
import Sapatos from "./Sapatos";


export default function () {
    return  <Routes>
                <Route path = '/' element = {<Home/>} />
                <Route path ='/sapatos' element = {<Sapatos/>}/>
                <Route path ='/calcas' element = {<Calcas/>}/>
                <Route path ='/camisetas' element = {<Camisetas/>}/>
            </Routes>
}