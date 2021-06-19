import React, {useEffect, useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import axios from "axios"
import ScrapeBox from "./ScrapeBox"

const useStyles = makeStyles(() => ({
  root: {
    padding: 8
  },
}))

export default function Scraper() {


  const [scrapers, setScrapers] = useState([])
  const [entries, setEntries] = useState({})

  useEffect(() => {
    axios.get("http://localhost:8080/batch/scrape-jobs")
        .then(r => {
          let d = r?.data || scrapers
          let ents = entries

          // we get the scrape jobs when loading the page
          // then we set up our scrolling text box
          d.forEach(t => {
            let sEvs = []
            for (let i = 0; i < 10; i++) {
              sEvs.push("")
            }
            if (t?.name) {
              ents[t?.name] = sEvs
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

  // adds a webscraper entry
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

  useEffect(() => {
    let client = new WebSocket("ws://localhost:8080/topic/messages")
    client.onopen = () => {
      console.log("Connected to the web socket")
    }
    client.onmessage = (m) => {
      if (m?.data) {
        try {
          addEntry(JSON.parse(m.data))
        } catch (e) {
          console.log(e)
        }
      }
    }
  }, [])

  const classes = useStyles()
  if (!scrapers) {
    return <div/>
  }
  return (
      <div className={classes.root}>
        <h3>Scrapers</h3>
        <hr/>
        {scrapers.map(d => (
            <div key={d.id}>
              <ScrapeBox scraper={d} entries={d?.name && entries[d.name]}/>
            </div>
        ))}
      </div>
  )
}