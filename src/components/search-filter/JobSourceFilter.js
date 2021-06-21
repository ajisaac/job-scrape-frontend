import React from "react"
import {Checkbox, FormControlLabel} from "@material-ui/core"
import Grid from "@material-ui/core/Grid"

function JobSourceFilter(props) {
  let sites = [
    "WWR",
    "Stackoverflow",
    "Remoteco",
    "Remoteokio",
    "WorkingNomads"
  ]
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
          {sites.map((text) => {
            return (
                <Grid item key={text}>
                  <FormControlLabel
                      control={
                        <Checkbox
                            checked={state[text]}
                            onClick={handleChange}
                            name={text}
                            color="primary"
                        />
                      } label={text}/>
                </Grid>
            )
          })}
        </Grid>
      </div>
  )
}

export default JobSourceFilter