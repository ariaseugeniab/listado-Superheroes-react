import {useState, useEffect} from 'react'
import getAllSh from '../services/getAllSh'

const useShList = (nroPag, filasPag)=> {

    const [loading, setloading] = useState(false)
    const [total, setTotal] = useState(0)
    const [results, setResults] = useState([]);
  // console.log(nroPag,filasPag)

      useEffect(() => {
        setloading(true)
        getAllSh(nroPag,filasPag)
        .then(shResults =>{
          setResults(shResults.results)
          setloading(false)
          setTotal(shResults.total)
          console.log(shResults)
        })
      }, [nroPag, filasPag]);
    

      return {loading, results, total}
}

export default useShList