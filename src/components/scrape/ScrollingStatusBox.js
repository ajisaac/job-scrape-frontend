import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"


let useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#0d0e0d",
    color: "#2bda2b",
    padding: 10,
    maxHeight: 180,
    minHeight: 180,
    overflow: "hidden"
  },
  entry: {
    // padding: 2,
    fontFamily: "monospace",
    fontWeight: 500,
  },
  dateClass: {
    fontWeight: 900
  }
}))
// The scrolling status box for if we are scraping
export default function ScrollingStatusBox(props) {
  let {root, entry, dateClass} = useStyles()

  let entries = props?.entries

  let hasValidEntries = false
  entries.forEach(e => {
    if (typeof e === "string" && !!e) {
      hasValidEntries = true
    }
  })

  if (!hasValidEntries) {
    return (
        <div/>
    )
  }

  return (
      <div className={root}>
        {entries.map(e => {
          if (typeof e === "string" && !!e) {
            let date = e.substr(0, 8)
            let rest = e.substr(8)
            return <div key={e} className={entry}><span className={dateClass}>{date}</span>{rest}</div>
          } else return null
        })}
      </div>
  )

}