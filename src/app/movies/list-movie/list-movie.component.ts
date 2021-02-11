import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../services/movie.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  data: Movie[] = [];

  constructor(public service: MovieService, public router: Router,
    public route: ActivatedRoute) {

    service.loadMovies(1)
      .subscribe(x => this.data = x);
  }

  ngOnInit() {
  }

  goToDetail(movie: Movie) {
    this.router.navigate([ movie.id], { relativeTo: this.route });
  }

}
