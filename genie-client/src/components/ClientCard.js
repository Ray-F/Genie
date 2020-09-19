import React from 'react';

import {
  Paper, Grid, Box, Container,
  Typography, makeStyles, AppBar, Toolbar,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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

export default function ClientCard(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.clientCard}>
        <Typography className={classes.clientName}>
          {props.item.name}
        </Typography>

        <Typography className={classes.clientCardTitles}>
          Looking for...
        </Typography>

        <Typography>
          {props.item.desc}
        </Typography>

        <Typography className={classes.clientCardTitles}>
          Date/Location:
        </Typography>

        <Typography>
          {props.item.date}, {props.item.location}
        </Typography>

        <Typography className={classes.clientCardTitles}>
          Keywords:
        </Typography>

        <Typography>
          {props.item.terms}
        </Typography>

        <Typography className={classes.clientCardTitles}>
          Budget Estimate:
        </Typography>

        <Typography>
          ${props.item.budgetEstimate[0]} - ${props.item.budgetEstimate[1]}
        </Typography>

        <Typography className={`${classes.clientCardTitles} ${classes.clientQuoteTitle}`}>
          Quoted Amount:
        </Typography>

        <Typography className={classes.clientQuote}>
          ${props.item.quoted}
        </Typography>
      </Box>
    </React.Fragment>
  )
}
