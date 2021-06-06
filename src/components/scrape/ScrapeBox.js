import React, {useEffect, useState} from "react"
import ScrollingStatusBox from "./ScrollingStatusBox"
import Button from "@material-ui/core/Button"
import makeStyles from "@material-ui/core/styles/makeStyles"

let useStyles = makeStyles(() => ({
  spacer: {
    marginLeft: 5,
    marginRight: 10
  }
}))

export default function ScrapeBox(props) {
  let {spacer} = useStyles()
  let s = props.scraper

  return (<div>
    <Button onClick={() => {
    }}>Scrape</Button>
    <span className={spacer}>-</span>
    <span>{s.name}</span>
    <ScrollingStatusBox scraper={s} entries={props.entries}/>
  </div>)

}