import React from 'react';
import { Dia } from '../dia-programacion/dia-programacion.component';
import './programacion.styles.css';

const sedes = ["AMBA", "NOA", "Cuyo", "Patagonia Norte", "NEA", "Rosario", "Comodoro Rivadavia"];
/*{ Object.entries(props.programacion).map((dia) => (
  <Dia key={dia[0]} dia={dia[0]} programas={dia[1]} />
))}*/

export const Programacion = () => (
  <div className="programacion">
    {sedes.map((sede, index) => (
      <Dia key={index} sede={sede}/>
    ))}
  </div>
);