import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { MoviesComponent } from './movies.component';
import { MovieService } from './services/movie.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ListMovieComponent, DetailMovieComponent, MoviesComponent],
  providers: [MovieService]
})
export class MoviesModule { }
