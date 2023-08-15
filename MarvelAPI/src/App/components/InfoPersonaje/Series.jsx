import React from "react";

function Series({ series }) {
    //RECIBIMOS EL ARRAY QUE NOS HAN PASADO A TRAVÉS DE UNA PROP
    return(
     <ul>
         {series.map(item =><li className="info__div__li">{item.name}</li>)}
         {/*Recorremos el array y mostramos el nombre de la serie de comics*/}

    </ul>
    )

}

/* NO PONGO EL PROPTYPE DE SERIES PORQUE EL ARRAY TIENE MUCHOS DATOS */

export default Series