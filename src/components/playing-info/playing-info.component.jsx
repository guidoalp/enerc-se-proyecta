import React from 'react';

export default class PlayingInfo extends React.Component { 

  addLineBreaks = (string) => (
    string.split('\n').map((text, index) => (
      <React.Fragment key={`${text}-${index}`}>
        {text}
        <br />
      </React.Fragment>
    ))
  );

  render() {
    if (this.props.programa.titulo !== "") {
      return (
        <div className="playing-info">
          <p><strong>Titulo:</strong> {this.props.programa.titulo} </p>
          <p><strong>Sinopsis:</strong> {this.props.programa.sinopsis} </p>
          <p><strong>Dirección:</strong> {this.props.programa.direccion} </p>
          <p><strong>Elenco:</strong> {this.props.programa.elenco} </p>
          <p><strong>Duración:</strong> {this.props.programa.duracion + '\''} </p>
          <p><strong>Género:</strong> {this.props.programa.genero} </p>
          <p><strong>Año:</strong> {this.props.programa.año} </p>
          <p><strong>Producción:</strong> {this.addLineBreaks(this.props.programa.produccion)} </p>
          <span><strong>Equipo Técnico</strong></span>
          <p>{this.addLineBreaks(this.props.programa.equipo_tecnico)} </p>
          <span><strong>Equipo ENERC</strong></span>
          <p>{this.addLineBreaks(this.props.programa.equipo_enerc)} </p>
        </div>
      )
    } else {
      return (<div></div>);
    }

  }
}