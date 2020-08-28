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
    // if (e.target.value !== Number){
    //   setpage(72)
    // } else {
      
    //   setpage(parseInt(e.target.innerHTML))
    // }
    setPage(parseInt(e.target.innerHTML))
    if(isNaN(e.target.innerHTML)){
      setPage(72)
    }

    console.log(e.target, page)
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

      <PaginationSh active={page} onEvent={handleClick}/>
    </div>
  );
};

export default Home;
