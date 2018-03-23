import {
  LayoutActions,
  LayoutActionTypes,
  LayoutState,
} from '../index';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const initialLayoutState: LayoutState = {
  sidebarNav: []
};
export function layoutReducer(state = initialLayoutState, action: LayoutActions) {
  switch (action.type) {
    default:
      return state;
  }
}

export const selectLayoutState = createFeatureSelector<LayoutState>('layout');
export const selectSidebarNav = createSelector(selectLayoutState, (state: LayoutState) => state.sidebarNav);
