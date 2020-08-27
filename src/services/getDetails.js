const API_KEY = '&apikey=bc7fe627f7908e7c510adbbd29eebe78&hash=184dae0b39058edc28b190fc5cf52645'
const URL = 'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&ts=1'


export default function getDetails ({id}) {
  const urlApi = `${URL}${API_KEY}&id=${id}`
  return fetch(urlApi)
    .then(res => res.json())
    .then(res =>{
          const {results = [], total} = res.data

        if(Array.isArray(results) && total > 0){
        const details = results.map(results => {
          const {name, thumbnail, urls, description } = results
          const { path, extension } = thumbnail
          // const {items = []} = urls
          // items.map(items=>{
          //  const {name, resourceURI} = items
          //  return {name, reso}
          // })
          return {name, path, extension, urls, description}
        })
        // console.log('details',details)
          return details
}
      
})

}
