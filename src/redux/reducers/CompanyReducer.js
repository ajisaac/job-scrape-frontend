import {
  BLACKLIST_COMPANY, BLACKLIST_COMPANY_ERROR,
  FETCH_ALL_COMPANIES,
  FETCH_ALL_COMPANIES_ERROR, FETCH_BLACKLISTED_COMPANIES,
  JOB_STATE_UPDATED,
  JOB_STATE_UPDATED_ERROR,
  JOB_STATES_UPDATED,
  JOB_STATES_UPDATED_ERROR,
  UPDATE_SEARCH_FILTERS
} from "../actions/ActionTypes"
import _ from "lodash"

const initialStore = {
  companies: [],
  blacklistedCompanies: []
}

export function CompanyReducer(store = initialStore, action) {
  switch (action.type) {

    case FETCH_ALL_COMPANIES: {
      let retStore = Object.assign({}, store)
      retStore.companies = action.payload
      return retStore
    }
    case FETCH_ALL_COMPANIES_ERROR: {
      return store
    }
    case JOB_STATE_UPDATED: {
      let job = action.payload
      let updatedCompanies = updateMultipleJobStatus([job], store.companies)
      return Object.assign({}, {...store, companies: updatedCompanies})
    }
    case JOB_STATE_UPDATED_ERROR: {
      return store
    }
    case JOB_STATES_UPDATED: {
      let jobs = action.payload
      let updatedCompanies = updateMultipleJobStatus(jobs, store.companies)
      return Object.assign({}, {...store, companies: updatedCompanies})
    }
    case JOB_STATES_UPDATED_ERROR: {
      return store
    }


    default: {
      return store
    }
  }
}

export function fetchCompaniesFiltered(state, statusFilter) {
  if (!state.companies.companies) return {
    companies: [],
    filteredCompanies: [],
    numOfJobs: 0,
    numOfCompanies: 0,
  }

  let updatedCompanies = _.cloneDeep(state.companies.companies)

  // apply labels to all jobs before filtering
  updatedCompanies = applyLabels(updatedCompanies)

  updatedCompanies = updatedCompanies.map(company => {
    if (!company.jobPostings) {
      return company
    }
    if (statusFilter !== "all") {
      company.jobPostings = company.jobPostings
          .filter(jobPosting => {
            return jobPosting.status === statusFilter
          })
    }
    return company
  }).filter(company => {
    return company.jobPostings.length > 0
  })

  let numJobPostings = getNumOfJobPostings(updatedCompanies)
  let numCompanies = updatedCompanies.length

  // only want to show 10 companies worth of postings at a time
  if (updatedCompanies.length > 10) {
    updatedCompanies = updatedCompanies.slice(0, 10)
  }

  return {
    companies: state.companies.companies,
    blacklistedCompanies: state.companies.blacklistedCompanies,
    filteredCompanies: updatedCompanies,
    numOfJobs: numJobPostings,
    numOfCompanies: numCompanies,
    filters: _.cloneDeep(state.companies.filters)
  }
}

function updateMultipleJobStatus(returnedJobs, companies) {

  let updatedCompanies = []
  for (let i = 0; i < companies.length; i++) {
    if (!shouldUpdateCompany(returnedJobs, companies[i].name)) {
      updatedCompanies.push(companies[i])
      continue
    }

    let updatedCompany = Object.assign({}, companies[i])
    let updatedJobPostings = []

    jobPostingsLoop:
        for (let j = 0; j < companies[i].jobPostings.length; j++) {
          if (!shouldUpdateJobPosting(returnedJobs, companies[i].jobPostings[j])) {
            updatedJobPostings.push(companies[i].jobPostings[j])
            continue
          }

          for (let k = 0; k < returnedJobs.length; k++) {
            if (returnedJobs[k].id === companies[i].jobPostings[j].id) {
              updatedJobPostings.push(returnedJobs[k])
              continue jobPostingsLoop
            }
          }
        }

    updatedCompany.jobPostings = updatedJobPostings
    updatedCompanies.push(updatedCompany)
  }
  return updatedCompanies
}

function applyLabels(companies) {
  companies.map(company => {
    const jobPostings = company.jobPostings
    let labelsSet = new Set()
    for (let jp of jobPostings) {
      if (!labelsSet.has(jp.status)) {
        labelsSet.add(jp.status)
      }
    }
    company.labels = orderLabels(labelsSet)
    return company
  })
  return companies
}

function orderLabels(labelsSet) {
  const orderedLabels = ["new", "saved", "applied", "interviewing", "excluded", "rejected", "ignored"]
  let retLabels = []
  for (let label of orderedLabels) {
    if (labelsSet.has(label)) {
      retLabels.push(label)
    }
  }
  return retLabels
}

function getNumOfJobPostings(companies) {
  if (companies.length === 0) {
    return 0
  } else {
    return companies
        .map(company => company.jobPostings.length)
        .reduce((total, length) => total + length)
  }
}

function shouldUpdateJobPosting(jobs, jobPosting) {
  for (let j of jobs) {
    if (j.id === jobPosting.id) {
      return true
    }
  }
  return false
}

function shouldUpdateCompany(jobs, companyName) {
  for (let j of jobs) {
    if (j.company === companyName) {
      return true
    }
  }
  return false
}
