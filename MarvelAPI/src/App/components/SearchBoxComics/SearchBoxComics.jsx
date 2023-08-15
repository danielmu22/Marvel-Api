import React, { useState } from 'react';
import PropTypes from "prop-types";
import './SearchBoxComics.css';

function SearchBoxComics({search}) {
  //HOOK PARA EL ESTADO DEL INPUT DEL BUSCADOR
  const [text, setText] = useState('')

  const onSearch = (q) => {
    setText(q) //cambio el texto del buscador
    search(q) //Función callBack que devuelve a Comics.jsx lo que se haya escrito en el buscador para que busque los comics
  }

  return (
      <center>
        <input id="search" type="search"
          placeholder="Busca un comic  🔍"
          autoFocus
          onChange={(e) => onSearch(e.target.value)}
          //Cuando el input cambie, llamo a la funcion onSearch y le paso lo que esté en el buscador
          value={text} /*Le paso lo que esté en el buscador una vez ejecutada la función onSearch */ />

        {/* <i class="bi bi-search" id="icono4"/> */}
      </center>
  )
}

//LE METEMOS UNA "VALIDACIÓN" A LAS PROPS QUE NOS PASAN
SearchBoxComics.propType = {
  search: PropTypes.func,
}

export default SearchBoxComics;