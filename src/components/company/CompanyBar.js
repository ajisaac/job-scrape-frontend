import React from "react"
import {Grid, Button, makeStyles} from "@material-ui/core"

import CompanyLabels from "./CompanyLabels"

const useStyles = makeStyles(() => ({
  nameStyle: {
    margin: 0,
  },
  companyBar: {
    padding: 9
  },
  blacklist: {
    display: "none"
  },
  compLabels: {
    paddingBottom: 12
  }
}))

function CompanyBar(props) {
  const {id, labels, name} = props.company
  const {nameStyle, companyBar, blacklist, compLabels} = useStyles()
  return (
      <div className={companyBar}>
        <div className={compLabels}>
          <CompanyLabels labels={labels}/>
        </div>
        <Grid
            container direction="row" justify="space-between"
            alignItems="center" key={id}
        >
          <h3 className={nameStyle}> {name} </h3>
          <h3 className={blacklist}>
            <Button value={name}>blacklist</Button>
          </h3>
        </Grid>
        <hr/>
      </div>
  )
}

export default CompanyBar
