import React from "react";
import { Link } from 'react-router-dom'

const Superhero = ({id, title, poster}) => {
  
    return (
      <Link to={`/detail/${id}`} className="card">
            <img
              src={poster}
              alt={title}
              className="card-img-top"
            />
        <div className="card-body">
                <h5 className="card-title">{title} <i className="fa fa-star star" ></i></h5>
        
          </div>
      </Link>
    );
  }
export default Superhero