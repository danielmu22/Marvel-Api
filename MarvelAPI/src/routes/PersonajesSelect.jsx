import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PersonajesSelect.css';
import ListaComics from '../App/components/InfoPersonaje/ListaComics'
import Series from '../App/components/InfoPersonaje/Series'
import Eventos from '../App/components/InfoPersonaje/Eventos.jsx'
import URL from '../App/components/InfoComics/URL'
import { infoPersonaje } from '../services/personajes';


export default function PersonajesSelect() {
  
  //ESTO ES PARA PASARLE COMO PARÁMETRO A LA RUTA EL ID DEL PERSONAJE CUANDO PINCHES EN SU FOTO. 
  let params = useParams(); // (Use params es para rutas)
  let idpersonaje = parseInt(params.idpersonaje, 10); //Le hacemos un parseINT para guardarlo como número

  //CREAMOS UN HOOK PARA ALMACENAR EL PERSONAJE EN UN ARRAY Y PASARSELO A OTROS COMPONENTES
  const [items, setItems] = useState([]);

  useEffect(() => {

    //Función que ejecuta la función de buscar un personaje según el id que le pasamos
    async function fetchInfoPersonajes(idpersonaje) {
      let personajes = await infoPersonaje(idpersonaje); //Le pasamos, a la función creada en services, el id del Personaje que pinchamos
      console.log(personajes);
      setItems(personajes); // Le metemos al hook que hemos creado arriba, el personaje que nos devuelve la funcion
      setLoading(false); // La página de cargando seguirá hasta que se devuelvan todos los personajes y entonces, se ejecutará esta línea y se quitará el escudo
    }

    //Llamamos a la funcion
    fetchInfoPersonajes(idpersonaje);
  }, []);

  return (
    <div>
      {
        //MAPEAMOS (RECORRER) EL ARRAY Y POR CADA PERSONAJE LE SACAMOS LOS SIGUIENTES DATOS (SOLO HAY UN PERSONAJE EN EL ARRAY)
        items.map(personaje =>
          <div className="infoPersonaje">
            <div className="info">
              <img src={`${personaje.thumbnail.path}.jpg`} className="info__img" alt="Foto Personaje" /> {/* Foto del personaje*/}
              <div>
                <h1 className="info__div__h1">{personaje.name}</h1> {/* Nombre del personaje*/}
                <div className="separacion"></div>
                <p className="info__div__p">{personaje.description}</p> {/* Breve descripcion del personaje*/}
              </div>
              <div>
                <p className="info__div__p--titulo">COMICS DONDE APARECE:</p>
                <ListaComics comics={personaje.comics.items} /> 
                {/*Le pasamos un array con los comics del personaje. En el componente lo volvemos a mapear y mostramos los datos que necesitemos, en este caso el nombre*/}
              </div>
              <div>
                <p className="info__div__p--titulo">SERIES DONDE APARECE:</p>
                <Series series={personaje.series.items} /> 
                {/* Le pasamos un array con las series de comics del personaje. En el componente lo volvemos a mapear y mostramos los datos que necesitemos, en este caso el nombre*/}
              </div>
            </div>

            <div className="separacion"></div>
            <div className="separacion"></div>

            <p className="info__div__p--titulo">EVENTOS EN LOS QUE HA PARTICIPADO:</p>
            <Eventos eventos={personaje.events.items} /> 
            {/* Le pasamos un array con los eventos del personaje. En el componente lo volvemos a mapear y mostramos los datos que necesitemos, en este caso el nombre*/}
            <div className="separacion"></div>

            {/* REUTILIZAMOS EL COMPONENTE DE LAS URL DE LOS COMICS PORQUE EL ARRAY ES EL MISMO */}
            <p className="info__div__p--titulo">ENLACES DE INFORMACIÓN</p>
            <URL enlaces={personaje.urls} /> 
            {/* Le pasamos un array con los enlace de información del personaje*/}

          </div>
        )
      }
    </div>
  );
}
