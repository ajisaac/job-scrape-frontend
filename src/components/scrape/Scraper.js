import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Button} from "@material-ui/core"
import Axios from "axios"
import ScrollingStatusBox from "./ScrollingStatusBox"
import SockJS from "sockjs-client/dist/sockjs"
import {Client, Message} from "@stomp/stompjs"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 8
  }
}))

const data =
    [
      {
        "id": 4,
        "site": "STACKOVERFLOW",
        "name": "Stackoverflow Developer Jobs",
        "query": null,
        "location": null,
        "remote": false,
        "radius": 0,
        "jobType": null,
        "sortType": null
      },
      {
        "id": 3,
        "site": "WWR",
        "name": "WWR Developer Jobs",
        "query": null,
        "location": null,
        "remote": false,
        "radius": 0,
        "jobType": null,
        "sortType": null
      },
      {
        "id": 2,
        "site": "REMOTIVEIO",
        "name": "Remotiveio Developer Jobs",
        "query": null,
        "location": null,
        "remote": false,
        "radius": 0,
        "jobType": null,
        "sortType": null
      },
      {
        "id": 5,
        "site": "REMOTECO",
        "name": "Remoteco Developer Jobs",
        "query": null,
        "location": null,
        "remote": false,
        "radius": 0,
        "jobType": null,
        "sortType": null
      },
      {
        "id": 6,
        "site": "REMOTEOKIO",
        "name": "Remoteokio Developer Jobs",
        "query": null,
        "location": null,
        "remote": false,
        "radius": 0,
        "jobType": null,
        "sortType": null
      },
      {
        "id": 7,
        "site": "SITEPOINT",
        "name": "Sitepoint Developer Jobs",
        "query": null,
        "location": null,
        "remote": false,
        "radius": 0,
        "jobType": null,
        "sortType": null
      },
      {
        "id": 8,
        "site": "WORKINGNOMADS",
        "name": "Workingnomads Developer Jobs",
        "query": null,
        "location": null,
        "remote": false,
        "radius": 0,
        "jobType": null,
        "sortType": null
      }
    ]

const url = "http://localhost:5000"

const scrapePage = (id) => {
  let ws = new WebSocket("ws://localhost:5000/gs-guide-websocket")
  ws.onopen = () => {
    console.log("1")
    ws.send("data")
  }
  ws.onclose = () => {
    console.log("2")
  }
  ws.onerror = (err) => {
    console.log(err)
    console.log("3")
  }
  ws.onmessage = (msg) => {
    console.log(msg.data)
    console.log("4")
  }
  Axios
      .post(url + "/batch/scrape/" + id)
      .then(r => {
        console.log(r)
      })
      .catch(err => {
        console.log(err)
      })
}

const stopScrape = (id) => {
  Axios
      .post(url + "/batch/stopscrape/" + id)
      .then(r => {
        console.log(r)
      })
      .catch(err => {
        console.log(err)
      })
}


export default function Scraper(props) {

  const classes = useStyles()
  return (
      <div className={classes.root}>
        {data.map((d, index) => (
            <div key={index}>
              <Button
                  className={classes.button}
                  onClick={() => {
                    scrapePage(d.id)
                  }}>
                Scrape
              </Button> - {d.name}
              <ScrollingStatusBox scraper={d.id}/>
            </div>
        ))}
      </div>
  )
}