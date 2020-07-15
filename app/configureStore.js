/**
 * Create the store with dynamic reducers
 */
import thunk from 'redux-thunk';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { forceReducerReload } from 'redux-injectors';
import createReducer from './reducers';

export default function configureAppStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [thunk, routerMiddleware(history)];

  const store = configureStore({
    reducer: createReducer(),
    preloadedState: initialState,
    middleware: [...getDefaultMiddleware(), ...middlewares],
  });

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      forceReducerReload(store);
    });
  }

  return store;
}