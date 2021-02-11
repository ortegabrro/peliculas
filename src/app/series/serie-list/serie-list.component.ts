import { Component, OnInit } from '@angular/core';
import { SerieService } from '../services/serie.service';
import { SerieResult, Serie } from '../services/serie.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  data: SerieResult;

  constructor(public service: SerieService, public router: Router, public route: ActivatedRoute) {
    service.listPopular(1)
      .subscribe(x => this.data = x, err => console.log(err));

  }

  goToDetail(serie: Serie) {
    this.service.selected = serie;
    this.router.navigate(['/series', serie.id], { relativeTo: this.route });
  }

  ngOnInit() {
  }

}
