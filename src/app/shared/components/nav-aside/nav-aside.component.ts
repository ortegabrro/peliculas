import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav-aside.component.html',
  styleUrls: ['./nav-aside.component.css']
})
export class NavAsideComponent {

  @Input() menu: Menu[] = [];

  constructor() { }

}

export class Menu {
  constructor(public section: string, public items: MenuItem[]) { }
}


class MenuItem {
  constructor(public title: string, public icon: string, public route: string) { }
}
