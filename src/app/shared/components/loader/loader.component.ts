import { Component, OnInit, Input } from '@angular/core';
import { shallowEqual } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit {

  @Input() show: boolean;
  @Input() size: string;


  constructor() { }

  ngOnInit() {
  }

}
