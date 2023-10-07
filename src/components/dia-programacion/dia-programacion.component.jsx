import React from 'react';
import { useState } from 'react';
import { Programa } from '../programa/programa.component';
import data from "../../data/programacion-2023.json";
import './dia-programacion.styles.css';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';


/*const dias = new Map([
  ["2020-06-06", "Día 1"],
  ["2020-06-07", "Día 2"],
  ["2020-06-13", "Día 3"],
  ["2020-06-14", "Día 4"],
]);*/


export const Dia = ({sede}) => {

  const fecha = ["Sábado 7", "Domingo 8", "Lunes 9", "Martes 10", "Miércoles 11", "Jueves 12", "Viernes 13", "Sábado 14", "Domingo 15"];
  
  const filteredData = data.filter(item => item.sede === sede);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return(
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary className={`dia-${sede} dia`}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
            {sede}
          </AccordionSummary>
          <AccordionDetails className='programa-desplegado'>
            {fecha.map((fecha, index) => (
                <Programa key={index} fecha={fecha} data={filteredData}/>
            ))}
          </AccordionDetails>
    </Accordion>
  )

};