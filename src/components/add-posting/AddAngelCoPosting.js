import React, {useState} from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import {Card, Grid, TextareaAutosize} from "@material-ui/core"
import {connect} from "react-redux"
import {addAngelCoPosting} from "../../redux/actions/Actions"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(() => ({
  root: {
    "& Button": {
      marginTop: 15,
    }
  },
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
    marginLeft: 100,
    marginRight: 100
  },
  textArea: {
    width: "100%"
  },
  textAreaHolder: {
    marginTop: 15,
  },
}))

function AddAngelCoPosting(props) {

  let [value, setValue] = useState("")

  let {
    root,
    card,
    formTitle,
    form,
    textArea,
    textAreaHolder,
  } = useStyles()

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
            <span>Angel.co Job Posting</span>
          </div>
          <form noValidate autoComplete="off" className={form}>
            <Grid container direction={"column"} alignItems={"stretch"}>
              <Grid item className={textAreaHolder}>
                <TextareaAutosize
                    xs={12}
                    className={textArea}
                    aria-label="Description"
                    placeholder="Description"
                    rows={10}
                    value={value}
                    onChange={event => {
                      setValue(event.target.value)
                      console.log(value)
                    }}
                />
              </Grid>
            </Grid>
            <Button
                variant={"outlined"}
                color={"primary"}
                onClick={() => {
                  props.addAngelCoPosting(JSON.parse(value))
                }}>SUBMIT</Button>
          </form>
        </Card>
      </Grid>
    </Grid>
  </div>)
}

export default connect(state => state, {
  addAngelCoPosting: addAngelCoPosting,
})(AddAngelCoPosting)
