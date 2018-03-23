import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

export interface AuthState {
  id: string | number;
  token: string;
  roles: string[];
  login: boolean;
}

export const initialAuthState: AuthState = {
  id: null,
  token: null,
  roles: [],
  login: false,
};

export function reducer(state = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.AUTH_LOGIN_SUCCESS:
      return Object.assign({}, state, { id: action.payload.id, token: action.payload.token }, {login: true});
    case AuthActionTypes.AUTH_GET_ROLES_SUCCESS:
      return Object.assign({}, state, { roles: action.payload.roles });
    default:
      return state;
  }
}


