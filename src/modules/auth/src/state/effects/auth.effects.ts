import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, exhaustMap, tap } from 'rxjs/operators';

import { AuthService } from '../../auth.service';
import {
  AuthActionTypes,
  AuthLoginAction,
  AuthLoginErrorAction,
  AuthLoginSuccessAction,
} from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.AUTH_LOGIN),
    map((action: AuthLoginAction) => action.payload),
    exhaustMap(cre =>
      this.auth
        .login(cre)
        .pipe(
          map(res => new AuthLoginSuccessAction(res)),
          catchError(error => of(new AuthLoginErrorAction(error)))
        )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.AUTH_LOGIN_SUCCESS),
    map((action: AuthLoginSuccessAction) => action.payload),
    tap(() => {
      return this.router.navigate(['/dashboard']);
    })
  );

  @Effect({ dispatch: false })
  loginRedirect$: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.AUTH_LOGIN_REDIRECT, AuthActionTypes.AUTH_LOGOUT),
    tap(() => {
      return this.router.navigate(['/login']);
    })
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private auth: AuthService
  ) {}
}
