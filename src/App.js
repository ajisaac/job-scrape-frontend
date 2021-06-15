import React from "react"
import JobsPage from "./components/JobsPage"
import {BrowserRouter as Router, Route} from "react-router-dom"
import {Switch} from "react-router"
import Layout from "./components/Layout"
import ScrapePage from "./components/scrape/ScrapePage"
import AddPostingForm from "./components/add-posting/AddPostingForm"
import AddAngelCoPosting from "./components/add-posting/AddAngelCoPosting"
import AddHighlightWord from "./components/add-highlight-word/AddHighlightWord"
import HighlightWords from "./components/add-highlight-word/HighlightWords"

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
              <Layout title="Scrape Job Boards">
                <ScrapePage/>
              </Layout>
            </Route>
            <Route path={"/add-single-job"}>
              <Layout title="Add Single Job">
                <AddPostingForm/>
              </Layout>
            </Route>
            <Route path={"/add-angel-co-job"}>
              <Layout title="Add angel.co Job">
                <AddAngelCoPosting/>
              </Layout>
            </Route>

            <Route path={"/add-highlight-word"}>
              <Layout title="Add Highlight Word">
                <AddHighlightWord/>
              </Layout>
            </Route>
            <Route path={"/highlight-words"}>
              <Layout title="Highlight Words">
                <HighlightWords/>
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
