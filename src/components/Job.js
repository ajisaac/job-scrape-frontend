import React from 'react';
import './Job.css'
import {connect} from "react-redux";
// import {updateJobState, updateJobSummary} from "../redux/actions/Actions";
import TextareaAutosize from "react-textarea-autosize";

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
        this.props.updateJobState(e.target.value, this.props.job.id);
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
        let ret = summary.split('\n');
        return <div>
            {ret.map(r => {
                return <div>{r}<br/></div>
            })}
        </div>
    };

    render() {
        const {jobState, url, title, location, summary, description, postDate} = this.props.job;
        return (
            <div className={"job"}>
                <div className={"job-post"}>
                    <div className={"job-title"}>
                        {this.props.redstate.jobStateFilter === "all" &&
                        <div
                            className={jobState + "-label label"}> {jobState}</div>}
                        <a target="_blank" rel="noreferrer noopener" href={url}>
                            {title} - {location}</a>
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
                                    defaultValue={summary ? summary : (description ? description : "")}
                                    onChange={this.textAreaUpdated}
                                    className={"edit-box"}>
                                </TextareaAutosize>
                                <button className={"primary-btn"}
                                        onClick={this.updateJobSummary}>Update
                                </button>
                                <button className={"danger-btn"}
                                        onClick={this.setEditingFalse}>Cancel
                                </button>
                            </div>
                        }
                        {!this.state.editing && <div
                            className={"summary"}>{summary ? this.parseSummary(summary) : ""}</div>}
                    </div>
                    <div className={"post-date"}>{postDate}</div>
                </div>
                <div className={"controls"}>
                    {this.props.job.jobState !== "saved" &&
                    <button onClick={this.updateJobStatus} value={"saved"}
                            className={"primary-btn"}>save</button>}

                    {this.props.job.jobState !== "excluded" &&
                    <button onClick={this.updateJobStatus} value={"excluded"}
                            className={"warning-btn"}>exclude</button>}

                    {this.props.job.jobState !== "applied" &&
                    <button onClick={this.updateJobStatus} value={"applied"}
                            className={"success-btn"}>applied</button>}

                    {this.props.job.jobState === "applied" &&
                    <button onClick={this.updateJobStatus}
                            value={"interviewing"}
                            className={"success-btn"}>interview</button>}

                    {(this.props.job.jobState !== "new" && this.props.job.jobState !== "rejected") &&
                    <button onClick={this.updateJobStatus} value={"rejected"}
                            className={"danger-btn"}>rejected</button>}

                    {this.props.job.jobState !== "ignored" &&
                    <button onClick={this.updateJobStatus}
                            value={"ignored"}>ignored</button>}
                </div>
            </div>

        );
    }
}


// const actions = {
//     updateJobState: updateJobState,
//     updateJobSummary: updateJobSummary
// };

const mapStateToProps = (state) => {
    return {
        redstate: state.state
    };
};

// export default connect(mapStateToProps, actions)(Job)
export default connect(mapStateToProps, null)(Job)
