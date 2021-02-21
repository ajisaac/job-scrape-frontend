import React from "react";
import {connect} from "react-redux";
import {updateJobState} from "../../redux/actions/Actions";
import UpdateStatuses from "./UpdateStatuses";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  root: {
    padding: 32,
    marginTop: 14,
    border: "2px solid black"
  }
});

class Job extends React.Component {
  constructor(props) {
    super(props);
  }

  updateJobStatus = (value) => {
    this.props.updateJobState(this.props.job.id, value);
  };

  parseSummary = (summary) => {
    if (!summary) {
      return <div/>;
    }
    let ret = summary.split("\n");
    return (
        <div>
          {ret.map((r, i) => {
            return (
                <div key={i}>
                  {r}
                  <br/>
                </div>
            );
          })}
        </div>
    );
  };

  render() {
    const job = this.props.job;
    const classes = this.props.classes;
    return (
        <div className={classes.root}>
          <div>
            <span>{job.status} - </span>
            <a target="_blank" rel="noreferrer noopener" href={job.href}>
              {job.jobTitle} - {job.location}
            </a>
          </div>
          <UpdateStatuses status={job.status}
                          updateJobStatus={this.updateJobStatus}/>
          <div>
            <div className={"summary"}>
              <div dangerouslySetInnerHTML={{__html: job.description}}/>
            </div>
          </div>
          <div>{job.date}</div>
          <hr/>
        </div>
    );
  }
}

const actions = {
  updateJobState: updateJobState,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actions)(
    withStyles(styles)(Job)
);
