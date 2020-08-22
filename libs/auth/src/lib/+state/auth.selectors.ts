import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, State } from './auth.reducer';

export const getAuthState = createFeatureSelector<State>(AUTH_FEATURE_KEY);

const getIsAuthenticated = createSelector(getAuthState, (state) => state.isAuthenticated);

const getUserAuthenticaded = createSelector(getAuthState, (state) => state.auth);

export const authQuery = {
  getIsAuthenticated,
  getUserAuthenticaded,
};
