import { createAction, props } from '@ngrx/store';
import { AuthCredentials } from '@mymovies-workspace/auth';

export const login = createAction(
  '[Auth] Login',
  props<{
    credentials: AuthCredentials;
  }>()
);

export const loginSuccess = createAction('[Auth] Login Success', props<{ auth: any }>());

export const loginFail = createAction('[Auth] Login Fail');
