import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    // backgroundColor: "#d1d7e1cf",
  },
}));

export default function UpdateStatuses(props) {
  const classes = useStyles();
  const updateJobStatus = props.updateJobStatus;
  return (
    <div>
      {props.status !== "saved" && (
        <Button
          className={classes.button}
          onClick={updateJobStatus}
          value={"saved"}
        >
          save
        </Button>
      )}

      {props.status !== "excluded" && (
        <Button
          className={classes.button}
          onClick={updateJobStatus}
          value={"excluded"}
        >
          exclude
        </Button>
      )}

      {props.status !== "applied" && (
        <Button
          className={classes.button}
          onClick={updateJobStatus}
          value={"applied"}
        >
          applied
        </Button>
      )}

      {props.status === "applied" && (
        <Button
          className={classes.button}
          onClick={updateJobStatus}
          value={"interviewing"}
        >
          interview
        </Button>
      )}

      {props.status !== "new" && props.status !== "rejected" && (
        <Button
          className={classes.button}
          onClick={updateJobStatus}
          value={"rejected"}
        >
          rejected
        </Button>
      )}

      {props.status !== "ignored" && (
        <Button
          className={classes.button}
          onClick={updateJobStatus}
          value={"ignored"}
        >
          ignored
        </Button>
      )}
    </div>
  );
}
