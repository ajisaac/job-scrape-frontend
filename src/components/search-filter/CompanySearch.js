import React from "react"
import {TextField, Button, Grid} from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles"

let styles = makeStyles(() => ({
  textField: {
    maxWidth: 170
  }
}))

function CompanySearch(props) {
  let {textField} = styles()
  let {update, state, search} = props

  let handleChange = (event) => {
    let name = event?.target?.value
    update(name)
  }

  return (
      <div>
        <Grid container spacing={1}>
          <Grid item>
            <TextField
                id="outlined-size-small"
                className={textField}
                label="Company Filter"
                variant="outlined"
                size="small"
                value={state}
                onChange={handleChange}
            />
          </Grid>
          {/* Want the typeahead dropdown thing */}
          {/* Want a way to click a company name and filter to that */}
          <Grid item>
            <Button
                onClick={search}
                size={"small"}
                color={"secondary"}
            > Apply</Button>
          </Grid>
        </Grid>
      </div>
  )
}

export default CompanySearch
