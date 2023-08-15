import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ComicItem({ item }) {
  //RECIBIMOS EL COMIC QUE NOS HAN PASADO A TRAVÉS DE UNA PROP
  return (
      <div className="listado--hover">
        {/*PONEMOS UN ENLACE QUE TE LLEVE AL COMIC. PARA ESO LE PASAMOS LA RUTA ESPECÍFICA DE CUANDO PINCHAMOS 
        EN UN COMIC (/comicseleccionado) Y LE PASAMOS EL ID DEL COMIC */}
        <Link to={`/comicseleccionado/${item.id}`}>
          <img className="listado--hover__img" src={`${item.thumbnail.path}.jpg`} alt="Portada Comic" /> {/*Mostramos la foto del comic*/}
          <div className="listado--hover__p">{item.title}</div> {/*Mostramos el titulo del comic*/}
        </Link>
      </div>
  );
}

/* NO PONGO EL PROPTYPE DE ITEM PORQUE EL ARRAY TIENE MUCHOS DATOS */

export default ComicItem;
