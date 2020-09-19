import React, { useState, useEffect } from 'react';

import {
  Paper, Grid, Box, Container,
  Typography, makeStyles, AppBar, Toolbar,
  IconButton, MenuItem, Tooltip,
  Accordion, AccordionSummary, AccordionDetails,
} from '@material-ui/core';


import Conversation from '../../components/Conversation';
import ClientCard from '../../components/ClientCard';


import AccountCircle from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import TimelineIcon from '@material-ui/icons/Timeline';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    backgroundColor: '#EBEBEB',
    paddingBottom: theme.spacing(4)
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

  optionsBar: {
    borderRadius: theme.spacing(1),
    backgroundColor: '#00C2B0',
    color: 'white',
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },

  optionsIcons: {
    textAlign: 'right'
  },

  gridContainer: {
    paddingTop: theme.spacing(13)
  },

  clientContainer: {
    padding: theme.spacing(2),
    position: 'relative',
  },

  sideCard: {
    padding: theme.spacing(3),
    backgroundColor: 'white',
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
    marginBottom: theme.spacing(4),
  }
}));

export default function DashboardPage() {

  const classes = useStyles();

  const [clientItems, setClientItems] = useState([]);
  const [currentStatus, setCurrentStatus] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    setCurrentStatus([]);
    const fetchCurrent = async () => {
      fetch('/api/clients/current').then(async (res) => {
        let resObj = await res.json();

        setCurrentStatus(resObj);
      });
    };

    fetchCurrent();

    const interval = setInterval(fetchCurrent, 3000);

    return () => clearInterval(interval);

  }, [refresh]);

  useEffect(() => {
    setClientItems([]);
    fetch('/api/clients').then(async (res) => {
      let resObj = await res.json();

      setClientItems(resObj);
    });
  }, [refresh]);

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

        <Box className={classes.optionsBar}>
          <Grid container alignItems='center'>
            <Grid item xs={4}>
              <Typography variant='h6'>Options</Typography>
            </Grid>
            <Grid item xs={8} className={classes.optionsIcons}>
              <Tooltip title="Analytics">
                <IconButton color='inherit'>
                  <TimelineIcon color='inherit' />
                </IconButton>
              </Tooltip>
              <Tooltip title="Refresh">
                <IconButton color='inherit' onClick={() => setRefresh(!refresh)}>
                  <AutorenewIcon color='inherit' />
                </IconButton>
              </Tooltip>

              <Tooltip title="Settings">
                <IconButton color='inherit'>
                  <SettingsIcon color='inherit' />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>

        </Box>



        <Grid container>
          <Grid item xs={false} sm={5} md={4}>
            <Grid container className={classes.clientContainer}>
              <Grid item xs={12} className={classes.sideCard}>
                <Typography variant='h5' display='inline'>{currentStatus.length} </Typography>
                <Typography variant='body2' display='inline'>Recent Conversation{currentStatus.length == 1 ? '' : 's'}</Typography>
              </Grid>

              {currentStatus.map((client, index) => {
                return (
                  <Conversation client={client} key={index} />
                );
              })}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={7} md={8}>
            <Grid container>
              {clientItems.map((item, index) => {
                return (
                  <Grid item xs={12} md={6} key={index} className={classes.clientContainer}>
                    <ClientCard item={item} />
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
