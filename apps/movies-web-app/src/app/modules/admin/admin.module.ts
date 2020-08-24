import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SharedModule } from '../shared/shared.module';
import { MoviesModule } from '@mymovies-workspace/movies';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [MoviesSearchComponent, MovieDetailsComponent, MovieCardComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule, MoviesModule, MaterialModule],
})
export class AdminModule {}
