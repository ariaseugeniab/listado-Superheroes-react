import React, { useState } from "react";
// import ObtenerSh from "../services/obtenerSh";
import ShList from "../components/ShList";
import Cover from "../components/Cover";
import NavBar from "../components/NavBar";
// import getAllSh from '../services/getAllSh'

const Home = () => {
  const [usedSearch, setUsedSearch] = useState(false);
  const [results, setResults] = useState([]);
  // const [list, setList] = useState([])

  function _handleResults(res) {
    setUsedSearch(true);
    setResults(res);
  }

  function _renderResults() {
    return results.length === 0 ? (
      <p>Sin resultados encontrados.</p>
    ) : (
      <ShList superh={results} />
    );
  }

  // function _renderAll(){
  //   setList(getAllSh(1, 5)) 
  //   console.log(list)
  //   // return <ShList superh={list} />
  // }


  return (
    <div>
      <Cover />
      <NavBar title={usedSearch ? "Resultados de la búsqueda" : "Listado" } resultAction={_handleResults} onSearch={true}/>

      <main>
        <div className="container">
          {usedSearch ? _renderResults() : <p>Aquí se verán los resultados</p>}
        </div>
      </main>
    </div>
  );
};

export default Home;
