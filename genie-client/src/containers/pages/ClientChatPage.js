import React, {useEffect} from 'react';

import {
  Paper, Grid, Box, Container,
  Typography, makeStyles, AppBar,
  Toolbar, IconButton, Link
} from '@material-ui/core';

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Image from '../../resources/images/sppraxMediaBackground.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#EBEBEB",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundImage: `url(${Image})`,

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

export default function ClientChatPage() {
  const classes = useStyles();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = 'text/javascript';
    script.src = "https://widget.instabot.io/jsapi/rokoInstabot.js";
    script.crossorigin = true;
    script.innerHTML = 'apiKey: "iNaFp81BQM6TBmzFj0pYR9kFP3JjQiayjSEsIjIoedk="';

    script.onload = () => {
      console.log(window.RokoInstabot);
      window.RokoInstabot.trigger();
    }

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    }
  }, []);

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
            Genie Chat
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
