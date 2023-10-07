import React from 'react';
import Container from '@material-ui/core/Container';
import './section.styles.css';

export const Section = (props) => {

  const clase = props.clase;

  return(
    <section className={`section ${clase}`}>
      <Container maxWidth={props.maxWidth}>
        {props.children}
      </Container>
    </section>
  )
};