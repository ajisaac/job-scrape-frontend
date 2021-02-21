import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "blue"
  }

}));

// we can search for various job types
export default function SearchBar(props) {
  const classes = useStyles();
  return (
      // dropdown for various search types
      <div>Search Bar</div>
  );
}