import React from "react"
import UpdateStatuses from "./UpdateStatuses"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from "@material-ui/core/Grid"

const styles = makeStyles(() => ({
  gridRoot: {
    padding: 14,
    marginTop: 8,
    marginBottom: 8,
    color: "#3c4146",
    backgroundColor: "#fefaf8"
  },
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
  },
  "companyBar div": {
    display: "inline"
  },
  companyHolder: {
    marginBottom: 30,
    marginLeft: -20,
    marginTop: -10,
    fontWeight: "bold",
    fontSize: "smaller",
    color: "#989191",
  },
  siteClass: {
    marginBottom: 10,
    marginLeft: -20,
    marginTop: -10,
  }
}))

function Job(props) {
  const {
    date,
    description,
    href,
    jobTitle,
    location,
    status,
    company,
    jobSite
  } = props.job

  const {
    gridRoot,
    root,
    job_title,
    descriptionClass,
    statusSpan,
    companyHolder,
    siteClass,
    companyBar
  } = styles()

  return (

      <Grid className={gridRoot} item>
        <div className={root}>

          <div className={companyBar}>

            <div className={siteClass}>
              <span>{jobSite}</span>
            </div>
            <div className={companyHolder}>
              <span>{company}</span>
            </div>
          </div>

          <div className={job_title}>
            <div className={"testclass"}>
              <b>
                <a target="_blank" rel="noreferrer noopener" href={href}>
                  {jobTitle}{location && (" - " + location)}
                </a> - <span className={statusSpan}>{status}</span>
              </b>
            </div>

            <UpdateStatuses status={status}
                            updateJobStatus={value => {
                              props.update(props.job.id, value)
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
      </Grid>
  )
}

export default Job
