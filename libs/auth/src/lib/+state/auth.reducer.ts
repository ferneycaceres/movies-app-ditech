import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as AuthActions from './auth.actions';
import { AuthEntity } from './auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export interface State {
  auth: any;
  isAuthenticated: boolean;
}

export const initialState: State = {
  auth: undefined,
  isAuthenticated: undefined,
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, isAuthenticated: null })),
  on(AuthActions.loginSuccess, (state, { auth }) => ({
    ...state,
    isAuthenticated: true,
    auth: auth,
  })),
  on(AuthActions.loginFail, (state) => ({ ...state, isAuthenticated: false })),
  on(AuthActions.logOutUser, (state) => ({ ...state })),
  on(AuthActions.logOutUserSuccess, (state) => ({ ...state, initialState })),
  on(AuthActions.logOutUserFail, (state) => ({ ...state }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
