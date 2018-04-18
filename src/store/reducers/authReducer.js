import * as authTypes from 'constants/AuthTypes';
import { gaSet } from 'sources/AnalyticsSource';

const initialState = {
  user: null,
  isLoading: false,
  errorMsg: '',
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case authTypes.LOGIN_INIT: {
      state = Object.assign({}, initialState, { isLoading: true });
      return state;
    }
    case authTypes.LOGIN_SUCCESS: {
      const user = action.data;
      state = Object.assign({}, state, { user, isLoading: false });
      gaSet({ userId: user.id });
      return state;
    }
    case authTypes.LOGIN_FAILURE: {
      state = Object.assign({}, { 
        user: null,
        isLoading: false,
        errorMsg: action.error.response.data.message,
      });
      return state;
    }
    case authTypes.LOGOUT: {
      state = Object.assign({}, initialState);
      gaSet({ userId: null });
      return state;
    }
    default:
      return state;
  }
}
