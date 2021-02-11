import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';

import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SerieCardComponent } from './components/serie-card/serie-card.component';
import { NavAsideComponent } from './components/nav-aside/nav-aside.component';
import { RouterModule, Router } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LoaderComponent, ToolBarComponent, MovieCardComponent, SerieCardComponent, NavAsideComponent],
  exports: [LoaderComponent,
    ToolBarComponent,
    MovieCardComponent,
    SerieCardComponent,
    NavAsideComponent,
    RouterModule]
})
export class SharedModule { }
