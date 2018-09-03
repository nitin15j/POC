import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByLanguage'
})
export class FilterByLanguagePipe implements PipeTransform {
  transform(movies: any, selectedLanguage: string): any {
    if (!movies) {
      return [];
    }
    if (!selectedLanguage || selectedLanguage === 'Select Language') {
      return movies;
    }
    selectedLanguage = selectedLanguage.toLowerCase();
    return movies.filter(movie => {
      return movie.language.toLowerCase() === selectedLanguage;
    });
  }
}
