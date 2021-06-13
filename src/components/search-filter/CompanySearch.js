import {connect} from "react-redux"
import React from "react"
import {TextField} from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

let styles = makeStyles(() => ({
  textField: {
    maxWidth: 150
  }
}))

function CompanySearch() {
  let {textField} = styles()
  return (
      <div>
        <Grid container spacing={1}>
          <Grid item>
            <TextField
                className={textField}
                label="Company Filter"
                id="outlined-size-small"
                defaultValue=""
                variant="outlined"
                size="small"
            />
          </Grid>
          {/* Want the typeahead dropdown thing */}
          {/* Want a way to click a company name and filter to that */}
          <Grid item>
            <Button size={"small"}
                    color={"secondary"}
                    onClick={() => console.log("clicked")}> Apply</Button>
          </Grid>
        </Grid>
      </div>
  )
}

export default connect((state) => {
  return state
})(CompanySearch)
