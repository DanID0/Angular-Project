import { createReducer, on } from '@ngrx/store';

import { SaveDataAction } from '../actions/sliderdogs.actions';

export const initialState = {};

export const _sliderdogsReducer = createReducer(
  initialState,
  on(SaveDataAction, (state, { saveData }) => {
    return saveData;
  })
);
export function sliderdogsReducer(state: any, action: any) {
  return _sliderdogsReducer(state, action);
}
