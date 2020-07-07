import React from 'react';
import './App.css';
import JobsPage from "./components/JobsPage";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Switch} from "react-router";
import Batch from "./components/Batch";

class App extends React.Component {
  render() {
    return (
        <Router>

          <Switch>
            <Route path={"/batch"}>
              <Batch/>
            </Route>
            <Route path={"/all"}>
              <JobsPage filter={"all"}/>
            </Route>
            <Route path={"/new"}>
              <JobsPage filter={"new"}/>
            </Route>
            <Route path={"/saved"}>
              <JobsPage filter={"saved"}/>
            </Route>
            <Route path={"/applied"}>
              <JobsPage filter={"applied"}/>
            </Route>
            <Route path={"/interviewing"}>
              <JobsPage filter={"interviewing"}/>
            </Route>
            <Route path={"/excluded"}>
              <JobsPage filter={"excluded"}/>
            </Route>
            <Route path={"/rejected"}>
              <JobsPage filter={"rejected"}/>
            </Route>
            <Route path={"/ignored"}>
              <JobsPage filter={"ignored"}/>
            </Route>
            <Route path={"/"}>
              <JobsPage filter={"all"}/>
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
