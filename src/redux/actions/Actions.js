import axios from 'axios';
import {FETCH_ALL_COMPANIES, FETCH_ALL_COMPANIES_ERROR} from "./ActionTypes";

export const fetchCompanies = () => dispatch => {
    axios.create({
        baseURL: 'http://localhost:8080'
    }).get('/jobs/all/bycompany').then(
        (success) => {
            dispatch({type: FETCH_ALL_COMPANIES, payload: success.data.companies});
        },
        (error) => {
            dispatch({type: FETCH_ALL_COMPANIES_ERROR, payload: error.data});
        }
    );
};
