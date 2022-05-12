import { createSelector } from '@ngrx/store';

import { AppState } from "../types/appState";

export const selectApp = (state: AppState) => state;

export const selectRate = createSelector(
  selectApp,
  (state: AppState) => state.appState.rate
);

export const selectLoading = createSelector(
  selectApp,
  (state: AppState) => state.appState.isLoading
);

export const selectFirstCount = createSelector(
  selectApp,
  (state: AppState) => state.appState.countFirst
);

export const selectSecondCount = createSelector(
  selectApp,
  (state: AppState) => state.appState.countSecond
);
