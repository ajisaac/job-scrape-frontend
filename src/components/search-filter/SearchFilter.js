import React from "react"
import {Card, CardContent, Grid} from "@material-ui/core"
import SearchBox from "./SearchBox"
import JobStatusFilter from "./JobStatusFilter"
import JobSourceFilter from "./JobSourceFilter"
import CompanySearch from "./CompanySearch"
import makeStyles from "@material-ui/core/styles/makeStyles"

let useStyles = makeStyles(() => ({
  cardContent: {
    // minHeight: 150,
    // minWidth: 150
  }
}))

function SearchFilter(props) {
  let {
    company,
    statuses,
    jobSites,
    jobDescriptionText,
    jobTitleText,
    functions,
  } = props

  let {cardContent} = useStyles()

  // we have some input boxes we can use to
  // filter the results
  // this filter has an entire state in redux
  return (
      <Grid container justify={"center"} spacing={2} direction={"row"}>
        <Grid item>
          <Card variant={"outlined"}>
            <CardContent className={cardContent}>
              <Grid container spacing={2} direction={"column"}>
                <Grid item>

                  <SearchBox
                      update={functions.updateJobTitleSearch}
                      search={functions.search}
                      state={jobTitleText}
                      label={"Title Search"}
                  />
                </Grid>
                <Grid item>
                  <SearchBox
                      update={functions.updateJobDescriptionSearch}
                      search={functions.search}
                      state={jobDescriptionText}
                      label={"Description Search"}
                  />
                </Grid>
                <Grid item>
                  <CompanySearch
                      update={functions.updateCompanySearch}
                      search={functions.search}
                      state={company}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item>
          <Card variant={"outlined"}>
            <CardContent className={cardContent}>
              <JobStatusFilter
                  update={functions.updateStatusFilter}
                  state={statuses}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant={"outlined"}>
            <CardContent className={cardContent}>
              <JobSourceFilter
                  update={functions.updateSiteFilter}
                  state={jobSites}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  )
}

export default SearchFilter