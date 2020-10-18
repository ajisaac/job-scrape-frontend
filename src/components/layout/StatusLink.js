import React from "react";
import { Link } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
  },
}));
function StatusLink(props) {
  const classes = useStyles();
  let to = "/" + props.filter;
  let name = props.filter[0].toUpperCase() + props.filter.substring(1);
  return (
    <Typography variant="h6" color="secondary">
      <Link className={classes.link} to={to}>
        {name}
      </Link>
    </Typography>
  );
}

export default StatusLink;
