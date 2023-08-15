import React from "react";
import PropTypes from "prop-types";

function Precio({ precios }) {
    //RECIBIMOS EL ARRAY QUE NOS HAN PASADO A TRAVÉS DE UNA PROP
    return (precios.map(item => {
        {/*Recorremos el array*/}

        //PONEMOS EL TIPO DE PRECIO EN MAYUSCULAS
        let url = item.type
        let enlace = url.toUpperCase()
        return (<p className="informacion__div__p">- {enlace}: {item.price} €</p>) //Mostramos el tipo de precio y el precio
    }))
}

//COMO EL ARRAY TIENE POCOS DATOS, LE METEMOS UNA "VALIDACIÓN" A LAS PROPS QUE NOS PASAN
Precio.propTypes = {
    precios: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        price: PropTypes.number,
    }))
}

export default Precio