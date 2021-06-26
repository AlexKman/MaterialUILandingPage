import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import VisitedCard from "./Card";
import VisitedPlaces from "../VisitedPlaces";

const useStyles = makeStyles((theme) => ({
  visited: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.visited}>
      <VisitedCard placesVisited={VisitedPlaces[0]}></VisitedCard>
      <VisitedCard placesVisited={VisitedPlaces[1]}></VisitedCard>
      <VisitedCard placesVisited={VisitedPlaces[2]}></VisitedCard>
      <VisitedCard placesVisited={VisitedPlaces[3]}></VisitedCard>
    </div>
  );
}
