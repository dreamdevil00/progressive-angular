import { Action } from '@ngrx/store';
import { Credential } from '../../interfaces';

export const AuthActionTypes = {
  AUTH_LOGIN: 'AUTH_LOGIN',
  AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_ERROR: 'AUTH_LOGIN_ERROR',
  AUTH_LOGOUT: 'AUTH_LOTOUT',
  AUTH_LOGOUT_SUCCESS: 'AUTH_LOGOUT_SUCCESS',
  AUTH_LOGOUT_ERROR: 'AUTH_LOGOUT_ERROR',
  AUTH_LOGIN_REDIRECT: 'AUTH_LOGIN_REDIRECT',

  AUTH_GET_ROLES: 'AUTH_GET_ROLES',
  AUTH_GET_ROLES_SUCCESS: 'AUTH_GET_ROLES_SUCCESS',
  AUTH_GET_ROLES_ERROR: 'AUTH_GET_ROLES_ERROR',
};

export class AuthLoginAction implements Action {
  readonly type = AuthActionTypes.AUTH_LOGIN;
  constructor(public payload: Credential) {}
}

export class AuthLoginSuccessAction implements Action {
  readonly type = AuthActionTypes.AUTH_LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class AuthLoginErrorAction implements Action {
  readonly type = AuthActionTypes.AUTH_LOGIN_ERROR;
  constructor(public payload: any) {}
}

export class AuthLoginRedirectAction implements Action {
  readonly type = AuthActionTypes.AUTH_LOGIN_ERROR;
  constructor(public payload: any) {}
}

export class AuthLogoutAction implements Action {
  readonly type = AuthActionTypes.AUTH_LOGOUT;
  constructor(public payload: any) {}
}

export class AuthGetRolesAction implements Action {
  readonly type = AuthActionTypes.AUTH_GET_ROLES;
  constructor(public payload: string | number) {}
}

export class AuthGetRolesSuccessAction {
  readonly type = AuthActionTypes.AUTH_GET_ROLES_SUCCESS;
  constructor(public payload: any) {}
}

export class AuthGetRolesErrorAction  {
  readonly type = AuthActionTypes.AUTH_GET_ROLES_ERROR;
  constructor(public payload: any) {}
}

export type AuthActions =
  | AuthLoginAction
  | AuthLoginSuccessAction
  | AuthLoginErrorAction
  | AuthLoginRedirectAction
  | AuthLogoutAction
  | AuthGetRolesAction
  | AuthGetRolesSuccessAction
  | AuthGetRolesErrorAction;

