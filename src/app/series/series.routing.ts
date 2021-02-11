import { Routes } from '@angular/router';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SeriesComponent } from './series.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

export const serieRoutes: Routes = [
    {
        path: 'series', component: SeriesComponent, children: [
            { path: '', component: SerieListComponent },
            { path: ':id', component: SerieDetailComponent }
        ]
    }
];
