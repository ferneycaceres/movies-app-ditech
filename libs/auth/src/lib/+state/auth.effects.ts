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

  constructor(private actions$: Actions, private authService: AuthService) {}
}
