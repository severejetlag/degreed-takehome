import { Component, OnInit, Input } from '@angular/core';
import { MovieResponse } from 'src/app/models/movie-response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public imdbMovieURL: string;

  @Input() movie: MovieResponse;

  constructor() { }

  ngOnInit() {
    this.imdbMovieURL = `${environment.imdbURL}${this.movie.imdbID}`;
  }

}
