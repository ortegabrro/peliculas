import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRouter } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { SeriesModule } from './series/series.module';
import { MoviesModule } from './movies/movies.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    MoviesModule,
    SeriesModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
