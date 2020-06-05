import React from 'react';
import { Dia } from '../dia-programacion/dia-programacion.component';
import './programacion.styles.css';

export const Programacion = (props) => (
  <div className="programacion">
    { Object.entries(props.programacion).map((dia) => (
      <Dia key={dia[0]} fecha={dia[0]} programas={dia[1]} />
    ))}
  </div>
);