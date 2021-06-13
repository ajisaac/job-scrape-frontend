import {connect} from "react-redux"
import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from "@material-ui/core/Grid"
import {Checkbox, FormControlLabel} from "@material-ui/core"


let styles = makeStyles(() => ({
  textField: {
    maxWidth: 150
  }
}))

function GrayListToggle() {

  let {textField} = styles()

  return (
      <div>
        <Grid container spacing={1}>
          <FormControlLabel
              control={
                <Checkbox
                    // checked={state.checkedB}
                    // onChange={handleChange}
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

export default connect((state) => {
  return state
})(GrayListToggle)