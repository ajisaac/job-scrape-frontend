import React, {useEffect, useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Stomp} from "@stomp/stompjs"
import axios from "axios"
import ScrapeBox from "./ScrapeBox"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(() => ({
  root: {
    padding: 8
  },
}))

export default function Scraper() {


  const url = "ws://localhost:8080/chat"
  let client = null
  let subscription = null
  const [scrapers, setScrapers] = useState([])
  const [entries, setEntries] = useState({})

  useEffect(() => {
    axios.get("http://localhost:8080/batch/scrape-jobs")
        .then(r => {
          let d = r?.data || scrapers
          let ents = entries
          d.forEach(t => {
            let sEvs = []
            for (let i = 0; i < 10; i++) {
              sEvs.push("")
            }
            if (t?.site) {
              ents[t?.site] = sEvs
            }
          })
          setEntries(ents)
          setScrapers(d)
        })
        .catch(err => {
          console.log(err)
        })
  }, [])


  function updateEntries(ents, entry) {
    if (!ents || !entry)
      return ents

    if (Array.isArray(ents)) {
      ents.pop()
      ents.unshift(entry?.text || "")
      return ents
    }
    return []
  }

  function addEntry(entry) {
    if (!entry)
      return

    let siteToUpdate = entry?.from
    if (!siteToUpdate)
      return

    if (entries[siteToUpdate]) {
      entries[siteToUpdate] = updateEntries(entries[siteToUpdate], entry)
    } else {
      entries[siteToUpdate] = [entry.text]
    }

    let nentries = {}
    for (let [k, v] of Object.entries(entries)) {
      nentries[k] = v
    }

    setEntries(nentries)
  }

  const setupClient = () => {
    client = Stomp.client(url)
    client.reconnect_delay = 5000
    client.debug = () => {
    }
    client.logRawCommunication = false
    client.connect({},
        () => {
          subscription = client.subscribe("/topic/messages", function (message) {
            // everything comes in here
            if (message?.body) {
              addEntry(JSON.parse(message.body))
            }
          })
        },
        (err) => {
          console.log(err?.headers?.message)
        })
  }

  useEffect(() => {
    setupClient()
  }, [])

  const classes = useStyles()
  if (!scrapers) {
    return <div/>
  }
  return (
      <div className={classes.root}>
        <Button onClick={() => {
          scrapers.forEach(s => {
            if (s.id) {
              let url = "http://localhost:8080/batch/scrape/" + s.id
              axios.post(url, {}).then().catch(err => console.log(err))
            }
          })
        }}>
          Scrape All
        </Button>
        <hr/>
        {scrapers.map(d => (
            <div key={d.id}>
              <ScrapeBox scraper={d} entries={d?.site && entries[d.site]}/>
            </div>
        ))}
      </div>
  )
}