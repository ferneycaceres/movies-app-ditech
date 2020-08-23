import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { IMovie } from './movies.models';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private headers: HttpHeaders = new HttpHeaders({
    Authorization: 'none',
    authorization: 'none',
    Accept: 'application/json',
  });

  constructor(private http: HttpClient) {}

  searchMovieBy(key: string): Observable<IMovie> {
    const url = `${environment.apis.movies}&t=${key}/`;

    return this.http.get<IMovie>(url);
  }
}
