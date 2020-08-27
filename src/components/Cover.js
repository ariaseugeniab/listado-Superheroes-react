import React from 'react'
import { useHistory } from 'react-router-dom'

const Cover = () => {

  const history = useHistory()

  function handleClick(){
    history.push('/')
  }
    return (
    <header id="portada" className="img-portada-sh" onClick= {handleClick}>
      <div className="titulos-portada">
        <h1>Mis Superhéroes</h1>
        <h5>Lista tus superhéroes favoritos de Marvel</h5>
      </div>
    </header>
    )
}

export default Cover 