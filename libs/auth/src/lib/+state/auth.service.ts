import { AuthCredentials } from './../models/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '@env/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /*private headers: HttpHeaders = new HttpHeaders({
    Authorization: 'none',
    authorization: 'none',
    Accept: 'application/json',
  });*/

  constructor(private http: HttpClient) {}

  login(credentials: AuthCredentials): Observable<any> {
    console.log('service');
    const url = environment.apis.auth;
    console.log(url);
    //const options = { headers: this.headers };
    return this.http.post(url, credentials);
  }
}
