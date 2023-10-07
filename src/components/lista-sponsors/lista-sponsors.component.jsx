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
          <a href="https://www.enerc.gob.ar/" rel="noopener noreferrer" target="_blank">
            <img src="./assets/images/sponsors/2023/ENERC.png" width="100%" alt="ENERC" />
          </a>
        </Grid>
        <Grid item align="center" xs={6} sm={4} className="sponsor">
          <a href="https://www.incaa.gov.ar/" rel="noopener noreferrer" target="_blank">
            <img src="./assets/images/sponsors/2023/INCAA.png" width="100%" alt="INCAA" />
          </a>
        </Grid>
        <Grid item align="center" xs={6} sm={4} className="sponsor">
          <a href="https://www.argentina.gob.ar/cultura" rel="noopener noreferrer" target="_blank">
            <img src="./assets/images/sponsors/2023/CULTURAL.png" width="100%" alt="Ministerio de Cultura de la Nación" />
          </a>
        </Grid>
        <Grid item align="center" xs={6} sm={4} className="sponsor">
          <a href="https://www.instagram.com/prensacenerc" rel="noopener noreferrer" target="_blank">
            <img src="./assets/images/sponsors/2023/CENERC.png" width="50%" alt="CENERC" />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
