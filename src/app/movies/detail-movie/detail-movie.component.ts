import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../services/movie.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {

  movie: Movie;

  constructor(public service: MovieService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(x => x.get('id')),
      flatMap(x => this.service.loadSelected(x))
    ).subscribe(x => {
      this.movie = x;
      console.log(JSON.stringify(this.movie));

    });
  }

}
