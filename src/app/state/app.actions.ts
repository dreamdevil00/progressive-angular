import { ActionWithPayload } from '../../modules/shared';

export const AppActionTypes = {
  APP_GET_MENU:       'APP_GET_MENU',
  APP_REDIRECT_INDEX: 'APP_REDIRECT_INDEX',
  APP_REDIRECT_LOGIN: 'APP_REDIRECT_LOGIN',
  APP_REDIRECT_ROUTER: 'APP_REDIRECT_ROUTER',
};

export class AppRedirectIndexAction implements ActionWithPayload<any> {
  readonly type = AppActionTypes.APP_REDIRECT_INDEX;
  constructor(public payload: any) {}
}

export class AppRedirectLoginAction implements ActionWithPayload<any> {
  readonly type = AppActionTypes.APP_REDIRECT_LOGIN;
  constructor(public payload: any) {}
}

export class AppRedirectRouterAction implements ActionWithPayload<any> {
  readonly type = AppActionTypes.APP_REDIRECT_ROUTER;
  constructor(public payload: any) {}
}


export type AppActions = AppRedirectIndexAction
  | AppRedirectLoginAction
  | AppRedirectRouterAction;





