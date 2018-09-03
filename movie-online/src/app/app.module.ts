import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListingComponent } from './pages/movie-listing/movie-listing.component';
import { MovieListingService } from './service/movie-listing.service';
import { HttpClientModule } from '@angular/common/http';
import { MoviecardComponent } from './components/moviecard/moviecard.component';
import { FilterByCountryPipe } from './pipes/filter-by-country.pipe';
import { FilterByLanguagePipe } from './pipes/filter-by-language.pipe';
import { SortByYearPipe } from './pipes/sort-by-year.pipe';
import { FilterBySearchPipe } from './pipes/filter-by-search.pipe';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListingComponent,
    MoviecardComponent,
    MovieDetailComponent,
    FilterByCountryPipe,
    FilterByLanguagePipe,
    SortByYearPipe,
    FilterBySearchPipe
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [MovieListingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
