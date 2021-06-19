import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"


let useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "black",
    color: "green",
    padding: 10,
    maxHeight: 180,
    minHeight: 180,
    overflow: "hidden"
  },
  entry: {
    // padding: 2,
    fontFamily: "monospace",
    fontWeight: "bold",
  }
}))
// The scrolling status box for if we are scraping
export default function ScrollingStatusBox(props) {
  let {root, entry} = useStyles()

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
          if (typeof e === "string" && !!e)
            return <div key={e} className={entry}>{e}</div>
          else
            return null
        })}
      </div>
  )

}