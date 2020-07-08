/**
 * App selectors
 */

import { createSelector } from '@reduxjs/toolkit';
import { connect } from 'http2';

const selectRouter = state => state.router;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export { makeSelectLocation };





