import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as authActions from './auth.actions';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      mergeMap((action) =>
        this.authService.login(action.credentials).pipe(
          map((auth: any) => authActions.loginSuccess({ auth })),
          catchError(() => of(authActions.loginFail()))
        )
      )
    )
  );

  saveAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.saveUserAuth),
      mergeMap((action) =>
        this.authService.saveUserAuth(action.user).pipe(
          map(() => authActions.saveUserAuthSuccess()),
          catchError(() => of(authActions.saveUserAuthFail()))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.logOutUser),
      mergeMap((action) =>
        this.authService.removeUserAuth().pipe(
          map(() => authActions.logOutUserSuccess()),
          catchError(() => of(authActions.logOutUserFail()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
