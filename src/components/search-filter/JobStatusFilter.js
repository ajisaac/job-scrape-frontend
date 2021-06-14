import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from "@material-ui/core/Grid"
import {Checkbox, FormControlLabel} from "@material-ui/core"


let styles = makeStyles(() => ({
  textField: {
    maxWidth: 150
  }
}))

function JobStatusFilter() {
  return (
      <div>
        <Grid container spacing={0} direction={"column"}>
          {[
            "new",
            "saved",
            "applied",
            "interviewing",
            "excluded",
            "rejected",
            "ignored",
            "all"
          ].map((text, index) => (
              <Grid item>
                <FormControlLabel
                    control={<Checkbox name={text} color="primary"/>}
                    label={text}/>
              </Grid>
          ))}
        </Grid>
      </div>
  )
}

export default JobStatusFilter