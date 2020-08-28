
const API_KEY = '&apikey=bc7fe627f7908e7c510adbbd29eebe78&hash=184dae0b39058edc28b190fc5cf52645'
const URL = 'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&ts=1'


const getAllSh = (nroPagina, filasPagina) => {

    let offset = 0

    if(nroPagina > 1){
        offset = (nroPagina + 1) * filasPagina
    }

    const urlApi = URL + API_KEY +`&limit=${filasPagina}&offset=${offset}`

    // console.log(urlApi)
    return fetch(urlApi)
    .then(res=>res.json())
    .then(res =>{
        const { results = [], total = "0" } = res.data
        // console.log(results, total)
        return {results, total}
    })

}
export default getAllSh