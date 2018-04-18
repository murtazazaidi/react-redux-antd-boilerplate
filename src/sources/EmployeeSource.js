// import axios from 'axios';
import {
  getEmployeesInit,
  getEmployeesSuccess,
  // getEmployeesFailure,
} from 'store/actions/EmployeeActions';
// import { EMPLOYEE_URL } from 'configs/constants';
// import { normalizeEmployees } from 'normalizers/employeeNormalizers';

// export const getEmployees = () => {
//   return dispatch => {
//     dispatch(getEmployeesInit());
//     axios
//       .get(EMPLOYEE_URL)
//       .then((response) => {
//         if (response.data.success) {
//           // parse response through normalizer
//           const employeesNormalized = normalizeEmployees(response.data.data);
//           dispatch(getEmployeesSuccess(employeesNormalized));
//         } else {
//           dispatch(getEmployeesFailure());
//         }
//       }, (error) => {
//         dispatch(getEmployeesFailure());
//       })
//       .catch((error) => {
//         dispatch(getEmployeesFailure());
//       });
//   }
// };


// Mocking the source; Uncomment and use above method
export const getEmployees = () => {
  return dispatch => {
    dispatch(getEmployeesInit());
    setTimeout(() => {
      const data = [{
        id: 1,
        name: 'Murtaza',
      }, {
        id: 2,
        name: 'Frodo',
      }, {
        id: 3,
        name: 'Edward',
      }, {
        id: 4,
        name: 'Sherlock',
      }, {
        id: 5,
        name: 'Sheldon',
      }];
      dispatch(getEmployeesSuccess(data));
    }, 3000)
  };
}
