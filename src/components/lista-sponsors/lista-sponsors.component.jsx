import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './lista-sponsors.styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function ListaSponsors() {
  const classes = useStyles();

  return (
    <div className={classes.root + " lista-sponsors"} >
      <Grid container spacing={0}  justify="center"
      alignItems="center">
        <Grid item align="center" xs={6} sm={4} className="sponsor">
          <a href="https://vorknews.com.ar" rel="noopener noreferrer" target="_blank">
            <img src="./assets/images/sponsors/logo-vork.svg" width="100%" alt="Vork Estudio" />
          </a>
        </Grid>
        <Grid item align="center" xs={6} sm={4} className="sponsor">
          <a href="http://bumaudio.com/" rel="noopener noreferrer" target="_blank">
            <img src="./assets/images/sponsors/logo-bum.png" width="100%" alt="Bum! Audio" />
          </a>
        </Grid>
        <Grid item align="center" xs={6} sm={4} className="sponsor">
          <a href="https://www.enchulamerental.com/" rel="noopener noreferrer" target="_blank">
            <img src="./assets/images/sponsors/logo-enchulame.png" width="100%" alt="Enchulame la cámara Rental" />
          </a>
        </Grid>
        <Grid item align="center" xs={6} sm={4} className="sponsor">
          <a href="https://lapianola.com.ar/" rel="noopener noreferrer" target="_blank">
            <img src="./assets/images/sponsors/logo-pianola.svg" width="100%" alt="La Pianola - Productora Audiovisual" />
          </a>
        </Grid>
        <Grid item align="center" xs={6} sm={4} className="sponsor">
          <a href="https://www.instagram.com/mayolicas/" rel="noopener noreferrer" target="_blank">
            <img src="./assets/images/sponsors/logo-mayolicas.svg" width="100%" alt="Mayolicas" />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
