import React from 'react';
import PropTypes from 'prop-types';

export const TercerComponente = ({nombre, apellidos, ficha}) => {


  return (
    <div>
      <h1>TercerComponente</h1>
      <ul>
        <li>{nombre}</li>
        <li>{apellidos}</li>
        <li>{ficha.altura}</li>
        <li>{ficha.estado}</li>
      </ul>
     
    </div>
  )
}

TercerComponente.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellidos: PropTypes.string,
  ficha: PropTypes.object,
}

// Valores por defecto. Aunque los puedo poner como valor por defecto en el parámetro.
TercerComponente.defaultProps = {
  nombre: 'Juan',
  apellidos: 'Martinez',
  
}


