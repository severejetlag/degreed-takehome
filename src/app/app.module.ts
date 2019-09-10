import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { OmdbService } from './services/omdb.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [OmdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
