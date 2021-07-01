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
    [theme.breakpoints.down("md")]: { flexDirection: "column" },
  },

  "& div": {
    flexGrow: "1",
  },
  visitedItemsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "auto",
  },
}));

export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.visited} id="visited">
      <div className={classes.visitedItemsGrid}>
        {VisitedPlaces.map((place) => (
          <VisitedCard placesVisited={place} checked={checked}></VisitedCard>
        ))}
      </div>
    </div>
  );
}
