import { createAction, props } from '@ngrx/store';

export const SaveDataAction = createAction(
  '[sliderdogs Comp] SaveData',
  props<{ saveData: any }>()
);
export const gettingSliderDataAction = createAction(
  '[Sliderdogs Component] getting data'
);
