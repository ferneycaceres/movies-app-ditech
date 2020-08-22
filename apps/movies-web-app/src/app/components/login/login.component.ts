import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateEmail } from '@mymovies-workspace/validators';
import { AuthCredentials, AuthFacade } from '@mymovies-workspace/auth';

@Component({
  selector: 'mymovies-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authFacade: AuthFacade, private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(environment);
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, ValidateEmail])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
  onSignInSubmit(user: AuthCredentials) {
    console.log(user);
    this.authFacade.login(user);
  }
}
