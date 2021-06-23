import React from "react"
import JobsPage from "./components/JobsPage"
import {BrowserRouter as Router, Route} from "react-router-dom"
import {Switch} from "react-router"
import Layout from "./components/Layout"
import ScrapePage from "./components/scrape/ScrapePage"
import AddHighlightWord from "./components/add-highlight-word/AddHighlightWord"

class App extends React.Component {

  render() {
    return (
        <Router>
          <Switch>
            <Route path={"/jobs"}>
              <Layout title="Jobs">
                <JobsPage/>
              </Layout>
            </Route>
            <Route path={"/scrapers"}>
              <Layout title="Scrapers">
                <ScrapePage/>
              </Layout>
            </Route>

            <Route path={"/add-highlight-word"}>
              <Layout title="Highlight Words">
                <AddHighlightWord/>
              </Layout>
            </Route>

            <Route path={"/"}>
              <Layout title="Jobs">
                <JobsPage/>
              </Layout>
            </Route>
          </Switch>
        </Router>
    )
  }
}

export default App
