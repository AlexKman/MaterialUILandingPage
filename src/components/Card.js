import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  main: {
    maxWidth: 375,
    background: "rgba(0,0,0,0.5)",
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

export default function VisitedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.main}>
      <CardMedia
        className={classes.mediaImage}
        component="img"
        alt="Island"
        height="140"
        image={process.env.PUBLIC_URL + "/assets/visited/Island1.jpeg"}
        title="Island"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          className={classes.header}
        >
          Island 1
        </Typography>
        <Typography
          variant="body2"
          color="black"
          component="p"
          className={classes.description}
        >
          I went to Island 1 on holiday, I had a great time swimming
        </Typography>
      </CardContent>
    </Card>
  );
}
