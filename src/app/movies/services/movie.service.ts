import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, timeout } from 'rxjs/operators';
import { Movie } from './movie.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private selected: Movie;

  constructor(public client: HttpClient) { }

  loadMovies(page: number): Observable<Movie[]> {
    return this.client.get<any>(environment.url + '/movie/popular?api_key='
      + environment.apiKey + '&language=es&page=' + page).pipe(
        map(x => x.results as Movie[])
      );
  }

  setMovieSelected(movie: Movie) {
    this.selected = movie;
  }

  loadSelected(id: string): Observable<Movie> {
    return this.selected ? of(this.selected) : this.client.get<Movie>(environment.url
      + '/movie/' + id + '?api_key=' + environment.apiKey + '&language=es');
  }

}
