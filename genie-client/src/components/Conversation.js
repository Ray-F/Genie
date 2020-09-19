import React, {useState, useEffect} from 'react';

import {
  Paper, Grid, Box, Container,
  Typography, makeStyles, AppBar, Toolbar,
  IconButton, MenuItem, Accordion, AccordionSummary, AccordionDetails,
  List
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  sideCard: {
    padding: theme.spacing(3),
    backgroundColor: 'white',
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
    marginBottom: theme.spacing(4),
  },

  chatAccordion: {
    padding: theme.spacing(1),
    marginTop: '0 !important',
    marginBottom: `32px !important`,

    '&:before': {
      display: 'none',
    }
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
}));

export default function Conversation(props) {

  const classes = useStyles();

  const [clientChat, setClientChat] = useState([]);

  useEffect(() => {
    if (props.client.isTyping) {
      setClientChat([...props.client.chat, {sender: 'client', content: '...', time: Date()}]);
    }
  }, []);



  return (
    <Accordion className={`${classes.sideCard} ${classes.chatAccordion}`}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Box>
          <Typography variant='h5'>Current Conversation</Typography>
          <Typography variant='body2'>with {props.client.name}</Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container>
          <Grid item xs={12}>
            {clientChat.map((chatMessage, index) => {
              let sender = (chatMessage.sender == "client") ? props.client.name : "Genie";

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
      </AccordionDetails>
    </Accordion>
  );
}
