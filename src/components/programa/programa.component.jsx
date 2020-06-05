import React from 'react';
import './programa.styles.css';

export const Programa = (props) => (
  <div className="programa">
    <div className="informacion-principal">
      {props.programa.horario + "hs"} | {props.programa.titulo} | {props.programa.duracion + '\''}
    </div>
    <div className="categoria">
      {props.programa.tipo}
    </div>
  </div>
);