import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  App: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Newsreader",
    height: "100vh",
    width: "100vw",
  },
  AppBar: {
    background: "none",
    fontFamily: "Newsreader",
  },
  icon: {
    color: "#f9f9f9",
  },
  altTextColor: {
    color: "#FFFFFF",
  },
  header: {
    color: "white",
    fontSize: "2.2em",
    flexGrow: "1",
  },
  wrapper: {
    width: "100%",
    margin: "auto",
  },
  down: {
    color: "white",
    fontSize: "2em",
  },
  centralText: {
    textAlign: "center",
    fontSize: "2em",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <AppBar className={classes.AppBar} elevation={0}>
        <Toolbar className={classes.wrapper}>
          <h2 className={classes.header}>
            Guitar<span className={classes.altTextColor}>world.</span>
          </h2>
          <IconButton>
            <SortIcon className={classes.icon}></SortIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.centralText}>
        <h2 className={classes.header}>
          Welcome to <br></br>My{" "}
          <span className={classes.altTextColor}>Guitar World</span>
        </h2>
        <IconButton>
          <ExpandMoreIcon className={classes.down}></ExpandMoreIcon>
        </IconButton>
      </div>
    </div>
  );
}
