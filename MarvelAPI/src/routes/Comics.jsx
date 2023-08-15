import React from "react";
import { useState, useEffect } from "react";
import ComicList from "../App/components/ComicList/ComicList";
import "./Comics.css";
import { accedeComics, buscarComics } from '../services/comics';


export default function Comics() {
  //CREAMOS LOS HOOKS QUE VAMOS A NECESITAR PARA PASAR LAS PROPS A OTROS COMPONENTES
  const [items, setItems] = useState([]); //En este hook se almacenarán los comics
  const [isLoading, setLoading] = useState(true); //En este hook se almacenará si la página todavía no ha recibido los datos de la API
  const [buscar, setBuscar] = useState(""); //En este hook se almacenará lo que se escriba en el buscador

  //EL USE EFFECT SE CARGA NADA MÁS EJECUTAR EL COMPONENTE.
  //LE PASAMOS LO QUE ESCRIBIMOS EN EL BUSCADOR, PARA QUE SE EJECUTE CON CADA CAMBIO EN EL INPUT DEL BUSCADOR  (ES EL VALOR QUE SE LE PASA AL FINAL)
  useEffect(() => {

    //SI EL BUSCADOR ESTÁ VACÍO, CARGAMOS LA LISTA CON 20 COMICS
    if (buscar === "") {
      
      // Función que ejecuta la función que devuelve 20 comics
      async function fetchComics() {
        let comics = await accedeComics();
        console.log(comics);
        setItems(comics); // Le metemos al hook que hemos creado arriba, los comics que nos devuelve la funcion
        setLoading(false); // La página de cargando seguirá hasta que se devuelvan todos los comics y entonces, se ejecutará esta línea y se quitará el escudo
      }

      //Llamamos a la función
      fetchComics();

    } else {

      //SI EL BUSCADOR NO ESTÁ VACÍO, LLAMAMOS A LA FUNCION BUSCAR COMICS CREADA EN SERVICIOS Y LE PASAMOS LO QUE HA ESCRITO EN EL BUSCADOR
     
      //Función que ejecuta la función que te devuelve los comics que empiecen con lo que está escrito en el buscador
      async function fetchBuscarComics(buscar){
        let comics = await buscarComics(buscar);
        console.log(comics);
        setItems(comics); // Le metemos al hook que hemos creado arriba, los comics que nos devuelve la funcion
        setLoading(false); // La página de cargando seguirá hasta que se devuelvan todos los comics y entonces, se ejecutará esta línea y se quitará el escudo
      }

      //Llamamos a la función
      fetchBuscarComics(buscar);

    }
  }, [buscar]);

  return (
    <main style={{ padding: "1rem 0" }}>
      {/* Le pasamos al componente como props el array con los comics, si está cargando la web y una función que se ejecuta cuando escribes en el buscador*/}
      <ComicList
        items={items}
        isLoading={isLoading}
        search={(q) => setBuscar(q)}
      />
    </main>
  );
}
