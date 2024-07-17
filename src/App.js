import React, { Component } from 'react';

import {Helmet} from 'react-helmet';

import Favicon from './assets/images/favicon.png';
import './scss/App.scss';

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>4° ENERC SE PROYECTA | Redirigiendo... </title>
          <link rel="canonical" href="https://enercseproyecta.com.ar" />
          <meta name="description" content="Festival organizado integramente por alumnes de la Escuela Nacional de Experimentación y Realización Cinematográfica." />
          <link rel="icon" type="image/png" href={Favicon} sizes="16x16" />
        </Helmet>
      </div>
    );
  }
}

export default App;