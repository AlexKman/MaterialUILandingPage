import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import VisitedCard from "./Card";
import VisitedPlaces from "../VisitedPlaces";

const useStyles = makeStyles((theme) => ({
  visited: { height: "100vh" },
}));

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.visited}>
      <VisitedCard placesVisited={VisitedPlaces[0]}></VisitedCard>
    </div>
  );
}
