import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar>Guitars</AppBar>
      <IconButton>
        <SortIcon></SortIcon>
      </IconButton>
    </div>
  );
}
