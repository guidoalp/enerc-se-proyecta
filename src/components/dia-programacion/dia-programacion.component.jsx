import React from 'react';
import { Programa } from '../programa/programa.component';
import './dia-programacion.styles.css';

const dias = new Map([
  ["06-06-2020", "Día 1"],
  ["07-06-2020", "Día 2"],
  ["13-06-2020", "Día 3"],
  ["14-06-2020", "Día 4"],
]);

export const Dia = (props) => (
  <div className="dia">
    <h2>{dias.get(props.fecha)}</h2>
    {props.programas.map((programa) => (
      <Programa key={programa.id} programa={programa} />
    ))}
  </div>
);