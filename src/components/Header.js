import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  App: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    fontFamily: "roboto, monospace",
  },
  AppBar: {
    background: "none",
  },
  icon: {
    color: "#f9f9f9",
  },
  altTextColor: {
    color: "#FFFFFF",
  },
  header: {
    color: "#FF0000",
    fontSize: "2.2em",
    flexGrow: "1",
  },
  wrapper: {
    width: "85%",
    margin: "auto",
  },
  down: {
    color: "white",
    fontSize: "3em",
  },
  centralText: {
    textAlign: "center",
    fontSize: "2em",
    marginTop: "4em",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  });
  return (
    <div className={classes.App} id="header">
      <AppBar className={classes.AppBar} elevation={0}>
        <Toolbar className={classes.wrapper}>
          <h2 className={classes.header}>
            <span className={classes.altTextColor}>Holiday Blog.</span>
          </h2>
          <IconButton>
            <SortIcon className={classes.icon}></SortIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.centralText}>
          <h2 className={classes.header}>
            <span className={classes.altTextColor}>My Holiday Blog</span>
          </h2>
          <IconButton>
            <ExpandMoreIcon className={classes.down}></ExpandMoreIcon>
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
}
