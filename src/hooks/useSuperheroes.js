import {useState, useEffect} from 'react'
import getSingleSh from '../services/getSingleSh'

const useSuperheroes = ({name})=> {

    const [loading, setloading] = useState(false)
      const [results, setResults] = useState([]);


      useEffect(() => {
        setloading(true)
        getSingleSh({name})
        .then(shResults =>{
          setResults(shResults)
          setloading(false)
        })
      }, [name]);
    

      return {loading, results}
}

export default useSuperheroes