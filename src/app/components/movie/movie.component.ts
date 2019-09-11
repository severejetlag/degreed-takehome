import { Component, OnInit, Input,  } from '@angular/core';
import { MovieResponse } from 'src/app/models/movie-response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public backupImageFile: string;
  public imdbMovieURL: string;
  public imageLoadSuccess = false;

  @Input() movie: MovieResponse;

  constructor() { }

  public imageLoad($event) {
    this.imageLoadSuccess = true;
  }

  ngOnInit() {
    this.imdbMovieURL = `${environment.imdbURL}${this.movie.imdbID}`;
    const fileNamae = this.movie.Poster.substring(this.movie.Poster.lastIndexOf('/'));
    this.backupImageFile = `assets/images${fileNamae}`;
  }

}
