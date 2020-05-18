import React from 'react';
import Container from '@material-ui/core/Container';
import './section.styles.css';

export const Section = (props) => (
  <section className="section">
    <Container>
      {props.children}
    </Container>
  </section>
);