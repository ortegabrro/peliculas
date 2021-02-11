import { Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';

export const movieRoutes: Routes = [
    {
        path: 'peliculas', component: MoviesComponent,
        children: [
            { path: '', component: ListMovieComponent },
            { path: ':id', component: DetailMovieComponent }
        ]
    }
];
