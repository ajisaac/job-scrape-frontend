import React from "react";
import { connect } from "react-redux";
import {
  fetchBlacklistedCompanies,
  fetchCompanies,
  updateSearchFilters,
} from "../redux/actions/Actions";
import Company from "./company/Company";
import { fetchCompaniesFiltered } from "../redux/reducers/CompanyReducer";
import BlackListBox from "./sidebox/BlackListBox";
import { Grid } from "@material-ui/core";

class JobsPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        textFilter: "",
        companyFilter: "",
        titleFilter: "",
      },
    };
  }

  componentDidMount() {
    this.props.fetchCompanies();
    this.props.fetchBlacklistedCompanies();
  }

  updateFilters = () => {
    this.props.updateSearchFilters({
      ...this.state.filters,
    });
  };

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
      >
        <div className={"main-panel"}>
          <span>{this.props.companies.numOfCompanies} companies - </span>
          <span>{this.props.companies.numOfJobs} jobs</span>
          <hr />
          <Grid container>
            {this.props.companies.filteredCompanies.map((company) => {
              return (
                <Grid item key={company.id}>
                  <Company
                    key={company.id}
                    company={company}
                    filter={this.props.filter}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let statusFilter = "all";
  if (ownProps.filter) {
    statusFilter = ownProps.filter;
  }
  return {
    companies: fetchCompaniesFiltered(state, statusFilter),
  };
};

const funcs = {
  fetchCompanies: fetchCompanies,
  fetchBlacklistedCompanies: fetchBlacklistedCompanies,
  updateSearchFilters: updateSearchFilters,
};

export default connect(mapStateToProps, funcs)(JobsPage);
