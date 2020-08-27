import React from "react";
// import getSingleSh from "../services/getSingleSh";
import ShList from "../../components/ShList";
import NavBar from "../../components/NavBar";
import {useParams} from 'react-router-dom'
import useSuperheroes from '../../hooks/useSuperheroes'

const Results = () =>{

  const {name} = useParams()
  const {loading, results} = useSuperheroes({name})
  
      // function _renderResults() {
      //   console.log(results)
      //   return results.length === 0 ? (
      //     <p>Sin resultados encontrados.</p>
      //   ) : (
      //     <ShList superh={results} />
      //   );
      // }
    

    return(
        <div>
        <NavBar title={`Resultados de "${name}"`} onSearch={true}/>
  
        <main>
          <div className="container">
            {loading?
            <p>Cargando</p> :
            results.length > 0 ?
             <ShList superh={results} /> :
             <p>Sin resultados encontrados</p> }
          </div>
        </main>
      </div>
    )


}

export default Results