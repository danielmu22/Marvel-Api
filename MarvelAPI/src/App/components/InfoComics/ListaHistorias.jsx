import React from "react";

function ListaHistorias({ historias }) {
    //RECIBIMOS EL ARRAY QUE NOS HAN PASADO A TRAVÉS DE UNA PROP
    return(
        <ul>
            {historias.map(item =><li className="informacion__div__li">{item.name}</li>)}
            {/*Recorremos el array y mostramos el nombre de la historia relacionada*/}
   
       </ul>
       )

}

/* NO PONGO EL PROPTYPE DE STORIES PORQUE EL ARRAY TIENE MUCHOS DATOS */

export default ListaHistorias