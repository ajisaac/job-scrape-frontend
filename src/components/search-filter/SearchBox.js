import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from "@material-ui/core/Grid"
import {TextField} from "@material-ui/core"
import Button from "@material-ui/core/Button"


let styles = makeStyles(() => ({
  textField: {
    maxWidth: 150
  }
}))

function SearchBox() {
  let {textField} = styles()
  return (
      <div>
        <Grid container spacing={1}>
          <Grid item>
            <TextField
                className={textField}
                label="Text Search"
                id="outlined-size-small"
                defaultValue=""
                variant="outlined"
                size="small"
            />
          </Grid>
          <Grid item>
            <Button size={"small"}
                    color={"secondary"}
                    onClick={() => console.log("clicked")}> Apply</Button>
          </Grid>
        </Grid>
      </div>
  )
}

export default SearchBox