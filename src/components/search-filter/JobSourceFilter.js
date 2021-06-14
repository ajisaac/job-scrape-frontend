import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import {Checkbox, FormControlLabel} from "@material-ui/core"
import Grid from "@material-ui/core/Grid"


let styles = makeStyles(() => ({
  textField: {
    maxWidth: 150
  }
}))

function JobSourceFilter() {
  return (
      <div>
        <Grid container spacing={0} direction={"column"}>
          {
            [
              "WWR",
              "Stackoverflow",
              "Indeed",
              "Remoteco",
              "Remotiveio",
              "Remoteok",
              "Sitepoint",
              "WorkingNomads",
            ].map((text, index) => {
              return (
                  <Grid item>
                    <FormControlLabel
                        control={
                          <Checkbox
                              // checked={state.checkedB}
                              // onChange={handleChange}
                              name="graylisted"
                              color="primary"
                          />
                        } label={text}/>
                  </Grid>
              )
            })
          }
        </Grid>
      </div>
  )
}

export default JobSourceFilter