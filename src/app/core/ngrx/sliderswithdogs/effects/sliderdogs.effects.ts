import { createAction, props } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from, of, pipe } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { HomeService } from 'src/app/core/services/home/home.service';
import {
  gettingSliderDataAction,
  SaveDataAction,
} from '../actions/sliderdogs.actions';
@Injectable()
export class MovieEffects {
  loadSlider$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gettingSliderDataAction),
      tap(() => {
        console.log('getting slider data');
      }),
      mergeMap((actions) => {
        console.log('new getMockDataEffect running');
        return this.homeService.getallSlider().pipe(
          map((sliders) => SaveDataAction({ saveData: sliders })),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        );
      }),
      catchError(() => {
        return of({ type: '[Movies API] Movies Loaded Error' });
      })
      // pipe(
      //   map((movies) => ({
      //     type: '[Sliderdogs Component] Movies Loaded Success',
      //     payload: movies,
      //   })),
      //   catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
      // )
    )
  );

  constructor(private actions$: Actions, private homeService: HomeService) {}
}
