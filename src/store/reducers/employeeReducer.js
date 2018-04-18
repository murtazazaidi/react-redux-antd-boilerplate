import {
  GET_EMPLOYEES_INIT,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAILURE,
} from 'constants/EmployeeTypes';

const initialState = {
  employees: [],
  isLoading: false,
};

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES_INIT: {
      return Object.assign({}, state, {
        employees: [],
        isLoading: true,
      });
    }
    case GET_EMPLOYEES_SUCCESS: {
      return Object.assign({}, state, {
        employees: action.data,
        isLoading: false,
      });
    }
    case GET_EMPLOYEES_FAILURE: {
      return Object.assign({}, state, {
        employees: [],
        isLoading: false,
      });
    }
    default:
      return state;
  }
}
