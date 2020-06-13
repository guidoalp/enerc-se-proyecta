import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './lista-equipo.styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function ListaSponsors() {
  const classes = useStyles();

  return (
    <div className={classes.root + " lista-equipo"} >
      <Grid container spacing={0}  justify="center"
      alignItems="center">
        <Grid item align="center" xs={12} sm={12} className="rol">
          <h3>Coordinación General</h3>
          <p>Alma Holovatuck</p>
          <p>Guido Alpern</p>
        </Grid>
        <Grid item align="center" xs={12} sm={12} className="rol">
          <h3>Programación</h3>
          <p>Lucía Olazábal</p>	
          <p>Alma Holovatuck</p>	
          <p>Virginia Giovachini</p>
          <p>Lucía Iusem</p>
          <p>Alejandra Ternengo</p>
        </Grid>
        <Grid item align="center" xs={12} sm={12} className="rol">
          <h3>Redes</h3>
          <p>Lucía Olazábal</p>	
        </Grid>
        <Grid item align="center" xs={12} sm={12} className="rol">
          <h3>Charlas</h3>
          <p>Martín Paglione</p>	
          <p>Virginia Giovachini</p>	
        </Grid>
        <Grid item align="center" xs={12} sm={12} className="rol">
          <h3>Gráfica</h3>
          <p>Natalia Atencio</p>			
          <p>Camila Epstein</p>
          <p>Sofía Fren</p>
          <p>Paula Robles</p>
          <p>Morena Celuce</p>
        </Grid>
        <Grid item align="center" xs={12} sm={12} className="rol">
          <h3>Transcoding</h3>
          <p>Dante Pierini</p>
          <p>Ciro Zanela</p>
          <p>Gastón Ferrari</p>
          <p>Ioni Schatz</p>
          <p>Luciano Robba</p>
          <p>Julián Patiño</p>
        </Grid>
        <Grid item align="center" xs={12} sm={12} className="rol">
          <h3>Streaming</h3>
          <p>Joaquín Pesce</p>
        </Grid>
        <Grid item align="center" xs={12} sm={12} className="rol">
          <h3>Publicidades</h3>
          <p>Malena Medel</p>			
          <p>Bruno Conde</p>
          <p>Luciano Ávila</p>
        </Grid>
        <Grid item align="center" xs={12} sm={12} className="rol">
          <h3>Desarrollo Web</h3>
          <p>Guido Alpern</p>
        </Grid>
        <Grid item align="center" xs={12} sm={12} className="rol">
          <h3>Sponsors</h3>
          <p>Guido Chapto</p>
          <p>Martín Paglione</p>
        </Grid>
        <Grid item align="center" xs={12} sm={12} className="rol">
          <h3>Asesoramiento</h3>
          <p>Florencia Guadalupe Velozo</p>
        </Grid>
      </Grid>
    </div>
  );
}
