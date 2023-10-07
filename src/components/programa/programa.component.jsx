import React from 'react';
import { Detalle } from '../detalle-programacion/detalle-programacion';
import { AccordionDetails } from '@material-ui/core';
import './programa.styles.css';

export const Programa = ({ fecha, data }) => {
  
  const filteredData = data.filter(item => item.fecha === fecha);

  return(
    <AccordionDetails className='programa-seccion'>
      <div className='fecha'>
        | {fecha}
      </div>
      {filteredData.map(item => (
        <Detalle key={item.id} item={item} />
        ))}
    </AccordionDetails>
  )
};