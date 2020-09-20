import React from "react";
import { connect } from "react-redux";
import {
  fetchBlacklistedCompanies,
  fetchCompanies,
  updateSearchFilters,
} from "../redux/actions/Actions";
import Company from "./Company";
import { fetchCompaniesFiltered } from "../redux/reducers/CompanyReducer";
import StatusLink from "./StatusLink";
import BlackListBox from "./BlackListBox";
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

  updateTextFilter = (e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        textFilter: e.target.value,
      },
    });
  };

  updateCompanyFilter = (e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        companyFilter: e.target.value,
      },
    });
  };

  updateTitleFilter = (e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        titleFilter: e.target.value,
      },
    });
  };

  getLinks = () => {
    let statuses = [
      "new",
      "saved",
      "applied",
      "interviewing",
      "excluded",
      "rejected",
      "ignored",
      "all",
    ];
    return statuses.map((status) => {
      return <StatusLink filter={status} selectedFilter={this.props.filter} />;
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
          <div className={"company"}>
            <span className={"job-state-filter-class"}>
              {this.props.filter.toUpperCase()} JOBS -{" "}
            </span>
            <span>{this.props.companies.numOfCompanies} companies - </span>
            <span>{this.props.companies.numOfJobs} jobs</span>
            <hr />
            <div>
              <nav>
                <span>Filter by state: </span>
                {this.getLinks()}
              </nav>
            </div>
            <br />

            {/* <label>
              Title:
              <input
                type={"text"}
                value={this.state.filters.titleFilter}
                onBlur={this.updateFilters}
                onChange={this.updateTitleFilter}
              />
            </label>
            <label>
              Companies:
              <input
                type={"text"}
                value={this.state.filters.companyFilter}
                onBlur={this.updateFilters}
                onChange={this.updateCompanyFilter}
              />
            </label>
            <label>
              Search:
              <input
                type={"text"}
                value={this.state.filters.textFilter}
                onBlur={this.updateFilters}
                onChange={this.updateTextFilter}
              />
            </label> */}
          </div>
          <Grid container>
            {this.props.companies.filteredCompanies.map((company) => {
              return (
                <Grid item>
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
        <div>
          {/*<div className={"search-term-box company"}>*/}
          {/*  <SearchTermBox/>*/}
          {/*</div>*/}
          {/*<div className={"search-term-box company"}>*/}
          {/*  <LabelBox/>*/}
          {/*</div>*/}
          {/*<div className={"search-term-box company"}>*/}
          {/*  <BlockTitleBox/>*/}
          {/*</div>*/}
          <div className={"search-term-box company"}>
            <BlackListBox />
          </div>
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
