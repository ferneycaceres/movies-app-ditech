import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateEmail } from '@mymovies-workspace/validators';
import { AuthCredentials, AuthFacade } from '@mymovies-workspace/auth';
import { take } from 'rxjs/operators';
import { User } from '@mymovies-workspace/models';
import { Router } from '@angular/router';

@Component({
  selector: 'mymovies-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showLoginError = false;

  constructor(private authFacade: AuthFacade, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, ValidateEmail])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
  onSignInSubmit(user: AuthCredentials) {
    this.authFacade.login(user);
    this.authFacade.isAuthenticaded$.pipe(take(2)).subscribe((userLoggedIn: boolean) => {
      if (userLoggedIn === false) {
        this.showLoginError = true;
      } else {
        this.storeCurrentUser();
        this.router.navigate(['admin/movies']);
      }
    });
  }

  private storeCurrentUser() {
    this.authFacade.getUserAuthenticaded$.pipe(take(2)).subscribe((user: User) => {
      if (user) {
        this.authFacade.saveUserAuth(user);
      }
    });
  }
}
