import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ComicsSelect.css";
import Precio from '../App/components/InfoComics/Precio'
import ListaPersonajes from '../App/components/InfoComics/ListaPersonajes'
import Creadores from '../App/components/InfoComics/Creadores'
import ListaHistorias from '../App/components/InfoComics/ListaHistorias'
import URL from '../App/components/InfoComics/URL'
import { infoComic } from '../services/comics';


export default function ComicSelect() {
  //ESTO ES PARA PASARLE COMO PARÁMETRO A LA RUTA EL ID DEL COMIC CUANDO PINCHES EN SU FOTO. 
  let params = useParams(); // (UseParams es para rutas)
  let idcomic = parseInt(params.idcomic, 10); //Le hacemos un parseINT para guardarlo como número

  //CREAMOS UN HOOK PARA ALMACENAR EL COMIC EN UN ARRAY Y PASARSELO A OTROS COMPONENTES
  const [items, setItems] = useState([]);

  useEffect(() => {
    //Función que ejecuta la función de buscar un comic según el id que le pasamos
    async function fetchInfoComic(idcomic) {
      let comic = await infoComic(idcomic); //Le pasamos, a la función creada en services, el id del Comic que pinchamos
      console.log(comic)
      setItems(comic); // Le metemos al hook que hemos creado arriba, el comic que nos devuelve la funcion
      setLoading(false); // La página de cargando seguirá hasta que se devuelva el comic y entonces, se ejecutará esta línea y se quitará el escudo
    }

    //Llamamos a la funcion
    fetchInfoComic(idcomic);

  }, []);

  return (
    <div>
      {
        //MAPEAMOS (RECORRER) EL ARRAY Y POR CADA COMIC LE SACAMOS LOS SIGUIENTES DATOS. (SOLO HAY UN COMIC EN EL ARRAY)
        items.map(comic =>
          <div className="infoComic">
            <div className="informacion">
              <img src={`${comic.thumbnail.path}.jpg`} className="informacion__img" alt="Portada Comic" /> {/* Foto del comic*/}
              <div>
                <h1 className="informacion__div__h1">{comic.title}</h1> {/* Precio del comic*/}
                <p className="informacion__div__p">{comic.description}</p><br /> {/* Descripcion del comic*/}
                <p className="informacion__div__p--titulo">SERIE: <span className="blanco">{comic.series.name}</span></p><br /> {/* Serie a la que pertenece el comic*/}
                <p className="informacion__div__p--titulo">PÁGINAS: <span className="blanco">{comic.pageCount}</span></p><br /> {/* Páginas que tiene el comic*/}
                <p className="informacion__div__p--titulo">PRECIO:</p><br />
                <Precio precios={comic.prices} /> {/* Le pasamos un array con los precios del comic*/}
              </div>
            </div>

            <div className="separacion"></div>

            <div className="informacion2">
              <div>
                <p className="informacion__div__p--titulo">PERSONAJES QUE APARECEN</p>
                <ListaPersonajes personajes={comic.characters.items} /> {/* Le pasamos un array con los personajes del comic*/}
              </div>
              <div>
                <p className="informacion__div__p--titulo">CREADORES</p>
                <Creadores creadores={comic.creators.items} /> {/* Le pasamos un array con los creadores del comic*/}
              </div>
              <div>
                <p className="informacion__div__p--titulo">HISTORIAS RELACIONADAS</p>
                <ListaHistorias historias={comic.stories.items} /> {/* Le pasamos un array con las historias relacionas con el comic*/}
              </div>

            </div>

            <br />
            <p className="informacion__div__p--titulo informacion__div__p--centrado">ENLACES DE INFORMACIÓN</p>
            <URL enlaces={comic.urls} />  {/* Le pasamos un array con los enlace de información del comic*/}
          </div>
        )
      }
    </div>
  );
}