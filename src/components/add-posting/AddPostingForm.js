import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import {Button, Card, Grid, TextField} from "@material-ui/core"
import {TextareaAutosize} from "@material-ui/core"
import {connect} from "react-redux"
import {addJobPosting} from "../../redux/actions/Actions"

const useStyles = makeStyles(() => ({
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
  }
}))

function AddPostingForm(props) {
  let {
    root,
    card,
    formTitle,
    form,
    inputField,
    textArea,
    textAreaHolder,
    button
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

            <span>Add Job Posting</span>
          </div>
          <form noValidate autoComplete="off" className={form}>
            <Grid container direction={"column"} alignItems={"flex-start"}>
              <TextField id={"title"} label={"Job Title"}
                         variant={"outlined"}
                         className={inputField}/>
              <TextField id={"company"} label={"Company Name"}
                         variant={"outlined"}
                         className={inputField}/>
              <TextField id={"url"} label={"Url"}
                         variant={"outlined"}
                         className={inputField}/>
              <TextField id={"location"} label={"location"}
                         variant={"outlined"}
                         className={inputField}/>
              <TextField id={"date"} type={"date"} label={"date"}
                         variant={"outlined"}
                         className={inputField}
                         InputLabelProps={{
                           shrink: true,
                         }}/>
            </Grid>
            <Grid container direction={"column"} alignItems={"stretch"}>
              <Grid item className={textAreaHolder}>
                <TextareaAutosize
                    xs={12}
                    className={textArea}
                    aria-label="Description"
                    placeholder="Description"
                    rows={10}
                />
              </Grid>
            </Grid>
            <Button
                variant={"outlined"}
                color={"primary"}
                className={button}
                onClick={() => {
                  props.addJobPosting()
                }}>SUBMIT</Button>
          </form>
        </Card>


      </Grid>
    </Grid>
  </div>)
}

export default connect(state => state, {
  addJobPosting: addJobPosting,
})(AddPostingForm)
