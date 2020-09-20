import React from "react";
import { connect } from "react-redux";
import Job from "./Job";
import { Card, Button, makeStyles } from "@material-ui/core";
import CompanyBar from "./CompanyBar";

import {
  blacklistCompany,
  updateMultipleJobState,
} from "../redux/actions/Actions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 14,
    marginTop: 8,
    marginBottom: 8
  }
}));

function Company(props) {
  const company = props.company;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div key={company.id}>
        <CompanyBar company={company} />
        {company.jobPostings.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </div>
    </Card>
  );
}

const actions = {
  updateMultipleJobState: updateMultipleJobState,
  blacklistCompany: blacklistCompany,
};

export default connect((state) => {}, actions)(Company);
