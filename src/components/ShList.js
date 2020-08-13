import React from "react";
import Superhero from './Superhero'

const ShList = ({ superh }) => {

        return (
            <div id="contenedor" className="row">
                { superh.map(sh =>{
          return(
              <div id="div-sh" key={sh.id} className="col-md-3">
                    <Superhero 
                id={sh.id}
                title={sh.name}
                poster={`${sh.thumbnail.path}.${sh.thumbnail.extension}`} 
                />
                </div>
                )
        })}
            </div>
        )
    }
export default ShList