import React from 'react';
import {connect} from "react-redux";
import {fetchCompanies} from "../redux/actions/Actions";
import Company from "./Company";
// import SearchTermBox from "./SearchTermBox";
// import BlackListBox from "./BlackListBox";
// import LabelBox from "./LabelBox";
// import BlockTitleBox from "./BlockTitleBox";

class JobsPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      companySearch: "",
      titleSearch: "",
      search: ""
    }
  }

  componentDidMount() {
    this.props.fetchCompanies();
  }

  // searchCompany = (e) => {
  //     this.setState({companySearch: e.target.value});
  //     this.props.searchAction(this.state.search, e.target.value);
  // };
  //
  // searchText = (e) => {
  //     this.setState({search: e.target.value});
  //     this.props.searchAction(e.target.value, this.state.companySearch);
  // };
  //
  // searchTitle = (e) => {
  //     this.setState({titleSearch: e.target.value});
  //     this.props.searchTitle(e.target.value);
  // };
  //
  // updateJobStateFilter = (e) => {
  //     this.props.updateJobStateFilter(e.target.value);
  // };
  //
  // amountOfJobs = () => {
  //     if (this.props.redstate.filteredCompanies.length === 0) return 0;
  //     return this.props.redstate.filteredCompanies.reduce((acc, company) => {
  //         return acc + company.jobPostings.length;
  //     }, 0);
  // };

  render() {
    return (
        <div className={"main"}>
          <div className={"main-panel"}>
            <div className={"company"}>
                    {/*<span*/}
                    {/*    className={"job-state-filter-class"}>{this.props.redstate.jobStateFilter.toUpperCase()} JOBS - </span>*/}
              {/*<span>{this.props.redstate.companies.length} companies - </span>*/}
              {/*<span>{this.amountOfJobs()} jobs</span>*/}
              <hr/>
              <span>Filter by state: </span>
              {/*<button*/}
              {/*    value={"new"}*/}
              {/*    onClick={this.updateJobStateFilter}*/}
              {/*    className={`btn-link ${this.props.redstate.jobStateFilter === "new" ? "selected" : ""}`}>New*/}
              {/*</button>*/}
              {/*<button*/}
              {/*    value={"saved"}*/}
              {/*    onClick={this.updateJobStateFilter}*/}
              {/*    className={`btn-link ${this.props.redstate.jobStateFilter === "saved" ? "selected" : ""}`}>Saved*/}
              {/*</button>*/}
              {/*<button*/}
              {/*    value={"applied"}*/}
              {/*    onClick={this.updateJobStateFilter}*/}
              {/*    className={`btn-link ${this.props.redstate.jobStateFilter === "applied" ? "selected" : ""}`}>Applied*/}
              {/*</button>*/}
              {/*<button*/}
              {/*    value={"interviewing"}*/}
              {/*    onClick={this.updateJobStateFilter}*/}
              {/*    className={`btn-link ${this.props.redstate.jobStateFilter === "interviewing" ? "selected" : ""}`}>Interviewing*/}
              {/*</button>*/}
              {/*<button*/}
              {/*    value={"excluded"}*/}
              {/*    onClick={this.updateJobStateFilter}*/}
              {/*    className={`btn-link ${this.props.redstate.jobStateFilter === "excluded" ? "selected" : ""}`}>Excluded*/}
              {/*</button>*/}
              {/*<button*/}
              {/*    value={"rejected"}*/}
              {/*    onClick={this.updateJobStateFilter}*/}
              {/*    className={`btn-link ${this.props.redstate.jobStateFilter === "rejected" ? "selected" : ""}`}>Rejected*/}
              {/*</button>*/}
              {/*<button*/}
              {/*    value={"ignored"}*/}
              {/*    onClick={this.updateJobStateFilter}*/}
              {/*    className={`btn-link ${this.props.redstate.jobStateFilter === "ignored" ? "selected" : ""}`}>Ignored*/}
              {/*</button>*/}
              {/*<button*/}
              {/*    value={"all"}*/}
              {/*    onClick={this.updateJobStateFilter}*/}
              {/*    className={`btn-link ${this.props.redstate.jobStateFilter === "all" ? "selected" : ""}`}>All*/}
              {/*</button>*/}

              <hr/>
              <form>
                <div>
                  {/*<label>*/}
                  {/*  Title:*/}
                  {/*  <input type={"text"}*/}
                  {/*         value={this.state.titleSearch}*/}
                  {/*         onChange={this.searchTitle}/>*/}
                  {/*</label>*/}
                  {/*<label>*/}
                  {/*  Companies:*/}
                  {/*  <input type={"text"}*/}
                  {/*         value={this.state.companySearch}*/}
                  {/*         onChange={this.searchCompany}/>*/}
                  {/*</label>*/}
                  {/*<label>*/}
                  {/*  Search:*/}
                  {/*  <input type={"text"}*/}
                  {/*         value={this.state.search}*/}
                  {/*         onChange={this.searchText}/>*/}
                  {/*</label>*/}
                </div>
              </form>
            </div>
            <div>
              {this.props.companies.map((company) => {
                return (
                    <Company key={company.id} company={company}/>
                );
              })}
            </div>
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
            {/*<div className={"search-term-box company"}>*/}
            {/*  <BlackListBox/>*/}
            {/*</div>*/}
          </div>
        </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {companies: state.companies};
};

const funcs = {
  fetchCompanies: fetchCompanies,
};

export default connect(mapStateToProps, funcs)(JobsPage)
