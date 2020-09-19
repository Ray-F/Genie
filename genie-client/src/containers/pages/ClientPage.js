import React from 'react';

//Core
import {
  Paper, Grid, Box, Container, Typography, makeStyles, AppBar, Toolbar, IconButton, Link
} from '@material-ui/core';

//Icons
import ChatIcon from "@material-ui/icons/Chat";
import CallIcon from "@material-ui/icons/Call";
import BallotIcon from "@material-ui/icons/Ballot";

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

  title: {
    flexGrow: 1,
    margin: 24,
    fontSize: 36,
    color: "#009688",
    fontWeight: 420,
  },

  menuTitle: {
    fontSize: 36,
    color: "#009688",
    fontWeight: 420,
    textAlign: "center",
    marginTop: 120,
  },

  menuContainer: {
    textAlign: "center",
  },

  iconButton: {
    borderRadius: "1000px",
    background: "#04BF7C",
    margin: 50,
    height: 240,
    width: 240,
  },

  icon: {
    fontSize: 72,
    color: "white",
  },
}));

export default function ClientPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h2" className={classes.title}>
            Genie
          </Typography>
        </Toolbar>
      </AppBar>

      <Typography variant="h2" className={classes.menuTitle}>
        Input method
      </Typography>

      <div className={classes.menuContainer}>
        <a href="/client/chat">
          <IconButton
            className={classes.iconButton}
            onClick={() => {}}
            aria-label="ChatIcon"
          >
            <ChatIcon className={classes.icon} />
          </IconButton>
        </a>
        <a href="/client/form">
          <IconButton
            className={classes.iconButton}
            onClick={() => {}}
            aria-label="FormIcon"
          >
            <BallotIcon className={classes.icon} />
          </IconButton>
        </a>

        <a href="/client/call">
          <IconButton
            className={classes.iconButton}
            onClick={() => {}}
            aria-label="CallIcon"
          >
            <CallIcon className={classes.icon} />
          </IconButton>
        </a>
      </div>
    </div>
  );
}
