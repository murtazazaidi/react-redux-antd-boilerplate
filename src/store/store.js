import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import throttle from 'lodash/throttle';

import rootReducer from 'store/reducers/rootReducer';
import { saveState, loadState } from 'utils/storageUtils';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(...middleware),
);

store.subscribe(throttle(() => {
  saveState({
    auth: store.getState().auth,
  });
}, 3000));

export default store;
