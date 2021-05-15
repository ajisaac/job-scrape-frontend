import React from "react"
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles(() => ({
  new: {
    padding: 3,
    margin: 3,
    backgroundColor: "#eaea1a"
  },
  saved: {
    padding: 4,
    margin: 3,
    backgroundColor: "#5ac341"
  },
  applied: {
    padding: 3,
    margin: 3,
    backgroundColor: "#7a92c2"
  },
  interviewing: {
    padding: 3,
    margin: 3,
    backgroundColor: "#ac6ebf"
  },
  excluded: {
    padding: 3,
    margin: 3,
    backgroundColor: "#ba7782"
  },
  rejected: {
    padding: 3,
    margin: 3,
    backgroundColor: "#b6727d"
  },
  ignored: {
    padding: 3,
    margin: 3,
    backgroundColor: "#c37d89"
  },
}))

export default function CompanyLabels(props) {
  const {labels} = props
  const classes = useStyles()
  return (
      <div>
        {labels &&
        labels.map(label => {
          return <span className={classes[label]}
                       key={label}>{label}</span>
        })}
      </div>
  )
}