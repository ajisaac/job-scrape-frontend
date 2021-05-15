import React from "react"
import {Grid, Button, makeStyles} from "@material-ui/core"

import CompanyLabels from "./CompanyLabels"

const useStyles = makeStyles(() => ({
  bar: {
    margin: 0,
  },
  companyName: {
    border: "1px solid",
    padding: 9
  }
}))

function CompanyBar(props) {
  const {id, labels, name} = props.company
  const {bar, companyName} = useStyles()
  return (
      <div className={companyName}>
        <CompanyLabels labels={labels}/>
        <Grid
            container direction="row" justify="space-between"
            alignItems="center" key={id}
        >
          <h3 className={bar}> {name} </h3>
          <h3 className={bar}>
            <Button value={name}>blacklist</Button>
          </h3>
        </Grid>
      </div>
  )
}

export default CompanyBar
