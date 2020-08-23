import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as MoviesActions from './movies.actions';
import { IMovie } from './movies.models';

export const MOVIES_FEATURE_KEY = 'movies';

export interface State {
  moviesList: IMovie;
  moviesListed: boolean;
  movieSelected: IMovie;
}

export const initialState: State = {
  moviesList: undefined,
  moviesListed: undefined,
  movieSelected: undefined,
};

const moviesReducer = createReducer(
  initialState,
  on(MoviesActions.searchMovie, (state) => ({ ...state, moviesListed: null })),
  on(MoviesActions.searchMovieSuccess, (state, { movies }) => ({
    ...state,
    moviesListed: true,
    moviesList: movies,
  })),
  on(MoviesActions.searchMovieFail, (state) => ({ ...state, moviesListed: false })),
  on(MoviesActions.movieSelected, (state, { movie }) => ({
    ...state,
    movieSelected: movie,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return moviesReducer(state, action);
}
