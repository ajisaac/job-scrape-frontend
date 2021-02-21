import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 8
  }
}));


export default function ScrollingStatusBox(props) {
  const [status, setStatus] = useState([]);
  const [formText, setFormText] = useState("")

  let ws = props.websocket;
  let id = props.scraper;

  ws.onmessage = msg => {
    let message = JSON.parse(msg.data)
    addStatus(message)
  }

  const addStatus = (s) => {
    console.log(s);
    if (s.id === id) {
      status.unshift(s);
      setStatus(status.slice(0, 5));
    }
  }

  return (
      <div>
        {
          status
              .map((s, index) => {
                return <div key={index}>{s}</div>
              })
        }
        <form>
          <input type="text"
                 value={formText}
                 onChange={e => setFormText(e.target.value)}/>

          <Button onClick={() => {
            addStatus(formText);
          }}>push</Button>
        </form>
      </div>
  )
}