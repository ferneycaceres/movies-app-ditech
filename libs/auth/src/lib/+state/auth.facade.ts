import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';
import { State } from './auth.reducer';

import { authQuery } from './auth.selectors';
import { AuthCredentials } from '../models/auth';
import * as authActions from './auth.actions';

import { User } from '@mymovies-workspace/models';

@Injectable()
export class AuthFacade {
  isAuthenticaded$ = this.store.pipe(select(authQuery.getIsAuthenticated));
  getUserAuthenticaded$ = this.store.pipe(select(authQuery.getUserAuthenticaded));

  constructor(private store: Store<State>) {}

  login(credentials: AuthCredentials) {
    this.store.dispatch(authActions.login({ credentials }));
  }

  logout() {
    this.store.dispatch(authActions.logOutUser());
  }

  saveUserAuth(user: User) {
    this.store.dispatch(authActions.saveUserAuth({ user }));
  }
}
