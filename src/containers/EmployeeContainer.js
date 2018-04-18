import { connect } from 'react-redux';

import Employee from 'components/Employee';

import { getEmployeesActions } from 'store/actions/EmployeeActions';

function mapStateToProps(state) {
  const { employeeReducer } = state;
  return {
    employees: employeeReducer.employees,
    isLoading: employeeReducer.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEmployees: () => dispatch(getEmployeesActions()),
  };
}

const EmployeeContainer = connect(mapStateToProps, mapDispatchToProps)(Employee);

export default EmployeeContainer;
