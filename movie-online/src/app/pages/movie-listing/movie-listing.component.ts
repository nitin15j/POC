import { Component, OnInit } from '@angular/core';
import { MovieListingService } from '../../service/movie-listing.service';
import { Movie } from '../../service/Movie';

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.scss']
})
export class MovieListingComponent implements OnInit {
  movieList: Array<any>;
  moviePublishingYears: Array<string>;
  movieLanguages: Array<string>;
  movieCountry: Array<string>;
  selectedCountry: string;
  selectedLanguage: string;
  searchText: string;
  selectedMovieDetails: Array<any>;
  isModalActive = false;

  constructor(private movieListingService: MovieListingService) {}

  ngOnInit() {
    this.movieListingService.getMovieListing().subscribe(data => {
      // this.movieList = data;

      data.map(index => {
        index.rating = Math.floor(Math.random() * 10 + 1);
      });

      this.movieList = data;

      const uniqueMovieYearSet = new Set();
      const uniqueMovieLanguage = new Set();
      const uniqueMovieCountry = new Set();

      this.movieList.map(movie => {
        if (movie.title_year) {
          uniqueMovieYearSet.add(movie.title_year);
        }
        if (movie.language) {
          uniqueMovieLanguage.add(movie.language);
        }
        if (movie.country) {
          uniqueMovieCountry.add(movie.country);
        }
      });

      this.moviePublishingYears = Array.from(uniqueMovieYearSet).sort();
      this.movieLanguages = Array.from(uniqueMovieLanguage).sort();
      this.movieCountry = Array.from(uniqueMovieCountry).sort();
    });
  }
  onKeyUp(searchText): void {
    this.searchText = searchText;
  }

  onCountryChange(selectedCountry): void {
    this.selectedCountry = selectedCountry;
  }

  onLanguageChange(selectedLanguage): void {
    this.selectedLanguage = selectedLanguage;
  }

  showDetails(data) {
    this.selectedMovieDetails = data;
    this.isModalActive = true;
  }
}
