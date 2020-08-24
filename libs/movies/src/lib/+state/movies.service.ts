import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, of } from 'rxjs';
import { IMovie } from './movies.models';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  searchMovieBy(key: string): Observable<IMovie> {
    const url = `${environment.apis.movies}&t=${key}/`;
    return this.http.get<IMovie>(url);
  }

  addMovieToFavorites(movie: IMovie): Observable<any> {
    let arrayMovies = [];
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const movieStored = favorites?.find((item: IMovie) => item.Title === movie.Title);
    if (movieStored) {
      arrayMovies = favorites;
    } else {
      if (favorites?.length) {
        arrayMovies = favorites;
      }
      arrayMovies.push(movie);
    }
    return of(localStorage.setItem('favorites', JSON.stringify(arrayMovies)));
  }
}
