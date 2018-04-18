import { signup } from 'sources/SignupSource';
import * as authTypes from 'constants/AuthTypes';

export function signupInit() {
  return {
    type: authTypes.SIGNUP_INIT,
  };
}

export function signupSuccess(data) {
  return {
    type: authTypes.SIGNUP_SUCCESS,
    data,
  };
}

export function signupFailed(error) {
  return {
    type: authTypes.SIGNUP_FAILURE,
    error,
  };
}

export const signupRequest = data => signup(data);


