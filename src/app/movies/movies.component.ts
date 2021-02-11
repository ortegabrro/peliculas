import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';

@Component({
  template: '<router-outlet></router-outlet>'
})
export class MoviesComponent implements OnInit {

  constructor(public nav: NavService) {
    nav.title = 'Peliculas';
  }

  ngOnInit() {
  }

}
