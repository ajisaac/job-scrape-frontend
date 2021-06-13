import React from "react"
import JobsPage from "./components/JobsPage"
import {BrowserRouter as Router, Route} from "react-router-dom"
import {Switch} from "react-router"
import Layout from "./components/Layout"
import ScrapePage from "./components/scrape/ScrapePage"
import AddPostingForm from "./components/add-posting/AddPostingForm"
import AddAngelCoPosting from "./components/add-posting/AddAngelCoPosting"
import Clients from "./components/clients-agencies/Clients"
import Agencies from "./components/clients-agencies/Agencies"
import AddHighlightWord from "./components/add-highlight-word/AddHighlightWord"
import HighlightWords from "./components/add-highlight-word/HighlightWords"

class App extends React.Component {

  render() {
    return (
        <Router>
          <Switch>
            <Route path={"/all"}>
              <Layout title="All Postings">
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

            <Route path={"/agencies"}>
              <Layout title="Agencies">
                <Agencies/>
              </Layout>
            </Route>
            <Route path={"/clients"}>
              <Layout title="Clients">
                <Clients/>
              </Layout>
            </Route>

            <Route path={"/"}>
              <Layout title="All">
                <JobsPage filter={"all"}/>
              </Layout>
            </Route>
          </Switch>
        </Router>
    )
  }
}

export default App
