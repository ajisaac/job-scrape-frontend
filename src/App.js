import React from "react";
import JobsPage from "./components/JobsPage";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Switch } from "react-router";
import Batch from "./components/Batch";
import Layout from "./components/Layout";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={"/batch"}>
            <Layout>
              <Batch />
            </Layout>
          </Route>
          <Route path={"/all"}>
            <Layout>
              <JobsPage filter={"all"} />
            </Layout>
          </Route>
          <Route path={"/new"}>
            <Layout>
              <JobsPage filter={"new"} />
            </Layout>
          </Route>
          <Route path={"/saved"}>
            <Layout>
              <JobsPage filter={"saved"} />
            </Layout>
          </Route>
          <Route path={"/applied"}>
            <Layout>
              <JobsPage filter={"applied"} />
            </Layout>
          </Route>
          <Route path={"/interviewing"}>
            <Layout>
              <JobsPage filter={"interviewing"} />
            </Layout>
          </Route>
          <Route path={"/excluded"}>
            <Layout>
              <JobsPage filter={"excluded"} />
            </Layout>
          </Route>
          <Route path={"/rejected"}>
            <Layout>
              <JobsPage filter={"rejected"} />
            </Layout>
          </Route>
          <Route path={"/ignored"}>
            <Layout>
              <JobsPage filter={"ignored"} />
            </Layout>
          </Route>
          <Route path={"/"}>
            <Layout>
              <JobsPage filter={"all"} />
            </Layout>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
