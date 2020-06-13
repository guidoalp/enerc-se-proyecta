import React, { Component } from 'react';

import {Helmet} from 'react-helmet';
import moment from 'moment';

import {Header} from './components/header/header.component';
import {Section} from './components/section/section.component';
import {Programacion} from './components/programacion/programacion.component';
import {Chat} from './components/chat/chat.component';
import ListaSponsors from './components/lista-sponsors/lista-sponsors.component';
import ListaEquipo from './components/lista-equipo/lista-equipo.component';
import PlayingInfo from './components/playing-info/playing-info.component';

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

  componentDidMount() {
    fetch("./data/programacion.json")
      .then((response) => response.json())
      .then((programacion) => this.setState({ filteredProgramacion : this.groupBy(programacion, 'dia') }, this.setState({'programacion' : programacion}), this.setVivo(programacion)));

      this.interval = setInterval(() => this.updateVivo(), 6000);
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>2' ENERC SE PROYECTA | Edición Online | 2020</title>
          <link rel="canonical" href="https://enercseproyecta.com.ar" />
          <meta name="description" content="Festival organizado integramente por alumnes de la Escuela Nacional de Experimentación y Realización Cinematográfica." />
          <link rel="icon" type="image/png" href={Favicon} sizes="16x16" />
        </Helmet>
        <Header />
        <Section maxWidth="xl">
          <div className="logo">
            <span>2’</span>
            <span>ENERC</span>
            <span>SE</span>
            <span>PROYECTA</span>
          </div>
        </Section>
        <Section className="border-bottom" maxWidth="lg">
          <h2>Ver</h2>
          <div className="streaming-player">
            <iframe className="streaming-player" title="streaming-player" src="https://player.twitch.tv/?channel=prensacenerc&parent=enercseproyecta.com.ar&autoplay=false" frameBorder="0" allowFullScreen={true} scrolling="no" height="600" width="100%"></iframe>
          </div>
          <PlayingInfo programa={this.state.vivo} />
        </Section>
        <Section className="border-bottom" maxWidth="lg">
          <h2>Chat</h2>
          <Chat />
        </Section>
        <Section className="border-bottom" maxWidth="lg">
          <h2>Programación</h2>
          <Programacion programacion={this.state.filteredProgramacion} />
        </Section>
        <Section className="border-bottom" maxWidth="lg">
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