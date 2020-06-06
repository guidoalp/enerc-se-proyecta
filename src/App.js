import React, { Component } from 'react';

import {Helmet} from 'react-helmet';

import {Header} from './components/header/header.component';
import {Section} from './components/section/section.component';
import {Programacion} from './components/programacion/programacion.component';
import {Chat} from './components/chat/chat.component';

import Favicon from './assets/images/favicon.png';
import './scss/App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filteredProgramacion: [],
      time: 0,
    };
  }

  groupBy (xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
  };
  

  componentDidMount() {
    fetch("./data/programacion.json")
      .then((response) => response.json())
      .then((programacion) => this.setState({ filteredProgramacion : this.groupBy(programacion, 'dia') }));

      this.interval = setInterval(() => this.setState({ time: Date.now() }), 6000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
            <iframe width="100%" height="600" title="streaming-player" className="streaming-player" src="https://www.youtube.com/embed/owuu2ZJnPwI?rel=0&showinfo=0&modestbranding=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </Section>
        <Section className="border-bottom" maxWidth="lg">
          <h2>Chat</h2>
          <Chat />
        </Section>
        <Section className="border-bottom" maxWidth="lg">
          <h2>Programación</h2>
          <Programacion programacion = {this.state.filteredProgramacion} />
        </Section>
      </div>
    );
  }
}

export default App;