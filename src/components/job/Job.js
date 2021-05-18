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
  jobTitle: {
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
  const {date, description, href, job_title, location, status} = props.job
  const {root, jobTitle, descriptionClass, statusSpan} = styles()

  return (
      <div className={root}>

        <div className={jobTitle}>

          <div>
            <b>
              <a target="_blank" rel="noreferrer noopener" href={href}>
                {job_title}{location && (" - " + location)}
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
