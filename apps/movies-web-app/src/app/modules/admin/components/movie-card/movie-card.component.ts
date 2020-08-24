import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IMovie } from '@mymovies-workspace/movies';

@Component({
  selector: 'mymovies-workspace-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit, OnChanges {
  @Input() currentMovie: IMovie;
  @Output() addMovieToFavorites = new EventEmitter();
  movieData: IMovie;
  clicked: boolean;
  constructor() {
    this.clicked = false;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentMovie.currentValue) {
      this.movieData = this.currentMovie;
      this.clicked = false;
    }
  }
  addFavorites(movie: IMovie) {
    this.clicked = true;
    this.addMovieToFavorites.emit(movie);
  }
}
