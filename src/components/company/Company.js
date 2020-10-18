import React from "react";
import {connect} from "react-redux";
import Job from "../job/Job";
import {Card, Button, makeStyles} from "@material-ui/core";
import CompanyBar from "./CompanyBar";

import {
  blacklistCompany,
  updateMultipleJobState,
} from "../../redux/actions/Actions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 14,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: "#eaf0f5db",
    color: "#0d1013d1",
  },
}));

function Company(props) {
  const company = props.company;
  const classes = useStyles();
  return (
      <Card key={company.id} elevation={1} className={classes.root}>
        <CompanyBar company={company}/>
        {company.jobPostings.map((job) => {
          return <Job key={job.id} job={job}/>;
        })}
      </Card>
  );
}

const actions = {
  updateMultipleJobState: updateMultipleJobState,
  blacklistCompany: blacklistCompany,
};

export default connect((state) => {
  return state;
}, actions)(Company);
