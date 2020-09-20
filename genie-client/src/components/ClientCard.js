import React, { useState, useEffect } from "react";

import {
  Paper, Grid, Box, Container,
  Typography, makeStyles, AppBar, Toolbar, IconButton, Tooltip, Menu
} from '@material-ui/core';

import CheckIcon from "@material-ui/icons/Check";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArchiveIcon from "@material-ui/icons/Archive";
import ClearIcon from "@material-ui/icons/Clear";
import ConversationIcon from "@material-ui/icons/Forum";

const useStyles = makeStyles((theme) => ({
  clientCard: {
    position: "relative",
    padding: theme.spacing(3),
    backgroundColor: "white",
    minHeight: "450px",
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
  },

  clientCardTopLine: {

  },

  clientCardTitles: {
    marginTop: theme.spacing(3),
    color: "#555",
    fontSize: "0.8em",
    fontWeight: "700",
  },

  clientName: {
    color: "#2373BD",
    textTransform: "uppercase",
    fontSize: "1.3em",
    display: "inline-block",
  },

  clientStatus: {
    display: "inline-block",
    textTransform: "uppercase",
    float: "right",
    fontWeight: 420,
  },

  clientQuoteTitle: {
    marginTop: theme.spacing(10),
    textTransform: "uppercase",
    fontWeight: "500",
  },

  clientQuote: {
    color: "#2373BD",
  },

  bottomRow: {
    position: "absolute",
    bottom: "20px",
    width: "100%",
  },

  optionsContainer: {
    position: "absolute",
    bottom: "-10px",
    right: "30px",
  },
}));

export default function ClientCard(props) {
  const classes = useStyles();

  const [deleted, setDeleted] = useState(false);
  const [approved, setApproved] = useState(false);

  // wtf do i do now?!?!
  useEffect(() => {
    console.log("deleted");
  }, [deleted]);

  useEffect(() => {
    console.log("approved");
  }, [approved]);

  const handleApprove = () => {
    // upload an invoice to our myob account
    // send an approval email to client
    setApproved(!approved);
  };

  const handleDelete = () => {
    // delete request from database
    setDeleted(!deleted);
  };

  return (
    <React.Fragment>
      <Box className={classes.clientCard}>
        <Box className={classes.clientCardTopLine}>
          <Typography className={classes.clientName}>
            {props.item.name}
          </Typography>

          <Typography className={classes.clientStatus}>
            {props.item.status}
          </Typography>
        </Box>

        <Typography className={classes.clientCardTitles}>
          Looking for...
        </Typography>

        <Typography>{props.item.desc}</Typography>

        <Typography className={classes.clientCardTitles}>
          Date/Location:
        </Typography>

        <Typography>
          {props.item.date}, {props.item.location}
        </Typography>

        <Typography className={classes.clientCardTitles}>Keywords:</Typography>

        <Typography>{props.item.terms}</Typography>

        <Typography className={classes.clientCardTitles}>
          Budget Estimate:
        </Typography>

        <Typography>
          ${props.item.budgetEstimate[0]} - ${props.item.budgetEstimate[1]}
        </Typography>

        <Box className={classes.bottomRow}>
          <Box>
            <Typography
              className={`${classes.clientCardTitles} ${classes.clientQuoteTitle}`}
            >
              Quoted Amount:
            </Typography>

            <Typography className={classes.clientQuote}>
              ${props.item.quoted}
            </Typography>
          </Box>

          <Box className={classes.optionsContainer}>
            <Tooltip title="Approve">
              <IconButton onClick={handleApprove}>
                <CheckIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Decline">
              <IconButton onClick={handleDelete}>
                <ClearIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Archive">
              <IconButton onClick={handleDelete}>
                <ArchiveIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="History">
              <IconButton>
                <ConversationIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="More">
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
