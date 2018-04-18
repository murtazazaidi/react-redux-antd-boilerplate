// import axios from 'axios';

import { 
    loginInit, 
    loginSuccess, 
    loginFailed,
} from 'store/actions/LoginActions';
// import { LOGIN_URL } from 'configs/constants';

// export const login = (username, password) => {
//   return (dispatch) => {
//     dispatch(loginInit());
//     const payload = {
//         username,
//         password,
//     };
//     axios.post(LOGIN_URL, payload, {
//       headers: {},
//     }) // unset the default header
//     .then((response, err) => {
//       if (!err) {
//         const user = response.data.data;
//         axios.defaults.headers.common.authorization = user.jwt;
//         dispatch(loginSuccess(user));
//       } else {
//         dispatch(loginFailed(err));
//       }
//     }, (error) => {
//       dispatch(loginFailed(error));
//     })
//     .catch((error) => {
//       dispatch(loginFailed(error));
//     });
//   };
// }

// Mocking the source; Uncomment and use above method
export const login = (username, password) => {
  return dispatch => {
    dispatch(loginInit());
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        const data = {
          id: 1,
          name: 'Murtaza',
          isAdmin: true,
        };
        dispatch(loginSuccess(data));
      } else {
        dispatch(loginFailed('Failed to authenticate. Hint(admin/admin)'))
      }
    }, 3000)
  };
}
