import React from "react"
import {connect} from "react-redux"
import Job from "../job/Job"
import {Card, makeStyles} from "@material-ui/core"
import CompanyBar from "./CompanyBar"

import {
  updateMultipleJobState,
} from "../../redux/actions/Actions"

const useStyles = makeStyles(() => ({
  root: {
    padding: 14,
    marginTop: 8,
    marginBottom: 8,
    color: "#3c4146",
    backgroundColor: "#fefaf8"
  },
}))

function Company(props) {
  const {company} = props
  const {root} = useStyles()
  return (
      <Card key={company.id} variant={"outlined"} className={root}>
        <CompanyBar company={company}/>
        {company.jobPostings.map(job =>
            <Job key={job.id} job={job}/>
        )}
      </Card>
  )
}

export default connect((state) => {
  return state
}, {updateMultipleJobState: updateMultipleJobState,})(Company)
