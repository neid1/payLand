import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Inicio } from '../components/inicio'
import { Juegos } from '../components/juegos'
import { Contacto } from '../components/contacto'
import { Cabezera } from '../layout/cabezera'
import { Nav } from '../layout/nav'
import { Pie } from '../layout/pie'

export const Rutas = () => {
  return (
    <div>

        <BrowserRouter>
            <Cabezera></Cabezera>
            <Nav></Nav>
                <Routes>
                    <Route path='/'element={<Inicio></Inicio>}></Route>
                    <Route path='/inicio'element={<Inicio></Inicio>}></Route>
                    <Route path='/juegos'element={<Juegos></Juegos>}></Route>
                    <Route path='/contacto'element={<Contacto></Contacto>}></Route>
                </Routes>
            <Pie></Pie>
        </BrowserRouter>

    </div>
  )
}
