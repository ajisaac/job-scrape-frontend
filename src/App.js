import React from "react";
import JobsPage from "./components/JobsPage";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Switch} from "react-router";
import Layout from "./components/Layout";
import ScrapePage from "./components/scrape/ScrapePage";

class App extends React.Component {

  render() {
    return (
        <Router>
          <Switch>
            {/* <Route path={"/batch"}>
            <Layout>
              <Batch />
            </Layout>
          </Route> */}
            <Route path={"/all"}>
              <Layout title="All">
                <JobsPage filter={"all"}/>
              </Layout>
            </Route>
            <Route path={"/new"}>
              <Layout title="New">
                <JobsPage filter={"new"}/>
              </Layout>
            </Route>
            <Route path={"/saved"}>
              <Layout title="Saved">
                <JobsPage filter={"saved"}/>
              </Layout>
            </Route>
            <Route path={"/applied"}>
              <Layout title="Applied">
                <JobsPage filter={"applied"}/>
              </Layout>
            </Route>
            <Route path={"/interviewing"}>
              <Layout title="Interviewing">
                <JobsPage filter={"interviewing"}/>
              </Layout>
            </Route>
            <Route path={"/excluded"}>
              <Layout title="Excluded">
                <JobsPage filter={"excluded"}/>
              </Layout>
            </Route>
            <Route path={"/rejected"}>
              <Layout title="Rejected">
                <JobsPage filter={"rejected"}/>
              </Layout>
            </Route>
            <Route path={"/ignored"}>
              <Layout title="Ignored">
                <JobsPage filter={"ignored"}/>
              </Layout>
            </Route>
            <Route path={"/scrape"}>
              <Layout title="Scrape">
                <ScrapePage/>
              </Layout>
            </Route>
            <Route path={"/"}>
              <Layout title="All">
                <JobsPage filter={"all"}/>
              </Layout>
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
