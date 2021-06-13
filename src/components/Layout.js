import React from "react"

import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import {Link} from "react-router-dom"
import {Divider} from "@material-ui/core"
import axios from "axios"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#f0ece7",
    color: "black"
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    textAlign: "center",
    marginBottom: "18px"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "#f0ece7",
    border: "none",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#f0ece7",
    border: "none",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: 6,
    paddingRight: 240,
    maxWidth: 1200,
    margin: "auto",
  },
}))

export default function Layout(props) {
  const classes = useStyles()
  return (
      <div className={classes.root}>
        {/*<CssBaseline/>*/}

        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
        >
          <Toolbar variant="dense"/>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <Divider/>
          <div className={classes.drawerContainer}>
            <List>
              {[
                "new",
                "saved",
                "applied",
                "interviewing",
                "excluded",
                "rejected",
                "ignored",
                "all"].map((text, index) => (
                  <ListItem button key={index} component={Link}
                            to={"/" + text.toLocaleLowerCase()}>
                    <ListItemText primary={text}/>
                  </ListItem>
              ))}
            </List>

            <Divider/>
            <List>
              <ListItem button component={Link}
                        to={"/clients"}>
                <ListItemText primary={"clients"}/>
              </ListItem>
              <ListItem button component={Link}
                        to={"/agencies"}>
                <ListItemText primary={"agencies"}/>
              </ListItem>
            </List>

            <Divider/>
            <List>
              <ListItem button component={Link}
                        to={"/scrapers"}>
                <ListItemText primary={"scrapers"}/>
              </ListItem>
              <ListItem button component={Link}
                        to={"/add-angel-co-job"}>
                <ListItemText primary={"add angel.co job"}/>
              </ListItem>
              <ListItem button component={Link}
                        to={"/add-single-job"}>
                <ListItemText primary={"add single job"}/>
              </ListItem>
            </List>
            <Divider/>
            <List>
              <ListItem button component={Link} to={"#"} onClick={async () => {
                await (async function saveFile() {
                  let resp = await axios.get('http://localhost:8080/jobs/backup')
                  let companies = JSON.stringify(resp.data)
                  let element = document.createElement('a')
                  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(companies))
                  element.setAttribute('download', 'backup.json')
                  element.style.display = 'none'
                  document.body.appendChild(element)
                  element.click()
                  document.body.removeChild(element)
                }())
              }}><ListItemText primary={"backup data"}/></ListItem>
            </List>

            <Divider/>
            <List>
              <ListItem button component={Link}
                        to={"/highlight-words"}>
                <ListItemText primary={"Highlight Words"}/>
              </ListItem>
              <ListItem button component={Link}
                        to={"/add-highlight-word"}>
                <ListItemText primary={"Add Highlight Word"}/>
              </ListItem>
            </List>

          </div>
        </Drawer>

        <main className={classes.content}>
          <Toolbar/>
          {props.children}
        </main>
      </div>
  )
}
