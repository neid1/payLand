import React from 'react'
import fb from "../assets/facebook.png"

export const Pie = () => {
  return (
    <div className='pie'>
        <div className='telefono'> 
            <p>Telefono</p>
            <p className='num'>999-222-111</p>
            <p className='num'>22-6666</p>
        </div>
        <div className='red'>
            <p className='ti'>Nuestras redes sociales</p>
            <img className='uno' src={fb}></img>
            <img className='dos' src={fb}></img>
            <img className='tres' src={fb}></img>
        </div>
    </div>
  )
}
