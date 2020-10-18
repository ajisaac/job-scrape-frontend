import React from "react";
import {connect} from "react-redux";
import {Grid, Button, makeStyles} from "@material-ui/core";

import {
  blacklistCompany,
  updateMultipleJobState,
} from "../../redux/actions/Actions";
import CompanyLabels from "./CompanyLabels";

const useStyles = makeStyles((theme) => ({
  bar: {
    margin: 0,
  },
}));

function CompanyBar(props) {
  const company = props.company;
  const classes = useStyles();
  return (
      <div>
        <CompanyLabels labels={company.labels}/>
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            key={company.id}
        >

          <h3 className={classes.bar}>
            {company.name}

          </h3>
          <h3 className={classes.bar}>
            <Button value={company.name}>blacklist</Button>
          </h3>
        </Grid>
      </div>
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
