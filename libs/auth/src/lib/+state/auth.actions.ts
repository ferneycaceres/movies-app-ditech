import { createAction, props } from '@ngrx/store';
import { AuthCredentials } from '@mymovies-workspace/auth';
import { User } from '@mymovies-workspace/models';

export const login = createAction(
  '[Auth] Login',
  props<{
    credentials: AuthCredentials;
  }>()
);

export const loginSuccess = createAction('[Auth] Login Success', props<{ auth: any }>());

export const loginFail = createAction('[Auth] Login Fail');

export const saveUserAuth = createAction('[Auth] Save User Auth', props<{ user: User }>());

export const saveUserAuthSuccess = createAction('[Auth] Save User Auth Success');

export const saveUserAuthFail = createAction('[Auth] Save User Auth Fail');
