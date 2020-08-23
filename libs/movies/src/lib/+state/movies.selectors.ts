import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MOVIES_FEATURE_KEY, State } from './movies.reducer';

export const getMoviesState = createFeatureSelector<State>(MOVIES_FEATURE_KEY);

const getMoviesList = createSelector(getMoviesState, (state) => state.moviesList);

const getMoviesListed = createSelector(getMoviesState, (state) => state.moviesListed);

const getSelectedMovie = createSelector(getMoviesState, (state) => state.movieSelected);
export const moviesQuery = {
  getMoviesList,
  getMoviesListed,
  getSelectedMovie,
};
