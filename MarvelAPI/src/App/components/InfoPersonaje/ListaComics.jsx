import React from "react";
import { Link } from "react-router-dom";

function ListaComics({ comics }) {
    //RECIBIMOS EL ARRAY QUE NOS HAN PASADO A TRAVÉS DE UNA PROP
    return (
        <ul>
            {comics.map(item => {
                {/*Recorremos el array */ }

                //COGEMOS EL ID DEL COMIC
                let id = item.resourceURI //Guardo la URL entera
                console.log(id)
                id = id.slice(43, 48) //Me quedo solo con esa parte porque es donde está el id del comic
                console.log(id)

                return (
                //PONEMOS UN ENLACE QUE TE LLEVE AL COMIC. PARA ESO LE PASAMOS LA RUTA ESPECÍFICA DE CUANDO PINCHAMOS EN UN COMIC (/comicseleccionado) Y LE PASAMOS EL 
                // ID QUE HEMOS GUARDADO ANTES
                    <Link to={`/comicseleccionado/${id}`}>
                         {/*Enlace que muestra el nombre del comic y te lleva a la información del comic correspondiente*/ }
                        <li className="info__div__li info__div__li--link">{item.name}</li>
                    </Link>
                )

            }
            )}

        </ul>
    )

}

/* NO PONGO EL PROPTYPE DE COMICS PORQUE EL ARRAY TIENE MUCHOS DATOS */

export default ListaComics
