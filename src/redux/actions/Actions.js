import axios from 'axios'
import {
  FETCH_ALL_COMPANIES,
  FETCH_ALL_COMPANIES_ERROR,
  JOB_STATE_UPDATED,
  JOB_STATE_UPDATED_ERROR,
  JOB_STATES_UPDATED,
  JOB_STATES_UPDATED_ERROR,
  JOB_POSTING_ADDED_ERROR,
  JOB_POSTING_ADDED
} from "./ActionTypes"


const baseUrl = 'http://localhost:8080'

export const fetchCompanies = () => dispatch => {
  axios.get(baseUrl + '/jobs/all/bycompany').then(
      resp => dispatch({
        type: FETCH_ALL_COMPANIES, payload: resp.data.companies
      }),
      err => dispatch({type: FETCH_ALL_COMPANIES_ERROR, payload: err.data})
  )
}
export const addJobPosting = (jobPosting) => dispatch => {
  axios.post(baseUrl + '/jobs/new/any', jobPosting).then(
      resp => dispatch({type: JOB_POSTING_ADDED, payload: resp.data.companies}),
      err => dispatch({type: JOB_POSTING_ADDED_ERROR, payload: err.data})
  )
}
export const addAngelCoPosting = (jobPosting) => dispatch => {
  axios.post(baseUrl + '/jobs/new/angelco', jobPosting).then(
      resp => dispatch({type: JOB_POSTING_ADDED, payload: resp.data.companies}),
      err => dispatch({type: JOB_POSTING_ADDED_ERROR, payload: err.data})
  )
}

export const updateJobState = (jobId, state) => dispatch => {
  axios.put(baseUrl + '/jobs/status/' + jobId + '/' + state).then(
      resp => dispatch({type: JOB_STATE_UPDATED, payload: resp.data}),
      error => dispatch({type: JOB_STATE_UPDATED_ERROR, payload: error.data})
  )
}

export const updateMultipleJobState = (newStatus, jobsToUpdate) => dispatch => {
  axios.put(baseUrl + '/jobs/status/multiple/' + newStatus, jobsToUpdate).then(
      resp => dispatch({type: JOB_STATES_UPDATED, payload: resp.data}),
      err => dispatch({type: JOB_STATES_UPDATED_ERROR, payload: err.data})
  )
}