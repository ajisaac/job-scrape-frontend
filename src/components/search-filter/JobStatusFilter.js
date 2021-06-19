import React from "react"
import Grid from "@material-ui/core/Grid"
import {Checkbox, FormControlLabel} from "@material-ui/core"

function JobStatusFilter(props) {
  let {update, state} = props

  let handleChange = (event) => {
    let name = event.target.name
    let checked = event.target.checked
    if (name) {
      update({name, checked})
    }
  }

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
          ].map((text) => (
              <Grid item key={text} >
                <FormControlLabel
                    control={
                      <Checkbox
                          checked={state[text]}
                          onClick={handleChange}
                          name={text}
                          color="primary"/>
                    }
                    label={text}/>
              </Grid>
          ))}
        </Grid>
      </div>
  )
}

export default JobStatusFilter