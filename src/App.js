import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/guitarWall.jpg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
export default function App() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}
