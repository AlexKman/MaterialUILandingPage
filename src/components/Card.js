import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles({
  main: {
    maxWidth: 375,
    background: "rgba(0,0,0,0.5)",
    margin: "1.2em",
  },
  mediaImage: {
    height: 300,
  },
  header: {
    fontFamily: "roboto, monospace",
    fontWeight: "bold",
    color: "white",
    fontSize: "2.1em",
  },
  description: {
    fontFamily: "roboto, monospace",
    fontWeight: "bold",
    color: "white",
    fontSize: "1em",
  },
});

export default function VisitedCard({ placesVisited, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.main}>
        <CardMedia
          className={classes.mediaImage}
          component="img"
          alt="Island"
          height="140"
          image={placesVisited.imageUrl}
          title="Island"
        />
        <CardContent>
          <Typography gutterBottom component="h1" className={classes.header}>
            {placesVisited.title}
          </Typography>
          <Typography
            variant="body2"
            color="black"
            component="p"
            className={classes.description}
          >
            {placesVisited.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
