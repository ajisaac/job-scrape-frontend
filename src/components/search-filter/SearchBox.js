import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from "@material-ui/core/Grid"
import {TextField} from "@material-ui/core"
import Button from "@material-ui/core/Button"


let styles = makeStyles(() => ({
  textField: {
    maxWidth: 170
  }
}))

function SearchBox(props) {

  let {update, state, label, search} = props
  let {textField} = styles()

  let handleChange = (event) => {
    let name = event?.target?.value
    update(name)
  }

  return (
      <div>
        <Grid container spacing={1} direction={"row"}>
          <Grid item>
            <TextField
                className={textField}
                label={label}
                id="outlined-size-small"
                variant="outlined"
                size="small"
                value={state}
                onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <Button size={"small"}
                    color={"secondary"}
                    onClick={search}> Apply</Button>
          </Grid>
        </Grid>
      </div>
  )
}

export default SearchBox