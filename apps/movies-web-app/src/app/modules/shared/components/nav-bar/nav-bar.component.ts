import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@mymovies-workspace/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'mymovies-workspace-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private authFacade: AuthFacade, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.authFacade.logout();
    this.router.navigate(['/']);
  }
}
