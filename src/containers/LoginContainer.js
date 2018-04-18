import { connect } from 'react-redux';
import Login from 'components/Login';
import { loginRequest } from 'store/actions/LoginActions';

function mapStateToProps({ auth }) {
  return {
    user: auth.user,
    isLoading: auth.isLoading,
    errorMsg: auth.errorMsg,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => dispatch(loginRequest(username, password)),
  };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
