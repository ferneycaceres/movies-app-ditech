import { Component } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'mymovies-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'movies-web-app';

  constructor() {
    console.log(environment);
  }
}
