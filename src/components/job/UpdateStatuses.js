import React from "react"
import {Button, makeStyles} from "@material-ui/core"

const useStyles = makeStyles(() => ({
  button: {},
}))

export default function UpdateStatuses(props) {
  const {button} = useStyles()
  const {updateJobStatus} = props
  return (
      <div>
        {props.status !== "saved" && (
            <Button
                className={button}
                onClick={() => updateJobStatus("saved")}
                value={"saved"}
            >
              save
            </Button>
        )}

        {props.status !== "excluded" && (
            <Button
                className={button}
                onClick={() => updateJobStatus("excluded")}
                value={"excluded"}
            >
              exclude
            </Button>
        )}

        {props.status !== "applied" && (
            <Button
                className={button}
                onClick={() => updateJobStatus("applied")}
                value={"applied"}
            >
              applied
            </Button>
        )}

        {props.status === "applied" && (
            <Button
                className={button}
                onClick={() => updateJobStatus("interviewing")}
                value={"interviewing"}
            >
              interview
            </Button>
        )}

        {props.status !== "new" && props.status !== "rejected" && (
            <Button
                className={button}
                onClick={() => updateJobStatus("rejected")}
                value={"rejected"}
            >
              rejected
            </Button>
        )}

        {props.status !== "ignored" && (
            <Button
                className={button}
                onClick={() => updateJobStatus("ignored")}
                value={"ignored"}
            >
              ignored
            </Button>
        )}
      </div>
  )
}
