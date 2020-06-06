import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InstagramIcon from '@material-ui/icons/Instagram';

import './header-menu.styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: 0,
  },
  menuButton: {
    marginLeft: "auto",
    marginRight: 0,
    color: "#000",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HeaderMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#FFF' }}  elevation={0}>
        <Toolbar width="100%" style={{ justifyContent: 'flex-end' }}>
          <a href="https://instagram.com/enercseproyecta" rel="noopener noreferrer" target="_blank">
            <InstagramIcon fontSize="large" style={{ color: '#000' }} align="right" />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}