import React from 'react'
// import Search from './Search'
// import getSingleSh from '../services/getSingleSh'
import BackHome from './BackHome'
import Search from './Search'

const NavBar = ({title, onSearch}) =>{
    return(
        <div className="navbar navbar-light sticky-top" id="navbar">
        <h2 className="navbar-brand" id="titulado">{title}</h2>
        {onSearch ? <Search /> 
        : <BackHome /> }
        
        </div>

    ) 

}

export default NavBar