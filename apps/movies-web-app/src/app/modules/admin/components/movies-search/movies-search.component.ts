import { Component, OnInit } from '@angular/core';
import { MoviesFacade, IMovie } from '../../../../../../../../libs/movies/src/index';
import { take } from 'rxjs/operators';

@Component({
  selector: 'mymovies-workspace-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss'],
})
export class MoviesSearchComponent implements OnInit {
  title = 'Search by Title';
  currentMovie: IMovie;
  constructor(public moviesFacade: MoviesFacade) {}

  ngOnInit(): void {}

  searchBy(key: string) {
    this.moviesFacade.searchMovieBy(key);
  }

  selectMovie(movie: IMovie) {
    this.moviesFacade.movieSelected(movie);
    this.moviesFacade.selectedMovies$.pipe(take(2)).subscribe((movieSelected: IMovie) => {
      if (movieSelected) {
        this.currentMovie = movieSelected;
      }
    });
  }
  addMovieToFavorites(movie: IMovie) {
    this.moviesFacade.addToFavorites(movie);
  }
}
