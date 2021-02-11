import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../movies/services/movie.model';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;
  @Output() selected: EventEmitter<Movie> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getUrlImage(): string {
    return environment.urlImg + '/' + this.movie.backdrop_path;
  }

  onClick() {
    this.selected.emit(this.movie);
  }

}
