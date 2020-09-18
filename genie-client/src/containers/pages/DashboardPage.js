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
    const status = [
      {
        name: "Taylor Smith",
        isTyping: true,
        chat: [
          {
            sender: 'genie',
            time: '10:11 PM',
            content: 'Hey there! How may we help you here at Josh Fowlers Photography?'
          },
          {
            sender: 'client',
            time: '10:13 PM',
            content: 'Hey there, my name is Taylor and I’m looking for a wedding photographer for my mate’s wedding'
          },
          {
            sender: 'client',
            time: '10:13 PM',
            content: 'It’s going to be out in Te Puke, and I’m hoping to find about 7 hours of coverage (just for the ceremony and until the first dance)'
          },
          {
            sender: 'genie',
            time: '10:14 PM',
            content: 'Great! We can help with that. When is your mate’s wedding date?'
          },
          {
            sender: 'client',
            time: '10:15 PM',
            content: 'Oh yup, it’s going to be on the 21st June next year.'
          }
        ]
      },
      {
        name: "Bob Stone",
        isTyping: true,
        chat: [
          {
            sender: 'genie',
            time: '10:14 PM',
            content: 'Great! We can help with that. When is your mate’s wedding date?'
          },
          {
            sender: 'client',
            time: '10:15 PM',
            content: 'Oh yup, it’s going to be on the 21st June next year.'
          }
        ]
      },

    ];

    setCurrentStatus(status);
  }, []);

  useEffect(() => {
    const clients = [
      {
        name: "Apia Tuhoe",

        desc: "Wedding Photography",
        date: "21st of June, 2021",
        location: "Te Puke, Hamilton",
        terms: "Wedding, Western, Full day coverage",
        budgetEstimate: [1500, 2200],

        quoted: 2149
      },
      {
        name: "John Cena",

        desc: "Event Photography",
        date: "1st of Jan, 2021",
        location: "Spark Arena, Auckland",
        terms: "Event, Boxing, Ticketed Event",
        budgetEstimate: [5500, 8000],

        quoted: 6500
      },
      {
        name: "Kardeep Singh",

        desc: "Wedding Videography",
        date: "22nd of July, 2021",
        location: "Helensville, Auckland",
        terms: "Wedding, Half day, Video",
        budgetEstimate: [1000, 1500],

        quoted: 1500
      },
      {
        name: "Parker Brown",

        desc: "Wedding Photography",
        date: "10th of May, 2021",
        location: "Red Barn, Huntly",
        terms: "Wedding",
        budgetEstimate: [1500, 2200],

        quoted: 1999
      },
      {
        name: "Jennifer Akai",

        desc: "Music Video",
        date: "-",
        location: "Las Vegas",
        terms: "Music video, narrative, big budget",
        budgetEstimate: [10000, 15000],

        quoted: 12000
      }
    ]

    setClientItems(clients);

    // fetch('/api/clients').then(async (res) => {
    //   let resObj = await res.json();
    //
    //   setClientItem(resObj);
    // }
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
