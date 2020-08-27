import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
// import getSingleSh from '../services/getSingleSh'
// import NavBar from './NavBar'

const Search = () => {

  const [shInput, setShInput] = useState('')
  // const [results, setResults] = useState([])
  const history = useHistory()

  const eventForm = (e)=>{
    e.preventDefault()
    history.push(`/search/${shInput.trim()}`)
    // setResults(getSingleSh(shInput))
    e.target.value = ''
    // onResults(results)
  }

  const handleChange =(e) =>{
    setShInput(e.target.value)
  }


    return(

        <form id="buscador-box" onSubmit={eventForm} >
          <input
            type="text"
            id="buscador-input"
            placeholder="Nombre del Superhéroe"
            onChange={handleChange}
            value={shInput}
          />
          <Link id="buscador-btn" to={`/search/${shInput.trim()}`}>
            <i className="fa fa-search"></i>
          </Link>
        </form>
    )
}

export default Search