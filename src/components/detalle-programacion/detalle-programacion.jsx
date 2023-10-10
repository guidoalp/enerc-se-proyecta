import React from 'react';
import './detalle-programacion.css';

export const Detalle = ({ item }) => {
    const autor = () => {
        return item.autor ? true : false;
    };
    
    const invitado = () => {
        return item.Invitado ? true : false;
    }

    const tipo = () => {
        return item.tipo ? true : false;
    }

    const direccion = () => {
        return item.direccion ? true : false;
    }
    const lugar = () => {
        return item.lugar ? true : false;
    }

    return(
        <div>
            <div className='detalle'>
                {item.hora} | {item.titulo}{autor() ? `, de ${item.autor}` : ""}{invitado() ? `, con ${item.Invitado}` : ""}
                <div className='tipo'>{tipo() ? ` ${item.tipo}` : ""}{direccion() ? ` | ${item.direccion}` : ""}{lugar() ? ` | ${item.lugar}` : ""}</div>
            </div>
        </div>
    )
};