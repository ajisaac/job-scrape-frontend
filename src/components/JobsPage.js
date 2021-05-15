import React, {useEffect} from "react"
import {connect} from "react-redux"
import {
  fetchCompanies
} from "../redux/actions/Actions"
import Company from "./company/Company"
import {fetchCompaniesFiltered} from "../redux/reducers/CompanyReducer"
import {Grid} from "@material-ui/core"

function JobsPage(props) {

  useEffect(() => {
    props.fetchCompanies()
  }, [])

  let data = props.companies
  return (
      <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="stretch"
      >
        <div className={"main-panel"}>
          <span>{data.numOfCompanies} companies - </span>
          <span>{data.numOfJobs} jobs</span>
          <hr/>
          <Grid container>
            {data.filteredCompanies.map((company) => {
              return (
                  <Grid item key={company.id}>
                    <Company
                        key={company.id}
                        company={company}
                        filter={props.filter}
                    />
                  </Grid>
              )
            })}
          </Grid>
        </div>
      </Grid>
  )
}

const mapStateToProps = (state, {filter}) =>
    ({companies: fetchCompaniesFiltered(state, filter || "new")})


export default connect(mapStateToProps, {
  fetchCompanies: fetchCompanies,
})(JobsPage)
