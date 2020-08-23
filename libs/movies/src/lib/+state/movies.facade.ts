import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import { State } from './movies.reducer';
import { moviesQuery } from './movies.selectors';

import * as moviesActions from './movies.actions';
import { IMovie } from './movies.models';

@Injectable()
export class MoviesFacade {
  moviesList$ = this.store.pipe(select(moviesQuery.getMoviesList));
  moviesListed$ = this.store.pipe(select(moviesQuery.getMoviesListed));
  selectedMovies$ = this.store.pipe(select(moviesQuery.getSelectedMovie));

  constructor(private store: Store<State>) {}

  searchMovieBy(key: string) {
    this.store.dispatch(moviesActions.searchMovie({ key }));
  }

  movieSelected(movie: IMovie) {
    this.store.dispatch(moviesActions.movieSelected({ movie }));
  }
}
