import React, { useState, useEffect } from 'react';

import {
  Paper, Grid, Box, Container,
  Typography, makeStyles, AppBar, Toolbar,
  IconButton, MenuItem
} from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#EBEBEB',
  },

  nav: {
    backgroundColor: 'white',
    height: '80px',
    color: 'black',
  },

  navRight: {
    position: 'fixed',
    top: '4px',
    right: '20px',
    width: '250px'
  },

  logo: {
    marginTop: '20px',
    color: '#009688',
    fontWeight: '700',
    fontFamily: 'Comfortaa, sans-serif',
  },

  loginUserContainer: {
    marginTop: '10px',
    float: 'left',
    textAlign: 'right'
  },

  avatarContainer: {
    float: 'right',
  },

  avatar: {
    width: '50px',
    height: 'auto',
    color: '#00C2B0'
  },

  gridContainer: {
    paddingTop: theme.spacing(13)
  },

  sideCard: {
    padding: theme.spacing(3),
    backgroundColor: 'white',
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
    marginBottom: theme.spacing(4)
  },

  chatSender: {
    fontSize: '0.8em'
  },

  chatContent: {

  },

  chatMe: {
    textAlign: 'right',
    backgroundColor: '#04BF7C',
    color: 'white'
  },

  chatClient: {
    backgroundColor: '#F5F5F5'
  },

  chatContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: '15px',
  },

  clientContainer: {
    padding: theme.spacing(2),
    position: 'relative',
  },

  clientCard: {
    padding: theme.spacing(3),
    backgroundColor: 'white',
    minHeight: '450px',
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
  },

  clientCardTitles: {
    marginTop: theme.spacing(3),
    color: '#555',
    fontSize: '0.8em',
    fontWeight: '700'
  },

  clientName: {
    color: '#2373BD',
    textTransform: 'uppercase',
    fontSize: '1.3em'
  },

  clientQuoteTitle: {
    marginTop: theme.spacing(10),
    textTransform: 'uppercase',
    fontWeight: '500'
  },

  clientQuote: {
    color: '#2373BD'
  }
}));

export default function DashboardPage() {

  const classes = useStyles();

  const [clientItems, setClientItems] = useState([]);
  const [currentStatus, setCurrentStatus] = useState([]);

  useEffect(() => {
    fetch('/api/clients/current').then(async (res) => {
      let resObj = await res.json();

      setCurrentStatus(resObj);
    })
  }, []);

  useEffect(() => {
    fetch('/api/clients').then(async (res) => {
      let resObj = await res.json();

      setClientItems(resObj);
    });
  }, []);

  let currentClient = {};
  if (currentStatus[0]) {
    currentClient.name = currentStatus[0].name;
    currentClient.chat = [...currentStatus[0].chat];

    if (currentStatus[0].isTyping) {
      currentClient.chat.push({sender: 'client', content: '...', time: Date()});
    }
  } else {
    currentClient.name = '';
    currentClient.chat = [];
    currentClient.isTyping = false;
  }

  return (
    <Box className={classes.container}>
      <AppBar position="fixed" className={classes.nav}>
        <Toolbar>
          <Typography variant='h4' className={classes.logo}>
            Genie
          </Typography>

          <Box className={classes.navRight}>
            <Box className={classes.loginUserContainer}>
              <Typography>
                You are signed in as...
              </Typography>
              <Typography variant='h6'>
                SPPRAX MEDIA
              </Typography>
            </Box>
            <IconButton className={classes.avatarContainer}>
              <AccountCircle className={classes.avatar}/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth={'lg'} className={classes.gridContainer}>
        <Grid container>
          <Grid item xs={false} sm={5} md={4}>
            <Grid container className={classes.clientContainer}>
              <Grid item xs={12} className={classes.sideCard}>
                <Typography variant='h5'>{currentStatus.length} Active Conversation{currentStatus.length == 1 ? '' : 's'}</Typography>
              </Grid>
              <Grid item xs={12} className={classes.sideCard}>
                <Typography variant='h5'>Current Conversation</Typography>
                <Typography variant='body2'>with {currentClient.name}</Typography>

                {currentClient.chat.map((chatMessage, index) => {
                  let sender = (chatMessage.sender == "client") ? currentClient.name : "Genie";

                  let toClass = (chatMessage.sender == "client") ? classes.chatClient : classes.chatMe;

                  return (
                    <Paper key={index} className={`${classes.chatContainer} ${toClass}`} elevation={0}>
                      <Typography variant="h6" className={classes.chatSender}>
                        {sender}
                      </Typography>
                      <Typography variant='body2' className={classes.chatContent}>
                        {chatMessage.content}
                      </Typography>
                    </Paper>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={7} md={8}>
            <Grid container>
              {clientItems.map((item, index) => {
                return (
                  <Grid item xs={12} md={6} key={index} className={classes.clientContainer}>
                    <Box className={classes.clientCard}>
                      <Typography className={classes.clientName}>
                        {item.name}
                      </Typography>

                      <Typography className={classes.clientCardTitles}>
                        Looking for...
                      </Typography>

                      <Typography>
                        {item.desc}
                      </Typography>

                      <Typography className={classes.clientCardTitles}>
                        Date/Location:
                      </Typography>

                      <Typography>
                        {item.date}, {item.location}
                      </Typography>

                      <Typography className={classes.clientCardTitles}>
                        Keywords:
                      </Typography>

                      <Typography>
                        {item.terms}
                      </Typography>

                      <Typography className={classes.clientCardTitles}>
                        Budget Estimate:
                      </Typography>

                      <Typography>
                        ${item.budgetEstimate[0]} - ${item.budgetEstimate[1]}
                      </Typography>

                      <Typography className={`${classes.clientCardTitles} ${classes.clientQuoteTitle}`}>
                        Quoted Amount:
                      </Typography>

                      <Typography className={classes.clientQuote}>
                        ${item.quoted}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>


    </Box>
  );
}
