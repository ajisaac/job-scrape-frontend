import React, {useEffect, useState} from "react"
import {Grid} from "@material-ui/core"
import axios from "axios"
import Job from "./job/Job"
import SearchFilter from "./search-filter/SearchFilter"


function JobsPage() {

  let [jobPostings, updateJobPostings] = useState([])
  let [filter, updateFilter] = useState({
    statuses: {
      "new": true,
      "saved": true,
      "applied": true,
      "interviewing": true,
      "excluded": true,
      "rejected": true,
      "ignored": true,
    },
    jobSites: {
      "WWR": true,
      "Stackoverflow": false,
      "Indeed": true,
      "Remoteco": true,
      "Remotiveio": true,
      "Remoteok": true,
      "Sitepoint": true,
      "WorkingNomads": true
    },
    filterBlacklist: true,
    filterGraylist: true,
    company: "",
    jobDescriptionTexts: [
      "java"
    ],
    jobTitleTexts: [
      "java"
    ]
  })

  let getUpdatedPostings = () => {
    axios.post('http://localhost:8080/jobs/all', filter).then(
        resp => {
          updateJobPostings(resp.data)
        },
        err => {
          console.log(err)
        }
    )
  }

  let searchFilterState = {
    updateTextSearch: function (text) {
      if (text) {
        filter.jobTitleTexts = [text]
        updateFilter({...filter})
      }
    },
    updateCompanySearch: function (text) {
      if (text) {
        filter.company = [text]
        updateFilter({...filter})
      }
    },
    updateIncludeGraylisted: function (include) {
      if (include === true || include === false) {
        filter.filterGraylist = include
        updateFilter({...filter})
      }
    },
    updateIncludeBlacklisted: function (include) {
      if (include === true || include === false) {
        filter.filterBlacklist = include
        updateFilter({...filter})
      }
    },
    updateStatusFilter: function (status) {
      if (status) {
        let j = filter.statuses
        j[status.name] = status.checked
        updateFilter({...filter, statuses: {...j}})
        getUpdatedPostings()
      }
    },
    updateSiteFilter: function (site) {
      if (site) {
        let j = filter.jobSites
        j[site.name] = site.checked
        updateFilter({...filter, jobSites: {...j}})
        getUpdatedPostings()
      }
    }
  }

  useEffect(() => {
    axios.post('http://localhost:8080/jobs/all', filter).then(
        resp => {
          updateJobPostings(resp.data)
        },
        err => {
          console.log(err)
        }
    )
  }, [])

  return (
      <Grid container direction="column" justify="space-evenly"
            alignItems="stretch">
        <div className={"main-panel"}>
          {/*<span>{data.numOfCompanies} companies - </span>*/}
          {/*<span>{data.numOfJobs} jobs</span>*/}
          <hr/>
          <SearchFilter
              searchFilterState={searchFilterState} state={filter}/>
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
