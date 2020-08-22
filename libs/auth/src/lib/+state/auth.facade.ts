import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';
import { State } from './auth.reducer';

import { authQuery } from './auth.selectors';
import { AuthCredentials } from '../models/auth';
import * as authActions from './auth.actions';

@Injectable()
export class AuthFacade {
  isAuthenticaded$ = this.store.pipe(select(authQuery.getIsAuthenticated));
  getUserAuthenticaded$ = this.store.pipe(select(authQuery.getUserAuthenticaded));

  constructor(private store: Store<State>) {}

  login(credentials: AuthCredentials) {
    this.store.dispatch(authActions.login({ credentials }));
  }
}
