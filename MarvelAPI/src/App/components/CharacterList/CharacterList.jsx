import React from 'react';
import PropTypes from "prop-types";
import CharacterItem from '../CharacterItem/CharacterItem';
import escudo from '../../img/loading2.gif';
import SearchBoxPersonajes from '../SearchBoxPersonajes/SearchBoxPersonajes';

function CharacterList({ items, isLoading, search }) {
  return isLoading
    ? ( //SI TODAVÍA NO HA CARGADO LA PÁGINA SE MUESTRA ESA PÁGINA
      <center>
        <div className="separacion" />
        <h1 className="titulosPrincipales">CARGANDO...</h1>
        <img src={escudo} alt="Escudo Capitán América girando" />
      </center>
    )
    : ( //CUANDO CARGUE SE MUESTRAN LOS PERSONAJES
      <div>
        <h2 className="titulosPrincipales">PERSONAJES</h2>
        <br />
        <SearchBoxPersonajes search={search} /> {/*Le pasamos como prop la funcion que nos pasaron antes*/}
        <div className="separacion" />
        <section className="cartas">
          {
            items.map((item) => (
              //Recorremos el array. Le pasamos cada personaje al componente y este nos lo va a pintar
              <CharacterItem key={item.id} item={item} />
            ))
          }
        </section>
        <div className="separacion" />
        <div className="separacion" />
        <div className="separacion" />
        <div className="separacion" />
      </div>
    );
}

//LE METEMOS UNA "VALIDACIÓN" A LAS PROPS QUE NOS PASAN
CharacterList.propType = {
  isLoading: PropTypes.bool,
  search: PropTypes.func,
  /* NO PONGO EL PROPTYPE DE ITEMS PORQUE EL ARRAY TIENE MUCHOS DATOS */
}


export default CharacterList;
