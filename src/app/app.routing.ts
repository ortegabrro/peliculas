import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { SeriesComponent } from './series/series.component';
import { serieRoutes } from './series/series.routing';
import { AccessGuard } from './core/services/access.guard';
import { movieRoutes } from './movies/movies.routing';



const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'estrenos', component: DashboardComponent, canActivate: [AccessGuard],
        children: [
            ...movieRoutes,
            ...serieRoutes,
            { path: '', redirectTo: 'peliculas', pathMatch: 'full' }
        ]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouter { }
