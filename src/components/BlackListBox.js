import React from 'react';
import {connect} from "react-redux";
import {fetchBlacklistedCompanies, removeBlacklistedCompany} from "../redux/actions/Actions";

class BlackListBox extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showBlacklisted: true}
    }

    componentDidMount() {
        this.props.fetchBlacklistedCompanies();
    }

    removeBlacklistedCompany = (e) => {
        this.props.removeBlacklistedCompany(e.target.value)
    };

    reverseShowBlacklisted = () => {
        this.setState({showBlacklisted: !this.state.showBlacklisted});
    };

    render() {
        return (
            <div>
                <h4 className="expandable" onClick={this.reverseShowBlacklisted}>Blacklisted Companies</h4>
                {this.state.showBlacklisted && <hr/>}
                {this.state.showBlacklisted && this.props.redstate.blacklistedCompanies.map((blc) => {
                    return (
                        <div key={blc}>
                            {blc}
                            <button className={"btn-link btn-tiny"}
                                    onClick={this.removeBlacklistedCompany}
                                    value={blc}>remove?
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {redstate: state.state};
};

const funcs = {
    fetchBlacklistedCompanies: fetchBlacklistedCompanies,
    removeBlacklistedCompany: removeBlacklistedCompany
};

export default connect(mapStateToProps, funcs)(BlackListBox)