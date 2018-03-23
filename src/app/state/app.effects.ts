import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import {
  AppRedirectIndexAction,
  AppRedirectLoginAction,
  AppActionTypes
} from './app.actions';
@Injectable()
export class AppEffects {

  @Effect({dispatch: false})
  redirectIndex$: Observable<Action> = this.actions$
    .pipe(
      ofType(AppActionTypes.APP_REDIRECT_INDEX),
      tap(() => this.router.navigate(['/', 'dashboard']))
    );

  @Effect({ dispatch: false })
  redirectLogin$: Observable<Action> = this.actions$
    .pipe(
      ofType(AppActionTypes.APP_REDIRECT_LOGIN),
      tap(() => {
        console.log('redirect login');
        this.router.navigate(['/', 'login']);
      })
    );

  @Effect({ dispatch: false})
  redirectRouter: Observable<Action> = this.actions$
    .pipe(
      ofType(AppActionTypes.APP_REDIRECT_ROUTER),
      tap(() => {
        console.log('redirect router');
        this.router.navigate(['/', 'router']);
      })
    );

  constructor(
    private actions$: Actions,
    private router: Router,
  ) { }
}
