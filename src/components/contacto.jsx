import React from 'react'
import logo from "../assets/logo.png"

export const Contacto = () => {
  return (
    <div className='contact'>
      <div>
        <form>
          <label>Nombre</label>
          <input></input>
          <label>Correo</label>
          <input></input>
          <label>Asunto</label>
          <textarea></textarea>
          <input type='submit'></input>
        </form>
      </div>

      <div>
        <img src={logo}></img>
      </div>
    </div>
  )
}
