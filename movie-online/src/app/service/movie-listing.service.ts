import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieListingService {
  constructor(private http: HttpClient) {}

  getMovieListing(): Observable<any> {
    return this.http.get('http://starlord.hackerearth.com/movieslisting');
  }
}
