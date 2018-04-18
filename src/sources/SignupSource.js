// import axios from 'axios';

import { 
    signupInit, 
    signupSuccess, 
    signupFailed,
} from 'store/actions/SignupActions';
// import { SIGNUP_URL } from 'configs/constants';

// export const signup = (payload) => {
//   return (dispatch) => {
//     dispatch(signupInit());
//     axios.post(SIGNUP_URL, payload, {
//       headers: {},
//     }) // unset the default header
//     .then((response, err) => {
//       if (!err) {
//         const user = response.data.data;
//         axios.defaults.headers.common.authorization = user.jwt;
//         dispatch(signupSuccess(user));
//       } else {
//         dispatch(signupFailed(err));
//       }
//     }, (error) => {
//       dispatch(signupFailed(error));
//     })
//     .catch((error) => {
//       dispatch(signupFailed(error));
//     });
//   };
// }

// Mocking the source; Uncomment and use above method
export const signup = (data) => {
  return dispatch => {
    dispatch(signupInit());
    setTimeout(() => {
      if (data) {
        const data = {
          id: 1,
          name: 'Murtaza',
          isAdmin: true,
        };
        dispatch(signupSuccess(data));
      } else {
        dispatch(signupFailed('Failed to register.'))
      }
    }, 3000)
  };
}
