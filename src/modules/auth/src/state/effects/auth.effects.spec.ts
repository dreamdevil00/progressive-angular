import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';

import { AuthEffects } from './auth.effects';
import { AuthService } from '../../auth.service';
import { Credential } from '../../interfaces';
import { Observable } from 'rxjs/Observable';
import {
  AuthLoginSuccessAction,
  AuthLoginAction,
  AuthLoginErrorAction,
  AuthLoginRedirectAction,
  AuthLogoutAction,
} from '../actions/auth.actions';

import {} from 'jest';
describe('AuthEffects', () => {
  let effects: AuthEffects;
  let authService: any;
  let actions: Observable<any>;
  let routerSrv: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        {
          provide: AuthService,
          useValue: { login: jest.fn()},
        },
        provideMockActions(() => actions),
        {
          provide: Router,
          useValue: { navigate: jest.fn()}
        }
      ]
    });

    effects = TestBed.get(AuthEffects);
    authService = TestBed.get(AuthService);
    actions = TestBed.get(Actions);
    routerSrv = TestBed.get(Router);

    // spyOn(routerSrv, 'navigate').and.callThrough()
    jest.spyOn(routerSrv, 'navigate').mockImplementation(() => {});
  });

  describe('login$', () => {
    it('should return an AuthLoginSuccessAction, with user info if login succeeds', () => {
      const cre: Credential = { username: 'test', password: 'test' };
      const user = { id: 'foo', token: 'token'};
      const action = new AuthLoginAction(cre);
      const completion = new AuthLoginSuccessAction(user);

      actions = hot('-a---', { a: action});
      const response = cold('-a|', { a: user});
      const expected = cold('--b', { b: completion});
      authService.login = jest.fn(() => response);

      expect(effects.login$).toBeObservable(expected);
    });

    it('should return a new AuthLoginErrorAction if the login service throws', () => {
      const cre: Credential = {username: 'someOne', password: ''};
      const action = new AuthLoginAction(cre);
      const completion = new AuthLoginErrorAction('Invalid username or password');
      const error = 'Invalid username or password';

      actions = hot('-a--', { a: action});
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: completion});
      authService.login = jest.fn(() => response);

      expect(effects.login$).toBeObservable(expected);
    });
  });

  describe('loginSuccess$', () => {
    it('should dispatch a RouterNavigation action', () => {
      const user = { id: 'foo', token: 'fooToken'};
      const action = new AuthLoginSuccessAction(user);

      actions = hot('-a---', { a: action});

      effects.loginSuccess$.subscribe(() => {
        expect(routerSrv.navigate).toHaveBeenCalledWith(['/dashboard']);
      });
    });
  });

  describe('loginRedirect$', () => {
    it('should dispatch a RouterNavigation action when AuthLoginRedirect is dispatched', () => {
      const action = new AuthLoginRedirectAction(null);

      actions = hot('-a---', { a: action});

      effects.loginRedirect$.subscribe(() => {
        expect(routerSrv.navigate).toHaveBeenCalledWith(['/login']);
      });
    });

    it('should dispatch a RouterNavigation action when AuthLogoutAction is dispatched', () => {
      const action = new AuthLogoutAction(null);

      actions = hot('-a---', { a: action});

      effects.loginRedirect$.subscribe(() => {
        expect(routerSrv.navigate).toHaveBeenCalledWith(['/login']);
      });
    });
  });
});
