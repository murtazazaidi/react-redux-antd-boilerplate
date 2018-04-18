import React from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from 'store/actions/LoginActions';

const Logout = (props) => {
  props.logout();
  if (props.history.pathname !== '/login') {
    props.history.push('/login');
  }
  return (<div><h1>Logging out ...</h1></div>);
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logoutRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
