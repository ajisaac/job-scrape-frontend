import React, {useEffect, useState} from "react"
import {Grid} from "@material-ui/core"
import axios from "axios"
import Job from "./job/Job"
import SearchFilter from "./search-filter/SearchFilter"


function JobsPage() {

  let [jobPostings, updateJobPostings] = useState([])

  useEffect(() => {
    axios.post('http://localhost:8080/jobs/all', {}).then(
        resp => {
          updateJobPostings(resp.data)
        },
        err => {
          console.log(err)
        }
    )
  }, [])

  return (
      <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="stretch"
      >
        <div className={"main-panel"}>
          {/*<span>{data.numOfCompanies} companies - </span>*/}
          {/*<span>{data.numOfJobs} jobs</span>*/}
          <hr/>
          <SearchFilter/>
          <hr/>
          <Grid container>
            {jobPostings.map(posting => (
                <Job key={posting.id} job={posting}/>))}
          </Grid>
        </div>
      </Grid>
  )
}

export default JobsPage
