import React, { Component } from 'react';

import {Helmet} from 'react-helmet';
import moment from 'moment';

import {Header} from './components/header/header.component';
import {Section} from './components/section/section.component';
import {Programacion} from './components/programacion/programacion.component';
import ListaSponsors from './components/lista-sponsors/lista-sponsors.component';
import ListaEquipo from './components/lista-equipo/lista-equipo.component';

import Favicon from './assets/images/favicon.png';
import './scss/App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filteredProgramacion: [],
      time: 0,
      vivo: {
        titulo: "",
        sinopsis: "",
        duracion: "",
        elenco: "",
        genero: "",
        año: "",
        produccion: "",
        equipo_tecnico: "",
        equipo_enerc: ""
      }
    };
  }

  groupBy (xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
  };

  checkVivo(dia, hora, duracion) {
    var horario = moment(dia + ' ' + hora);
    var horarioFinal = moment(horario).add(duracion, 'm');
    var ahora = moment();
  
    return ahora.isBetween(horario, horarioFinal);
  }
  
  setVivo() {
    var programacion = this.state.programacion;
    var today = moment().format("YYYY-MM-DD");
    const todayProgramas = programacion.filter(programa => moment(programa.dia + " " + programa.horario, "YYYY-MM-DD").isSame(today));
    const programaActual = todayProgramas.find(programa => this.checkVivo(programa.dia, programa.horario, programa.duracion));
    if (programaActual && programaActual.tipo !== 'Charlas' && programaActual.tipo !== 'charlas') {
      this.setState( { 'vivo' : programaActual});
    }
  }

  updateVivo() {
    this.setState({ time: Date.now() });
    if (this.state.programacion) {
      this.setVivo();
    }
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>3° ENERC SE PROYECTA | Edición Online | 2023</title>
          <link rel="canonical" href="https://enercseproyecta.com.ar" />
          <meta name="description" content="Festival organizado integramente por alumnes de la Escuela Nacional de Experimentación y Realización Cinematográfica." />
          <link rel="icon" type="image/png" href={Favicon} sizes="16x16" />
        </Helmet>
        <Header />
        <Section maxWidth="xl"  clase="seccion-logo">
          <div className="logo">
            <span>3°</span>
            <span>ENERC</span>
            <span>SE</span>
            <span>PROYECTA</span>
          </div>
        </Section>
        <Section className="border-bottom" maxWidth="lg">
          <h2>Programación</h2>
          <Programacion />
        </Section>
        <Section className="border-bottom">
          <h2>Sponsors</h2>
          <ListaSponsors />
        </Section>
        <Section className="border-bottom" maxWidth="lg">
          <h2>Equipo</h2>
          <ListaEquipo />
        </Section>
      </div>
    );
  }
}

export default App;