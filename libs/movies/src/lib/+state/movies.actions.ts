import { createAction, props } from '@ngrx/store';
import { IMovie } from './movies.models';

export const searchMovie = createAction('[Movies] Search Movie', props<{ key: string }>());

export const searchMovieSuccess = createAction('[Movies] Search Movies Success', props<{ movies: IMovie }>());

export const searchMovieFail = createAction('[Movies] Search Movies Fail', props<{ error: any }>());

export const movieSelected = createAction('[Movies] Select Movie', props<{ movie: IMovie }>());

export const addMovieToFavorites = createAction('[Movies] Add Movies to Favorites', props<{ movie: IMovie }>());

export const addMovieToFavoritesSuccess = createAction('[Movies] Add Movies to Favorites Success');

export const addMovieToFavoritesFail = createAction('[Movies] Add Movies to Favorites Fail');
