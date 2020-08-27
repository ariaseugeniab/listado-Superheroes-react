import React, { useState } from "react";
import Search from '../components/Search'
import { useHistory} from 'react-router-dom'

const API_KEY = '&apikey=bc7fe627f7908e7c510adbbd29eebe78&hash=184dae0b39058edc28b190fc5cf52645'
const URL = 'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&ts=1'

const getSingleSh = ({onResults}) => {

    //navigation: { setParams } 
    const [ inputSh, setInputSh ] = useState('')
    const history = useHistory()
    // const [loading, setLoading] = useState(false)

    function _handleChange(e) {
        setInputSh(e.target.value)
    }

    function _searchName(e){
        e.preventDefault()

        // setLoading(true)
        fetch(`${URL}${API_KEY}&nameStartsWith=${inputSh}`)
        .then(res => res.json())
        .then(res =>{
            const { results = [], total = "0" } = res.data
            console.log(results, total)
            onResults(results)
            // setLoading(false)

        })
        document.getElementById("buscador-input").value = ''
        history.push(`/search/${inputSh}`)
    }

    // if(loading) return <p>Cargando!</p>}


    return (
        <Search handleSubmit={_searchName} handleChange={_handleChange} name={inputSh} />
        
    );
}

export default getSingleSh