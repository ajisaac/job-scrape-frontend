import React from "react";
import { connect } from "react-redux";
import { updateJobState } from "../../redux/actions/Actions";
// import TextareaAutosize from "react-textarea-autosize";
import { Button } from "@material-ui/core";
import UpdateStatuses from "./UpdateStatuses";

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      textAreaValue: "",
      textAreaRows: 0,
    };
  }

  updateJobStatus = (e) => {
    this.props.updateJobState(this.props.job.id, e.target.value);
  };

  setEditingTrue = () => {
    if (this.state.textAreaValue === "") {
      this.setState({ textAreaValue: this.props.job.summary });
    }
    let num = this.state.textAreaValue.split("\n").length;
    this.setState({ textAreaRows: num });
    this.setState({ editing: true });
  };

  setEditingFalse = () => {
    this.setState({ editing: false });
  };

  updateJobSummary = (e) => {
    this.props.updateJobSummary(this.state.textAreaValue, this.props.job.id);
    this.props.job.summary = this.state.textAreaValue;
    this.setEditingFalse();
  };

  textAreaUpdated = (e) => {
    this.setState({ textAreaValue: e.target.value });
  };

  parseSummary = (summary) => {
    if (!summary) {
      return <div />;
    }
    let ret = summary.split("\n");
    return (
      <div>
        {ret.map((r, i) => {
          return (
            <div key={i}>
              {r}
              <br />
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const job = this.props.job;
    return (
      <div>
        <div>
          <div>{job.status}</div>
          <a target="_blank" rel="noreferrer noopener" href={job.href}>
            {job.jobTitle} - {job.location}
          </a>
        </div>
        <UpdateStatuses status={job.status} />
        <div>
          <div className={"summary"}>
            {job.summary ? this.parseSummary(job.summary) : ""}
            <div dangerouslySetInnerHTML={{ __html: job.description }} />
          </div>
        </div>
        <div>{job.date}</div>
        <hr />
      </div>
    );
  }
}

const actions = {
  updateJobState: updateJobState,
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, actions)(Job);
