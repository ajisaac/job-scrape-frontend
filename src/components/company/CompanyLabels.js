import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  new: {
    padding: 3,
    margin: 3,
    backgroundColor: "#eaea1a"
  },
  saved: {
    padding: 4,
    margin: 3,
    backgroundColor: "#5ac341"
  },
  applied: {
    padding: 3,
    margin: 3,
    backgroundColor: "#7a92c2"
  },
  interviewing: {
    padding: 3,
    margin: 3,
    backgroundColor: "#ac6ebf"
  },
  excluded: {
    padding: 3,
    margin: 3,
    backgroundColor: "#ba7782"
  },
  rejected: {
    padding: 3,
    margin: 3,
    backgroundColor: "#b6727d"
  },
  ignored: {
    padding: 3,
    margin: 3,
    backgroundColor: "#c37d89"
  },
}));

function CompanyLabels(props) {
  const labels = props.labels;
  const classes = useStyles();
  return (
      <div>
        {labels &&
        labels.map((label) => {
          switch (label) {
            case "new":
              return <span className={classes.new}
                           key={label}>{label}</span>
            case "saved":
              return <span className={classes.saved}
                           key={label}>{label}</span>
            case "applied":
              return <span className={classes.applied}
                           key={label}>{label}</span>
            case "interviewing":
              return <span className={classes.interviewing}
                           key={label}>{label}</span>
            case "excluded":
              return <span className={classes.excluded}
                           key={label}>{label}</span>
            case "rejected":
              return <span className={classes.rejected}
                           key={label}>{label}</span>
            case "ignored":
              return <span className={classes.ignored}
                           key={label}>{label}</span>
          }
        })}
      </div>
  );
}

export default CompanyLabels;