import React, { Component } from 'react';

import {Helmet} from 'react-helmet';

import {Header} from './components/header/header.component';
import {Section} from './components/section/section.component';
import {Programacion} from './components/programacion/programacion.component';
import ListaSponsors from './components/lista-sponsors/lista-sponsors.component';

import Favicon from './assets/images/favicon.png';
import './scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>3° ENERC SE PROYECTA | 2023</title>
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
        <Section className="border-bottom" clase="seccion-sponsors">
          <ListaSponsors />
        </Section>
      </div>
    );
  }
}

export default App;