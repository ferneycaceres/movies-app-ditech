import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IMovie } from '@mymovies-workspace/movies';

@Component({
  selector: 'mymovies-workspace-search-autocomplete',
  templateUrl: './search-autocomplete.component.html',
  styleUrls: ['./search-autocomplete.component.scss'],
})
export class SearchAutocompleteComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() filteredMovie?: IMovie;
  @Output() searchBy = new EventEmitter();
  @Output() selectMovie = new EventEmitter();
  autocompleteForm: FormGroup;
  isLoading = false;
  timeout: undefined;
  searchInput: string;
  singleMovie: IMovie;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filteredMovie.currentValue) {
      this.isLoading = false;
      this.singleMovie = this.filteredMovie;
    }
  }

  initForm() {
    this.autocompleteForm = this.fb.group({
      searchBy: null,
    });
  }

  public change(value: string) {
    clearTimeout(this.timeout);
    setTimeout(() => {
      if (value !== '') {
        this.isLoading = true;
        this.searchBy.emit(value);
      }
    }, 600);
  }

  movieSelected(movie: IMovie) {
    this.selectMovie.emit(movie);
  }
}
