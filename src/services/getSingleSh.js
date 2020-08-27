
const API_KEY = '&apikey=bc7fe627f7908e7c510adbbd29eebe78&hash=184dae0b39058edc28b190fc5cf52645'
const URL = 'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&ts=1'

export default function getSingleSh({name}) {

    return fetch(`${URL}${API_KEY}&nameStartsWith=${name}`)
    .then(res => res.json())
        .then(res =>{
            const { results = [], total = "0" } = res.data
            console.log(results, total)
            return results
            // if (Array.isArray(results) && total > 0) {
            //     const superheroes = results.map(results => {
            //       const {id, name, thumbnail } = results
            //       const { path, extension } = thumbnail
            //       return { id, name, path, extension }
            //     })
            //     console.log(superheroes)
        }
    )
}