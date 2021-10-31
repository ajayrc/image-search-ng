import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  imagesGetAction,
  imagesReceivedAction,
} from '../actions/images.actions';
import { loaderStopAction } from '../actions/loader.actions';
import { SearchService } from '../../image-search/service/search.service';
import { Router } from '@angular/router';

@Injectable()
export class ImageEffects {
  constructor(
    private actions$: Actions,
    private imageService: SearchService,
    private router: Router
  ) {}

  getImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(imagesGetAction),
      switchMap(
        (
          payload // can use concatMap/mergeMap to allow multiple api calls which will be less performant though
        ) =>
          this.imageService.searchImage(payload.userInput).pipe(
            map((images) => images),
            catchError(() => EMPTY)
          )
      ),
      switchMap((result) => [
        loaderStopAction(),
        imagesReceivedAction({ imagesResult: result }),
      ])
    )
  );

  imagesReceived$ = createEffect(
    () =>
      // redirect to home page when user searches for images
      this.actions$.pipe(
        ofType(imagesReceivedAction),
        tap(() => this.router.navigateByUrl('/'))
      ),
    { dispatch: false } // if not provided, leads to infinite loop/page hang
  );
}
