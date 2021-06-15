import React, {useEffect, useState} from "react"
import {Grid} from "@material-ui/core"
import axios from "axios"
import Job from "./job/Job"
import SearchFilter from "./search-filter/SearchFilter"


function JobsPage() {

  let [jobPostings, updateJobPostings] = useState([])
  let [company, updateCompany] = useState("")
  let [statuses, updateStatuses] = useState({
    "new": false,
    "saved": false,
    "applied": false,
    "interviewing": false,
    "excluded": false,
    "rejected": false,
    "ignored": false,
  })
  let [jobSites, updateJobSites] = useState({
    "WWR": false,
    "Stackoverflow": false,
    "Indeed": false,
    "Remoteco": false,
    "Remotiveio": false,
    "Remoteokio": false,
    "Sitepoint": false,
    "WorkingNomads": false
  })
  let [jobDescriptionText, updateJobDescriptionText] = useState("")
  let [jobTitleText, updateJobTitleText] = useState("")

  let updateData = (postings) => {
    if (postings)
      updateJobPostings(postings)
  }
  let updateFilter = (filter) => {
    if (filter) {
      // get the various filter data and update the proper fields
      let {
        company,
        statuses,
        jobSites,
        jobDescriptionText,
        jobTitleTexts
      } = filter

      // get the various filter data and update the proper fields
      if (company) updateCompany(company)
      if (statuses) updateStatuses(statuses)
      if (jobSites) updateJobSites(jobSites)
      if (jobDescriptionText) updateJobDescriptionText(jobDescriptionText)
      if (jobTitleTexts) updateJobTitleText(jobTitleTexts)

    }
  }

  let prepareFilter = function () {
    return {
      jobPostings,
      company,
      statuses,
      jobSites,
      jobDescriptionText,
      jobTitleText,
    }
  }

  let getUpdatedPostings = () => {
    axios.post('http://localhost:8080/jobs/all', prepareFilter()).then(
        ({data}) => {
          let {postings, filter} = data
          // resp should have filter and postings
          updateData(postings)
          updateFilter(filter)
        },
        err => console.log(err)
    )
  }

  // when we load page, update all data
  useEffect(getUpdatedPostings, [])

  let functions = {
    updateJobTitleSearch: function (text) {
      if (text !== undefined) {
        updateJobTitleText(text)
      }
    },
    updateJobDescriptionSearch: function (text) {
      if (text !== undefined) {
        updateJobDescriptionText(text)
      }
    },
    updateCompanySearch: function (text) {
      if (text !== undefined) {
        updateCompany(text)
      }
    },
    updateStatusFilter: function (status) {
      if (status !== undefined) {
        let j = statuses
        j[status.name] = status.checked
        updateStatuses({...j})
        getUpdatedPostings()
      }
    },
    updateSiteFilter: function (site) {
      if (site !== undefined) {
        let j = jobSites
        j[site.name] = site.checked
        updateJobSites({...j})
        getUpdatedPostings()
      }
    },
    search: function () {
      getUpdatedPostings()
    }
  }

  let updateJobStatus = function (id, status) {
    if (!id || !status) return
    axios.post('http://localhost:8080/jobs/status/' + id + '/' + status, prepareFilter()).then(
        ({data}) => {
          let {postings, filter} = data
          // resp should have filter and postings
          updateData(postings)
          updateFilter(filter)
        },
        err => console.log(err)
    )
  }

  return (
      <Grid container direction="column" justify="space-evenly"
            alignItems="stretch">
        <div className={"main-panel"}>
          {/*<span>{data.numOfCompanies} companies - </span>*/}
          {/*<span>{data.numOfJobs} jobs</span>*/}
          <hr/>
          <SearchFilter
              jobPostings={jobPostings}
              company={company}
              statuses={statuses}
              jobSites={jobSites}
              jobDescriptionText={jobDescriptionText}
              jobTitleText={jobTitleText}
              functions={functions}/>
          <hr/>
          <Grid container>
            {jobPostings.map(posting => (
                <Job key={posting.id}
                     job={posting}
                     update={updateJobStatus}

                />))}
          </Grid>
        </div>
      </Grid>
  )
}

export default JobsPage

