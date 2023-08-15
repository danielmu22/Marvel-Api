import React from "react";

function Eventos({ eventos }) {
    //RECIBIMOS EL ARRAY QUE NOS HAN PASADO A TRAVÉS DE UNA PROP
    return (
        <div className="centrar">
            <ul>
                {eventos.map(item =><li className="info__div__li--sinPunto">{item.name}</li>)}
                {/*Recorremos el array y mostramos el nombre del evento*/}

            </ul>
        </div>

    )

}

/* NO PONGO EL PROPTYPE DE EVENTOS PORQUE EL ARRAY TIENE MUCHOS DATOS */

export default Eventos