import React from "react";
import BtnBack from "../../components/BtnBack";
import ShDetails from "../../components/ShDetails";
import NavBar from '../../components/NavBar';
import {useParams} from 'react-router-dom'
import useShDetail from '../../hooks/useShDetail'
import Spinner from '../../components/Spinner'

const Detail = () => {
  const {id} = useParams()
  const {loading, results} = useShDetail({id})
  const {name, path, extension, urls, description} = results

  // console.log('el array es', name)
  return (  
    <div>
      <NavBar title="Detalles"  onSearch={false}/>
      <div id="contenedor" className="card mb-3">
        {loading? 
        <Spinner/> : (<>
        <ShDetails
        name={name}
        description={description}
        poster={`${path}.${extension}`}
        links={urls}
      />
        <BtnBack />
        </>)
        }
      </div>
    </div>
  );
};

export default Detail;
