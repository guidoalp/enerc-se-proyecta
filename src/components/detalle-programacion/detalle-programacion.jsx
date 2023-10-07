import React from 'react';
import './detalle-programacion.css';

export const Detalle = ({ item }) => {
    const autor = () => {
        return item.autor ? true : false;
    };
    
    const invitado = () => {
        return item.Invitado ? true : false;
    }

    return(
        <div>
            <div className='detalle'>
                {item.hora} | {item.titulo}{autor() ? `, de ${item.autor}` : ""}{invitado() ? `, con ${item.Invitado}` : ""}
                <div className='tipo'>{item.tipo}</div>
            </div>
        </div>
    )
};