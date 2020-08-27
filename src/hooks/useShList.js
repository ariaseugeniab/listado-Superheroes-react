import {useState, useEffect} from 'react'
import getAllSh from '../services/getAllSh'

const useShList = ({nroPag, filasPag})=> {

    const [loading, setloading] = useState(false)
    const [results, setResults] = useState([]);
  console.log(nroPag,filasPag)

      useEffect(() => {
        setloading(true)
        getAllSh(20,1)
        .then(shResults =>{
          setResults(shResults)
          setloading(false)
        })
      }, [nroPag, filasPag]);
    

      return {loading, results}
}

export default useShList