import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import VisitedCard from "./Card";
import VisitedPlaces from "../VisitedPlaces";
import useWindowPosition from "../hook/windowPosition";

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
  const checked = useWindowPosition("header");
  return (
    <div className={classes.visited}>
      {VisitedPlaces.map((place) => (
        <VisitedCard placesVisited={place} checked={checked}></VisitedCard>
      ))}
    </div>
  );
}
