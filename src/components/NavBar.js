import React from 'react'
// import Search from './Search'
import ObtenerSh from '../services/obtenerSh'
import BackHome from './BackHome'

const NavBar = ({title, onSearch, resultAction}) =>{
    return(
        <div className="navbar navbar-light sticky-top" id="navbar">
        <h2 className="navbar-brand" id="titulado">{title}</h2>
        {onSearch ? <ObtenerSh onResults={resultAction} /> 
        : <BackHome /> }
        
        </div>

    ) 

}

export default NavBar