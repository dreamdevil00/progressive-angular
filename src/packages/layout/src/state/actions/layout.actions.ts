import { Action } from '@ngrx/store';
import { Menu } from '../../../../../app/core/services/menu/interfaces';

export const LayoutActionTypes = {
  LAYOUT_UPDATE_SIDEBAR: 'LAYOUT_UPDATE_SIDEBAR'
};

export class LayoutUpdateSidebarAction implements Action {
  readonly type = LayoutActionTypes.LAYOUT_UPDATE_SIDEBAR;
  constructor(public payload: Menu[]) {}
}

export type LayoutActions =
  | LayoutUpdateSidebarAction;
