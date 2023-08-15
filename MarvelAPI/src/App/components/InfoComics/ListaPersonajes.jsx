import React from "react";
import { Link } from "react-router-dom";

function ListaPersonajes({ personajes }) {
    //RECIBIMOS EL ARRAY QUE NOS HAN PASADO A TRAVÉS DE UNA PROP
    return (
        <ul>
            {personajes.map(item => {
                {/*Recorremos el array */ }

                //COGEMOS EL ID DEL PERSONAJE
                let id = item.resourceURI //Guardo la URL entera
                console.log(id)
                id = id.slice(47, 54) //Me quedo solo con esa parte porque es donde está el id del personaje
                console.log(id)

                return (
                //PONEMOS UN ENLACE QUE TE LLEVE AL PERSONAJE. PARA ESO LE PASAMOS LA RUTA ESPECÍFICA DE CUANDO PINCHAMOS EN UN PERSONAJE (/personajeseleccionado) 
                //Y LE PASAMOS EL ID QUE HEMOS GUARDADO ANTES
                    <Link to={`/personajeseleccionado/${id}`}>
                        {/*Enlace que muestra el nombre del personaje y te lleva a la información del personaje correspondiente*/ }
                        <li className="info__div__li--link informacion__div__li">{item.name}</li>
                    </Link>
                )
            })}

        </ul>
    )

}

/* NO PONGO EL PROPTYPE DE PERSONAJES PORQUE EL ARRAY TIENE MUCHOS DATOS */

export default ListaPersonajes