import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    background: "none",
    fontFamily: "Newsreader",
  },
  icon: {
    color: "#FFEED6",
  },
  header: {
    color: "#FFEED6",
    fontSize: "1.5em",
    flexGrow: "1",
  },
  wrapper: {
    width: "90%",
    margin: "auto",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.AppBar} elevation={0}>
        <Toolbar className={classes.wrapper}>
          <h2 className={classes.header}>Guitars</h2>
          <IconButton>
            <SortIcon className={classes.icon}></SortIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
