import React from 'react';
import {Helmet} from 'react-helmet';
import {Header} from './components/header/header.component';
import {Section} from './components/section/section.component'

import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <Helmet title="" />
      <Helmet>
        <meta charSet="utf-8" />
        <title>2' ENERC SE PROYECTA</title>
        <link rel="canonical" href="https://enercseproyecta.com.ar" />
        <meta name="description" content="Festival organizado integramente por alumnes de la Escuela Nacional de Experimentación y Realización Cinematográfica" />
      </Helmet>
      <Header />
      <Section maxWidth="false">
        <div className="logo">
          <span>2'</span>
          <span>ENERC</span>
          <span>SE</span>
          <span>PROYECTA</span>
        </div>
      </Section>
    </div>
  );
}

export default App;
