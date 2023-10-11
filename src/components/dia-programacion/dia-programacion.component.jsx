import React from 'react';
import { useState } from 'react';
import { Programa } from '../programa/programa.component';
import data from "../../data/programacion-2023.json";
import './dia-programacion.styles.css';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';


export const Dia = ({sede}) => {

  const fecha = ["Sábado 7", "Domingo 8", "Lunes 9", "Martes 10", "Miércoles 11", "Jueves 12", "Viernes 13", "Sábado 14", "Domingo 15"];
  const lugar = ["Moreno 1199 (ENERC)", "Av. Rivadavia 1635 (Cine GAUMONT)"];
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
                <Programa key={index} fecha={fecha} data={filteredData} lugar={lugar}/>
            ))}
          </AccordionDetails>
    </Accordion>
  )

};