import React from 'react';
import moment from 'moment';
import './programa.styles.css';

function checkVivo(dia, hora, duracion) {
  var res = "";
  var horario = moment(dia + ' ' + hora);
  var horarioFinal = moment(horario).add(duracion, 'm');
  var ahora = moment();

  if (ahora.isBetween(horario, horarioFinal)) {
    res = " activo";
  };

  return res;
}

function programaInfo(tipo, direccion, duracion) {
  var res;
  if (tipo === 'Charlas' || tipo === 'charlas') {
    res = ' por ' + direccion;
  } else {
    res = ' de ' + direccion + ' | ' + duracion + '\'';
  }
  return res;
}

export const Programa = (props) => (
  <div className={ 'programa' + checkVivo(props.programa.dia, props.programa.horario, props.programa.duracion) }>
    <div className="informacion-principal">
      <span className="hora">{moment(props.programa.horario, "HH:mm:ss").format("HH:mm") + "hs | "}</span>
      <span className="titulo-duracion">
        {props.programa.titulo } {programaInfo(props.programa.tipo, props.programa.direccion, props.programa.duracion)}
      </span>
    </div>
    <div className="categoria">
      {props.programa.tipo}
    </div>
  </div>
);