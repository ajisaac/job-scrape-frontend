import React from 'react';
import {connect} from "react-redux";
import Job from "./Job";
import './Company.css'
// import {blacklistCompany, updateMultipleJobState} from "../redux/actions/Actions";

class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {jobsHidden: false};
    }

    hideUnhide = () => {
        let hid = this.state.jobsHidden;
        this.setState({jobsHidden: !hid});
    };

    // jobsUpdate = (e) => {
    //     this.props.updateMultipleJobState(e.target.value, this.props.company.name, this.props.company.filteredJobs)
    // };
    //
    // blacklist = (e) => {
    //     this.props.blacklistCompany(e.target.value)
    // };

    render() {
        const company = this.props.company;
        return (
            <div>
                <div className={"company"} key={company.name}>

                    <div className={"company-name-bar"}>
                        <div className={"company-name-bar-title"}>
                            <h3 onClick={this.hideUnhide}>{company.name}</h3>
                            {/*<div className={"labels"}>*/}
                            {/*    {company.labels && company.labels.map(label => {*/}
                            {/*        return <div key={label} className={label + "-label label"}>{label}</div>*/}
                            {/*    })}*/}
                            {/*</div>*/}
                        </div>
                        <div className={"company-name-bar-controls"}>
                            {/*{this.props.jobStateFilter !== "saved" && <button onClick={this.jobsUpdate}*/}
                            {/*                                                  value={"saved"}*/}
                            {/*                                                  className={"primary-btn"}>*/}
                            {/*    save*/}
                            {/*</button>}*/}
                            {/*{this.props.jobStateFilter !== "excluded" && <button onClick={this.jobsUpdate}*/}
                            {/*                                                     value={"excluded"}*/}
                            {/*                                                     className={"warning-btn"}>*/}
                            {/*    exclude*/}
                            {/*</button>}*/}
                            {/*{this.props.jobStateFilter !== "ignored" && <button onClick={this.jobsUpdate}*/}
                            {/*                                                    value={"ignored"}>*/}
                            {/*    ignored*/}
                            {/*</button>}*/}
                            {/*<button className={"blacklist-btn"}*/}
                            {/*        onClick={this.blacklist}*/}
                            {/*        value={company.name}>*/}
                            {/*    blacklist*/}
                            {/*</button>*/}
                        </div>
                    </div>

                    <div className={`${this.state.jobsHidden ? 'hidden' : 'shown'}`}>
                        {company.jobPostings.map((job) => {
                            return <Job key={job.id} job={job}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {jobStateFilter: state.state.jobStateFilter}
};

// const actions = {
//     updateMultipleJobState: updateMultipleJobState,
//     blacklistCompany: blacklistCompany
// };

// export default connect(mapStateToProps, actions)(Company)
export default connect(mapStateToProps, null)(Company)
