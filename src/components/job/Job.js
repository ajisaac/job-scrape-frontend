import React from "react"
import {connect} from "react-redux"
import {updateJobState} from "../../redux/actions/Actions"
import UpdateStatuses from "./UpdateStatuses"
import makeStyles from "@material-ui/core/styles/makeStyles"

const styles = makeStyles(() => ({
  root: {
    padding: 24,
    paddingTop: 10,
    fontSize: 17,
    lineHeight: "1.5em"
  },
  job_title: {
    marginBottom: "3px",
    textAlign: "center"
  },
  statusSpan: {
    marginLeft: 10
  },
  descriptionClass: {
    marginTop: "24px"
  }
}))

function Job(props) {
  const {date, description, href, jobTitle, location, status} = props.job
  const {root, job_title, descriptionClass, statusSpan} = styles()

  return (
      <div className={root}>

        <div className={job_title}>

          <div>
            <b>
              <a target="_blank" rel="noreferrer noopener" href={href}>
                {jobTitle}{location && (" - " + location)}
              </a> - <span className={statusSpan}>{status}</span>
            </b>
          </div>

          <UpdateStatuses status={status}
                          updateJobStatus={value => {
                            props.updateJobState(props.job.id, value)
                          }}/>
        </div>

        <div>
          <div className={descriptionClass}>
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
