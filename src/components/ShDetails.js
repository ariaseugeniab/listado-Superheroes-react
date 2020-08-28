import React from "react";

const ShDetails = ({ name, description, poster, links = [] }) => {
  return (
    <div id="container-info" className="row no-gutters">
      <div id="imagen-sh" className="col-md-4">
        <img className="card-img" src={poster} alt={name} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-text">
            {description ? (
              <>
                <h4>Descripción</h4>
                <p className="card-text">{description}</p>
              </>
            ) : (
              ""
            )}

            <div>
              {links === []
                ? ""
                : (<div>
                  <h4>Links</h4>
                  {links.map((el) => {
                    return (
                      <a key={el.type} href={el.url} target="_blank" rel="noopener noreferrer" className="links-sh">
                        {el.type}
                      </a>
                    );
                  })}
                  </div>
                  )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShDetails;
