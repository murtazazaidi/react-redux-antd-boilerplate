import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactGA from 'react-ga';

import store from 'store/store';
import AppRoot from 'AppRoot';
import { logoutRequest } from 'store/actions/LoginActions';

import { GA_API, APP_VERSION } from 'configs/constants';

import registerServiceWorker from 'registerServiceWorker';
import 'index.css';

// initialise the authorization settings for the calls if user is already logged in
const { auth } = store.getState();

// If there is no analytics key in build then the whole process is bypassed.
if (GA_API) {
  ReactGA.initialize(GA_API, {
    gaOptions: {
      userId: (auth.user && auth.user.id) || null,
      appVersion: APP_VERSION,
    },
  });
}

if (auth.user) {
  axios.defaults.headers.common.authorization = auth.user.jwt;
}

// Add a response interceptor
axios.interceptors.response.use(
  response =>
  // Do something with response data
    response
  , (error) => {
  // Do something with response error
    if (error.response.status === 401) {
      store.dispatch(logoutRequest());
    }
    return Promise.reject(error);
  },
);

ReactDOM.render(<AppRoot />, document.getElementById('root'));
registerServiceWorker();
