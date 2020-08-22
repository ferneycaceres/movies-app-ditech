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
  on(AuthActions.loginFail, (state) => ({ ...state, isAuthenticated: false }))
);
/*export interface State extends EntityState<AuthEntity> {
  selectedId?: string | number; // which Auth record has been selected
  loaded: boolean; // has the Auth list been loadedAuthPartialState
  error?: string | null; // last known error (if any)
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State;
}

export const authAdapter: EntityAdapter<AuthEntity> = createEntityAdapter<AuthEntity>();

export const initialState: State = authAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const authReducer = createReducer(
  initialState,
  on(AuthActions.loadAuth, (state) => ({ ...state, loaded: false, error: null })),
  on(AuthActions.loadAuthSuccess, (state, { auth }) => authAdapter.addAll(auth, { ...state, loaded: true })),
  on(AuthActions.loadAuthFailure, (state, { error }) => ({ ...state, error }))
);*/

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
