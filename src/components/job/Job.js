import React from "react"
import {connect} from "react-redux"
import {updateJobState} from "../../redux/actions/Actions"
import UpdateStatuses from "./UpdateStatuses"
import makeStyles from "@material-ui/core/styles/makeStyles"

const styles = makeStyles(() => ({
  root: {
    padding: 32,
    marginTop: 14,
    border: "2px solid black"
  }
}))

function Job(props) {
  const {date, description, href, job_title, location, status} = props.job
  const {root} = styles()

  return (
      <div className={root}>
        <div>
          <span>{status} - </span>
          <a target="_blank" rel="noreferrer noopener" href={href}>
            {job_title}{location && (" - " + location)}
          </a>
        </div>
        <UpdateStatuses status={status}
                        updateJobStatus={value => {
                          props.updateJobState(props.job.id, value)
                        }}/>
        <div>
          <div className={"summary"}>
            <div dangerouslySetInnerHTML={{__html: description}}/>
          </div>
        </div>
        <div>{date}</div>
        <hr/>
      </div>
  )
}

export default connect(state => state, {
  updateJobState: updateJobState,
})(Job)
