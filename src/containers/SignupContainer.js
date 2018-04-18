import { connect } from 'react-redux';
import Signup from 'components/Signup';
import { signupRequest } from 'store/actions/SignupActions';

function mapStateToProps({ auth }) {
  return {
    user: auth.user,
    isLoading: auth.isLoading,
    errorMsg: auth.errorMsg,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signup: data => dispatch(signupRequest(data)),
  };
}

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default SignupContainer;
