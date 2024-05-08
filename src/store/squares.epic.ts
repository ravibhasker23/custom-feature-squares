import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RequestPostsService } from '../service/request-posts.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActionTypes, FetchInitPostsError, FetchInitPostsSuccess } from './squares.actions';
import { Action } from '@ngrx/store';


@Injectable()
export class SquaresPostEpic {

constructor(
    private actions$: Actions<Action>,
    private _requestPostService: RequestPostsService
    ) {}

  public fetchInitPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActionTypes.FETCH_INIT_POSTS),
      mergeMap(() => {
        return this._requestPostService.fetchPosts().pipe(
          map((response: any[]) => {
            return new FetchInitPostsSuccess(response);
          }),
          catchError((error) => of(new FetchInitPostsError(error)))
        );
      })
    );
  });
}
