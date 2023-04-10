import React from 'react'
import {Link} from "react-router-dom"

export const Nav = () => {
  return (
    <div className='nav'>
        <ul>
            <Link to={"/inicio"} className='uno'>Nosotros</Link>
            <Link to={"/juegos"} className='dos'>Juegos</Link>
            <Link to={"/contacto"} className='tres'>Contacto</Link>
        </ul>
    </div>
  )
}
