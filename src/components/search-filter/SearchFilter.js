import React from "react"
import {Card, CardContent, Grid} from "@material-ui/core"
import SearchBox from "./SearchBox"
import GrayListToggle from "./GrayListToggle"
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
  let {searchFilterState, state} = props

  let {cardContent} = useStyles()

  // we have some input boxes we can use to
  // filter the results
  // this filter has an entire state in redux
  return (
      <Grid container justify={"center"} spacing={2}>
        <Grid item>
          <Card variant={"outlined"}>
            <CardContent className={cardContent}>
              <SearchBox update={searchFilterState.updateTextSearch}/>
              <CompanySearch update={searchFilterState.updateCompanySearch}/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant={"outlined"}>
            <CardContent className={cardContent}>
              <GrayListToggle
                  update={searchFilterState.updateIncludeGraylisted}/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant={"outlined"}>
            <CardContent className={cardContent}>
              <JobStatusFilter
                  update={searchFilterState.updateStatusFilter}
                  state={state.statuses}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant={"outlined"}>
            <CardContent className={cardContent}>
              <JobSourceFilter
                  update={searchFilterState.updateSiteFilter}
                  state={state.jobSites}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  )
}

export default SearchFilter