import React, { useState, useEffect } from "react";
import BtnBack from "../../components/BtnBack";
import ShDetails from "../../components/ShDetails";
import NavBar from '../../components/NavBar';
// import getDetails from '../services/getDetails'

const API_KEY =
  "&apikey=bc7fe627f7908e7c510adbbd29eebe78&hash=184dae0b39058edc28b190fc5cf52645";
const URL =
  "https://gateway.marvel.com:443/v1/public/characters?orderBy=name&ts=1";

const Detail = (props) => {
  const { match } = props;
  const [superhero, setSuperhero] = useState({});
  const [img, setImg] = useState({});
  const [urls, setUrls] = useState([]);

  function _fetchSh({ id }) {
    fetch(`${URL}${API_KEY}&id=${id}`)
      .then((res) => res.json())
      .then((res) => {
        const [result] = res.data.results;
        const imagen = result.thumbnail;
        const links = result.urls;
        setSuperhero(result);
        setImg(imagen);
        setUrls(links);
      });
  }

  useEffect(() => {
    let { id } = match.params;
    _fetchSh({ id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { name, description } = superhero;
  const { path, extension } = img;
  // const {type, url} = urls
  console.log("img", img);
  console.log("urls", urls);
  console.log("superhero", superhero);
// getDetails(1009351)


  return (  
    <div>
      <NavBar title="Detalles"  onSearch={false} resultAction={null}/>
      {/* <ObtenerSh onResults={_handleResults} title="Detalles del Superhéroe" onsearch={false}/> */}
      <div id="contenedor" className="card mb-3">
         <ShDetails
            name={name}
            description={description}
            poster={`${path}.${extension}`}
            links={urls}
          />
        <BtnBack />
      </div>
    </div>
  );
};

export default Detail;
