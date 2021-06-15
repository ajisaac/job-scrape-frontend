import React from "react"
import Grid from "@material-ui/core/Grid"
import {Checkbox, FormControlLabel} from "@material-ui/core"

function GrayListToggle(props) {

  let {update, state} = props

  let handleChange = function (event) {
    if (event?.target?.checked !== undefined) {
      update(event.target.checked)
    }
  }

  return (
      <div>
        <Grid container spacing={1}>
          <FormControlLabel
              control={
                <Checkbox
                    checked={state}
                    onChange={handleChange}
                    name="graylisted"
                    color="primary"
                />
              }
              label="Include Graylisted"
          />
        </Grid>
      </div>
  )
}

export default GrayListToggle