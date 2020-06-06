import React from 'react';
import { Programa } from '../programa/programa.component';
import './dia-programacion.styles.css';

const dias = new Map([
  ["2020-06-06", "Día 1"],
  ["2020-06-07", "Día 2"],
  ["2020-06-13", "Día 3"],
  ["2020-06-14", "Día 4"],
]);

export const Dia = (props) => (
  <div className="dia">
    <h2>{dias.get(props.dia)}</h2>
    {props.programas.map((programa, index) => (
      <Programa key={index} programa={programa} />
    ))}
  </div>
);