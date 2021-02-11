import { Component, OnInit } from '@angular/core';
import { NavService } from '../../../core/services/nav.service';

declare const $: any;

@Component({
  selector: 'app-toolbar',
  templateUrl: './tool-bar.component.html',
  styles: []
})
export class ToolBarComponent implements OnInit {

  constructor(public nav: NavService) { }

  ngOnInit() {
    $('.button-collapse').sideNav();
  }

}
