import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import Visited from "./components/Visited";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/tropical.jpeg"})`,
    opacity: "0.8",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline></CssBaseline>
      <Header></Header>
      <Visited></Visited>
    </div>
  );
}
