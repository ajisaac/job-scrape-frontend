import React from "react"
import ScrollingStatusBox from "./ScrollingStatusBox"
import Button from "@material-ui/core/Button"
import makeStyles from "@material-ui/core/styles/makeStyles"
import axios from "axios"

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
      if (props?.scraper?.id) {
        let url = "http://localhost:8080/batch/scrape/" + props.scraper.id
        axios.post(url, {})
            .then()
            .catch(err => {
              console.log(err)
            })
      }
    }}>Scrape</Button>
    <Button onClick={() => {
      if (props?.scraper?.id) {
        let url = "http://localhost:8080/batch/stop-scrape/" + props.scraper.id
        axios.post(url, {})
            .then()
            .catch(err => {
              console.log(err)
            })
      }
    }}>Stop</Button>

    <span className={spacer}>-</span>
    <span>{s.name}</span>
    <ScrollingStatusBox scraper={s} entries={props.entries}/>
  </div>)

}