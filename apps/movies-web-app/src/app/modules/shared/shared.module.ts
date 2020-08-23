import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialModule } from '../../material.module';
import { SearchAutocompleteComponent } from './components/search-autocomplete/search-autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavBarComponent, SearchAutocompleteComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [NavBarComponent, SearchAutocompleteComponent],
})
export class SharedModule {}
