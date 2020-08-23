import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'movies',
        component: MoviesSearchComponent,
        pathMatch: 'full',
      },
      {
        path: 'movie-details',
        component: MovieDetailsComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
