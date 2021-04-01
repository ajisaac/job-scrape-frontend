import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import Axios from "axios";
import ScrollingStatusBox from "./ScrollingStatusBox";
import SockJS from "sockjs-client/dist/sockjs"
import {Client, Message} from "@stomp/stompjs"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 8
  }
}));

const data =
    [
      {
        "id": 3,
        "site": "STACKOVERFLOW",
        "name": "Stackoverflow Developer Jobs",
        "query": null,
        "location": null,
        "remote": false,
        "radius": 0,
        "jobType": null,
        "sortType": null
      },
      {
        "id": 4,
        "site": "WWR",
        "name": "WWR Developer Jobs",
        "query": null,
        "location": null,
        "remote": false,
        "radius": 0,
        "jobType": null,
        "sortType": null
      },
      {
        "id": 5,
        "site": "REMOTIVEIO",
        "name": "Remotiveio Developer Jobs",
        "query": null,
        "location": null,
        "remote": false,
        "radius": 0,
        "jobType": null,
        "sortType": null
      },
      {
        "id": 6,
        "site": "REMOTECO",
        "name": "Remoteco Developer Jobs",
        "query": null,
        "location": null,
        "remote": false,
        "radius": 0,
        "jobType": null,
        "sortType": null
      },
      {
        "id": 7,
        "site": "REMOTEOKIO",
        "name": "Remoteokio Developer Jobs",
        "query": null,
        "location": null,
        "remote": false,
        "radius": 0,
        "jobType": null,
        "sortType": null
      },
      {
        "id": 8,
        "site": "SITEPOINT",
        "name": "Sitepoint Developer Jobs",
        "query": null,
        "location": null,
        "remote": false,
        "radius": 0,
        "jobType": null,
        "sortType": null
      },
      {
        "id": 9,
        "site": "STACKOVERFLOW",
        "name": "Stackoverflow Developer Jobs",
        "query": null,
        "location": null,
        "remote": false,
        "radius": 0,
        "jobType": null,
        "sortType": null
      },
      {
        "id": 10,
        "site": "WORKINGNOMADS",
        "name": "Workingnomads Developer Jobs",
        "query": null,
        "location": null,
        "remote": false,
        "radius": 0,
        "jobType": null,
        "sortType": null
      }
    ];

const url = "http://localhost:8080";

const scrapePage = (id) => {
  Axios
      .post(url + "/batch/scrape/" + id)
      .then(r => {
        console.log(r);
      })
      .catch(err => {
        console.log(err);
      });
}

const stopScrape = (id) => {
  Axios
      .post(url + "/batch/stopscrape/" + id)
      .then(r => {
        console.log(r);
      })
      .catch(err => {
        console.log(err);
      });
}


export default function Scraper(props) {

  const ws = new Client({
    brokerURL: "ws://localhost:8080/websocket"
  });

  ws.onConnect = function (frame) {
    console.log(frame);
  };

  ws.onStompError = function (frame) {
    console.log(frame);
  };

  ws.activate();

  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Button onClick={() => {
          console.log("hello")
        }}>Hello</Button>
        {data.map((d, index) => (
            <div key={index}>
              <Button
                  className={classes.button}
                  onClick={() => {
                    console.log("running " + d.name);
                    scrapePage(d.id);
                  }}>
                Scrape
              </Button> - {d.name}
              <ScrollingStatusBox websocket={ws} scraper={d.id}/>
            </div>
        ))}
      </div>
  );
}