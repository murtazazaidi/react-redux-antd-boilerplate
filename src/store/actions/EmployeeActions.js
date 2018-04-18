import { getEmployees } from 'sources/EmployeeSource';
import * as types from 'constants/EmployeeTypes';

// normal actions
export const getEmployeesInit = () => ({
  type: types.GET_EMPLOYEES_INIT,
});

export const getEmployeesSuccess = data => ({
  type: types.GET_EMPLOYEES_SUCCESS,
  data,
});

export const getEmployeesFailure = data => ({
  type: types.GET_EMPLOYEES_FAILURE,
  data,
});

export const getEmployeesActions = () => getEmployees();
