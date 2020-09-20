import React from "react";
import { connect } from "react-redux";
import Job from "./Job";
import {Paper, Card, Button } from "@material-ui/core";
import Company from "./Company";

import {
  blacklistCompany,
  updateMultipleJobState,
} from "../redux/actions/Actions";

function CompanyBar(props) {
  const company = props.company;
  return (
    <div key={company.id}>
      <div>
        <h3 
        // onClick={this.hideUnhide}
        >
          {company.name} -{" "}
          {company.labels &&
            company.labels.map((label) => {
              return (
                <span key={label} className={label + "-label label"}>
                  {label}
                </span>
              );
            })}
        </h3>
      </div>
      <div>
        {props.filter !== "saved" && (
          <Button
            // onClick={this.jobsUpdate}
            value={"saved"}
            variant={"primary"}
          >
            save
          </Button>
        )}

        {props.filter !== "excluded" && (
          <Button
            // onClick={this.jobsUpdate}
            value={"excluded"}
            variant={"primary"}
          >
            exclude
          </Button>
        )}

        {props.filter !== "ignored" && (
          <Button
            // onClick={this.jobsUpdate}
            value={"ignored"}
            variant={"primary"}
          >
            ignored
          </Button>
        )}

        <Button
          className={"blacklist-btn"}
        //   onClick={this.blacklist}
          variant={"primary"}
          value={company.name}
        >
          blacklist
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const actions = {
  updateMultipleJobState: updateMultipleJobState,
  blacklistCompany: blacklistCompany,
};

export default connect(mapStateToProps, actions)(CompanyBar);