// import React, { useState } from "react";

const API_KEY = '&apikey=bc7fe627f7908e7c510adbbd29eebe78&hash=184dae0b39058edc28b190fc5cf52645'
const URL = 'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&ts=1'

const fromApiResponseToSh = apiResponse => {
    const {data} = apiResponse
    const {results = [], total} = data

    if (Array.isArray(results) && total > 0) {
      const superheroes = results.map(results => {
        const {id, name, thumbnail } = results
        const { path, extension } = thumbnail
        return { id, name, path, extension }
      })
      console.log(superheroes)
      return superheroes
    }
    return []
  }


const getAllSh = (nroPagina, filasPagina) => {

    // const [offset, setOffset] = useState(0)
    let offset = 0

    if(nroPagina > 1){
        offset = (nroPagina + 1) * filasPagina
    }

    const urlApi = URL + API_KEY +`&limit=${filasPagina}&offset=${offset}`

    return fetch(urlApi)
    .then(res=>res.json())
    .then(fromApiResponseToSh)

}
export default getAllSh