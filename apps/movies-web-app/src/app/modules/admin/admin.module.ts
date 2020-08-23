import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SharedModule } from '../shared/shared.module';
import { MoviesModule } from '@mymovies-workspace/movies';

@NgModule({
  declarations: [MoviesSearchComponent, MovieDetailsComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule, MoviesModule],
})
export class AdminModule {}
