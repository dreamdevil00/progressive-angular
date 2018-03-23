import { AppActions, AppActionTypes} from './app.actions';

export interface AppState {
  development: boolean;
}

export const initialAppState: AppState = {
  development: true,
};

export function reducer(state = initialAppState, action: AppActions): AppState {
  switch (action.type) {
    default:
      return state;
  }
}
