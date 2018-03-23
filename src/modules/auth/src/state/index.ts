import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './reducers/auth.reducers';

export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const selectAuthLogin = createSelector(selectAuthState, (state: AuthState) => state.login);
// export const selectAuthUser = createSelector(selectAuthState, (state: AuthState) => state.user);

export * from './actions/auth.actions';
export * from './effects/auth.effects';
export * from './reducers/auth.reducers';
