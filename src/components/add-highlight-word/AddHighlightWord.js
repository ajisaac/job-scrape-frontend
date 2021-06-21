import React, {createRef, useEffect, useState} from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import {Card, Grid, TextField} from "@material-ui/core"
import axios from "axios"

const useStyles = makeStyles(theme => ({
  root: {},
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
  form: {
    margin: 30,
    marginLeft: 200,
    marginRight: 100
  },
  inputField: {
    marginTop: 15
  },
  textArea: {
    width: "100%"
  },
  textAreaHolder: {
    marginTop: 10,
  },
  button: {
    marginTop: 15,
  },
  highlight: {
    backgroundColor: "#e488f4",
    margin: 5,
    padding: 3,
    fontWeight: "bold",
    borderRadius: "5px"
  }
}))

function AddHighlightWord(props) {
  let {
    root,
    card,
    formTitle,
    form,
    inputField,
    highlight
  } = useStyles()

  let [words, setWords] = useState([])
  let [word, setWord] = useState("")
  let box = createRef()

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

  let addHighlightWord = (e) => {
    if(!e)
      return

    e.preventDefault()
    axios.post("http://localhost:8080/highlight/add", {name: word})
        .then(r => {
          setWords(r?.data || [])
          setWord("")
          box.current.focus()
        })
        .catch(err => console.log(err))
  }

  return (<div className={root}>
    <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
    >
      <Grid item>
        <Card elevation={1} className={card}>
          <div className={formTitle}>
            <span>Add Highlight Word</span>
          </div>
          <form noValidate autoComplete="off" onSubmit={addHighlightWord}
                className={form}>

            <Grid container direction={"column"} alignItems={"flex-start"}>
              <TextField id={"word"} label={"Word"}
                         ref={box}
                         variant={"outlined"}
                         value={word}
                         onChange={event => {
                           setWord(event.target.value)
                         }}
                         className={inputField}/>
            </Grid>
          </form>
          <hr/>
          <br/>
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
  </div>)
}

export default AddHighlightWord
