import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBySearch'
})
export class FilterBySearchPipe implements PipeTransform {
  transform(movies: any[], searchText: string): any[] {
    if (!movies) {
      return [];
    }
    if (!searchText) {
      return movies;
    }
    searchText = searchText.toLowerCase();
    return movies.filter(movie => {
      return movie.movie_title.toLowerCase().includes(searchText);
    });
  }
}
