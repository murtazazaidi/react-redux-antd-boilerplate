import { login } from 'sources/LoginSource';
import * as authTypes from 'constants/AuthTypes';

export function logoutRequest() {
  return {
    type: authTypes.LOGOUT,
  };
}

export function loginInit() {
  return {
    type: authTypes.LOGIN_INIT,
  };
}

export function loginSuccess(data) {
  return {
    type: authTypes.LOGIN_SUCCESS,
    data,
  };
}

export function loginFailed(error) {
  return {
    type: authTypes.LOGIN_FAILURE,
    error,
  };
}

export const loginRequest = (username, password) => login(username, password);


