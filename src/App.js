
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import {Header} from './components/header/header.component';
import {Section} from './components/section/section.component';
import Favicon from './assets/images/favicon.png';

import './scss/App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      programacion: []
    };
  }

  componentDidMount() {
    fetch("./data/programacion.json")
      .then((response) => response.json())
      .then((programacion) => this.setState({ programacion: programacion }));
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
        <Section maxWidth="xl">
          <div className="logo">
            <span>6 Y 7</span>
            <span>13 Y 14</span>
            <span>DE JUNIO</span>
          </div>
        </Section>
      </div>
    );
  }
}

export default App;