/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import loginReducer from "../app/reducers/loginReducer"
import inicioReducer from "../app/reducers/inicioReducer"
import sessionReducer from '../app/reducers/sessionReducer'
import history from 'utils/history';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = { loginReducer, inicioReducer, sessionReducer}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}




