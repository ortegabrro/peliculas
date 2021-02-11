import { Component, OnInit } from '@angular/core';
import { SerieService } from '../services/serie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../../movies/services/movie.model';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  movie: Movie;

  constructor(public service: SerieService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap
      .subscribe(x => console.log(x.get('id')));

  }

}
