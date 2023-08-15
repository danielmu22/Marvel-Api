import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterItem({ item }) {
    //RECIBIMOS EL PERSONAJE QUE NOS HAN PASADO A TRAVÉS DE UNA PROP
  return (
    <div className="content">
      <div className="cartas--hover">
        {/*PONEMOS UN ENLACE QUE TE LLEVE AL PERSONAJE. PARA ESO LE PASAMOS LA RUTA ESPECÍFICA DE CUANDO PINCHAMOS 
        EN UN PERSONAJE (/personajeseleccionado) Y LE PASAMOS EL ID DEL PERSONAJE */}
        <Link to={`/personajeseleccionado/${item.id}`}>
          <img className="cartas--hover__img" src={`${item.thumbnail.path}.jpg`} alt="" /> {/*Mostramos la foto del personaje*/}
          <div className="titulo cartas--hover__p">{item.name}</div> {/*Mostramos el nombre del personaje*/}
        </Link>
      </div>
    </div>
  );
}

/* NO PONGO EL PROPTYPE DE ITEM PORQUE EL ARRAY TIENE MUCHOS DATOS */

export default CharacterItem;

