import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
        <Toolbar>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}