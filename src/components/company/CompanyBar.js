import React from "react";
import {connect} from "react-redux";
import {Grid, Button, makeStyles} from "@material-ui/core";

import {
  blacklistCompany,
  updateMultipleJobState,
} from "../../redux/actions/Actions";

const useStyles = makeStyles((theme) => ({
  bar: {
    margin: 0,
  },
}));

function CompanyBar(props) {
  const company = props.company;
  const classes = useStyles();
  return (
      <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          key={company.id}
      >
        <h3 className={classes.bar}>
          {company.name} -{" "}
          {company.labels &&
          company.labels.map((label) => {
            return <span key={label}>{label}</span>;
          })}
        </h3>
        <h3 className={classes.bar}>
          {props.filter !== "saved" && <Button value={"saved"}>save</Button>}
          {props.filter !== "excluded" && (
              <Button value={"excluded"}>exclude</Button>
          )}
          {props.filter !== "ignored" && (
              <Button value={"ignored"}>ignored</Button>
          )}
          <Button value={company.name}>blacklist</Button>
        </h3>
      </Grid>
  );
}

const actions = {
  updateMultipleJobState: updateMultipleJobState,
  blacklistCompany: blacklistCompany,
};

export default connect((state, props) => {
  return state;
  // console.log(state);
  // console.log(props);
}, actions)(CompanyBar);
