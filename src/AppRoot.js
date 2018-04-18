import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import store from 'store/store';
import AppContainer from 'containers/AppContainer';
import LoginContainer from 'containers/LoginContainer';
import SignupContainer from 'containers/SignupContainer';

import withTracker from 'components/withTracker';

class AppRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={withTracker(LoginContainer)} />
            <Route path="/signup" component={withTracker(SignupContainer)} />
            <Route path="/" component={withTracker(AppContainer)} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default AppRoot;
