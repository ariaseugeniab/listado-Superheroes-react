import {useState, useEffect} from 'react'
import getDetails from '../services/getDetails'

const useShDetail = ({id})=> {

    const [loading, setloading] = useState(false)
      const [results, setResults] = useState([]);


      useEffect(() => {
        setloading(true)
        getDetails({id})
        .then(shResults =>{
            const [superhero] = shResults
          setResults(superhero)
          setloading(false)
        })
      }, [id]);
    
    //   console.log('useshdetail',results)
      return {loading, results}
}

export default useShDetail