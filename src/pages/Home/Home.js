import React, {useState} from "react";
import NavBar from "../../components/NavBar";
import ShList from "../../components/ShList";
import useShList from '../../hooks/useShList'
import Spinner from '../../components/Spinner'
import PaginationSh from '../../components/PaginationSh'


const Home = () => {

  const[page, setPage] = useState(1)
  const[rows, setRows] = useState(21)
  
  const {loading, results} = useShList(page, rows)

  function handleClick(e){
    setPage(parseInt(e.target.innerHTML))
    if(isNaN(e.target.innerHTML)){
      setPage(72)
    }

    console.log(e.target.value, page)
  }

  function _goFirst(e){
    setPage(1)
  }

  function _goEnd(e){
    setPage(72)
  }

  return (
    
    <div>
      <NavBar title={"Listado"} onSearch={true}/>

      <main>
        <div className="container">
        {loading?
            <Spinner/> :
             <ShList superh={results} />
            }
        </div>
      </main>

      <PaginationSh active={page} onEvent={handleClick} goFirst={_goFirst} goEnd={_goEnd}/>
    </div>
  );
};

export default Home;
