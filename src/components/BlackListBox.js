import React from 'react';
import {connect} from "react-redux";
import {
  removeBlacklistedCompany
} from "../redux/actions/Actions";
import {getBlacklistedCompanies} from "../redux/reducers/CompanyReducer";

class BlackListBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showBlacklisted: true}
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
          <h4 className="expandable"
              onClick={this.reverseShowBlacklisted}>Blacklisted Companies</h4>
          {this.state.showBlacklisted && <hr/>}
          {this.state.showBlacklisted && this.props.blacklistedCompanies.map((blc) => {
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
  return {blacklistedCompanies: getBlacklistedCompanies(state)};
};

const funcs = {
  removeBlacklistedCompany: removeBlacklistedCompany
};

export default connect(mapStateToProps, funcs)(BlackListBox)