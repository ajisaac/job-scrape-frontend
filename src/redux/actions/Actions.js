import axios from 'axios';
import {
  BLACKLIST_COMPANY,
  BLACKLIST_COMPANY_ERROR,
  FETCH_BLACKLISTED_COMPANIES,
  FETCH_ALL_COMPANIES,
  FETCH_ALL_COMPANIES_ERROR,
  JOB_STATE_UPDATED,
  JOB_STATE_UPDATED_ERROR,
  JOB_STATES_UPDATED,
  JOB_STATES_UPDATED_ERROR,
  UPDATE_SEARCH_FILTERS
} from "./ActionTypes";



const baseUrl = 'http://localhost:8080';

export const fetchCompanies = () => dispatch => {
  axios.create({
    baseURL: baseUrl
  }).get('/jobs/all/bycompany').then(
      (success) => {
        dispatch({type: FETCH_ALL_COMPANIES, payload: success.data.companies});
      },
      (error) => {
        dispatch({type: FETCH_ALL_COMPANIES_ERROR, payload: error.data});
      }
  );
};

export const fetchBlacklistedCompanies = () => dispatch => {
  axios.create({
    baseURL: baseUrl
  }).get('/jobs/blacklistedcompanies').then(
      (success) => {
        dispatch({
          type: FETCH_BLACKLISTED_COMPANIES,
          payload: success.data
        });
      },
      () => {
      }
  );
};

export const updateJobState = (jobId, state) => dispatch => {
  console.log("updateJobState - " + jobId + " - " + state + "");
  axios.create({
    baseURL: baseUrl
  }).put('/jobs/status/' + jobId + '/' + state).then(
      (success) => {
        dispatch({type: JOB_STATE_UPDATED, payload: success.data});
      },
      (error) => {
        dispatch({type: JOB_STATE_UPDATED_ERROR, payload: error.data});
      }
  )
};

export const updateSearchFilters = (searchFilters) => dispatch => {
  dispatch({type: UPDATE_SEARCH_FILTERS, payload: searchFilters});
};

export const updateMultipleJobState = (newStatus, jobsToUpdate) => dispatch => {
  axios.create({
    baseURL: baseUrl
  }).put('/jobs/status/multiple/' + newStatus, jobsToUpdate).then(
      (success) => {
        dispatch({type: JOB_STATES_UPDATED, payload: success.data});
      },
      (error) => {
        dispatch({type: JOB_STATES_UPDATED_ERROR, payload: error.data});
      }
  )
};

export const blacklistCompany = (companyName) => dispatch => {
  axios.create({
    baseURL: baseUrl
  }).post('/jobs/blacklistcompany/', {name: companyName}).then(
      (success) => {
        dispatch({type: BLACKLIST_COMPANY, payload: success.data});
      },
      (error) => {
        dispatch({type: BLACKLIST_COMPANY_ERROR, payload: error.data});
      }
  )
}

export const removeBlacklistedCompany = (name) => dispatch => {
  axios.create({
    baseURL: baseUrl
  }).post('/jobs/blacklistcompanyremove/', {name: name}).then(
      (success) => {
        dispatch({type: BLACKLIST_COMPANY, payload: success.data});
      },
      (error) => {
        dispatch({type: BLACKLIST_COMPANY_ERROR, payload: error.data});
      }
  )
}
