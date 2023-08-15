import React from "react";

function Creadores({ creadores }) {
    //RECIBIMOS EL ARRAY QUE NOS HAN PASADO A TRAVÉS DE UNA PROP
    return(
        <ul>
            {creadores.map(item =><li className="informacion__div__li">{item.name} ({item.role})</li>)}
            {/*Recorremos el array y mostramos el nombre del creador y su rol*/}
   
       </ul>
       )

}

/* NO PONGO EL PROPTYPE DE CREADORES PORQUE EL ARRAY TIENE MUCHOS DATOS */

export default Creadores