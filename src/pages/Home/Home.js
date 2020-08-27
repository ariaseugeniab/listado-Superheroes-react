import React from "react";
import NavBar from "../../components/NavBar";
import ShList from "../../components/ShList";
import useShList from '../../hooks/useShList'
import Spinner from '../../components/Spinner'

const Home = () => {

  // const[page, setpage] = useState(1)
  // const[rows, setRows] = useState(20)
  const {loading, results} = useShList(20, 1)
 

  // function _handleResults(res) {
  //   // setUsedSearch(true);
  //   // setResults(res);
  //   console.log('consola!')
  // }

  return (
    
    <div>
      <NavBar title={"Listado"} onSearch={true}/>

      <main>
        <div className="container">
        {loading?
            <p><Spinner/></p> : <ShList superh={results} /> }
        </div>
      </main>
    </div>
  );
};

export default Home;
