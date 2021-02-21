import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Scraper from "./Scraper";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 14,
    marginTop: 8,
    marginBottom: 8,
    color: "#3c4146",
  }
}));

export default function ScrapePage(props) {
  const classes = useStyles();
  return (
      <Card elevation={1} className={classes.root}>
        <Scraper/>
      </Card>
  );
}