import React from 'react';

import {
  Paper, Grid, Box, Container, Typography, makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'red',
  },

  titleText: {
    textTransform: 'uppercase'
  }
}));

export default function ClientPage() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <h2 className={classes.titleText}>Client Page</h2>
    </Box>
  );
}
