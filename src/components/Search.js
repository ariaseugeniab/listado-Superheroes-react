import React from 'react'
// import NavBar from './NavBar'

const Search = ({formEvent, handleChange}) => {
    return(

        <form id="buscador-box" onSubmit={formEvent} >
          <input
            type="text"
            id="buscador-input"
            placeholder="Nombre del Superhéroe"
            onChange={handleChange}
          />
          <button id="buscador-btn">
            <i className="fa fa-search"></i>
          </button>
        </form>
    )
}

export default Search