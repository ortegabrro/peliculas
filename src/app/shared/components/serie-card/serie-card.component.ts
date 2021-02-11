import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Serie } from '../../../series/services/serie.model';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-serie-card',
  templateUrl: './serie-card.component.html',
  styleUrls: ['./serie-card.component.css']
})
export class SerieCardComponent implements OnInit {

  @Input() serie: Serie;
  @Output() selected: EventEmitter<Serie> = new EventEmitter();
  url: string;

  ngOnInit() {
    this.url = environment.urlImg + this.serie.poster_path;
  }

  onClick() {
    this.selected.emit(this.serie);
  }

}
