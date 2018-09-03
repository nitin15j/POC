import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCountry'
})
export class FilterByCountryPipe implements PipeTransform {
  transform(movies: any, selectedCountry: string): any {
    if (!movies) {
      return [];
    }
    if (!selectedCountry || selectedCountry === 'Select Country') {
      return movies;
    }
    selectedCountry = selectedCountry.toLowerCase();
    const arr = movies.filter(movie => {
      return movie.country.toLowerCase() === selectedCountry;
    });

    return arr;
  }
}
