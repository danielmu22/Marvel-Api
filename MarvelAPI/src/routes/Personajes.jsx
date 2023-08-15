import React, { useEffect, useState } from 'react';
import CharacterList from '../App/components/CharacterList/CharacterList';
import { accedePersonajes, buscarPersonajes } from '../services/personajes';
import './Personajes.css';
import "babel-polyfill"; // ESTO ES PARA QUE FUNCIONEN LAS FUNCIONES ASÍNCRONAS



export default function Personajes() {
  //CREAMOS LOS HOOKS QUE VAMOS A NECESITAR PARA PASAR LAS PROPS A OTROS COMPONENTES
  const [items, setItems] = useState([]); //En este hook se almacenarán los personajes
  const [isLoading, setLoading] = useState(true); //En este hook se almacenará si la página todavía no ha recibido los datos de la API
  const [buscar, setBuscar] = useState(''); //En este hook se almacenará lo que se escriba en el buscador

  //EL USE EFFECT SE CARGA NADA MÁS EJECUTAR EL COMPONENTE.
  //LE PASAMOS LO QUE ESCRIBIMOS EN EL BUSCADOR, PARA QUE SE EJECUTE CON CADA CAMBIO EN EL INPUT DEL BUSCADOR  (ES EL VALOR QUE SE LE PASA AL FINAL)
  useEffect(() => {

    //SI EL BUSCADOR ESTÁ VACÍO, CARGAMOS LA LISTA CON 36 PERSONAJES
    if (buscar === '') {

      // Función que ejecuta la función que devuelve 36 personajes
      async function fetchPersonajes() {
        let personajes = await accedePersonajes();
        console.log(personajes);
        setItems(personajes); // Le metemos al hook que hemos creado arriba, los personajes que nos devuelve la funcion
        setLoading(false); // La página de cargando seguirá hasta que se devuelvan todos los personajes y entonces, se ejecutará esta línea y se quitará el escudo
      }

      //Llamamos a la función
      fetchPersonajes();

    } else {

      //SI EL BUSCADOR NO ESTÁ VACÍO, LLAMAMOS A LA FUNCION BUSCAR PERSONAJES CREADA EN SERVICIOS Y LE PASAMOS LO QUE HA ESCRITO EN EL BUSCADOR
      async function fetchBuscarPersonajes(buscar) {
        let personajes = await buscarPersonajes(buscar);
        setItems(personajes); // Le metemos al hook que hemos creado arriba, los personajes que nos devuelve la funcion
        setLoading(false); // La página de cargando seguirá hasta que se devuelvan todos los personajes y entonces, se ejecutará esta línea y se quitará el escudo
      }

      //Llamamos a la función
      fetchBuscarPersonajes(buscar);

    }
  }, [buscar]);

  return (
    <main style={{ padding: '1rem 0' }}>
      {/* Le pasamos al componente como props el array con los personajes, si está cargando la web y una función que se ejecuta cuando escribes en el buscador*/}
      <CharacterList items={items} isLoading={isLoading} search={q => setBuscar(q)} />
    </main>
  );
}
