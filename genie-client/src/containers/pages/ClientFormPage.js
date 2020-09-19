import React from 'react';

import {
  Paper,
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Link,
} from "@material-ui/core";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#EBEBEB",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  backButton: {
    marginRight: theme.spacing(2),
    color: "#009688",
  },

  title: {
    flexGrow: 1,
    margin: 24,
    fontSize: 36,
    color: "#009688",
    fontWeight: 420,
  },
}));

export default function ClientFormPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <a href="/client">
            <IconButton
              edge="start"
              className={classes.backButton}
              color="inherit"
              aria-label="back"
            >
              <ArrowBackIcon />
            </IconButton>
          </a>

          <Typography variant="h2" className={classes.title}>
            Genie Form
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
