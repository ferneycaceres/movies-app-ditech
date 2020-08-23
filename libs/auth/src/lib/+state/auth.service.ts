import { AuthCredentials } from './../models/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { environment } from '@env/environment';
import { User } from '@mymovies-workspace/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  private headers: HttpHeaders = new HttpHeaders({
    Authorization: 'none',
    authorization: 'none',
    Accept: 'application/json',
  });

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userLoggedIn(): boolean {
    return sessionStorage.getItem('user') ? true : false;
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(credentials: AuthCredentials): Observable<any> {
    const url = environment.apis.auth;
    return this.http.post(url, credentials);
  }

  saveUserAuth(user: User): Observable<any> {
    this.userSubject.next(user);
    return of(sessionStorage.setItem('user', JSON.stringify(user)));
  }

  /*getUserAuth(): Observable<User> {
    return of(JSON.parse(sessionStorage.getItem('user')));
  }

  removeUserAuth(): Observable<void> {
    return of(sessionStorage.removeItem('user'));
  }*/
}
