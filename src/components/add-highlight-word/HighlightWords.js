import React, {useEffect, useState} from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import {Card, Grid} from "@material-ui/core"
import axios from "axios"

const useStyles = makeStyles(() => ({
  formTitle: {
    marginBottom: "3px",
    marginTop: 30,
    textAlign: "center",
    fontWeight: "bold"
  },
  card: {
    padding: 14,
    marginTop: 8,
    marginBottom: 8,
    color: "#3c4146",
    backgroundColor: "#fefaf8"
  },
  highlight: {
    backgroundColor: "#e488f4",
    margin: 5,
    padding: 3,
    fontWeight: "bold",
    borderRadius: "5px"
  }
}))

function HighlightWords(props) {
  let {card, formTitle, highlight} = useStyles()

  let [words, setWords] = useState([])

  const grabWords = () => {
    axios("http://localhost:8080/highlight/all")
        .then(r => {
          setWords(r?.data || [])
        })
        .catch(err => console.log(err))
  }

  useEffect(() => {
    grabWords()
  }, [])


  return (
      <div>
        <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="stretch"
        >
          <Grid item>
            <Card elevation={1} className={card}>
              <div className={formTitle}>
                <span>Highlight Words</span>
              </div>
              <Grid container>
                {words.map(w => {
                  return <span className={highlight}>{w.name}</span>
                })}
              </Grid>
            </Card>

          </Grid>
        </Grid>
      </div>
  )
}

export default HighlightWords
