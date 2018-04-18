import { combineReducers } from 'redux';
import authReducer from 'store/reducers/authReducer';
import employeeReducer from 'store/reducers/employeeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  employeeReducer,
});

export default rootReducer;
