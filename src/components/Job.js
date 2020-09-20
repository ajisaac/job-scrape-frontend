import React from 'react';
import {connect} from "react-redux";
import {updateJobState} from "../redux/actions/Actions";
import TextareaAutosize from "react-textarea-autosize";
import {Button} from "@material-ui/core"

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      textAreaValue: "",
      textAreaRows: 0
    };
  }

  updateJobStatus = (e) => {
    this.props.updateJobState(this.props.job.id, e.target.value);
  };

  setEditingTrue = () => {
    if (this.state.textAreaValue === "") {
      this.setState({textAreaValue: this.props.job.summary});
    }
    let num = this.state.textAreaValue.split("\n").length;
    this.setState({textAreaRows: num});
    this.setState({editing: true});
  };

  setEditingFalse = () => {
    this.setState({editing: false});
  };

  updateJobSummary = (e) => {
    this.props.updateJobSummary(this.state.textAreaValue, this.props.job.id);
    this.props.job.summary = this.state.textAreaValue;
    this.setEditingFalse();
  };

  textAreaUpdated = (e) => {
    this.setState({textAreaValue: e.target.value});
  };

  parseSummary = (summary) => {
    if (!summary) {
      return <div/>;
    }
    let ret = summary.split('\n');
    return <div>
      {
        ret.map((r, i) => {
          return <div key={i}>{r}<br/></div>
        })
      }
    </div>
  };

  render() {
    const job = this.props.job;
    return (
        <div className={"job"}>
          <div className={"job-post"}>
            <div className={"job-title"}>
              <div className={job.status + "-label label"}> {job.status}</div>
              <a target="_blank" rel="noreferrer noopener" href={job.href}>
                {job.jobTitle} - {job.location}</a>
              {!this.state.editing &&
              <button onClick={this.setEditingTrue}
                      className={"btn-link edit-btn"}>edit</button>}
              {this.state.editing &&
              <button onClick={this.setEditingFalse}
                      className={"btn-link edit-btn"}>cancel</button>}
            </div>
            <div>
              {
                this.state.editing &&
                <div>
                  <TextareaAutosize
                      defaultValue={job.summary ? job.summary : ""}
                      onChange={this.textAreaUpdated}
                      className={"edit-box"}>
                  </TextareaAutosize>
                  <div dangerouslySetInnerHTML={{__html: "<div>text</div>"}}/>
                  <button className={"primary-btn"}
                          onClick={this.updateJobSummary}>Update
                  </button>
                  <button className={"danger-btn"}
                          onClick={this.setEditingFalse}>Cancel
                  </button>
                </div>
              }
              {!this.state.editing && (<div className={"summary"}>
                    {job.summary ? this.parseSummary(job.summary) : ""}
                    <div dangerouslySetInnerHTML={{__html: job.description}}/>
                  </div>
              )}
            </div>
            <div className={"post-date"}>{job.date}</div>
            <hr/>
          </div>
          <div className={"controls"}>
            {this.props.job.status !== "saved" &&
            <Button onClick={this.updateJobStatus} value={"saved"}
                    className={"primary-btn"}>save</Button>}

            {this.props.job.status !== "excluded" &&
            <Button onClick={this.updateJobStatus} value={"excluded"}
                    className={"warning-btn"}>exclude</Button>}

            {this.props.job.status !== "applied" &&
            <Button onClick={this.updateJobStatus} value={"applied"}
                    className={"success-btn"}>applied</Button>}

            {this.props.job.status === "applied" &&
            <Button onClick={this.updateJobStatus}
                    value={"interviewing"}
                    className={"success-btn"}>interview</Button>}

            {(this.props.job.status !== "new" && this.props.job.status !== "rejected") &&
            <Button onClick={this.updateJobStatus} value={"rejected"}
                    className={"danger-btn"}>rejected</Button>}

            {this.props.job.status !== "ignored" &&
            <Button onClick={this.updateJobStatus}
                    value={"ignored"}>ignored</Button>}
          </div>
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

export default connect(mapStateToProps, actions)(Job)
