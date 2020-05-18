import React from 'react';
import {Helmet} from 'react-helmet';
import {Header} from './components/header/header.component';
import {Section} from './components/section/section.component'

import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <Helmet title="2' ENERC SE PROYECTA" />
      <Header />
      <Section>
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
