import React from "react";
import PropTypes from "prop-types";

function URL({ enlaces }) {
    //RECIBIMOS EL ARRAY QUE NOS HAN PASADO A TRAVÉS DE UNA PROP
    return (enlaces.map(item => {
        {/*Recorremos el array*/}

        //PONEMOS EL TIPO DE ENLACE EN MAYUSCULAS
        let url = item.type
        let enlace = url.toUpperCase()
        return (
            //Mostramos el tipo de enlace y si pinchas te lleva a la página
            <center><a href={item.url} target="_blank" className="informacion__div__li info__a">{enlace}<br /><br /></a></center>
        )
    }
    ))
}

//COMO EL ARRAY TIENE POCOS DATOS, LE METEMOS UNA "VALIDACIÓN" A LAS PROPS QUE NOS PASAN
URL.propTypes = {
    enlaces: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        url: PropTypes.string,
    }))
}

export default URL