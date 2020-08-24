import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { MoviesService } from './movies.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as moviesActions from './movies.actions';
import { IMovie } from './movies.models';

@Injectable()
export class MoviesEffects {
  searchMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(moviesActions.searchMovie),
      mergeMap((action) =>
        this.moviesService.searchMovieBy(action.key).pipe(
          map((movies: IMovie) => moviesActions.searchMovieSuccess({ movies })),
          catchError((error) => of(moviesActions.searchMovieFail(error)))
        )
      )
    )
  );

  addMovieToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(moviesActions.addMovieToFavorites),
      mergeMap((action) =>
        this.moviesService.addMovieToFavorites(action.movie).pipe(
          map(() => moviesActions.addMovieToFavoritesSuccess()),
          catchError(() => of(moviesActions.addMovieToFavoritesFail()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private moviesService: MoviesService) {}
}
