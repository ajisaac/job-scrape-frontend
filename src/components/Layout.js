// The layout includes our navigation menu as well as our
// Header (AppBar). We pass in the children we want to render
// here.
import React from "react";

import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Link} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: 6,
    paddingRight: 240,
  },
}));

export default function Layout(props) {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <CssBaseline/>
        <AppBar position="fixed" elevation={0} className={classes.appBar}>
          <Toolbar variant="dense">
            <Typography variant="h6" className={classes.title}>
              {props.title} Jobs
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
        >
          <Toolbar variant="dense"/>
          <div className={classes.drawerContainer}>
            <List>
              {[
                "New",
                "Saved",
                "Applied",
                "Interviewing",
                "Excluded",
                "Rejected",
                "Ignored",
                "All"].map((text, index) => (
                  <ListItem button key={index} component={Link}
                            to={"/" + text.toLocaleLowerCase()}>
                    <ListItemText primary={text}/>
                  </ListItem>
              ))}
            </List>
          </div>
        </Drawer>

        <main className={classes.content}>
          <Toolbar/>
          {props.children}
        </main>
      </div>
  );
}
