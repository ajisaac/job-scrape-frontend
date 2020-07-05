import {
  FETCH_ALL_COMPANIES,
  FETCH_ALL_COMPANIES_ERROR
} from "../actions/ActionTypes";

export function CompanyReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_COMPANIES: {
      return action.payload
    }
    case FETCH_ALL_COMPANIES_ERROR: {
      return state;
    }
    default: {
      return state;
    }
  }
};