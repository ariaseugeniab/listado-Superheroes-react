import React, { useState } from "react";
import Search from '../components/Search'

const API_KEY = '&apikey=bc7fe627f7908e7c510adbbd29eebe78&hash=184dae0b39058edc28b190fc5cf52645'
const URL = 'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&ts=1'

const ObtenerSh = ({onResults}) => {

    const [ inputSh, setInputSh ] = useState('')

    function _handleChange(e) {
        setInputSh(e.target.value)
    }

    function _handleSubmit(e){
        e.preventDefault()
        
        fetch(`${URL}${API_KEY}&nameStartsWith=${inputSh}`)
        .then(res => res.json())
        .then(res =>{
            const { results = [], total = "0" } = res.data
            console.log(results, total)
            onResults(results)

        })
        document.getElementById("buscador-input").value = ''
    }
    return (
        <Search formEvent={_handleSubmit} handleChange={_handleChange} />
    );
}

export default ObtenerSh